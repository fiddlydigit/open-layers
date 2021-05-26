import "ol/ol.css";
import { Feature, Map, View } from "ol";
import { Vector as VectorLayer } from "ol/layer";
import OSM from "ol/source/OSM";
import { Icon, Style } from "ol/style";
import Point from "ol/geom/Point";
import TileLayer from "ol/layer/Tile";
import { fromLonLat } from "ol/proj";
import VectorSource from "ol/source/Vector";
import TileJSON from "ol/source/TileJSON";

var rome = new Feature({
  geometry: new Point(fromLonLat([12.5, 41.9])),
});

var iconStyle = new Style({
  image: new Icon({
    anchor: [0.5, 46],
    anchorXUnits: "fraction",
    anchorYUnits: "pixels",
    src: "data/icon.png",
  }),
});

rome.setStyle(iconStyle);

var vectorSource = new VectorSource({
  features: [rome],
});

var vectorLayer = new VectorLayer({
  source: vectorSource,
});

const map = new Map({
  target: "map",
  layers: [
    vectorLayer,
    new TileLayer({
      source: new TileJSON({
        url: "https://a.tiles.mapbox.com/v3/aj.1x1-degrees.json?secure=1",
        crossOrigin: "anonymous",
      }),
    }),
  ],
  view: new View({
    center: fromLonLat([12.5, 41.9]),
    zoom: 5,
  }),
});
