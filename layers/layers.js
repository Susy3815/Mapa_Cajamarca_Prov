var wms_layers = [];

var format_Distritos_0 = new ol.format.GeoJSON();
var features_Distritos_0 = format_Distritos_0.readFeatures(json_Distritos_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Distritos_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Distritos_0.addFeatures(features_Distritos_0);
var lyr_Distritos_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Distritos_0, 
                style: style_Distritos_0,
                interactive: true,
    title: 'Distritos<br />\
    <img src="styles/legend/Distritos_0_0.png" /> Cajabamba<br />\
    <img src="styles/legend/Distritos_0_1.png" /> Cajamarca<br />\
    <img src="styles/legend/Distritos_0_2.png" /> Celendín<br />\
    <img src="styles/legend/Distritos_0_3.png" /> Chota<br />\
    <img src="styles/legend/Distritos_0_4.png" /> Contumazá<br />\
    <img src="styles/legend/Distritos_0_5.png" /> Cutervo<br />\
    <img src="styles/legend/Distritos_0_6.png" /> Hualgayoc<br />\
    <img src="styles/legend/Distritos_0_7.png" /> Jaén<br />\
    <img src="styles/legend/Distritos_0_8.png" /> San Ignacio<br />\
    <img src="styles/legend/Distritos_0_9.png" /> San Marcos<br />\
    <img src="styles/legend/Distritos_0_10.png" /> San Miguel<br />\
    <img src="styles/legend/Distritos_0_11.png" /> San Pablo<br />\
    <img src="styles/legend/Distritos_0_12.png" /> Santa Cruz<br />'
        });
var format_Provincias_1 = new ol.format.GeoJSON();
var features_Provincias_1 = format_Provincias_1.readFeatures(json_Provincias_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Provincias_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Provincias_1.addFeatures(features_Provincias_1);
var lyr_Provincias_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Provincias_1, 
                style: style_Provincias_1,
                interactive: true,
                title: '<img src="styles/legend/Provincias_1.png" /> Provincias'
            });

lyr_Distritos_0.setVisible(true);lyr_Provincias_1.setVisible(true);
var layersList = [lyr_Distritos_0,lyr_Provincias_1];
lyr_Distritos_0.set('fieldAliases', {'IDDPTO': 'IDDPTO', 'DEPART': 'DEPART', 'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'DIST_ID': 'DIST_ID', 'DISTRITO': 'DISTRITO', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', });
lyr_Provincias_1.set('fieldAliases', {'PROV_ID': 'PROV_ID', 'PROVINCIA': 'PROVINCIA', 'AREA_Km2': 'AREA_Km2', 'AREA_Ha': 'AREA_Ha', 'Imagen': 'Imagen', 'Numero': 'Numero', });
lyr_Distritos_0.set('fieldImages', {'IDDPTO': 'Hidden', 'DEPART': 'Hidden', 'PROV_ID': 'Hidden', 'PROVINCIA': 'Hidden', 'DIST_ID': 'Hidden', 'DISTRITO': 'Hidden', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'Hidden', });
lyr_Provincias_1.set('fieldImages', {'PROV_ID': 'TextEdit', 'PROVINCIA': 'TextEdit', 'AREA_Km2': 'Hidden', 'AREA_Ha': 'TextEdit', 'Imagen': 'ExternalResource', 'Numero': 'TextEdit', });
lyr_Distritos_0.set('fieldLabels', {});
lyr_Provincias_1.set('fieldLabels', {'PROV_ID': 'no label', 'PROVINCIA': 'inline label', 'AREA_Ha': 'inline label', 'Imagen': 'no label', 'Numero': 'no label', });
lyr_Provincias_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});