import React from "react";
import { Container, Col, Row } from "react-grid-system";
import { Experience, Header, Tools } from "../components";
import "../fonts/fonts.css";

export default () => (
  <>
    <Header />
    <Container>
      <Row>
        <Col sm={2} />
        <Col sm={8}>
          <Experience
            job="Lead developer front-end"
            location="Marseille"
            company={{ name: "BuyCo", web: "https://www.buyco.org" }}
            tools={[
              Tools.typescript,
              Tools.reactjs,
              Tools.redux,
              Tools.flow,
              Tools.webpack,
              Tools.apollo,
              Tools.graphql,
              Tools.circleci,
            ]}
          >
            Mise en place et dévelopement d'une application front-end (SPA) pour faciliter le transport de containers.
            <ul>
              <li>Choix des technologies</li>
              <li>
                Prise de décisions fortes concernant l'évolution de
                l'application et de son architecture.
              </li>
              <li>Design UI/UX</li>
              <li>
                Définition des APIs en collaboration avec l'équipe back-end
              </li>
              <li>Priorisation des refactorisations nécessaires</li>
              <li>Configuration de la CI</li>
            </ul>
          </Experience>
          <Experience
            job="Fullstack Developer"
            location="Luxembourg"
            company={{
              name: "Global Jet",
              web: "https://www.https://www.globaljetconcept.com/.org",
            }}
            tools={[
              Tools.nodejs,
              Tools.mongodb,
              Tools.reactjs,
              Tools.redux,
              Tools.webpack,
              Tools.sqlserver,
              Tools.php,
            ]}
          >
            Conception, dévelopement et mise en place d'applications web en collaboration avec
            les services operationnels. Maintenance et optimisation du parc de base
            de données.
            <ul>
              <li>
                Développement d'une application à destination des pilotes
                comme aide à la décision dans le but d'optimiser les coûts liés à la consommation du
                fuel.
              </li>
              <li>
                Développement d'une application de gestion des équipages
                (planning), mise à disposition des crews via une interface mobile.
              </li>
            </ul>
          </Experience>
        </Col>
        <Col sm={2} />
      </Row>
    </Container>
  </>
);
