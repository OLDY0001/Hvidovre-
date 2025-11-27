var wms_layers = [];


        var lyr_Positronnolabels_0 = new ol.layer.Tile({
            'title': 'Positron [no labels]',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png'
            })
        });
var format_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1 = new ol.format.GeoJSON();
var features_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1 = format_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1.readFeatures(json_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1.addFeatures(features_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1);
var lyr_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1, 
                style: style_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1,
                popuplayertitle: 'Hvidovre Lokalplaner vedtaget — theme_pdk_lokalplan_vedtaget_v',
                interactive: true,
    title: 'Hvidovre Lokalplaner vedtaget — theme_pdk_lokalplan_vedtaget_v<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_0.png" /> 001<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_1.png" /> 101-1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_2.png" /> 102<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_3.png" /> 103<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_4.png" /> 104<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_5.png" /> 105<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_6.png" /> 106<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_7.png" /> 108<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_8.png" /> 109-1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_9.png" /> 112<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_10.png" /> 115<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_11.png" /> 116<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_12.png" /> 118<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_13.png" /> 119<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_14.png" /> 120<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_15.png" /> 121<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_16.png" /> 122<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_17.png" /> 124<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_18.png" /> 126<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_19.png" /> 127<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_20.png" /> 128<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_21.png" /> 131<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_22.png" /> 132<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_23.png" /> 133<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_24.png" /> 134<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_25.png" /> 135<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_26.png" /> 137<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_27.png" /> 139<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_28.png" /> 140<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_29.png" /> 141<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_30.png" /> 142<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_31.png" /> 143<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_32.png" /> 144<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_33.png" /> 147<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_34.png" /> 148<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_35.png" /> 149<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_36.png" /> 150<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_37.png" /> 151<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_38.png" /> 152<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_39.png" /> 154<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_40.png" /> 202<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_41.png" /> 203<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_42.png" /> 206<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_43.png" /> 207<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_44.png" /> 208<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_45.png" /> 209<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_46.png" /> 210<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_47.png" /> 211<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_48.png" /> 216<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_49.png" /> 220<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_50.png" /> 221<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_51.png" /> 225<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_52.png" /> 226<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_53.png" /> 228<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_54.png" /> 229<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_55.png" /> 230<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_56.png" /> 231<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_57.png" /> 232<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_58.png" /> 233<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_59.png" /> 234<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_60.png" /> 236<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_61.png" /> 237<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_62.png" /> 238<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_63.png" /> 239<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_64.png" /> 240<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_65.png" /> 241<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_66.png" /> 301-1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_67.png" /> 303<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_68.png" /> 304<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_69.png" /> 305<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_70.png" /> 306<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_71.png" /> 313<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_72.png" /> 314<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_73.png" /> 316<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_74.png" /> 322<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_75.png" /> 323<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_76.png" /> 324<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_77.png" /> 325<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_78.png" /> 326<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_79.png" /> 327<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_80.png" /> 328<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_81.png" /> 329<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_82.png" /> 330<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_83.png" /> 331<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_84.png" /> 332<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_85.png" /> 335<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_86.png" /> 338<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_87.png" /> 339<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_88.png" /> 340<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_89.png" /> 341<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_90.png" /> 342<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_91.png" /> 343<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_92.png" /> 345<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_93.png" /> 403-1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_94.png" /> 404<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_95.png" /> 405<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_96.png" /> 407<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_97.png" /> 408<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_98.png" /> 409<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_99.png" /> 411<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_100.png" /> 412<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_101.png" /> 418<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_102.png" /> 423<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_103.png" /> 429<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_104.png" /> 432<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_105.png" /> 433<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_106.png" /> 440<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_107.png" /> 441<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_108.png" /> 447<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_109.png" /> 448<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_110.png" /> 452<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_111.png" /> 454<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_112.png" /> 455<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_113.png" /> 456<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_114.png" /> 457<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_115.png" /> 458<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_116.png" /> 459<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_117.png" /> 462<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_118.png" /> 463<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_119.png" /> 464<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_120.png" /> 466<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_121.png" /> 467<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_122.png" /> 468<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_123.png" /> 469<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_124.png" /> 470<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_125.png" /> 471<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_126.png" /> 472<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_127.png" /> 473<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_128.png" /> 475<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_129.png" /> 476<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_130.png" /> 504<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_131.png" /> 507<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_132.png" /> 508<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_133.png" /> 510<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_134.png" /> 511<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_135.png" /> 516<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_136.png" /> 518<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_137.png" /> 519<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_138.png" /> A1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_139.png" /> A10<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_140.png" /> A11<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_141.png" /> A11 tillæg 1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_142.png" /> A11 tillæg 2<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_143.png" /> A13<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_144.png" /> A14<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_145.png" /> A15<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_146.png" /> A3<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_147.png" /> A5<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_148.png" /> A7<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_149.png" /> A8<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_150.png" /> A9 med tillæg 1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_151.png" /> B17<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_152.png" /> B17 tillæg 1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_153.png" /> H1 med tillæg 1 og 2<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_154.png" /> H1 tillæg 4 <br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_155.png" /> H10<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_156.png" /> H10 tillæg 1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_157.png" /> H11<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_158.png" /> H12<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_159.png" /> H13<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_160.png" /> H14<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_161.png" /> H15<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_162.png" /> H16<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_163.png" /> H17<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_164.png" /> H18<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_165.png" /> H20<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_166.png" /> H20 tillæg 1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_167.png" /> H3<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_168.png" /> H4<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_169.png" /> H5<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_170.png" /> H9<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_171.png" /> Lokalplan 127 med Tillæg nr. 1<br />\
    <img src="styles/legend/HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1_172.png" /> <br />' });
var format_LokalplanForslagtiloleLokalplanForslag_2 = new ol.format.GeoJSON();
var features_LokalplanForslagtiloleLokalplanForslag_2 = format_LokalplanForslagtiloleLokalplanForslag_2.readFeatures(json_LokalplanForslagtiloleLokalplanForslag_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LokalplanForslagtiloleLokalplanForslag_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LokalplanForslagtiloleLokalplanForslag_2.addFeatures(features_LokalplanForslagtiloleLokalplanForslag_2);
var lyr_LokalplanForslagtiloleLokalplanForslag_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LokalplanForslagtiloleLokalplanForslag_2, 
                style: style_LokalplanForslagtiloleLokalplanForslag_2,
                popuplayertitle: 'Lokalplan Forslag til ole — Lokalplan Forslag',
                interactive: true,
                title: '<img src="styles/legend/LokalplanForslagtiloleLokalplanForslag_2.png" /> Lokalplan Forslag til ole — Lokalplan Forslag'
            });
