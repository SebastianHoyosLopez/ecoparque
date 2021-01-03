import React from "react";
import "./Inicio.css";
import { Carousel } from "react-bootstrap";
import Catalogo from "./Catalogo";

const Inicio = () => {
  const servicios = {
    hospedaje: {
      service: "Cabañas",
      description:
        "Puedes encontrar alojamiento en nuestras hermosas cabañas y disfrutar de hermosos paisajes",
      img: "https://imgur.com/g8YxlfB.jpg",
    },
    recorridos: {
      service: "Recorridos",
      description:
        "Tenemos excelente servicio de guias turisticos y los mejores sitios para esta actividad",
      img: "https://imgur.com/oHk9Wgo.jpg",
    },
    camping: {
      service: "Camping",
      description:
        "Encuentra grandes espacios para realizar esta actividad y disfruta de lo natural",
      img: "https://imgur.com/lFkyaOn.jpg",
    },
  };

  const hospedaje = servicios.hospedaje.service;
  const imgCabañas = servicios.hospedaje.img;
  const descriptionHospedaje = servicios.hospedaje.description;

  const recorridos = servicios.recorridos.service;
  const descriptionRecorridos = servicios.recorridos.description;
  const imgRecorridos = servicios.recorridos.img;

  const camping = servicios.camping.service;
  const descriptionCamping = servicios.camping.description;
  const imgCamping = servicios.camping.img;

  return (
    <>
      <Carousel id="carousel">
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/38wWu2b.jpg"
            alt="imagenes de muestra"
          />
        </Carousel.Item>
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/4Cf5dLD.jpg"
            alt="imagenes de muestra"
          />
        </Carousel.Item>
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/Z5kxI9X.jpg"
            alt="imagenes de muestra"
          />
        </Carousel.Item>
      </Carousel>
      <div className="overlay pt-5 mt-5">
        <div className="container">
          <div className="row align-item-center">
            <div className="col-md-6 offset-md-6 text-lg-right">
              <h1>Puedes Acceder A Nuestras Instalaciones</h1>
              <p className="d-none d-md-block">
                Con nosotros puedes obtener un excelente plan para tus
                vacaciones ecologicas
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <Catalogo
              service={hospedaje}
              description={descriptionHospedaje}
              img={imgCabañas}
            />
          </div>
          <div className="col-4">
            <Catalogo
              service={recorridos}
              description={descriptionRecorridos}
              img={imgRecorridos}
            />
          </div>
          <div className="col-4">
          <Catalogo
              service={camping}
              description={descriptionCamping}
              img={imgCamping}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
