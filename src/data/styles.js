export const terrainV2 = {
  version: 8,
  name: 'Mapbox Terrain tileset v2',
  sources: {
    'mapbox-terrain': {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-terrain-v2'
    }
  },
  layers: [
    {
      id: 'landcover',
      source: 'mapbox-terrain',
      'source-layer': 'landcover',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }
    },
    {
      id: 'hillshade',
      source: 'mapbox-terrain',
      'source-layer': 'hillshade',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }
    },
    {
      id: 'contour',
      source: 'mapbox-terrain',
      'source-layer': 'contour',
      type: 'line',
      paint: {
        'line-color': '#ffffff'
      }
    }
  ]
};

export const streetsV8 = {
  version: 8,
  name: 'Mapbox Streets tileset v8',
  sources: {
    'mapbox-streets': {
      type: 'vector',
      url: 'mapbox://mapbox.mapbox-streets-v8'
    }
  },
  layers: [
    {
      id: 'admin',
      source: 'mapbox-streets',
      'source-layer': 'admin',
      type: 'line',
      paint: {
        'line-color': '#ffffff'
      }
    },
    {
      id: 'aeroway',
      source: 'mapbox-streets',
      'source-layer': 'aeroway',
      type: 'line',
      paint: {
        'line-color': '#ffffff'
      }
    },
    {
      id: 'airport_label',
      source: 'mapbox-streets',
      'source-layer': 'airport_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'rgba(238,78,139, 0.4)',
        'circle-stroke-color': 'rgba(238,78,139, 1)',
        'circle-stroke-width': 1
      }
    },
    {
      id: 'building',
      source: 'mapbox-streets',
      'source-layer': 'building',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }
    },
    {
      id: 'housenum_label',
      source: 'mapbox-streets',
      'source-layer': 'housenum_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'rgba(238,78,139, 0.4)',
        'circle-stroke-color': 'rgba(238,78,139, 1)',
        'circle-stroke-width': 1
      }
    },
    {
      id: 'landuse_overlay',
      source: 'mapbox-streets',
      'source-layer': 'landuse_overlay',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }
    },
    {
      id: 'landuse',
      source: 'mapbox-streets',
      'source-layer': 'landuse',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }
    },
    {
      id: 'motorway_junction',
      source: 'mapbox-streets',
      'source-layer': 'motorway_junction',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'rgba(238,78,139, 0.4)',
        'circle-stroke-color': 'rgba(238,78,139, 1)',
        'circle-stroke-width': 1
      }
    },
    {
      id: 'natural_label',
      source: 'mapbox-streets',
      'source-layer': 'natural_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'rgba(238,78,139, 0.4)',
        'circle-stroke-color': 'rgba(238,78,139, 1)',
        'circle-stroke-width': 1
      }
    },
    {
      id: 'place_label',
      source: 'mapbox-streets',
      'source-layer': 'place_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'rgba(238,78,139, 0.4)',
        'circle-stroke-color': 'rgba(238,78,139, 1)',
        'circle-stroke-width': 1
      }
    },
    {
      id: 'poi_label',
      source: 'mapbox-streets',
      'source-layer': 'poi_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'rgba(238,78,139, 0.4)',
        'circle-stroke-color': 'rgba(238,78,139, 1)',
        'circle-stroke-width': 1
      }
    },
    {
      id: 'road',
      source: 'mapbox-streets',
      'source-layer': 'road',
      type: 'line',
      paint: {
        'line-color': '#ffffff'
      }
    },
    {
      id: 'structure',
      source: 'mapbox-streets',
      'source-layer': 'structure',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }
    },
    {
      id: 'transit_stop_label',
      source: 'mapbox-streets',
      'source-layer': 'transit_stop_label',
      type: 'circle',
      paint: {
        'circle-radius': 3,
        'circle-color': 'rgba(238,78,139, 0.4)',
        'circle-stroke-color': 'rgba(238,78,139, 1)',
        'circle-stroke-width': 1
      }
    },
    {
      id: 'water',
      source: 'mapbox-streets',
      'source-layer': 'water',
      type: 'fill',
      paint: {
        'fill-color': 'rgba(66,100,251, 0.3)',
        'fill-outline-color': 'rgba(66,100,251, 1)'
      }
    },
    {
      id: 'waterway',
      source: 'mapbox-streets',
      'source-layer': 'waterway',
      type: 'line',
      paint: {
        'line-color': '#ffffff'
      }
    }
  ]
};

export const trafficV1 = {
  version: 8,
  name: 'Mapbox Traffic tileset v1',
  sources: {
    'mapbox-traffic': {
      url: 'mapbox://mapbox.mapbox-traffic-v1',
      type: 'vector'
    }
  },
  layers: [
    {
      id: 'traffic',
      source: 'mapbox-traffic',
      'source-layer': 'traffic',
      type: 'line',
      paint: {
        'line-width': 1.5,
        'line-color': [
          'case',
          ['==', 'low', ['get', 'congestion']],
          '#aab7ef',
          ['==', 'moderate', ['get', 'congestion']],
          '#4264fb',
          ['==', 'heavy', ['get', 'congestion']],
          '#ee4e8b',
          ['==', 'severe', ['get', 'congestion']],
          '#b43b71',
          '#000000'
        ]
      }
    }
  ]
};