var format_FrededeOmrder_3 = new ol.format.GeoJSON();
var features_FrededeOmrder_3 = format_FrededeOmrder_3.readFeatures(json_FrededeOmrder_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FrededeOmrder_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FrededeOmrder_3.addFeatures(features_FrededeOmrder_3);
var lyr_FrededeOmrder_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FrededeOmrder_3, 
                style: style_FrededeOmrder_3,
                popuplayertitle: 'FrededeOmråder',
                interactive: false,
    title: 'FrededeOmråder<br />\
    <img src="styles/legend/FrededeOmrder_3_0.png" /> Damhuså<br />\
    <img src="styles/legend/FrededeOmrder_3_1.png" /> Kalvebod Kile<br />\
    <img src="styles/legend/FrededeOmrder_3_2.png" /> Rehbæks Eng<br />\
    <img src="styles/legend/FrededeOmrder_3_3.png" /> Vestvolden<br />\
    <img src="styles/legend/FrededeOmrder_3_4.png" /> Vigerslevparken, Damhussøen, Damhusengen, Krogebjergparken<br />\
    <img src="styles/legend/FrededeOmrder_3_5.png" /> <br />' });
var format_kommuneplan_4 = new ol.format.GeoJSON();
var features_kommuneplan_4 = format_kommuneplan_4.readFeatures(json_kommuneplan_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kommuneplan_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kommuneplan_4.addFeatures(features_kommuneplan_4);
var lyr_kommuneplan_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_kommuneplan_4, 
                style: style_kommuneplan_4,
                popuplayertitle: 'kommuneplan',
                interactive: false,
                title: '<img src="styles/legend/kommuneplan_4.png" /> kommuneplan'
            });
var format_Strandbeskyttelse_5 = new ol.format.GeoJSON();
var features_Strandbeskyttelse_5 = format_Strandbeskyttelse_5.readFeatures(json_Strandbeskyttelse_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Strandbeskyttelse_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Strandbeskyttelse_5.addFeatures(features_Strandbeskyttelse_5);
var lyr_Strandbeskyttelse_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Strandbeskyttelse_5, 
                style: style_Strandbeskyttelse_5,
                popuplayertitle: 'Strandbeskyttelse',
                interactive: false,
                title: '<img src="styles/legend/Strandbeskyttelse_5.png" /> Strandbeskyttelse'
            });
var format_Legepladser_6 = new ol.format.GeoJSON();
var features_Legepladser_6 = format_Legepladser_6.readFeatures(json_Legepladser_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Legepladser_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Legepladser_6.addFeatures(features_Legepladser_6);
var lyr_Legepladser_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Legepladser_6, 
                style: style_Legepladser_6,
                popuplayertitle: 'Legepladser',
                interactive: true,
                title: '<img src="styles/legend/Legepladser_6.png" /> Legepladser'
            });
var format_Cafeer_7 = new ol.format.GeoJSON();
var features_Cafeer_7 = format_Cafeer_7.readFeatures(json_Cafeer_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cafeer_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cafeer_7.addFeatures(features_Cafeer_7);
var lyr_Cafeer_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cafeer_7, 
                style: style_Cafeer_7,
                popuplayertitle: 'Cafeer',
                interactive: true,
                title: '<img src="styles/legend/Cafeer_7.png" /> Cafeer'
            });
var format_Togstationer_8 = new ol.format.GeoJSON();
var features_Togstationer_8 = format_Togstationer_8.readFeatures(json_Togstationer_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Togstationer_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Togstationer_8.addFeatures(features_Togstationer_8);
var lyr_Togstationer_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Togstationer_8, 
                style: style_Togstationer_8,
                popuplayertitle: 'Togstationer',
                interactive: true,
                title: '<img src="styles/legend/Togstationer_8.png" /> Togstationer'
            });
var format_Moskeer_9 = new ol.format.GeoJSON();
var features_Moskeer_9 = format_Moskeer_9.readFeatures(json_Moskeer_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Moskeer_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Moskeer_9.addFeatures(features_Moskeer_9);
var lyr_Moskeer_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Moskeer_9, 
                style: style_Moskeer_9,
                popuplayertitle: 'Moskeer',
                interactive: true,
                title: '<img src="styles/legend/Moskeer_9.png" /> Moskeer'
            });
var format_Folkeskoler_10 = new ol.format.GeoJSON();
var features_Folkeskoler_10 = format_Folkeskoler_10.readFeatures(json_Folkeskoler_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Folkeskoler_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Folkeskoler_10.addFeatures(features_Folkeskoler_10);
var lyr_Folkeskoler_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Folkeskoler_10, 
                style: style_Folkeskoler_10,
                popuplayertitle: 'Folkeskoler',
                interactive: true,
                title: '<img src="styles/legend/Folkeskoler_10.png" /> Folkeskoler'
            });
var format_Kirker_11 = new ol.format.GeoJSON();
var features_Kirker_11 = format_Kirker_11.readFeatures(json_Kirker_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Kirker_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Kirker_11.addFeatures(features_Kirker_11);
var lyr_Kirker_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Kirker_11, 
                style: style_Kirker_11,
                popuplayertitle: 'Kirker',
                interactive: true,
                title: '<img src="styles/legend/Kirker_11.png" /> Kirker'
            });
var format_Bagerier_12 = new ol.format.GeoJSON();
var features_Bagerier_12 = format_Bagerier_12.readFeatures(json_Bagerier_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Bagerier_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Bagerier_12.addFeatures(features_Bagerier_12);
var lyr_Bagerier_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Bagerier_12, 
                style: style_Bagerier_12,
                popuplayertitle: 'Bagerier',
                interactive: true,
                title: '<img src="styles/legend/Bagerier_12.png" /> Bagerier'
            });

