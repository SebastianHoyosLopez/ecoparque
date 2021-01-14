import React from "react";
import "./Inicio.css";
import { Carousel } from "react-bootstrap";
import Catalogo from "./Catalogo";

const Inicio = () => {
  const servicios = {
    hospedaje: {
      service: "Cabañas",
      description:
        "Puedes encontrar alojamiento en nuestras hermosas cabañas y disfrutar de hermosos paisajes.",
      img: "https://imgur.com/g8YxlfB.jpg",
    },
    recorridos: {
      service: "Recorridos",
      description:
        "Tenemos excelente servicio de guias turisticos y los mejores sitios para esta actividad tan maravillosa.",
      img: "https://imgur.com/oHk9Wgo.jpg",
    },
    camping: {
      service: "Glamping",
      description:
        "Encuentra grandes espacios para realizar esta actividad y disfruta de la naturaleza en su explendor.",
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
      <Carousel id="carousel" className="carousel-fade">
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/VAUPA0q.jpg"
            alt="imagenes de muestra"
          />
        </Carousel.Item>
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/5Jl9MGp.jpg"
            alt="imagenes de muestra"
          />
        </Carousel.Item>
        <Carousel.Item interval={9000}>
          <img
            className="d-block w-100"
            src="https://imgur.com/G1Rs3oL.jpg"
            alt="imagenes de muestra"
          />
        </Carousel.Item>
      </Carousel>
      <div className="overlay pt-3">
        <div className="container">
          <div className="row">
            <div className="text-center">
              <h1 className="text-sm-center mt-3">
                Aquí disfrutarás de un maravilloso lugar natural
              </h1>
              <p className="d-flex d-sm-block col-6 offset-3">
                Encontrarás hermosos paisajes con afluentes de agua pura de las
                montañas, fauna silvestre en su explendor natural y una variedad
                de sitios para avistamiento de aves.
              </p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-8 col-md-5 col-xl-3">
            <Catalogo
              service={hospedaje}
              description={descriptionHospedaje}
              img={imgCabañas}
            />
          </div>
          <div className="col-8 col-md-5 col-xl-3">
            <Catalogo
              service={recorridos}
              description={descriptionRecorridos}
              img={imgRecorridos}
            />
          </div>
          <div className="col-8 col-md-5 col-xl-3">
            <Catalogo
              service={camping}
              description={descriptionCamping}
              img={imgCamping}
            />
          </div>
          <div className="col-8 col-md-5 col-xl-3">
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
