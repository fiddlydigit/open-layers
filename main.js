import "ol/ol.css";
import Feature from "ol/Feature";
import Map from "ol/Map";
import Point from "ol/geom/Point";
import TileJSON from "ol/source/TileJSON";
import VectorSource from "ol/source/Vector";
import View from "ol/View";
import { Icon, Style } from "ol/style";
import { Modify } from "ol/interaction";
import { Tile as TileLayer } from "ol/layer";
import { Vector } from "ol/layer";
import { VectorSource } from "ol/source/Vector";
import GeoJSON from "ol/format/GeoJSON";

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