lyr_Positronnolabels_0.setVisible(true);lyr_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1.setVisible(true);lyr_LokalplanForslagtiloleLokalplanForslag_2.setVisible(true);lyr_FrededeOmrder_3.setVisible(true);lyr_kommuneplan_4.setVisible(true);lyr_Strandbeskyttelse_5.setVisible(true);lyr_Legepladser_6.setVisible(true);lyr_Cafeer_7.setVisible(true);lyr_Togstationer_8.setVisible(true);lyr_Moskeer_9.setVisible(true);lyr_Folkeskoler_10.setVisible(true);lyr_Kirker_11.setVisible(true);lyr_Bagerier_12.setVisible(true);
var layersList = [lyr_Positronnolabels_0,lyr_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1,lyr_LokalplanForslagtiloleLokalplanForslag_2,lyr_FrededeOmrder_3,lyr_kommuneplan_4,lyr_Strandbeskyttelse_5,lyr_Legepladser_6,lyr_Cafeer_7,lyr_Togstationer_8,lyr_Moskeer_9,lyr_Folkeskoler_10,lyr_Kirker_11,lyr_Bagerier_12];
lyr_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1.set('fieldAliases', {});
lyr_LokalplanForslagtiloleLokalplanForslag_2.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'komnr': 'komnr', 'objektkode': 'objektkode', 'plantype': 'plantype', 'plannr': 'plannr', 'plannavn': 'plannavn', 'anvgen': 'anvgen', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datostart': 'datostart', 'datoslut': 'datoslut', 'datoattr': 'datoattr', 'datogeom': 'datogeom', 'doklink': 'doklink', 'distrikt': 'distrikt', 'zone': 'zone', 'bebygpct': 'bebygpct', 'bebygpctaf': 'bebygpctaf', 'bebygpctar': 'bebygpctar', 'm3_m2': 'm3_m2', 'maxetager': 'maxetager', 'maxbygnhjd': 'maxbygnhjd', 'minmiljo': 'minmiljo', 'maxmiljo': 'maxmiljo', 'bevarbest': 'bevarbest', 'bebyggrad': 'bebyggrad', 'mingrund': 'mingrund', 'dataprod': 'dataprod', 'digigrundl': 'digigrundl', 'digigrundd': 'digigrundd', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'anvendelse': 'anvendelse', 'kommunenav': 'kommunenav', 'zonestatus': 'zonestatus', 'planstatus': 'planstatus', 'megawatt': 'megawatt', 'vvmredeg': 'vvmredeg', 'sforhold': 'sforhold', 'minuds': 'minuds', 'eareal': 'eareal', 'earealh': 'earealh', 'm3_m2h': 'm3_m2h', 'ianvreg': 'ianvreg', 'izonereg': 'izonereg', 'iomfangreg': 'iomfangreg', 'iudstykreg': 'iudstykreg', 'kompleks': 'kompleks', 'kbeskriv': 'kbeskriv', 'vindbeskri': 'vindbeskri', 'udstykforb': 'udstykforb', 'statsplan': 'statsplan', 'sforaktuel': 'sforaktuel', 'maxboligen': 'maxboligen', 'udstykanta': 'udstykanta', 'maxuds': 'maxuds', 'udstykning': 'udstykning', 'bygpctarh': 'bygpctarh', 'bygm2': 'bygm2', 'bygm2h': 'bygm2h', 'fuldtbyg': 'fuldtbyg', 'bonusvirk': 'bonusvirk', 'bonustekst': 'bonustekst', 'anvspec1': 'anvspec1', 'bygpct1': 'bygpct1', 'bygpcth1': 'bygpcth1', 'eareal1': 'eareal1', 'earealh1': 'earealh1', 'm3_m21': 'm3_m21', 'm3_m2h1': 'm3_m2h1', 'maxbhjd1': 'maxbhjd1', 'maxetage1': 'maxetage1', 'bygpctar1': 'bygpctar1', 'bygpctarh1': 'bygpctarh1', 'bygm21': 'bygm21', 'bygm2h1': 'bygm2h1', 'minuds1': 'minuds1', 'udstykfb1': 'udstykfb1', 'fuldtbyg1': 'fuldtbyg1', 'plankap1': 'plankap1', 'plankapia1': 'plankapia1', 'forvprod1': 'forvprod1', 'forvprodia': 'forvprodia', 'maxbolig_1': 'maxbolig_1', 'udstykan_1': 'udstykan_1', 'maxuds1': 'maxuds1', 'antal1': 'antal1', 'datoudloeb': 'datoudloeb', 'fleksibel1': 'fleksibel1', 'anvspec2': 'anvspec2', 'bygpct2': 'bygpct2', 'bygpcth2': 'bygpcth2', 'eareal2': 'eareal2', 'earealh2': 'earealh2', 'm3_m22': 'm3_m22', 'm3_m2h2': 'm3_m2h2', 'maxbhjd2': 'maxbhjd2', 'maxetage2': 'maxetage2', 'bygpctar2': 'bygpctar2', 'bygpctarh2': 'bygpctarh2', 'bygm22': 'bygm22', 'bygm2h2': 'bygm2h2', 'minuds2': 'minuds2', 'udstykfb2': 'udstykfb2', 'fuldtbyg2': 'fuldtbyg2', 'plankap2': 'plankap2', 'plankapia2': 'plankapia2', 'forvprod2': 'forvprod2', 'forvprod_1': 'forvprod_1', 'maxbolig_2': 'maxbolig_2', 'udstykan_2': 'udstykan_2', 'maxuds2': 'maxuds2', 'antal2': 'antal2', 'datoudlo_1': 'datoudlo_1', 'fleksibel2': 'fleksibel2', 'anvspec3': 'anvspec3', 'bygpct3': 'bygpct3', 'bygpcth3': 'bygpcth3', 'eareal3': 'eareal3', 'earealh3': 'earealh3', 'm3_m23': 'm3_m23', 'm3_m2h3': 'm3_m2h3', 'maxbhjd3': 'maxbhjd3', 'maxetage3': 'maxetage3', 'bygpctar3': 'bygpctar3', 'bygpctarh3': 'bygpctarh3', 'bygm23': 'bygm23', 'bygm2h3': 'bygm2h3', 'minuds3': 'minuds3', 'udstykfb3': 'udstykfb3', 'fuldtbyg3': 'fuldtbyg3', 'plankap3': 'plankap3', 'plankapia3': 'plankapia3', 'forvprod3': 'forvprod3', 'forvprod_2': 'forvprod_2', 'maxbolig_3': 'maxbolig_3', 'udstykan_3': 'udstykan_3', 'maxuds3': 'maxuds3', 'antal3': 'antal3', 'datoudlo_2': 'datoudlo_2', 'fleksibel3': 'fleksibel3', 'anvspec4': 'anvspec4', 'bygpct4': 'bygpct4', 'bygpcth4': 'bygpcth4', 'eareal4': 'eareal4', 'earealh4': 'earealh4', 'm3_m24': 'm3_m24', 'm3_m2h4': 'm3_m2h4', 'maxbhjd4': 'maxbhjd4', 'maxetage4': 'maxetage4', 'bygpctar4': 'bygpctar4', 'bygpctarh4': 'bygpctarh4', 'bygm24': 'bygm24', 'bygm2h4': 'bygm2h4', 'minuds4': 'minuds4', 'udstykfb4': 'udstykfb4', 'fuldtbyg4': 'fuldtbyg4', 'plankap4': 'plankap4', 'plankapia4': 'plankapia4', 'forvprod4': 'forvprod4', 'forvprod_3': 'forvprod_3', 'maxbolig_4': 'maxbolig_4', 'udstykan_4': 'udstykan_4', 'maxuds4': 'maxuds4', 'antal4': 'antal4', 'datoudlo_3': 'datoudlo_3', 'fleksibel4': 'fleksibel4', 'anvspec5': 'anvspec5', 'bygpct5': 'bygpct5', 'bygpcth5': 'bygpcth5', 'eareal5': 'eareal5', 'earealh5': 'earealh5', 'm3_m25': 'm3_m25', 'm3_m2h5': 'm3_m2h5', 'maxbhjd5': 'maxbhjd5', 'maxetage5': 'maxetage5', 'bygpctar5': 'bygpctar5', 'bygpctarh5': 'bygpctarh5', 'bygm25': 'bygm25', 'bygm2h5': 'bygm2h5', 'minuds5': 'minuds5', 'udstykfb5': 'udstykfb5', 'fuldtbyg5': 'fuldtbyg5', 'plankap5': 'plankap5', 'plankapia5': 'plankapia5', 'forvprod5': 'forvprod5', 'forvprod_4': 'forvprod_4', 'maxbolig_5': 'maxbolig_5', 'udstykan_5': 'udstykan_5', 'maxuds5': 'maxuds5', 'antal5': 'antal5', 'datoudlo_4': 'datoudlo_4', 'fleksibel5': 'fleksibel5', 'anvspec6': 'anvspec6', 'bygpct6': 'bygpct6', 'bygpcth6': 'bygpcth6', 'eareal6': 'eareal6', 'earealh6': 'earealh6', 'm3_m26': 'm3_m26', 'm3_m2h6': 'm3_m2h6', 'maxbhjd6': 'maxbhjd6', 'maxetage6': 'maxetage6', 'bygpctar6': 'bygpctar6', 'bygpctarh6': 'bygpctarh6', 'bygm26': 'bygm26', 'bygm2h6': 'bygm2h6', 'minuds6': 'minuds6', 'udstykfb6': 'udstykfb6', 'fuldtbyg6': 'fuldtbyg6', 'plankap6': 'plankap6', 'plankapia6': 'plankapia6', 'forvprod6': 'forvprod6', 'forvprod_5': 'forvprod_5', 'maxbolig_6': 'maxbolig_6', 'udstykan_6': 'udstykan_6', 'maxuds6': 'maxuds6', 'antal6': 'antal6', 'datoudlo_5': 'datoudlo_5', 'fleksibel6': 'fleksibel6', 'anvspec7': 'anvspec7', 'bygpct7': 'bygpct7', 'bygpcth7': 'bygpcth7', 'eareal7': 'eareal7', 'earealh7': 'earealh7', 'm3_m27': 'm3_m27', 'm3_m2h7': 'm3_m2h7', 'maxbhjd7': 'maxbhjd7', 'maxetage7': 'maxetage7', 'bygpctar7': 'bygpctar7', 'bygpctarh7': 'bygpctarh7', 'bygm27': 'bygm27', 'bygm2h7': 'bygm2h7', 'minuds7': 'minuds7', 'udstykfb7': 'udstykfb7', 'fuldtbyg7': 'fuldtbyg7', 'plankap7': 'plankap7', 'plankapia7': 'plankapia7', 'forvprod7': 'forvprod7', 'forvprod_6': 'forvprod_6', 'maxbolig_7': 'maxbolig_7', 'udstykan_7': 'udstykan_7', 'maxuds7': 'maxuds7', 'antal7': 'antal7', 'datoudlo_6': 'datoudlo_6', 'fleksibel7': 'fleksibel7', 'anvspec8': 'anvspec8', 'bygpct8': 'bygpct8', 'bygpcth8': 'bygpcth8', 'eareal8': 'eareal8', 'earealh8': 'earealh8', 'm3_m28': 'm3_m28', 'm3_m2h8': 'm3_m2h8', 'maxbhjd8': 'maxbhjd8', 'maxetage8': 'maxetage8', 'bygpctar8': 'bygpctar8', 'bygpctarh8': 'bygpctarh8', 'bygm28': 'bygm28', 'bygm2h8': 'bygm2h8', 'minuds8': 'minuds8', 'udstykfb8': 'udstykfb8', 'fuldtbyg8': 'fuldtbyg8', 'plankap8': 'plankap8', 'plankapia8': 'plankapia8', 'forvprod8': 'forvprod8', 'forvprod_7': 'forvprod_7', 'maxbolig_8': 'maxbolig_8', 'udstykan_8': 'udstykan_8', 'maxuds8': 'maxuds8', 'antal8': 'antal8', 'datoudlo_7': 'datoudlo_7', 'fleksibel8': 'fleksibel8', 'anvspec9': 'anvspec9', 'bygpct9': 'bygpct9', 'bygpcth9': 'bygpcth9', 'eareal9': 'eareal9', 'earealh9': 'earealh9', 'm3_m29': 'm3_m29', 'm3_m2h9': 'm3_m2h9', 'maxbhjd9': 'maxbhjd9', 'maxetage9': 'maxetage9', 'bygpctar9': 'bygpctar9', 'bygpctarh9': 'bygpctarh9', 'bygm29': 'bygm29', 'bygm2h9': 'bygm2h9', 'minuds9': 'minuds9', 'udstykfb9': 'udstykfb9', 'fuldtbyg9': 'fuldtbyg9', 'plankap9': 'plankap9', 'plankapia9': 'plankapia9', 'forvprod9': 'forvprod9', 'forvprod_8': 'forvprod_8', 'maxbolig_9': 'maxbolig_9', 'udstykan_9': 'udstykan_9', 'maxuds9': 'maxuds9', 'antal9': 'antal9', 'datoudlo_8': 'datoudlo_8', 'fleksibel9': 'fleksibel9', 'anvspec10': 'anvspec10', 'bygpct10': 'bygpct10', 'bygpcth10': 'bygpcth10', 'eareal10': 'eareal10', 'earealh10': 'earealh10', 'm3_m210': 'm3_m210', 'm3_m2h10': 'm3_m2h10', 'maxbhjd10': 'maxbhjd10', 'maxetage10': 'maxetage10', 'bygpctar10': 'bygpctar10', 'bygpctar_1': 'bygpctar_1', 'bygm210': 'bygm210', 'bygm2h10': 'bygm2h10', 'minuds10': 'minuds10', 'udstykfb10': 'udstykfb10', 'fuldtbyg10': 'fuldtbyg10', 'plankap10': 'plankap10', 'plankapi_1': 'plankapi_1', 'forvprod10': 'forvprod10', 'forvprod_9': 'forvprod_9', 'maxbolig10': 'maxbolig10', 'udstykan10': 'udstykan10', 'maxuds10': 'maxuds10', 'antal10': 'antal10', 'datoudlo_9': 'datoudlo_9', 'fleksibe_1': 'fleksibe_1', 'abestem1': 'abestem1', 'abestem2': 'abestem2', 'abestem3': 'abestem3', });
lyr_FrededeOmrder_3.set('fieldAliases', {'fid': 'fid', 'Temakode': 'Temakode', 'Temanavn': 'Temanavn', 'Objekt_id': 'Objekt_id', 'Version_id': 'Version_id', 'Systid_fra': 'Systid_fra', 'Systid_til': 'Systid_til', 'Oprettet': 'Oprettet', 'Oprindkode': 'Oprindkode', 'Oprindelse': 'Oprindelse', 'Statuskode': 'Statuskode', 'Status': 'Status', 'Off_kode': 'Off_kode', 'Offentlig': 'Offentlig', 'CVR_kode': 'CVR_kode', 'CVR_navn': 'CVR_navn', 'Bruger_id': 'Bruger_id', 'Link': 'Link', 'Shape_area': 'Shape_area', 'Shape_leng': 'Shape_leng', 'Fred_tkode': 'Fred_tkode', 'Fred_tnavn': 'Fred_tnavn', 'Reg_nr': 'Reg_nr', 'Fred_navn': 'Fred_navn', 'Aendr_kode': 'Aendr_kode', 'Aendrbegr': 'Aendrbegr', 'Aar_fredn': 'Aar_fredn', 'Gyldig_fra': 'Gyldig_fra', 'Gyldig_til': 'Gyldig_til', });
lyr_kommuneplan_4.set('fieldAliases', {'fid': 'fid', 'oid': 'oid', 'id': 'id', 'planid': 'planid', 'objektkode': 'objektkode', 'komnr': 'komnr', 'plannavn': 'plannavn', 'doklink': 'doklink', 'datoforsl': 'datoforsl', 'datovedt': 'datovedt', 'datoaflyst': 'datoaflyst', 'datoikraft': 'datoikraft', 'datoslut': 'datoslut', 'aktuel': 'aktuel', 'datooprt': 'datooprt', 'datoopdt': 'datoopdt', 'status': 'status', 'datostart': 'datostart', 'glkomnr': 'glkomnr', 'kommunenavn': 'kommunenavn', 'glkomnavn': 'glkomnavn', 'glkomnavn_besk': 'glkomnavn_besk', });
lyr_Strandbeskyttelse_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'metadataproperty': 'metadataproperty', 'description_href': 'description_href', 'description_title': 'description_title', 'description_nilreason': 'description_nilreason', 'description': 'description', 'descriptionreference_href': 'descriptionreference_href', 'descriptionreference_title': 'descriptionreference_title', 'descriptionreference_nilreason': 'descriptionreference_nilreason', 'identifier_codespace': 'identifier_codespace', 'identifier': 'identifier', 'name': 'name', 'location_location': 'location_location', 'forretningshaendelse': 'forretningshaendelse', 'senestesaglokalid': 'senestesaglokalid', 'forretningsproces': 'forretningsproces', 'id.namespace': 'id.namespace', 'id.lokalid': 'id.lokalid', 'paataenkthandling': 'paataenkthandling', 'registreringfra': 'registreringfra', 'virkningfra': 'virkningfra', 'virkningsaktoer': 'virkningsaktoer', 'temafladeid': 'temafladeid', 'tematype': 'tematype', 'jordstykkelokalid': 'jordstykkelokalid', });
lyr_Legepladser_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Cafeer_7.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Togstationer_8.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Moskeer_9.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Folkeskoler_10.set('fieldAliases', {'Skolenavn': 'Skolenavn', 'Adresse': 'Adresse', 'By': 'By', 'Hjemmeside': 'Hjemmeside', 'result_num': 'result_num', 'osm_id': 'osm_id', 'display_na': 'display_na', 'category': 'category', 'type': 'type', 'latlong': 'latlong', });
lyr_Kirker_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_Bagerier_12.set('fieldAliases', {'id': 'id', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1.set('fieldImages', {});
lyr_LokalplanForslagtiloleLokalplanForslag_2.set('fieldImages', {'fid': '', 'oid': '', 'id': '', 'planid': '', 'komnr': '', 'objektkode': '', 'plantype': '', 'plannr': '', 'plannavn': '', 'anvgen': '', 'datoforsl': '', 'datovedt': '', 'datoaflyst': '', 'datoikraft': '', 'datostart': '', 'datoslut': '', 'datoattr': '', 'datogeom': '', 'doklink': '', 'distrikt': '', 'zone': '', 'bebygpct': '', 'bebygpctaf': '', 'bebygpctar': '', 'm3_m2': '', 'maxetager': '', 'maxbygnhjd': '', 'minmiljo': '', 'maxmiljo': '', 'bevarbest': '', 'bebyggrad': '', 'mingrund': '', 'dataprod': '', 'digigrundl': '', 'digigrundd': '', 'datooprt': '', 'datoopdt': '', 'anvendelse': '', 'kommunenav': '', 'zonestatus': '', 'planstatus': '', 'megawatt': '', 'vvmredeg': '', 'sforhold': '', 'minuds': '', 'eareal': '', 'earealh': '', 'm3_m2h': '', 'ianvreg': '', 'izonereg': '', 'iomfangreg': '', 'iudstykreg': '', 'kompleks': '', 'kbeskriv': '', 'vindbeskri': '', 'udstykforb': '', 'statsplan': '', 'sforaktuel': '', 'maxboligen': '', 'udstykanta': '', 'maxuds': '', 'udstykning': '', 'bygpctarh': '', 'bygm2': '', 'bygm2h': '', 'fuldtbyg': '', 'bonusvirk': '', 'bonustekst': '', 'anvspec1': '', 'bygpct1': '', 'bygpcth1': '', 'eareal1': '', 'earealh1': '', 'm3_m21': '', 'm3_m2h1': '', 'maxbhjd1': '', 'maxetage1': '', 'bygpctar1': '', 'bygpctarh1': '', 'bygm21': '', 'bygm2h1': '', 'minuds1': '', 'udstykfb1': '', 'fuldtbyg1': '', 'plankap1': '', 'plankapia1': '', 'forvprod1': '', 'forvprodia': '', 'maxbolig_1': '', 'udstykan_1': '', 'maxuds1': '', 'antal1': '', 'datoudloeb': '', 'fleksibel1': '', 'anvspec2': '', 'bygpct2': '', 'bygpcth2': '', 'eareal2': '', 'earealh2': '', 'm3_m22': '', 'm3_m2h2': '', 'maxbhjd2': '', 'maxetage2': '', 'bygpctar2': '', 'bygpctarh2': '', 'bygm22': '', 'bygm2h2': '', 'minuds2': '', 'udstykfb2': '', 'fuldtbyg2': '', 'plankap2': '', 'plankapia2': '', 'forvprod2': '', 'forvprod_1': '', 'maxbolig_2': '', 'udstykan_2': '', 'maxuds2': '', 'antal2': '', 'datoudlo_1': '', 'fleksibel2': '', 'anvspec3': '', 'bygpct3': '', 'bygpcth3': '', 'eareal3': '', 'earealh3': '', 'm3_m23': '', 'm3_m2h3': '', 'maxbhjd3': '', 'maxetage3': '', 'bygpctar3': '', 'bygpctarh3': '', 'bygm23': '', 'bygm2h3': '', 'minuds3': '', 'udstykfb3': '', 'fuldtbyg3': '', 'plankap3': '', 'plankapia3': '', 'forvprod3': '', 'forvprod_2': '', 'maxbolig_3': '', 'udstykan_3': '', 'maxuds3': '', 'antal3': '', 'datoudlo_2': '', 'fleksibel3': '', 'anvspec4': '', 'bygpct4': '', 'bygpcth4': '', 'eareal4': '', 'earealh4': '', 'm3_m24': '', 'm3_m2h4': '', 'maxbhjd4': '', 'maxetage4': '', 'bygpctar4': '', 'bygpctarh4': '', 'bygm24': '', 'bygm2h4': '', 'minuds4': '', 'udstykfb4': '', 'fuldtbyg4': '', 'plankap4': '', 'plankapia4': '', 'forvprod4': '', 'forvprod_3': '', 'maxbolig_4': '', 'udstykan_4': '', 'maxuds4': '', 'antal4': '', 'datoudlo_3': '', 'fleksibel4': '', 'anvspec5': '', 'bygpct5': '', 'bygpcth5': '', 'eareal5': '', 'earealh5': '', 'm3_m25': '', 'm3_m2h5': '', 'maxbhjd5': '', 'maxetage5': '', 'bygpctar5': '', 'bygpctarh5': '', 'bygm25': '', 'bygm2h5': '', 'minuds5': '', 'udstykfb5': '', 'fuldtbyg5': '', 'plankap5': '', 'plankapia5': '', 'forvprod5': '', 'forvprod_4': '', 'maxbolig_5': '', 'udstykan_5': '', 'maxuds5': '', 'antal5': '', 'datoudlo_4': '', 'fleksibel5': '', 'anvspec6': '', 'bygpct6': '', 'bygpcth6': '', 'eareal6': '', 'earealh6': '', 'm3_m26': '', 'm3_m2h6': '', 'maxbhjd6': '', 'maxetage6': '', 'bygpctar6': '', 'bygpctarh6': '', 'bygm26': '', 'bygm2h6': '', 'minuds6': '', 'udstykfb6': '', 'fuldtbyg6': '', 'plankap6': '', 'plankapia6': '', 'forvprod6': '', 'forvprod_5': '', 'maxbolig_6': '', 'udstykan_6': '', 'maxuds6': '', 'antal6': '', 'datoudlo_5': '', 'fleksibel6': '', 'anvspec7': '', 'bygpct7': '', 'bygpcth7': '', 'eareal7': '', 'earealh7': '', 'm3_m27': '', 'm3_m2h7': '', 'maxbhjd7': '', 'maxetage7': '', 'bygpctar7': '', 'bygpctarh7': '', 'bygm27': '', 'bygm2h7': '', 'minuds7': '', 'udstykfb7': '', 'fuldtbyg7': '', 'plankap7': '', 'plankapia7': '', 'forvprod7': '', 'forvprod_6': '', 'maxbolig_7': '', 'udstykan_7': '', 'maxuds7': '', 'antal7': '', 'datoudlo_6': '', 'fleksibel7': '', 'anvspec8': '', 'bygpct8': '', 'bygpcth8': '', 'eareal8': '', 'earealh8': '', 'm3_m28': '', 'm3_m2h8': '', 'maxbhjd8': '', 'maxetage8': '', 'bygpctar8': '', 'bygpctarh8': '', 'bygm28': '', 'bygm2h8': '', 'minuds8': '', 'udstykfb8': '', 'fuldtbyg8': '', 'plankap8': '', 'plankapia8': '', 'forvprod8': '', 'forvprod_7': '', 'maxbolig_8': '', 'udstykan_8': '', 'maxuds8': '', 'antal8': '', 'datoudlo_7': '', 'fleksibel8': '', 'anvspec9': '', 'bygpct9': '', 'bygpcth9': '', 'eareal9': '', 'earealh9': '', 'm3_m29': '', 'm3_m2h9': '', 'maxbhjd9': '', 'maxetage9': '', 'bygpctar9': '', 'bygpctarh9': '', 'bygm29': '', 'bygm2h9': '', 'minuds9': '', 'udstykfb9': '', 'fuldtbyg9': '', 'plankap9': '', 'plankapia9': '', 'forvprod9': '', 'forvprod_8': '', 'maxbolig_9': '', 'udstykan_9': '', 'maxuds9': '', 'antal9': '', 'datoudlo_8': '', 'fleksibel9': '', 'anvspec10': '', 'bygpct10': '', 'bygpcth10': '', 'eareal10': '', 'earealh10': '', 'm3_m210': '', 'm3_m2h10': '', 'maxbhjd10': '', 'maxetage10': '', 'bygpctar10': '', 'bygpctar_1': '', 'bygm210': '', 'bygm2h10': '', 'minuds10': '', 'udstykfb10': '', 'fuldtbyg10': '', 'plankap10': '', 'plankapi_1': '', 'forvprod10': '', 'forvprod_9': '', 'maxbolig10': '', 'udstykan10': '', 'maxuds10': '', 'antal10': '', 'datoudlo_9': '', 'fleksibe_1': '', 'abestem1': '', 'abestem2': '', 'abestem3': '', });
lyr_FrededeOmrder_3.set('fieldImages', {'fid': 'TextEdit', 'Temakode': 'TextEdit', 'Temanavn': 'TextEdit', 'Objekt_id': 'TextEdit', 'Version_id': 'TextEdit', 'Systid_fra': 'TextEdit', 'Systid_til': 'TextEdit', 'Oprettet': 'TextEdit', 'Oprindkode': 'TextEdit', 'Oprindelse': 'TextEdit', 'Statuskode': 'TextEdit', 'Status': 'TextEdit', 'Off_kode': 'TextEdit', 'Offentlig': 'TextEdit', 'CVR_kode': 'TextEdit', 'CVR_navn': 'TextEdit', 'Bruger_id': 'TextEdit', 'Link': 'TextEdit', 'Shape_area': 'TextEdit', 'Shape_leng': 'TextEdit', 'Fred_tkode': 'TextEdit', 'Fred_tnavn': 'TextEdit', 'Reg_nr': 'TextEdit', 'Fred_navn': 'TextEdit', 'Aendr_kode': 'TextEdit', 'Aendrbegr': 'TextEdit', 'Aar_fredn': 'TextEdit', 'Gyldig_fra': 'TextEdit', 'Gyldig_til': 'TextEdit', });
lyr_kommuneplan_4.set('fieldImages', {'fid': 'Hidden', 'oid': 'Hidden', 'id': 'Hidden', 'planid': 'Hidden', 'objektkode': 'Hidden', 'komnr': 'Hidden', 'plannavn': 'TextEdit', 'doklink': 'TextEdit', 'datoforsl': 'Hidden', 'datovedt': 'Hidden', 'datoaflyst': 'Hidden', 'datoikraft': 'Hidden', 'datoslut': 'Hidden', 'aktuel': 'Hidden', 'datooprt': 'Hidden', 'datoopdt': 'Hidden', 'status': 'Hidden', 'datostart': 'Hidden', 'glkomnr': 'Hidden', 'kommunenavn': 'Hidden', 'glkomnavn': 'Hidden', 'glkomnavn_besk': 'Hidden', });
lyr_Strandbeskyttelse_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'metadataproperty': 'TextEdit', 'description_href': 'TextEdit', 'description_title': 'TextEdit', 'description_nilreason': 'TextEdit', 'description': 'TextEdit', 'descriptionreference_href': 'TextEdit', 'descriptionreference_title': 'TextEdit', 'descriptionreference_nilreason': 'TextEdit', 'identifier_codespace': 'TextEdit', 'identifier': 'TextEdit', 'name': 'TextEdit', 'location_location': 'TextEdit', 'forretningshaendelse': 'TextEdit', 'senestesaglokalid': 'TextEdit', 'forretningsproces': 'TextEdit', 'id.namespace': 'TextEdit', 'id.lokalid': 'TextEdit', 'paataenkthandling': 'TextEdit', 'registreringfra': 'DateTime', 'virkningfra': 'DateTime', 'virkningsaktoer': 'TextEdit', 'temafladeid': 'TextEdit', 'tematype': 'TextEdit', 'jordstykkelokalid': 'TextEdit', });
lyr_Legepladser_6.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Cafeer_7.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Togstationer_8.set('fieldImages', {'id': 'Hidden', 'Name': 'TextEdit', 'description': 'Hidden', 'timestamp': 'Hidden', 'begin': 'Hidden', 'end': 'Hidden', 'altitudeMode': 'Hidden', 'tessellate': 'Hidden', 'extrude': 'Hidden', 'visibility': 'Hidden', 'drawOrder': 'Hidden', 'icon': 'Hidden', });
lyr_Moskeer_9.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Folkeskoler_10.set('fieldImages', {'Skolenavn': 'TextEdit', 'Adresse': 'TextEdit', 'By': 'TextEdit', 'Hjemmeside': 'TextEdit', 'result_num': 'TextEdit', 'osm_id': 'TextEdit', 'display_na': 'TextEdit', 'category': 'TextEdit', 'type': 'TextEdit', 'latlong': 'TextEdit', });
lyr_Kirker_11.set('fieldImages', {'fid': '', 'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_Bagerier_12.set('fieldImages', {'id': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_HvidovreLokalplanervedtagettheme_pdk_lokalplan_vedtaget_v_1.set('fieldLabels', {});
lyr_LokalplanForslagtiloleLokalplanForslag_2.set('fieldLabels', {'fid': 'no label', 'oid': 'no label', 'id': 'no label', 'planid': 'no label', 'komnr': 'no label', 'objektkode': 'no label', 'plantype': 'no label', 'plannr': 'no label', 'plannavn': 'no label', 'anvgen': 'no label', 'datoforsl': 'no label', 'datovedt': 'no label', 'datoaflyst': 'no label', 'datoikraft': 'no label', 'datostart': 'no label', 'datoslut': 'no label', 'datoattr': 'no label', 'datogeom': 'no label', 'doklink': 'no label', 'distrikt': 'no label', 'zone': 'no label', 'bebygpct': 'no label', 'bebygpctaf': 'no label', 'bebygpctar': 'no label', 'm3_m2': 'no label', 'maxetager': 'no label', 'maxbygnhjd': 'no label', 'minmiljo': 'no label', 'maxmiljo': 'no label', 'bevarbest': 'no label', 'bebyggrad': 'no label', 'mingrund': 'no label', 'dataprod': 'no label', 'digigrundl': 'no label', 'digigrundd': 'no label', 'datooprt': 'no label', 'datoopdt': 'no label', 'anvendelse': 'no label', 'kommunenav': 'no label', 'zonestatus': 'no label', 'planstatus': 'no label', 'megawatt': 'no label', 'vvmredeg': 'no label', 'sforhold': 'no label', 'minuds': 'no label', 'eareal': 'no label', 'earealh': 'no label', 'm3_m2h': 'no label', 'ianvreg': 'no label', 'izonereg': 'no label', 'iomfangreg': 'no label', 'iudstykreg': 'no label', 'kompleks': 'no label', 'kbeskriv': 'no label', 'vindbeskri': 'no label', 'udstykforb': 'no label', 'statsplan': 'no label', 'sforaktuel': 'no label', 'maxboligen': 'no label', 'udstykanta': 'no label', 'maxuds': 'no label', 'udstykning': 'no label', 'bygpctarh': 'no label', 'bygm2': 'no label', 'bygm2h': 'no label', 'fuldtbyg': 'no label', 'bonusvirk': 'no label', 'bonustekst': 'no label', 'anvspec1': 'no label', 'bygpct1': 'no label', 'bygpcth1': 'no label', 'eareal1': 'no label', 'earealh1': 'no label', 'm3_m21': 'no label', 'm3_m2h1': 'no label', 'maxbhjd1': 'no label', 'maxetage1': 'no label', 'bygpctar1': 'no label', 'bygpctarh1': 'no label', 'bygm21': 'no label', 'bygm2h1': 'no label', 'minuds1': 'no label', 'udstykfb1': 'no label', 'fuldtbyg1': 'no label', 'plankap1': 'no label', 'plankapia1': 'no label', 'forvprod1': 'no label', 'forvprodia': 'no label', 'maxbolig_1': 'no label', 'udstykan_1': 'no label', 'maxuds1': 'no label', 'antal1': 'no label', 'datoudloeb': 'no label', 'fleksibel1': 'no label', 'anvspec2': 'no label', 'bygpct2': 'no label', 'bygpcth2': 'no label', 'eareal2': 'no label', 'earealh2': 'no label', 'm3_m22': 'no label', 'm3_m2h2': 'no label', 'maxbhjd2': 'no label', 'maxetage2': 'no label', 'bygpctar2': 'no label', 'bygpctarh2': 'no label', 'bygm22': 'no label', 'bygm2h2': 'no label', 'minuds2': 'no label', 'udstykfb2': 'no label', 'fuldtbyg2': 'no label', 'plankap2': 'no label', 'plankapia2': 'no label', 'forvprod2': 'no label', 'forvprod_1': 'no label', 'maxbolig_2': 'no label', 'udstykan_2': 'no label', 'maxuds2': 'no label', 'antal2': 'no label', 'datoudlo_1': 'no label', 'fleksibel2': 'no label', 'anvspec3': 'no label', 'bygpct3': 'no label', 'bygpcth3': 'no label', 'eareal3': 'no label', 'earealh3': 'no label', 'm3_m23': 'no label', 'm3_m2h3': 'no label', 'maxbhjd3': 'no label', 'maxetage3': 'no label', 'bygpctar3': 'no label', 'bygpctarh3': 'no label', 'bygm23': 'no label', 'bygm2h3': 'no label', 'minuds3': 'no label', 'udstykfb3': 'no label', 'fuldtbyg3': 'no label', 'plankap3': 'no label', 'plankapia3': 'no label', 'forvprod3': 'no label', 'forvprod_2': 'no label', 'maxbolig_3': 'no label', 'udstykan_3': 'no label', 'maxuds3': 'no label', 'antal3': 'no label', 'datoudlo_2': 'no label', 'fleksibel3': 'no label', 'anvspec4': 'no label', 'bygpct4': 'no label', 'bygpcth4': 'no label', 'eareal4': 'no label', 'earealh4': 'no label', 'm3_m24': 'no label', 'm3_m2h4': 'no label', 'maxbhjd4': 'no label', 'maxetage4': 'no label', 'bygpctar4': 'no label', 'bygpctarh4': 'no label', 'bygm24': 'no label', 'bygm2h4': 'no label', 'minuds4': 'no label', 'udstykfb4': 'no label', 'fuldtbyg4': 'no label', 'plankap4': 'no label', 'plankapia4': 'no label', 'forvprod4': 'no label', 'forvprod_3': 'no label', 'maxbolig_4': 'no label', 'udstykan_4': 'no label', 'maxuds4': 'no label', 'antal4': 'no label', 'datoudlo_3': 'no label', 'fleksibel4': 'no label', 'anvspec5': 'no label', 'bygpct5': 'no label', 'bygpcth5': 'no label', 'eareal5': 'no label', 'earealh5': 'no label', 'm3_m25': 'no label', 'm3_m2h5': 'no label', 'maxbhjd5': 'no label', 'maxetage5': 'no label', 'bygpctar5': 'no label', 'bygpctarh5': 'no label', 'bygm25': 'no label', 'bygm2h5': 'no label', 'minuds5': 'no label', 'udstykfb5': 'no label', 'fuldtbyg5': 'no label', 'plankap5': 'no label', 'plankapia5': 'no label', 'forvprod5': 'no label', 'forvprod_4': 'no label', 'maxbolig_5': 'no label', 'udstykan_5': 'no label', 'maxuds5': 'no label', 'antal5': 'no label', 'datoudlo_4': 'no label', 'fleksibel5': 'no label', 'anvspec6': 'no label', 'bygpct6': 'no label', 'bygpcth6': 'no label', 'eareal6': 'no label', 'earealh6': 'no label', 'm3_m26': 'no label', 'm3_m2h6': 'no label', 'maxbhjd6': 'no label', 'maxetage6': 'no label', 'bygpctar6': 'no label', 'bygpctarh6': 'no label', 'bygm26': 'no label', 'bygm2h6': 'no label', 'minuds6': 'no label', 'udstykfb6': 'no label', 'fuldtbyg6': 'no label', 'plankap6': 'no label', 'plankapia6': 'no label', 'forvprod6': 'no label', 'forvprod_5': 'no label', 'maxbolig_6': 'no label', 'udstykan_6': 'no label', 'maxuds6': 'no label', 'antal6': 'no label', 'datoudlo_5': 'no label', 'fleksibel6': 'no label', 'anvspec7': 'no label', 'bygpct7': 'no label', 'bygpcth7': 'no label', 'eareal7': 'no label', 'earealh7': 'no label', 'm3_m27': 'no label', 'm3_m2h7': 'no label', 'maxbhjd7': 'no label', 'maxetage7': 'no label', 'bygpctar7': 'no label', 'bygpctarh7': 'no label', 'bygm27': 'no label', 'bygm2h7': 'no label', 'minuds7': 'no label', 'udstykfb7': 'no label', 'fuldtbyg7': 'no label', 'plankap7': 'no label', 'plankapia7': 'no label', 'forvprod7': 'no label', 'forvprod_6': 'no label', 'maxbolig_7': 'no label', 'udstykan_7': 'no label', 'maxuds7': 'no label', 'antal7': 'no label', 'datoudlo_6': 'no label', 'fleksibel7': 'no label', 'anvspec8': 'no label', 'bygpct8': 'no label', 'bygpcth8': 'no label', 'eareal8': 'no label', 'earealh8': 'no label', 'm3_m28': 'no label', 'm3_m2h8': 'no label', 'maxbhjd8': 'no label', 'maxetage8': 'no label', 'bygpctar8': 'no label', 'bygpctarh8': 'no label', 'bygm28': 'no label', 'bygm2h8': 'no label', 'minuds8': 'no label', 'udstykfb8': 'no label', 'fuldtbyg8': 'no label', 'plankap8': 'no label', 'plankapia8': 'no label', 'forvprod8': 'no label', 'forvprod_7': 'no label', 'maxbolig_8': 'no label', 'udstykan_8': 'no label', 'maxuds8': 'no label', 'antal8': 'no label', 'datoudlo_7': 'no label', 'fleksibel8': 'no label', 'anvspec9': 'no label', 'bygpct9': 'no label', 'bygpcth9': 'no label', 'eareal9': 'no label', 'earealh9': 'no label', 'm3_m29': 'no label', 'm3_m2h9': 'no label', 'maxbhjd9': 'no label', 'maxetage9': 'no label', 'bygpctar9': 'no label', 'bygpctarh9': 'no label', 'bygm29': 'no label', 'bygm2h9': 'no label', 'minuds9': 'no label', 'udstykfb9': 'no label', 'fuldtbyg9': 'no label', 'plankap9': 'no label', 'plankapia9': 'no label', 'forvprod9': 'no label', 'forvprod_8': 'no label', 'maxbolig_9': 'no label', 'udstykan_9': 'no label', 'maxuds9': 'no label', 'antal9': 'no label', 'datoudlo_8': 'no label', 'fleksibel9': 'no label', 'anvspec10': 'no label', 'bygpct10': 'no label', 'bygpcth10': 'no label', 'eareal10': 'no label', 'earealh10': 'no label', 'm3_m210': 'no label', 'm3_m2h10': 'no label', 'maxbhjd10': 'no label', 'maxetage10': 'no label', 'bygpctar10': 'no label', 'bygpctar_1': 'no label', 'bygm210': 'no label', 'bygm2h10': 'no label', 'minuds10': 'no label', 'udstykfb10': 'no label', 'fuldtbyg10': 'no label', 'plankap10': 'no label', 'plankapi_1': 'no label', 'forvprod10': 'no label', 'forvprod_9': 'no label', 'maxbolig10': 'no label', 'udstykan10': 'no label', 'maxuds10': 'no label', 'antal10': 'no label', 'datoudlo_9': 'no label', 'fleksibe_1': 'no label', 'abestem1': 'no label', 'abestem2': 'no label', 'abestem3': 'no label', });
lyr_FrededeOmrder_3.set('fieldLabels', {'fid': 'no label', 'Temakode': 'no label', 'Temanavn': 'no label', 'Objekt_id': 'no label', 'Version_id': 'no label', 'Systid_fra': 'no label', 'Systid_til': 'no label', 'Oprettet': 'no label', 'Oprindkode': 'no label', 'Oprindelse': 'no label', 'Statuskode': 'no label', 'Status': 'no label', 'Off_kode': 'no label', 'Offentlig': 'no label', 'CVR_kode': 'no label', 'CVR_navn': 'no label', 'Bruger_id': 'no label', 'Link': 'no label', 'Shape_area': 'no label', 'Shape_leng': 'no label', 'Fred_tkode': 'no label', 'Fred_tnavn': 'no label', 'Reg_nr': 'no label', 'Fred_navn': 'no label', 'Aendr_kode': 'no label', 'Aendrbegr': 'no label', 'Aar_fredn': 'no label', 'Gyldig_fra': 'no label', 'Gyldig_til': 'no label', });
lyr_kommuneplan_4.set('fieldLabels', {'plannavn': 'inline label - always visible', 'doklink': 'inline label - always visible', });
lyr_Strandbeskyttelse_5.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'metadataproperty': 'no label', 'description_href': 'no label', 'description_title': 'no label', 'description_nilreason': 'no label', 'description': 'no label', 'descriptionreference_href': 'no label', 'descriptionreference_title': 'no label', 'descriptionreference_nilreason': 'no label', 'identifier_codespace': 'no label', 'identifier': 'no label', 'name': 'no label', 'location_location': 'no label', 'forretningshaendelse': 'no label', 'senestesaglokalid': 'no label', 'forretningsproces': 'no label', 'id.namespace': 'no label', 'id.lokalid': 'no label', 'paataenkthandling': 'no label', 'registreringfra': 'no label', 'virkningfra': 'no label', 'virkningsaktoer': 'no label', 'temafladeid': 'no label', 'tematype': 'no label', 'jordstykkelokalid': 'no label', });
lyr_Legepladser_6.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Cafeer_7.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Togstationer_8.set('fieldLabels', {'Name': 'no label', });
lyr_Moskeer_9.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Folkeskoler_10.set('fieldLabels', {'Skolenavn': 'no label', 'Adresse': 'no label', 'By': 'no label', 'Hjemmeside': 'no label', 'result_num': 'no label', 'osm_id': 'no label', 'display_na': 'no label', 'category': 'no label', 'type': 'no label', 'latlong': 'no label', });
lyr_Kirker_11.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bagerier_12.set('fieldLabels', {'id': 'no label', 'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_Bagerier_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});