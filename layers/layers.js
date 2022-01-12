var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_UAM_12_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "UAM_12",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/UAM_12_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11032315.078854, 2190201.692642, -11031867.617379, 2191297.815428]
                            })
                        });

lyr_GoogleSatellite_0.setVisible(true);lyr_UAM_12_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_UAM_12_1];
