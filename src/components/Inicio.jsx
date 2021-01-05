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
      <div>
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
              <div className="text-center">
                <h1 className="text-sm-center mt-5">
                  Vas a disfrutar de un lugar maravilloso
                </h1>
                <p className="d-none d-sm-block col-6 offset-3">
                  Encontraras hermosos paisajes con afluentes de agua pura de
                  las montañas, fauna silvestre en su
                  explendor natural y una variedad de sitios para avistamiento de aves.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container" id="catalogo1">
        <div className="row">
          <div className="col-12 col-md-6 col-xl-3 offset-4 offset-sm-4 offset-md-0 offset-xl-0">
            <Catalogo
              service={hospedaje}
              description={descriptionHospedaje}
              img={imgCabañas}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3 offset-12 offset-sm-4 offset-md-0 offset-xl-0">
            <Catalogo
              service={recorridos}
              description={descriptionRecorridos}
              img={imgRecorridos}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3 offset-4 offset-sm-4 offset-md-0 offset-xl-0">
            <Catalogo
              service={camping}
              description={descriptionCamping}
              img={imgCamping}
            />
          </div>
          <div className="col-12 col-md-6 col-xl-3 offset-4 offset-sm-4 offset-md-0 offset-xl-0">
            <Catalogo
              service={hospedaje}
              description={descriptionHospedaje}
              img={imgCabañas}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Inicio;
