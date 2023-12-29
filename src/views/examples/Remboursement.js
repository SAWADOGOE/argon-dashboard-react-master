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

// reactstrap components
import {
    Button,
    Card,
    CardHeader,
    CardBody,
    FormGroup,
    Form,
    Input,
    Container,
    Row,
    Col,
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";
import HopitalHeader from "../../components/Headers/HopitalHeader";
import HopitalUserHeader from "../../components/Headers/HopitalUserHeader";

const Remboursement = () => {
    return (
        <>
            <HopitalUserHeader />
            {/* Page content */}
            <Container className="mt--7" fluid>
                <Row>

                    <Col className="order-xl-1" xl="12">
                        <Card className="bg-secondary shadow">
                            <CardHeader className="bg-white border-0">
                                <Row className="align-items-center">
                                    <Col xs="8">
                                        <h3 className="mb-0">Fiche de remboursement</h3>
                                    </Col>

                                </Row>
                            </CardHeader>
                            <CardBody>
                                <Form>
                                    <h6 className="heading-small text-muted mb-4">
                                        Veuillez remplir la fiche de remboursement
                                    </h6>
                                    <div className="pl-lg-4">
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Nom
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="lucky.jesse"
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Prenom
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="lucky.jesse"
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="text"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-email"
                                                    >
                                                        Email
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-email"
                                                        placeholder="jesse@example.com"
                                                        type="email"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Sexe
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="lucky.jesse"
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="select"
                                                    />
                                                </FormGroup>
                                            </Col>

                                        </Row>
                                        <Row>
                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-first-name"
                                                    >
                                                        Annee de Naissance
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        id="input-first-name"
                                                        placeholder="First name"
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Date de traitement
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"
                                                        defaultValue="lucky.jesse"
                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="date"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-username"
                                                    >
                                                        Ordonnace
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"

                                                        id="input-username"
                                                        placeholder="Username"
                                                        type="file"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col lg="6">
                                                <FormGroup>
                                                    <label
                                                        className="form-control-label"
                                                        htmlFor="input-last-name"
                                                    >
                                                        Dossier d'examen
                                                    </label>
                                                    <Input
                                                        className="form-control-alternative"

                                                        id="input-last-name"
                                                        placeholder="Last name"
                                                        type="file"
                                                    />
                                                </FormGroup>
                                            </Col>

                                            <Col className="text-left" xs="4">
                                                <Button
                                                    color="primary"
                                                    href="#pablo"
                                                    onClick={(e) => e.preventDefault()}
                                                    size="sm"
                                                >
                                                    Envoyer
                                                </Button>
                                            </Col>
                                        </Row>
                                    </div>



                                </Form>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Remboursement;
