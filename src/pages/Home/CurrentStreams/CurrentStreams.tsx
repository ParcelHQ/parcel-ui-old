import React, { useState, useEffect } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardBody,
  UncontrolledDropdown,
  DropdownMenu,
  DropdownItem,
  DropdownToggle,
  Progress,
  Row,
  Col,
} from 'reactstrap';
import parcel from 'parcel-sdk';
import BigNumber from 'big-number';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

import EmployeeList from './EmployeeList';
import { getSignature } from '../../../utility';
import { shortenAddress } from '../../../utility';
import addresses, { RINKEBY_ID } from '../../../utility/addresses';
import { useContract } from '../../../hooks';
import Sablier from '../../../abis/Sablier.json';
import ParcelWallet from '../../../abis/ParcelWallet.json';
import RadialChart from './RadialChart';

export default function ProductOrders() {
  const { library } = useWeb3React<Web3Provider>();
  const SablierContract = useContract(
    addresses[RINKEBY_ID].sablier,
    Sablier,
    true
  );
  const parcelWalletContract = useContract(
    addresses[RINKEBY_ID].parcelWallet,
    ParcelWallet
  );
  const [employeeStreams, setEmployeeStreams] = useState<any>([]);
  const [totalCumulativeStream, setTotalCumulativeStream] = useState(0);
  const [withdrawnAmount, setWithdrawnAmount] = useState(0);
  const [series, setSeries] = useState([50, 50]); //actual data points used in graph

  // useEffect(() => {
  //   (async () => {
  //     if (parcelWalletContract) {
  //       try {
  //         let people = await parcelWalletContract.files('2');

  //         if (people !== '') {
  //           let peopleFromIpfs = await parcel.ipfs.getData(people);

  //           let peopleDecrypted = parcel.cryptoUtils.decryptData(
  //             peopleFromIpfs,
  //             getSignature()
  //           );
  //           peopleDecrypted = JSON.parse(peopleDecrypted);

  //           peopleDecrypted.forEach((person: any) => {
  //             //use ens / shorten address
  //             if (library) {
  //               library.lookupAddress(person.address).then((name) => {
  //                 if (typeof name === 'string') person.address = name;
  //               });
  //             } else person.address = shortenAddress(person.address);
  //           });

  //           setEmployeeStreams(peopleDecrypted);
  //         } else console.log(`Zero Employees registered yet!`);
  //       } catch (error) {}
  //     }
  //   })();
  // }, [parcelWalletContract, library]);

  useEffect(() => {
    (async () => {
      if (parcelWalletContract) {
        let employeeStreams = [];

        const streamIDs = await parcelWalletContract.getStreamIds();

        if (SablierContract) {
          streamIDs.forEach(async (streamID: any) => {
            let employeeStream = {
              address: '',
              percentage: '',
              salary: '',
              currencySalary: '',
              rate: '',
            };
            let result = await SablierContract.getSalary(streamID);

            const startTime = Number(result.startTime);
            const rate = BigNumber(Number(result.rate));
            const salary = Number(result.salary);
            console.log('salary:', salary.toString());
            const currentTime = Date.now() / 1000;

            let MINUS_RESULT = Math.ceil(currentTime) - startTime;
            MINUS_RESULT = BigNumber(MINUS_RESULT);

            let MULT_RESULT = BigNumber(MINUS_RESULT).mult(rate);
            console.log('MULT_RESULT:', MULT_RESULT.toString());

            MULT_RESULT = MULT_RESULT.toString();
            MULT_RESULT = Number(MULT_RESULT);

            let percentage = MULT_RESULT / salary;
            // percentage = Number(percentage);
            //@ts-ignore
            percentage = percentage.toFixed(2);
            percentage = percentage * 100;
            console.log('percentage:', percentage);
            /// add to array
            employeeStreams.push(employeeStream);
          });
        }
      }
    })();
  }, [parcelWalletContract, SablierContract]);

  useEffect(() => {
    if (SablierContract) {
      const STREAMING = 50;
      const WITHDRAWN = 50;
      setSeries([STREAMING, WITHDRAWN]);
    }
  }, [SablierContract]);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Current Streams</CardTitle>
        {/* <UncontrolledDropdown>
          <DropdownToggle tag="small" className="text-bold-500 cursor-pointer">
            All <ChevronDown size={10} />
          </DropdownToggle>
          <DropdownMenu right>
            <DropdownItem>All</DropdownItem>
            <DropdownItem>Finance</DropdownItem>
            <DropdownItem>Engineering</DropdownItem>
            <DropdownItem>Marketing</DropdownItem>
            <DropdownItem>HR</DropdownItem>
          </DropdownMenu>
        </UncontrolledDropdown> */}
      </CardHeader>
      <CardBody>
        <Row className="pb-50">
          <Col
            lg="6"
            xs="12"
            className="d-flex justify-content-between flex-column mt-lg-0 mt-2"
          >
            {/* <RadialChart series={series} /> */}
          </Col>
          <Col
            lg="6"
            xs="12"
            className="d-flex justify-content-between flex-column text-right"
          >
            <EmployeeList employeeStreams={employeeStreams} />
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
}
