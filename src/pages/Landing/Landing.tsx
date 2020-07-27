import React from 'react';
import { Card, CardBody, Row, Col, Button } from 'reactstrap';
import Logo from '../../assets/img/logo/logoPng.png';
import * as Icons from 'react-feather';
import { Link } from 'react-router-dom';
import { useWeb3React } from '@web3-react/core';
import { Web3Provider } from '@ethersproject/providers';

export default function Landing() {
  const { active } = useWeb3React<Web3Provider>();

  return (
    <Row className="m-0">
      <Col sm="12">
        <Card className="auth-card bg-transparent shadow-none rounded-0 mb-0 w-100">
          <CardBody className="text-center">
            <img
              src={Logo}
              alt="Parcel Logo"
              className="img-fluid align-self-center"
              style={{ height: '8rem' }}
            />

            <h1 className="font-large-3 my-1">
              Welcome to <span style={{ color: '#6F6BE9' }}>Parcel</span>
            </h1>
            <h1 className="font-large-1 my-1">
              Manage Crypto Payroll Seamlessly
            </h1>

            <Row>
              <Col lg={6} md={12}>
                <Link to="/employer">
                  <Button
                    className="mr-1 mb-1 btn-block"
                    color="primary"
                    size="lg"
                    disabled={!active}
                  >
                    <Icons.UserPlus size={14} />
                    Sign in as Employer
                  </Button>
                </Link>
              </Col>
              <Col lg={6} md={12}>
                <Link to="/organizations">
                  <Button
                    className="mr-1 mb-1 btn-block"
                    color="primary"
                    size="lg"
                    disabled={!active}
                  >
                    <Icons.Users size={14} />
                    Sign in as Employee
                  </Button>
                </Link>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
}
