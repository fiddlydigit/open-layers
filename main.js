import "ol/ol.css";
import Map from "ol/Map";
import View from "ol/View";
import { Icon, Style } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import Stamen from "ol/source/Stamen";
import { fromLonLat } from "ol/proj";
import { Tile as TileLayer, Vector as VectorLayer } from "ol/layer";
import Feature from "ol/Feature";
import VectorSource from "ol/source/Vector";

function init() {
  var iconStyle = [
    new Style({
      image: new Icon({
        anchor: [0.5, 0.5],
        scale: 0.05,
        src: "./imagens/icon.png",
      }),
    }),
  ];

  function estilos(feature, resolution) {
    if (feature.get("TIPOLOGIA") === "Piscina") {
      return iconStyle;
    } else if (feature.get("TIPOLOGIA") === "Campo de Futebol") {
      return iconStyle;
    } else {
      return iconStyle;
    }
  }

  var entidades = new VectorLayer({
    title: "Titulo teste",
    source: new VectorSource({
      url: "./dados/entidades.geojson",
      format: new GeoJSON(),
    }),
    style: estilos,
  });

  map = new Map({
    target: "map",
    layers: [
      new TileLayer({
        source: new Stamen({
          layer: "watercolor",
        }),
      }),
      new TileLayer({
        source: new Stamen({
          layer: "terrain-labels",
        }),
      }),
    ],
    view: new View({
      center: fromLonLat([-8.6189, 40.5954]),
      zoom: 4,
    }),
  });

  map.addLayer(entidades);
}

window.onload = init;
