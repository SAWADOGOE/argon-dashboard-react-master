/*!

=========================================================
* Argon Dashboard React - v1.2.3
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import { useState } from "react";
// node.js library that concatenates classes (strings)
import classnames from "classnames";
// javascipt plugin for creating charts
import Chart from "chart.js";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";
// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    NavItem,
    NavLink,
    Nav,
    Progress,
    Table,
    Container,
    Row,
    Col,
} from "reactstrap";

// core components
import {
    chartOptions,
    parseOptions,
    chartExample1,
    chartExample2,
} from "variables/charts.js";

import Header from "components/Headers/Header.js";
import AssuranceHeader from "../components/Headers/AssuranceHeader";
import HopitalHeader from "../components/Headers/HopitalHeader";
import PharmacieHeader from "../components/Headers/PharmacieHeader";

const IndexPharmacie = (props) => {
    const [activeNav, setActiveNav] = useState(1);
    const [chartExample1Data, setChartExample1Data] = useState("data1");

    if (window.Chart) {
        parseOptions(Chart, chartOptions());
    }

    const toggleNavs = (e, index) => {
        e.preventDefault();
        setActiveNav(index);
        setChartExample1Data("data" + index);
    };
    return (
        <>
            <PharmacieHeader/>
            {/* Page content */}
            <Container className="mt--7" fluid>
                
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Ordonnance traiter</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Toutes les ordonnances
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prenom</th>
                                    <th scope="col">Clinique</th>
                                    <th scope="col">Prix</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">SAWADOGO</th>
                                    <td>Fulbert</td>
                                    <td>Sacre COEUR</td>
                                    <td>
                                        <i className="fas fa-arrow-up text-success mr-3" /> 50000 FCFA
                                    </td>
                                </tr>
                                
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                    <Col xl="4">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Social traffic</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            See all
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Referral</th>
                                    <th scope="col">Visitors</th>
                                    <th scope="col" />
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">Facebook</th>
                                    <td>1,480</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">60%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="60"
                                                    barClassName="bg-gradient-danger"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                
                                
                                
                                <tr>
                                    <th scope="row">twitter</th>
                                    <td>2,645</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">30%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="30"
                                                    barClassName="bg-gradient-warning"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                </Row>


                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="12">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Ordonnance traiter</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Toutes les ordonnances
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prenom</th>
                                    <th scope="col">Clinique</th>
                                    <th scope="col">Prix</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">SAWADOGO</th>
                                    <td>Fulbert</td>
                                    <td>Sacre COEUR</td>
                                    <td>
                                        <i className="fas fa-arrow-up text-success mr-3" /> 50000 FCFA
                                    </td>
                                </tr>
                                
                                </tbody>
                            </Table>
                        </Card>
                    </Col>
                    
                </Row>


            </Container>
        </>
    );
};

export default IndexPharmacie;
