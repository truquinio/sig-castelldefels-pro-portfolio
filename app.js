const map = new maplibregl.Map({
  container: "map",
  style: {
    version: 8,
    sources: {
      osm: {
        type: "raster",
        tiles: ["https://tile.openstreetmap.org/{z}/{x}/{y}.png"],
        tileSize: 256,
        attribution: "© OpenStreetMap contributors"
      }
    },
    layers: [{ id: "osm", type: "raster", source: "osm" }]
  },
  center: [1.976, 41.277],
  zoom: 13
});

map.addControl(new maplibregl.NavigationControl(), "top-right");

const demo = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: { name: "Parcela demo", kind: "portfolio" },
      geometry: {
        type: "Polygon",
        coordinates: [[[1.969,41.278],[1.972,41.278],[1.972,41.280],[1.969,41.280],[1.969,41.278]]]
      }
    },
    {
      type: "Feature",
      properties: { name: "Equipamiento demo", kind: "poi" },
      geometry: { type: "Point", coordinates: [1.981,41.276] }
    }
  ]
};

map.on("load", () => {
  map.addSource("showcase", { type: "geojson", data: demo });
  map.addLayer({
    id: "parcel-demo",
    type: "fill",
    source: "showcase",
    filter: ["==", ["geometry-type"], "Polygon"],
    paint: { "fill-color": "#58a6ff", "fill-opacity": 0.28, "fill-outline-color": "#58a6ff" }
  });
  map.addLayer({
    id: "poi-demo",
    type: "circle",
    source: "showcase",
    filter: ["==", ["geometry-type"], "Point"],
    paint: { "circle-radius": 8, "circle-color": "#f0883e", "circle-stroke-width": 2, "circle-stroke-color": "#ffffff" }
  });
  map.on("click", "poi-demo", e => {
    const f = e.features?.[0];
    if (f) new maplibregl.Popup().setLngLat(e.lngLat).setHTML("<b>"+f.properties.name+"</b><br>Dato ficticio de demostración").addTo(map);
  });
});
