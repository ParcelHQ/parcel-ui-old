import React, { useState } from 'react';
import { ChevronDown, ArrowUp, ArrowDown } from 'react-feather';
import { Progress } from 'reactstrap';
import styled from '@emotion/styled';
import { v4 as uuid } from 'uuid';

import { ReactComponent as DAILogo } from '../../../assets/currency/dai.svg';
import { ReactComponent as USDCLogo } from '../../../assets/currency/usdc.svg';

const List = styled.ul`
  padding: 0;
  list-style-type: none;
`;

const ListElement = styled.li``;

const NumericData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const LeftDiv = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
`;

const Address = styled.p`
  margin-bottom: 0.5rem;
`;

const Percentage = styled.h4``;

const RightDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const AmountAndCurrency = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Amount = styled.span`
  vertical-align: top;
  margin-right: 1rem;
`;

const Rate = styled.span`
  color: lightgray;
`;

const EmployeeList = ({ employeeStreams }: any) => {
  console.log('employeeStreams:', employeeStreams);
  // console.log('employeeStreams:', employeeStreams);
  // const [employeeStreams, setemployeeStreams] = useState();

  // useEffect(() => {

  // }, [employeeStreams]);

  return employeeStreams ? null : (
    <List>
      {employeeStreams.map((employee: any) => {
        console.log('employeekj:', employee);
        const totalAmountToStream = employee.salary;
        const currency = employee.salaryCurrency;
        const address = employee.address;
        console.log('address:', address);
        const streamRate = employee.streamRate;

        return (
          <ListElement key={uuid()}>
            <NumericData>
              <LeftDiv>
                <Address>{address ? address : '-'}</Address>
                <Percentage>73%</Percentage>
              </LeftDiv>
              <RightDiv>
                <AmountAndCurrency>
                  <Amount>
                    {totalAmountToStream ? totalAmountToStream : '-'}
                  </Amount>
                  {currency === 'DAI' ? (
                    <DAILogo
                      style={{
                        height: '1.5rem',
                        marginBottom: '0.1rem',
                      }}
                    />
                  ) : currency === 'USDC' ? (
                    <USDCLogo
                      style={{ height: '1.5rem', marginBottom: '0.1rem' }}
                    />
                  ) : (
                    '-'
                  )}
                </AmountAndCurrency>
                <Rate>{streamRate ? streamRate : '-'}</Rate>
              </RightDiv>
            </NumericData>
            <Progress className="mb-2" value="73" />
          </ListElement>
        );
      })}
    </List>
  );
};

export default EmployeeList;