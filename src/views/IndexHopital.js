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

const IndexHopital = (props) => {
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
            <HopitalHeader/>
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="bg-gradient-default shadow">
                            <CardHeader className="bg-transparent">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h6 className="text-uppercase text-light ls-1 mb-1">
                                            Overview
                                        </h6>
                                        <h2 className="text-white mb-0">Gestion de la caise</h2>
                                    </div>
                                    <div className="col">
                                        <Nav className="justify-content-end" pills>
                                            <NavItem>
                                                <NavLink
                                                    className={classnames("py-2 px-3", {
                                                        active: activeNav === 1,
                                                    })}
                                                    href="#pablo"
                                                    onClick={(e) => toggleNavs(e, 1)}
                                                >
                                                    <span className="d-none d-md-block">Gerer les remboursement</span>
                                                    <span className="d-md-none">M</span>
                                                </NavLink>
                                            </NavItem>

                                        </Nav>
                                    </div>
                                </Row>
                            </CardHeader>

                        </Card>
                    </Col>
                    <Col xl="4">

                    </Col>
                </Row>
                <Row className="mt-5">
                    <Col className="mb-5 mb-xl-0" xl="8">
                        <Card className="shadow">
                            <CardHeader className="border-0">
                                <Row className="align-items-center">
                                    <div className="col">
                                        <h3 className="mb-0">Liste des remboursement</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Ajouter un remboursement
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Nom du patient</th>
                                    <th scope="col">Montant</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <th scope="row">S. Amidou</th>
                                    <td>30000 FCFA</td>
                                    <td>01/02/2023</td>
                                    <td>
                                        <i className="fas fa-arrow-up text-success mr-3" /> Traité
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">B. Pauline</th>
                                    <td>45000 FCFA</td>
                                    <td>03/05/2023</td>
                                    <td>
                                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                                        Envoyer
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">K. Adama</th>
                                    <td>50000 FCFA</td>
                                    <td>06/11/2023</td>
                                    <td>
                                        <i className="fas fa-arrow-down text-warning mr-3" />{" "}
                                        En cours de traitement
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">C. Blaise</th>
                                    <td>17500 FCFA</td>
                                    <td>12/12/2023</td>
                                    <td>
                                        <i className="fas fa-arrow-up text-success mr-3" /> Envoyer
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">T. Pierre</th>
                                    <td>275000 FCFA</td>
                                    <td>20/07/2023</td>
                                    <td>
                                        <i className="fas fa-arrow-down text-danger mr-3" />{" "}
                                        En cours de traitement
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
                                        <h3 className="mb-0">Liste des medecins</h3>
                                    </div>
                                    <div className="col text-right">
                                        <Button
                                            color="primary"
                                            href="#pablo"
                                            onClick={(e) => e.preventDefault()}
                                            size="sm"
                                        >
                                            Ajouter un medecin
                                        </Button>
                                    </div>
                                </Row>
                            </CardHeader>
                            <Table className="align-items-center table-flush" responsive>
                                <thead className="thead-light">
                                <tr>
                                    <th scope="col">Nom</th>
                                    <th scope="col">Prenom</th>
                                    <th scope="col">Numero</th>
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
                                    <th scope="row">Facebook</th>
                                    <td>5,480</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">70%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="70"
                                                    barClassName="bg-gradient-success"
                                                />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Google</th>
                                    <td>4,807</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">80%</span>
                                            <div>
                                                <Progress max="100" value="80" />
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">Instagram</th>
                                    <td>3,678</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <span className="mr-2">75%</span>
                                            <div>
                                                <Progress
                                                    max="100"
                                                    value="75"
                                                    barClassName="bg-gradient-info"
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
            </Container>
        </>
    );
};

export default IndexHopital;
