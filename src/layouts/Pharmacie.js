import React from "react";
import { useLocation, Route, Routes, Navigate } from "react-router-dom";
// reactstrap components
import { Container } from "reactstrap";

import routes from "routes.js";
import PharmacieFooter from "../components/Footers/PharmacieFooter";
import PharmacieSidebar from "../components/Sidebar/PharmacieSidebar";
import PharmacieAdminNavbar from "../components/Navbars/PharmacieAdminNavbar";

const Pharmacie = (props) => {
    const mainContent = React.useRef(null);
    const location = useLocation();

    React.useEffect(() => {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        mainContent.current.scrollTop = 0;
    }, [location]);

    const getRoutes = (routes) => {
        return routes.map((prop, key) => {
            if (prop.layout === "/pharmacie") {
                return (
                    <Route path={prop.path} element={prop.component} key={key} exact />
                );
            } else {
                return null;
            }
        });
    };

    const getBrandText = (path) => {
        for (let i = 0; i < routes.length; i++) {
            if (
                props?.location?.pathname.indexOf(routes[i].layout + routes[i].path) !==
                -1
            ) {
                return routes[i].name;
            }
        }
        return "Brand";
    };

    return (
        <>
            <PharmacieSidebar
                {...props}
                routes={routes}
                logo={{
                    innerLink: "/pharmacie/index",
                    imgAlt: "...",
                }}
            />
            <div className="main-content" ref={mainContent}>
                <PharmacieAdminNavbar
                    {...props}
                    brandText={getBrandText(props?.location?.pathname)}
                />
                <Routes>
                    {getRoutes(routes)}
                    <Route path="*" element={<Navigate to="/pharmacie/index" replace />} />
                </Routes>
                <Container fluid>
                    <PharmacieFooter/>
                </Container>
            </div>
        </>
    );
};

export default Pharmacie;
