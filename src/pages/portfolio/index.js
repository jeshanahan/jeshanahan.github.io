import React from "react";
import "./style.css";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Container, Row, Col } from "react-bootstrap";
import { dataportfolio, datagamedev, meta } from "../../content_option";

const ProjectGrid = ({ items }) => {
  if (!items.length) {
    return <p className="po_empty">Projects coming soon.</p>;
  }

  return (
    <div className="mb-5 po_items_ho">
      {items.map((data, i) => (
        <div key={i} className="po_item">
          <img src={data.img} alt={data.alt || ""} />
          <div className="content">
            <p>{data.description}</p>
            <div className="po_links">
              {data.link && data.link !== "#" && (
                <a href={data.link} target="_blank" rel="noopener noreferrer">
                  Live app
                </a>
              )}
              {data.github && (
                <a href={data.github} target="_blank" rel="noopener noreferrer">
                  GitHub
                </a>
              )}
              {(!data.link || data.link === "#") && !data.github && (
                <a href="#">view project</a>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export const Portfolio = () => {
  return (
    <HelmetProvider>
      <Container className="About-header">
        <Helmet>
          <meta charSet="utf-8" />
          <title> Portfolio | {meta.title} </title>{" "}
          <meta name="description" content={meta.description} />
        </Helmet>
        <Row className="mb-5 mt-3 pt-md-3">
          <Col lg="8">
            <h1 className="display-4 mb-4"> Portfolio </h1>{" "}
            <hr className="t_border my-4 ml-0 text-left" />
          </Col>
        </Row>

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Software Projects</h3>
          </Col>
        </Row>
        <ProjectGrid items={dataportfolio} />

        <Row className="sec_sp">
          <Col lg="12">
            <h3 className="color_sec py-4">Game Development</h3>
          </Col>
        </Row>
        <ProjectGrid items={datagamedev} />
      </Container>
    </HelmetProvider>
  );
};
