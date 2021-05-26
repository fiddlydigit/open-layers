import "ol/ol.css";
import Feature from "ol/Feature";
import Map from "ol/Map";
import Point from "ol/geom/Point";
import TileJSON from "ol/source/TileJSON";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import { Icon, Style } from "ol/style";
import { Modify } from "ol/interaction";
import { Tile } from "ol/layer";
import { Vector } from "ol/layer";
import { VectorSource } from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";
import Stamen from "ol/source/Stamen";
import fromLonLat from "ol/proj";


var iconStyle = [
  new Style({
    image: new Icon({
      anchor: [0.5, 0.5],
      scale: 0.05,
      src: "./imagens/icon.png",
    }),
  }),
];

var entidades = new Vector({
  title: "Titulo teste",
  source: new Source({
    url: "./dados/entidades.geojson",
    format: GeoJSON(),
  }),
  style: iconStyle,
});

new map = new Map({
  target: "map",
  layers: [
    new Tile({
      source: new Stamen({
        layer: "toner"
      })
    }),
    new Tile({
      source: new Stamen({
        layer: "terrain-labels"
      })
    })
  ],
  view: new View({
    center: fromLonLat([-8.6189, 40.5954]),
    zoom: 11
  })
});


