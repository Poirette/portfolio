import React from "react";
import { Container, Col, Row, Visible } from "react-grid-system";
import { Experience, Header, Tools, Stat, Rocket } from "../components";
import "../fonts/fonts.css";

export default () => (
  <>
    <Header />
    <Container>
      <Row>
        <Col>
          <Stat.Group>
            <Stat value="10" unit="ans" label="d'expérience" />
            <Stat value="5" unit="ans" label="en startup" />
            <Stat value="5" unit="ans" label="de ReactJS" />
            <Stat value="3" unit="ans" label="en tant que Lead" />
          </Stat.Group>
        </Col>
      </Row>
      <Row>
        <Visible md lg xl>
          <Col md={2} />
        </Visible>
        <Col sm={12} md={8} lg={8} xl={8}>
          <Experience
            job="Lead developer front-end"
            location="Marseille"
            company={{ name: "BuyCo", web: "https://www.buyco.org" }}
            period={[new Date(2017, 4, 1), new Date()]}
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
            startup
          >
            Mise en place et dévelopement d'une application front-end (SPA) pour
            faciliter le transport de containers.
            <ul>
              <li>Choix des technologies</li>
              <li>
                Estimation et dévelopement des features en collaboration avec
                l'équipe produit
              </li>
              <li>
                Définition des APIs en collaboration avec l'équipe back-end
              </li>
              <li>Design UI/UX</li>
              <li>
                Prise de décisions fortes concernant l'évolution de
                l'application et de son architecture.
              </li>
              <li>Priorisation des refactorisations nécessaires</li>
              <li>Configuration de la CI</li>
              <li>Veille technologique</li>
            </ul>
          </Experience>
          <Experience
            job="Fullstack Developer"
            location="Luxembourg"
            period={[new Date(2015, 4, 1), new Date(2017, 3, 1)]}
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
            Conception, dévelopement et mise en place d'applications web en
            collaboration avec les services operationnels. Maintenance et
            optimisation du parc de base de données.
            <ul>
              <li>
                Design et développement d'une application à destination des
                acheteurs et pilotes comme aide à la décision dans le but
                d'optimiser les coûts liés à la consommation du fuel.
              </li>
              <li>
                Design et développement d'une application de gestion des
                équipages (planning), mise à disposition des crews via une
                interface mobile.
              </li>
              <li>Veille technologique</li>
            </ul>
          </Experience>
          <Experience
            job="Fullstack Developer / DBA"
            location="Luxembourg"
            period={[new Date(2013, 8, 1), new Date(2015, 4, 1)]}
            company={{
              name: "Neofacto",
              web: "https://neofacto.com",
            }}
            tools={[
              Tools.jquery,
              Tools.sqlserver,
              Tools.symfony,
              Tools.nodejs,
              Tools.php,
            ]}
            startup
          >
            En mission longue durée au sein de la startup Aston iTF,
            développement d'une plateforme SaaS permettant d'optimiser la
            gestion du poste client de grands groupes (relance, recouvrement,
            credit management).
            <ul>
              <li>
                Développement des features business en collaboration avec
                l'équipe produit.
              </li>
              <li>Refactorisation pour résorber la dette existante.</li>
              <li>
                Développement et implémentation des algorithmes financier en
                T-SQL.
              </li>
              <li>
                Maintenance et optimisation du parc de base de données (~80)
                sous SQLserver.
              </li>
            </ul>
          </Experience>
          <Experience
            job="Fullstack Developer"
            location="Pompey"
            period={[new Date(2011, 6, 1), new Date(2013, 8, 1)]}
            company={{
              name: "Advensys",
              web: "https://advensys.fr/",
            }}
            tools={[Tools.jquery, Tools.php]}
          >
            Développement d'une application web pour le{" "}
            <a href="https://www.umihformation.fr/">
              leader nationnal de la formation en hotelerie - restauration
            </a>
            <ul>
              <li>
                Développement des features en collaboration avec le client
                (facturation, export comptable, réservation des formations,
                etc.).
              </li>
              <li>Design UI/UX</li>
              <li>Support utilisateurs sur l'utilisation de la platforme</li>
            </ul>
          </Experience>
        </Col>
        <Visible md lg xl>
          <Col md={2} />
        </Visible>
      </Row>
    </Container>
  </>
);
