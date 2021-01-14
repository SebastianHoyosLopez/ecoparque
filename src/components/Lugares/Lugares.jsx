import React from "react";
import Tarjeta from "./Tarjeta";

const Lugares = () => {
  const lugares = {
    rioCristal: {
      name: "Rio Cristal",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card s content.",
      img: "https://imgur.com/G1Rs3oL.jpg",
    },
    ZonaCamping: {
      name: "Zona de camping",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card s content.",
      img: "https://imgur.com/PdEjuMg.jpg",
    },
    lagoPesca: {
      name: "Zona de pesca",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card s content.",
      img: "https://imgur.com/sO6l63q.jpg",
    },
    Restaurantes: {
      name: "Restaurantes",
      description:
        "Some quick example text to build on the card title and make up the bulk of the card s content.",
      img: "https://imgur.com/DFZPrYY.jpg",
    },
  };

  return (
    <>
      <h1 className="text-center">Lugares que encontraras en el ecoparque</h1>
      <div className="container">
        <div className="row justify-content-center">
          <Tarjeta
            fotoCard={lugares.rioCristal.img}
            titleCard={lugares.rioCristal.name}
            descriptionCard={lugares.rioCristal.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
          <Tarjeta
            fotoCard={lugares.ZonaCamping.img}
            titleCard={lugares.ZonaCamping.name}
            descriptionCard={lugares.ZonaCamping.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
          <Tarjeta
            fotoCard={lugares.lagoPesca.img}
            titleCard={lugares.lagoPesca.name}
            descriptionCard={lugares.lagoPesca.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
          <Tarjeta
            fotoCard={lugares.Restaurantes.img}
            titleCard={lugares.Restaurantes.name}
            descriptionCard={lugares.Restaurantes.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
          <Tarjeta
            fotoCard={lugares.Restaurantes.img}
            titleCard={lugares.Restaurantes.name}
            descriptionCard={lugares.Restaurantes.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
          <Tarjeta
            fotoCard={lugares.rioCristal.img}
            titleCard={lugares.rioCristal.name}
            descriptionCard={lugares.rioCristal.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
          <Tarjeta
            fotoCard={lugares.ZonaCamping.img}
            titleCard={lugares.ZonaCamping.name}
            descriptionCard={lugares.ZonaCamping.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
          <Tarjeta
            fotoCard={lugares.lagoPesca.img}
            titleCard={lugares.lagoPesca.name}
            descriptionCard={lugares.lagoPesca.description}
            className="col-8 col-sm-5 col-md-6 col-lg-3"
          />
        </div>
      </div>
    </>
  );
};

export default Lugares;
