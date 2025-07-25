// Dados dos produtos
const productsData = [
    {
        "id": 192,
        "name": "WHISKY BALLANTINES 12 ANOS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_ballantines_12_anos_1l.png"
    },
    {
        "id": 191,
        "name": "WHISKY BALLANTINES FINEST 8 ANOS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_ballantines_finest_8_anos_1l.png"
    },
    {
        "id": 762,
        "name": "MUÇARELA BONÍSSIMO 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-bonissimo-4kg.png"
    },
    {
        "id": 499,
        "name": "PICANHA SUÍNA CONGELADA FRIMESA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Picanha Suína",
        "image": "src_produtos/images/picanha_suina_frimesa_1kg.png"
    },
    {
        "id": 195,
        "name": "WHISKY BELL´S 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_bells_700ml.png"
    },
    {
        "id": 178,
        "name": "WHISKY BUCHANAN´S 12 ANOS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_buchanans_12_anos_1l.png"
    },
    {
        "id": 234,
        "name": "CACHAÇA ANÍSIO SANTIAGO HAVANA 600 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_anisio_santiago_havana_600ml.png"
    },
    {
        "id": 236,
        "name": "CACHAÇA LUA CHEIA 670 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_lua_cheia_envelhecida_670ml.png"
    },
    {
        "id": 237,
        "name": "CACHAÇA SALINAS ARARIBÁ 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_salinas_arariba_700ml.png"
    },
    {
        "id": 227,
        "name": "CACHAÇA DA TULHA OURO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_da_tulha_ouro_700ml.png"
    },
    {
        "id": 239,
        "name": "CACHAÇA ESPÍRITO DE MINAS TRADICIONAL 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_espirito_de_minas_670ml.png"
    },
    {
        "id": 229,
        "name": "CACHAÇA MAGNÍFICA TRADICIONAL IPÊ 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_magnifica_tradicional_ipe_700ml.png"
    },
    {
        "id": 240,
        "name": "CACHAÇA PRINCESA ISABEL CARVALHO 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_princesa_isabel_ouro_750ml.png"
    },
    {
        "id": 232,
        "name": "CACHAÇA SANTO GRAU ITIRAPUÃ 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_santo_grau_itirapua_750ml.png"
    },
    {
        "id": 228,
        "name": "CACHAÇA SAPUCAIA VELHA CARVALHO 5 ANOS 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_sapucaia_velha_750ml.png"
    },
    {
        "id": 226,
        "name": "CACHAÇA VALE VERDE EXTRA PREMIUM 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cachaça",
        "image": "src_produtos/images/cachaca_vale_verde_700ml.png"
    },
    {
        "id": 274,
        "name": "CERVEJA AMSTEL PURO MALTE LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_amstel_puro_malte_lata_350_ml.png"
    },
    {
        "id": 269,
        "name": "CERVEJA BADEN BADEN PILSEN CRISTAL 600 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_baden_baden_pilsen_cristal_600_ml.png"
    },
    {
        "id": 265,
        "name": "CERVEJA BRAHMA CHOPP PILSEN LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_brahma_chopp_pilsen_lata_350_ml.png"
    },
    {
        "id": 283,
        "name": "CERVEJA BRAHMA DUPLO MALTE LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_brahma_duplo_malte_lata_350_ml.png"
    },
    {
        "id": 275,
        "name": "CERVEJA BRAHMA MALZBIER LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_brahma_malzbier_lata_350_ml.png"
    },
    {
        "id": 291,
        "name": "CERVEJA PEQUENA BRAHMA DUPLO MALTE LATA 269 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_pequena_brahma_duplo_malte_lata_269_ml.png"
    },
    {
        "id": 270,
        "name": "CERVEJA BUDWEISER LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_budweiser_lata_350_ml.png"
    },
    {
        "id": 271,
        "name": "CERVEJA BUDWEISER LONG NECK 330 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_budweiser_long_neck_330_ml.png"
    },
    {
        "id": 280,
        "name": "CERVEJA PEQUENA BUDWEISER LATA 269 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_pequena_budweiser_lata_269_ml.png"
    },
    {
        "id": 276,
        "name": "CERVEJA CORONA LONG NECK 330 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_corona_long_neck_330_ml.png"
    },
    {
        "id": 277,
        "name": "CERVEJA EISENBAHN PILSEN PURO MALTE LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_eisenbahn_pilsen_puro_malte_lata_350_ml.png"
    },
    {
        "id": 273,
        "name": "CERVEJA HEINEKEN PURE MALT LAGER GARRAFA 600 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_heineken_pure_malt_lager_garrafa_600_ml.png"
    },
    {
        "id": 268,
        "name": "CERVEJA HEINEKEN PURE MALT LAGER LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_heineken_pure_malt_lager_lata_350_ml.png"
    },
    {
        "id": 272,
        "name": "CERVEJA HEINEKEN PURE MALT LAGER LONG NECK 330 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_heineken_pure_malt_lager_long_neck_330_ml.png"
    },
    {
        "id": 288,
        "name": "CERVEJA PEQUENA HEINEKEN PURE MALT LAGER LATA 269 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_pequena_heineken_pure_malt_lager_lata_269_ml.png"
    },
    {
        "id": 287,
        "name": "CERVEJA HEINEKEN ZERO ÁLCOOL 0.0 PURE MALT LAGER LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_heineken_zero_alcool_00_pure_malt_lager_lata_350_ml.png"
    },
    {
        "id": 285,
        "name": "CERVEJA HEINEKEN ZERO ÁLCOOL 0.0 PURE MALT LAGER LONG NECK 330 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_heineken_zero_alcool_00_pure_malt_lager_long_neck_330_ml.png"
    },
    {
        "id": 279,
        "name": "CERVEJA IMPÉRIO PURO MALTE LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_imperio_puro_malte_lata_350_ml.png"
    },
    {
        "id": 284,
        "name": "CERVEJA ITAIPAVA MALZBIER LONG NECK 330 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_itaipava_malzbier_long_neck_330_ml.png"
    },
    {
        "id": 267,
        "name": "CERVEJA ITAIPAVA PILSEN LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_itaipava_pilsen_lata_350_ml.png"
    },
    {
        "id": 264,
        "name": "CERVEJA MÉDIA SKOL PILSEN LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_media_skol_pilsen_lata_350_ml.png"
    },
    {
        "id": 266,
        "name": "CERVEJA PEQUENA SKOL PILSEN LATA 269 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_pequena_skol_pilsen_lata_269_ml.png"
    },
    {
        "id": 278,
        "name": "CERVEJA ORIGINAL PILSEN GARRAFA 600 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_original_pilsen_garrafa_600_ml.png"
    },
    {
        "id": 281,
        "name": "CERVEJA ORIGINAL PILSEN LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_original_pilsen_lata_350_ml.png"
    },
    {
        "id": 289,
        "name": "CERVEJA PEQUENA ORIGINAL LATA 269 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_pequena_original_lata_269_ml.png"
    },
    {
        "id": 282,
        "name": "CERVEJA PETRA PURO MALTE LATA 350 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_petra_puro_malte_lata_350_ml.png"
    },
    {
        "id": 290,
        "name": "CERVEJA SPATEN MUNICH GARRAFA 600 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_spaten_munich_garrafa_600_ml.png"
    },
    {
        "id": 292,
        "name": "CERVEJA SPATEN MUNICH LONG NECK 330 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_spaten_munich_long_neck_330_ml.png"
    },
    {
        "id": 286,
        "name": "CERVEJA STELLA ARTOIS LONG NECK 330 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Cervejas",
        "image": "src_produtos/images/cerveja_stella_artois_long_neck_330_ml.png"
    },
    {
        "id": 245,
        "name": "CONHAQUE DE ALCATRÃO SÃO JOÃO DA BARRA 900 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Conhaque",
        "image": "src_produtos/images/conhaque_sao_joao.png"
    },
    {
        "id": 243,
        "name": "CONHAQUE DOMECQ 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Conhaque",
        "image": "src_produtos/images/conhaque_domecq.png"
    },
    {
        "id": 244,
        "name": "CONHAQUE DREHER 900 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Conhaque",
        "image": "src_produtos/images/conhaque_dreher.png"
    },
    {
        "id": 246,
        "name": "CONHAQUE FUNDADOR 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Conhaque",
        "image": "src_produtos/images/conhaque_fundador.png"
    },
    {
        "id": 247,
        "name": "CONHAQUE PRESIDENTE 900 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Conhaque",
        "image": "src_produtos/images/conhaque_presidente.png"
    },
    {
        "id": 302,
        "name": "MONSTER ENERGY ORIGINAL 473 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/monster_energy_original_473_ml.png"
    },
    {
        "id": 303,
        "name": "MONSTER ENERGY SEM AÇÚCAR 473 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/monster_energy_sem_acucar_473_ml.png"
    },
    {
        "id": 307,
        "name": "MONSTER MANGO LOCO 473 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/monster_mango_loco_473_ml.png"
    },
    {
        "id": 304,
        "name": "MONSTER ULTRA BRANCO 473 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/monster_ultra_branco_473_ml.png"
    },
    {
        "id": 306,
        "name": "MONSTER ULTRA MELANCIA 473 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/monster_ultra_melancia_473_ml.png"
    },
    {
        "id": 305,
        "name": "MONSTER ULTRA VIOLETA 473 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/monster_ultra_violeta_473_ml.png"
    },
    {
        "id": 298,
        "name": "RED BULL EDIÇÃO COCO (COCONUT EDITION) 250 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/red_bull_edicao_coco_250_ml.png"
    },
    {
        "id": 301,
        "name": "RED BULL EDIÇÃO FRUTAS SILVESTRES (BLUE EDITION) 250 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/red_bull_edicao_frutas_silvestres_250_ml.png"
    },
    {
        "id": 297,
        "name": "RED BULL EDIÇÃO MELANCIA (RED EDITION) 250 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/red_bull_edicao_melancia_250_ml.png"
    },
    {
        "id": 299,
        "name": "RED BULL EDIÇÃO PITAYA (PINK EDITION) 250 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/red_bull_edicao_pitaya_250_ml.png"
    },
    {
        "id": 295,
        "name": "RED BULL EDIÇÃO TROPICAL 250 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/red_bull_edicao_tropical_250_ml.png"
    },
    {
        "id": 293,
        "name": "RED BULL ENERGY DRINK 250 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/red_bull_energy_drink_250_ml.png"
    },
    {
        "id": 294,
        "name": "RED BULL SEM AÇÚCAR 250 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Energéticos",
        "image": "src_produtos/images/red_bull_sem_acucar_250_ml.png"
    },
    {
        "id": 223,
        "name": "ESPUMANTE CHANDON BABY BRUT ROSÉ 187 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Espumantes",
        "image": "src_produtos/images/espumante_chandon_baby_brut_rose_187ml.png"
    },
    {
        "id": 222,
        "name": "ESPUMANTE CHANDON BRUT ROSÉ 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Espumantes",
        "image": "src_produtos/images/espumante_chandon_brut_rose_750ml.png"
    },
    {
        "id": 224,
        "name": "ESPUMANTE CHANDON PASSION ON ICE ROSÉ MEIO DOCE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Espumantes",
        "image": "src_produtos/images/espumante_chandon_passion_on_ice_rose_meio_doce_750ml.png"
    },
    {
        "id": 220,
        "name": "ESPUMANTE CHANDON RÉSERVE BRUT 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Espumantes",
        "image": "src_produtos/images/espumante_chandon_reserve_brut_750ml.png"
    },
    {
        "id": 225,
        "name": "ESPUMANTE BRANCO MOSCATEL SALTON 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Espumantes",
        "image": "src_produtos/images/espumante_branco_moscatel_salton_750ml.png"
    },
    {
        "id": 221,
        "name": "ESPUMANTE BRANCO NATURAL BRUT SALTON 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Espumantes",
        "image": "src_produtos/images/espumante_branco_natural_brut_salton_750ml.png"
    },
    {
        "id": 217,
        "name": "GIN BEEFEATER 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_beefeater_750ml.png"
    },
    {
        "id": 214,
        "name": "GIN BOMBAY SAPPHIRE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_bombay_sapphire_750ml.png"
    },
    {
        "id": 215,
        "name": "GIN GORDON´S 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_gordons_750ml.png"
    },
    {
        "id": 216,
        "name": "GIN LONDON DRY DUBAR 960 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_london_dry_dubar_960ml.png"
    },
    {
        "id": 218,
        "name": "GIN ROCK´S 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_rocks_1l.png"
    },
    {
        "id": 219,
        "name": "GIN ROCK´S STRAWBERRY 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_rocks_strawberry_1l.png"
    },
    {
        "id": 213,
        "name": "GIN SEAGERS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_seagers_1l.png"
    },
    {
        "id": 212,
        "name": "GIN TANQUERAY 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Gin",
        "image": "src_produtos/images/gin_tanqueray_750ml.png"
    },
    {
        "id": 254,
        "name": "LICOR 43 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_43.png"
    },
    {
        "id": 261,
        "name": "LICOR 43 CHOCOLATE 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_43_chocolate.png"
    },
    {
        "id": 249,
        "name": "LICOR AMARULA CREAM 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_amarula.png"
    },
    {
        "id": 248,
        "name": "LICOR BAILEYS 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_baileys.png"
    },
    {
        "id": 250,
        "name": "LICOR COINTREAU 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_cointreau.png"
    },
    {
        "id": 259,
        "name": "LICOR DRAMBUIE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_drambuie.png"
    },
    {
        "id": 258,
        "name": "LICOR JAGERMEISTER 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_jagermeister.png"
    },
    {
        "id": 262,
        "name": "LICOR LECHE LOCO CARAMELO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_leche_loco_caramelo.png"
    },
    {
        "id": 263,
        "name": "LICOR LECHE LOCO COFFE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_leche_loco_coffe.png"
    },
    {
        "id": 251,
        "name": "LICOR STOCK CREME DE CACAU 720 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_stock_cacau.png"
    },
    {
        "id": 256,
        "name": "LICOR STOCK CREME DE CASSIS 720 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_stock_cassis.png"
    },
    {
        "id": 257,
        "name": "LICOR STOCK CREME DE MENTA 720 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_stock_menta.png"
    },
    {
        "id": 255,
        "name": "LICOR STOCK CURAÇAU BLUE 720 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_stock_curacao_blue.png"
    },
    {
        "id": 252,
        "name": "LICOR STOCK CURAÇAU FINO 720 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_stock_curacao_fino.png"
    },
    {
        "id": 260,
        "name": "LICOR STOCK MARULA 720 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_stock_marula.png"
    },
    {
        "id": 253,
        "name": "LICOR STOCK PÊSSEGO 720 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Licor",
        "image": "src_produtos/images/licor_stock_pessego.png"
    },
    {
        "id": 32,
        "name": "COCA COLA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_lata_350_ml.png"
    },
    {
        "id": 73,
        "name": "COCA COLA MIÚDA PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_miuda_pet_200_ml.png"
    },
    {
        "id": 53,
        "name": "COCA COLA MIÚDA ZERO AÇÚCARES PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_miuda_zero_acucares_pet_200_ml.png"
    },
    {
        "id": 51,
        "name": "COCA COLA MÉDIA PET 1 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_media_pet_1_l.png"
    },
    {
        "id": 45,
        "name": "COCA COLA PEQUENA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_pequena_pet_600_ml.png"
    },
    {
        "id": 30,
        "name": "COCA COLA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_pet_2_l.png"
    },
    {
        "id": 33,
        "name": "COCA COLA SEM AÇÚCAR LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_sem_acucar_lata_350_ml.png"
    },
    {
        "id": 31,
        "name": "COCA COLA SEM AÇÚCAR PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_sem_acucar_pet_2_l.png"
    },
    {
        "id": 62,
        "name": "COCA COLA SEM AÇÚCAR PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_sem_acucar_pet_600_ml.png"
    },
    {
        "id": 43,
        "name": "DOLLY LARANJA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/dolly_laranja_pet_2_l.png"
    },
    {
        "id": 44,
        "name": "DOLLY LIMÃO PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/dolly_limao_pet_2_l.png"
    },
    {
        "id": 55,
        "name": "DOLLY UVA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/dolly_uva_pet_2_l.png"
    },
    {
        "id": 42,
        "name": "DOLLY GUARANÁ PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/dolly_guarana_pet_2_l.png"
    },
    {
        "id": 35,
        "name": "FANTA LARANJA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/fanta_laranja_lata_350_ml.png"
    },
    {
        "id": 34,
        "name": "FANTA LARANJA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/fanta_laranja_pet_2_l.png"
    },
    {
        "id": 58,
        "name": "FANTA LARANJA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/fanta_laranja_pet_600_ml.png"
    },
    {
        "id": 56,
        "name": "FANTA UVA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/fanta_uva_lata_350_ml.png"
    },
    {
        "id": 36,
        "name": "FANTA UVA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/fanta_uva_pet_2_l.png"
    },
    {
        "id": 40,
        "name": "GUARANÁ ANTARCTICA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_lata_350_ml.png"
    },
    {
        "id": 54,
        "name": "GUARANÁ ANTARCTICA MIÚDA PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_miuda_pet_200_ml.png"
    },
    {
        "id": 74,
        "name": "GUARANÁ ANTARCTICA PEQUENO PET 1 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_pequeno_pet_1_l.png"
    },
    {
        "id": 38,
        "name": "GUARANÁ ANTARCTICA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_pet_2_l.png"
    },
    {
        "id": 61,
        "name": "GUARANÁ ANTARCTICA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_pet_600_ml.png"
    },
    {
        "id": 41,
        "name": "GUARANÁ ANTARCTICA SEM AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_sem_acucares_lata_350_ml.png"
    },
    {
        "id": 39,
        "name": "GUARANÁ ANTARCTICA SEM AÇÚCARES PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_sem_acucares_pet_2_l.png"
    },
    {
        "id": 71,
        "name": "H2O LIMONETO SEM AÇÚCARES PET 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/h2o_limoneto_sem_acucares_pet_1_5_l.png"
    },
    {
        "id": 69,
        "name": "H2O LIMONETO SEM AÇÚCARES PET 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/h2o_limoneto_sem_acucares_pet_500_ml.png"
    },
    {
        "id": 70,
        "name": "H2O LIMÃO SEM AÇÚCARES PET 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/h2o_limao_sem_acucares_pet_1_5_l.png"
    },
    {
        "id": 78,
        "name": "H2O LIMÃO SEM AÇÚCARES PET 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/h2o_sem_acucares_pet_500_ml.png"
    },
    {
        "id": 46,
        "name": "ITUBÁINA TUTTI FRUTTI RETRÔ LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/itubaina_tutti_frutti_retro_lata_350_ml.png"
    },
    {
        "id": 63,
        "name": "ITUBÁINA TUTTI FRUTTI RETRÔ LONG NECK 355 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/itubaina_tutti_frutti_retro_long_neck_355_ml.png"
    },
    {
        "id": 75,
        "name": "PEPSI COLA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/pepsi_cola_lata_350_ml.png"
    },
    {
        "id": 59,
        "name": "PEPSI COLA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/pepsi_cola_pet_2_l.png"
    },
    {
        "id": 57,
        "name": "SCHWEPPES CITRUS LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/schweppes_citrus_lata_350_ml.png"
    },
    {
        "id": 68,
        "name": "SCHWEPPES CITRUS LEVE EM AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/schweppes_citrus_leve_em_acucares_lata_350_ml.png"
    },
    {
        "id": 47,
        "name": "ÁGUA TÔNICA SCHWEPPES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/agua_tonica_schweppes_lata_350_ml.png"
    },
    {
        "id": 77,
        "name": "SODA ANTARCTICA LIMONADA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/soda_antarctica_limonada_lata_350_ml.png"
    },
    {
        "id": 65,
        "name": "SODA ANTARCTICA LIMONADA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/soda_antarctica_limonada_pet_2_l.png"
    },
    {
        "id": 67,
        "name": "SODA ANTARCTICA LIMONADA ZERO AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/soda_antarctica_limonada_zero_acucares_lata_350_ml.png"
    },
    {
        "id": 72,
        "name": "SPRITE LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/sprite_lata_350_ml.png"
    },
    {
        "id": 48,
        "name": "SPRITE LEMON FRESH PET 510 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/sprite_lemon_fresh_pet_510_ml.png"
    },
    {
        "id": 37,
        "name": "SPRITE PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/sprite_pet_2_l.png"
    },
    {
        "id": 76,
        "name": "SUKITA LARANJA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/sukita_laranja_lata_350_ml.png"
    },
    {
        "id": 64,
        "name": "SUKITA LARANJA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/sukita_laranja_pet_2_l.png"
    },
    {
        "id": 52,
        "name": "SUKITA LIMÃO PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/sukita_limao_pet_2_l.png"
    },
    {
        "id": 50,
        "name": "SUKITA TUBAÍNA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/sukita_tubaina_pet_2_l.png"
    },
    {
        "id": 49,
        "name": "TUBAÍNA CAMPOS TUTTI FRUTTI PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/tubaina_campos_tutti_frutti_pet_2_l.png"
    },
    {
        "id": 60,
        "name": "ÁGUA TÔNICA ANTARCTICA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/agua_tonica_antarctica_lata_350_ml.png"
    },
    {
        "id": 66,
        "name": "ÁGUA TÔNICA ANTARCTICA ZERO AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/agua_tonica_antarctica_zero_acucares_lata_350_ml.png"
    },
    {
        "id": 332,
        "name": "SUCO DE UVA TINTO INTEGRAL TETRA PACK AURORA 1,5 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_uva_tinto_integral_aurora_15l.png"
    },
    {
        "id": 321,
        "name": "SUCO DEL VALLE ABACAXI TETRA PACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_abacaxi_tetra_pack_1l.png"
    },
    {
        "id": 322,
        "name": "SUCO DEL VALLE CAJU SEM ADIÇÃO DE AÇÚCAR TETRA PACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_caju_sem_acucar_tetra_pack_1l.png"
    },
    {
        "id": 319,
        "name": "SUCO DEL VALLE GOIABA SEM ADIÇÃO DE AÇÚCAR LATA 290 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_goiaba_sem_acucar_lata_290_ml.png"
    },
    {
        "id": 320,
        "name": "SUCO DEL VALLE LARANJA TETRA PACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_laranja_tetra_pack_1l.png"
    },
    {
        "id": 317,
        "name": "SUCO DEL VALLE MANGA LATA 290 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_manga_lata_290_ml.png"
    },
    {
        "id": 315,
        "name": "SUCO DEL VALLE MARACUJÁ LATA 290 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_maracuja_lata_290_ml.png"
    },
    {
        "id": 318,
        "name": "SUCO DEL VALLE PÊSSEGO LATA 290 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_pessego_lata_290_ml.png"
    },
    {
        "id": 316,
        "name": "SUCO DEL VALLE UVA LATA 290 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_uva_lata_290_ml.png"
    },
    {
        "id": 313,
        "name": "SUCO DEL VALLE UVA TETRA PACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_del_valle_uva_tetra_pack_1l.png"
    },
    {
        "id": 323,
        "name": "SUCO GUARAVITON AÇAÍ 500 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_guaraviton_acai_500_ml.png"
    },
    {
        "id": 308,
        "name": "SUCO MAGUARY ABACAXI 500 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_abacaxi_500_ml.png"
    },
    {
        "id": 312,
        "name": "SUCO MAGUARY GOIABA 500 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_goiaba_500_ml.png"
    },
    {
        "id": 326,
        "name": "SUCO MAGUARY LARANJA TETRA PACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_laranja_tetra_pack_1l.png"
    },
    {
        "id": 309,
        "name": "SUCO MAGUARY MANGA 500 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_manga_500_ml.png"
    },
    {
        "id": 310,
        "name": "SUCO MAGUARY MARACUJÁ 500 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_maracuja_500_ml.png"
    },
    {
        "id": 314,
        "name": "SUCO MAGUARY MARACUJÁ LATA 335 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_maracuja_lata_335_ml.png"
    },
    {
        "id": 324,
        "name": "SUCO MAGUARY MARACUJÁ TETRA PACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_maracuja_tetra_pack_1l.png"
    },
    {
        "id": 311,
        "name": "SUCO MAGUARY UVA 500 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_uva_500_ml.png"
    },
    {
        "id": 325,
        "name": "SUCO MAGUARY UVA TETRA PACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_uva_tetra_pack_1l.png"
    },
    {
        "id": 328,
        "name": "SUCO PEQUENO MAGUARY MARACUJÁ 200 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_pequeno_maguary_maracuja_200_ml.png"
    },
    {
        "id": 330,
        "name": "SUCO PEQUENO MAGUARY MAÇÃ 200 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_pequeno_maguary_maca_200_ml.png"
    },
    {
        "id": 329,
        "name": "SUCO PEQUENO MAGUARY UVA 200 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_pequeno_maguary_uva_200_ml.png"
    },
    {
        "id": 331,
        "name": "SUCO DE TOMATE RAIOLA 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_de_tomate_raiola_1l.png"
    },
    {
        "id": 327,
        "name": "SUCO DE TOMATE SUPERBOM 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_de_tomate_superbom_1l.png"
    },
    {
        "id": 242,
        "name": "TEQUILA JOSE CUERVO ESPECIAL PRATA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Tequila",
        "image": "src_produtos/images/tequila_prata.png"
    },
    {
        "id": 241,
        "name": "TEQUILA JOSE CUERVO ESPECIAL REPOSADO OURO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Tequila",
        "image": "src_produtos/images/tequila_ouro.png"
    },
    {
        "id": 592,
        "name": "VINHO ARGENTINO TINTO MEIO SECO MALBEC RESERVADO CONCHA Y TORO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_concha_y_toro_malbec_750ml.png"
    },
    {
        "id": 598,
        "name": "VINHO ARGENTINO TINTO SECO CABERNET SAUVIGNON BENJAMIN NIETO SENETINER 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_benjamin_cabernet_750ml.png"
    },
    {
        "id": 597,
        "name": "VINHO ARGENTINO TINTO SECO GATO NEGRO MALBEC SAN PEDRO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_gato_negro_malbec_750ml.png"
    },
    {
        "id": 608,
        "name": "VINHO ARGENTINO TINTO SECO MALBEC BENJAMIN NIETO SENETINER 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_benjamin_malbec_750ml.png"
    },
    {
        "id": 605,
        "name": "VINHO CHILENO BRANCO SECO CHARDONNAY RESERVADO SANTA HELENA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_santa_helena_chardonnay_750ml.png"
    },
    {
        "id": 602,
        "name": "VINHO CHILENO BRANCO SECO FINO SAUVIGNON BLANC CHILANO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_chilano_branco_750ml.png"
    },
    {
        "id": 586,
        "name": "VINHO CHILENO BRANCO SECO SAUVIGNON BLANC RESERVADO SANTA HELENA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_santa_helena_branco_750ml.png"
    },
    {
        "id": 588,
        "name": "VINHO CHILENO TINTO MEIO SECO CABERNET SAUVIGNON MERLOT RESERVADO SANTA HELENA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_santa_helena_merlot_750ml.png"
    },
    {
        "id": 585,
        "name": "VINHO CHILENO TINTO MEIO SECO CABERNET SAUVIGNON RESERVADO CONCHA Y TORO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_concha_y_toro_cabernet_750ml.png"
    },
    {
        "id": 587,
        "name": "VINHO CHILENO TINTO MEIO SECO CABERNET SAUVIGNON RESERVADO SANTA HELENA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_santa_helena_cabernet_750ml.png"
    },
    {
        "id": 591,
        "name": "VINHO CHILENO TINTO MEIO SECO CARMENÉRE RESERVADO CONCHA Y TORO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_concha_y_toro_carmenere_750ml.png"
    },
    {
        "id": 589,
        "name": "VINHO CHILENO TINTO MEIO SECO CARMENÉRE RESERVADO SANTA HELENA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_santa_helena_carmenere_750ml.png"
    },
    {
        "id": 595,
        "name": "VINHO CHILENO TINTO MEIO SECO GATO NEGRO CABERNET SAUVIGNON SAN PEDRO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_gato_negro_cabernet_750ml.png"
    },
    {
        "id": 601,
        "name": "VINHO CHILENO TINTO MEIO SECO GATO NEGRO MERLOT SAN PEDRO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_gato_negro_merlot_750ml.png"
    },
    {
        "id": 593,
        "name": "VINHO CHILENO TINTO MEIO SECO MERLOT RESERVADO CONCHA Y TORO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_concha_y_toro_merlot_750ml.png"
    },
    {
        "id": 594,
        "name": "VINHO CHILENO TINTO SECO CABERNET SAUVIGNON CASILLERO DEL DIABLO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_casillero_diablo_750ml.png"
    },
    {
        "id": 603,
        "name": "VINHO CHILENO TINTO SECO FINO CABERNET SAUVIGNON CHILANO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_chilano_cabernet_750ml.png"
    },
    {
        "id": 604,
        "name": "VINHO CHILENO TINTO SECO FINO CARMENÉRE CHILANO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_chilano_carmenere_750ml.png"
    },
    {
        "id": 607,
        "name": "VINHO CHILENO TINTO SECO FINO MALBEC CHILANO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_chilano_malbec_750ml.png"
    },
    {
        "id": 600,
        "name": "VINHO CHILENO TINTO SECO MALBEC CASILLERO DEL DIABLO 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_casillero_diablo_malbec_750ml.png"
    },
    {
        "id": 599,
        "name": "VINHO ESPANHOL TINTO SECO FINO ORO TEMPRANILLO PATA NEGRA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_pata_negra_750ml.png"
    },
    {
        "id": 611,
        "name": "VINHO PEQUENO PORTUGUÊS TINTO SECO BONS VENTOS 375 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_bons_ventos_375ml.png"
    },
    {
        "id": 583,
        "name": "VINHO PEQUENO PORTUGUÊS TINTO SECO PERIQUITA 375 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_periquita_375ml.png"
    },
    {
        "id": 610,
        "name": "VINHO PORTUGUÊS TINTO SECO BONS VENTOS 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_bons_ventos_750ml.png"
    },
    {
        "id": 590,
        "name": "VINHO PORTUGUÊS TINTO SECO CASAL GARCIA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_casal_garcia_750ml.png"
    },
    {
        "id": 609,
        "name": "VINHO PORTUGUÊS TINTO SECO OLARIA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_olaria_750ml.png"
    },
    {
        "id": 584,
        "name": "VINHO PORTUGUÊS TINTO SECO PERIQUITA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_periquita_750ml.png"
    },
    {
        "id": 596,
        "name": "VINHO PORTUGUÊS VERDE BRANCO MEIO SECO CALAMARES 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_calamares_verde_750ml.png"
    },
    {
        "id": 606,
        "name": "VINHO PORTUGUÊS VERDE MEIO SECO CASAL GARCIA 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Importados",
        "image": "src_produtos/images/vinho_casal_garcia_verde_750ml.png"
    },
    {
        "id": 582,
        "name": "VINHO GRANDE NACIONAL TINTO SECO SANTOMÉ 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_santome_tinto_seco_1l.png"
    },
    {
        "id": 571,
        "name": "VINHO NACIONAL BRANCO \"SECO\" CHALISE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_chalise_branco_seco_750ml.png"
    },
    {
        "id": 570,
        "name": "VINHO NACIONAL BRANCO \"SUAVE\" CHALISE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_chalise_branco_suave_750ml.png"
    },
    {
        "id": 580,
        "name": "VINHO NACIONAL BRANCO SECO ALMADÉN RIESLING 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_almaden_riesling_750ml.png"
    },
    {
        "id": 577,
        "name": "VINHO NACIONAL BRANCO SECO RANDON 4,6 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_randon_branco_seco_4_6l.png"
    },
    {
        "id": 569,
        "name": "VINHO NACIONAL TINTO \"SECO\" CHALISE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_chalise_tinto_seco_750ml.png"
    },
    {
        "id": 568,
        "name": "VINHO NACIONAL TINTO \"SUAVE\" CHALISE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_chalise_tinto_suave_750ml.png"
    },
    {
        "id": 581,
        "name": "VINHO NACIONAL TINTO SECO CABERNET SAUVIGNON",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_tinto_seco_cabernet.png"
    },
    {
        "id": 572,
        "name": "VINHO NACIONAL TINTO SECO CABERNET SAUVIGNON ALMADÉN 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_almaden_tinto_seco_cabernet_750ml.png"
    },
    {
        "id": 576,
        "name": "VINHO NACIONAL TINTO SECO JURUBEBA LEÃO DO NORTE 600 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_jurubeba_leao_do_norte_600ml.png"
    },
    {
        "id": 578,
        "name": "VINHO NACIONAL TINTO SECO RANDON 4,6 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_randon_tinto_seco_4_6l.png"
    },
    {
        "id": 573,
        "name": "VINHO NACIONAL TINTO SUAVE CABERNET ALMADÉN 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_almaden_tinto_suave_cabernet_750ml.png"
    },
    {
        "id": 574,
        "name": "VINHO NACIONAL TINTO SUAVE COUNTRY WINE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_country_suave_750ml.png"
    },
    {
        "id": 579,
        "name": "VINHO NACIONAL TINTO SUAVE RANDON 4,6 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_randon_tinto_suave_4_6l.png"
    },
    {
        "id": 575,
        "name": "VINHO NACIONAL TINTO SUAVE SANTOMÉ 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vinhos Nacionais",
        "image": "src_produtos/images/vinho_santome_suave_750ml.png"
    },
    {
        "id": 200,
        "name": "VODKA ABSOLUT 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_absolut_1l.png"
    },
    {
        "id": 207,
        "name": "VODKA ASKOV FRUTAS VERMELHAS 900 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_askov_frutas_vermelhas_900ml.png"
    },
    {
        "id": 209,
        "name": "VODKA ASKOV MARACUJÁ 900 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_askov_maracuja_900ml.png"
    },
    {
        "id": 206,
        "name": "VODKA ASKOV TRADICIONAL 900 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_askov_tradicional_900ml.png"
    },
    {
        "id": 202,
        "name": "VODKA BALALAIKA 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_balalaika_1l.png"
    },
    {
        "id": 211,
        "name": "VODKA BELVEDERE 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_belvedere_700ml.png"
    },
    {
        "id": 198,
        "name": "VODKA CIROC 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_ciroc_750ml.png"
    },
    {
        "id": 203,
        "name": "VODKA CIROC RED BERRY 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_ciroc_red_berry_750ml.png"
    },
    {
        "id": 204,
        "name": "VODKA KETEL ONE 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_ketel_one_1l.png"
    },
    {
        "id": 205,
        "name": "VODKA ORLOFF 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_orloff_1l.png"
    },
    {
        "id": 201,
        "name": "VODKA SKYY 980 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_skyy_980ml.png"
    },
    {
        "id": 208,
        "name": "VODKA PEQUENA SMIRNOFF 600 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_pequena_smirnoff_600ml.png"
    },
    {
        "id": 199,
        "name": "VODKA SMIRNOFF 998 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_smirnoff_998ml.png"
    },
    {
        "id": 210,
        "name": "VODKA SMIRNOFF ICE LIMÃO LONG NECK 275 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Vodka",
        "image": "src_produtos/images/vodka_smirnoff_ice_limao_long_neck_275ml.png"
    },
    {
        "id": 187,
        "name": "WHISKY CHIVAS REGAL 12 ANOS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_chivas_regal_12_anos_1l.png"
    },
    {
        "id": 196,
        "name": "WHISKY JACK DANIEL´S TENNESSEE FIRE 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_jack_daniels_tennessee_fire_1l.png"
    },
    {
        "id": 194,
        "name": "WHISKY JACK DANIEL´S TENNESSEE HONEY 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_jack_daniels_tennessee_honey_1l.png"
    },
    {
        "id": 185,
        "name": "WHISKY JACK DANIEL´S TENNESSEE OLD No.7 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_jack_daniels_tennessee_old_no7_1l.png"
    },
    {
        "id": 193,
        "name": "WHISKY JAMESON 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_jameson_750ml.png"
    },
    {
        "id": 197,
        "name": "WHISKY JIM BEAM 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_jim_beam_1l.png"
    },
    {
        "id": 180,
        "name": "WHISKY JOHNNIE WALKER BLACK LABEL 12 ANOS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_johnnie_walker_black_label_12_anos_1l.png"
    },
    {
        "id": 181,
        "name": "WHISKY JOHNNIE WALKER BLUE LABEL 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_johnnie_walker_blue_label_750ml.png"
    },
    {
        "id": 190,
        "name": "WHISKY JOHNNIE WALKER DOUBLE BLACK 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_johnnie_walker_double_black_1l.png"
    },
    {
        "id": 182,
        "name": "WHISKY JOHNNIE WALKER GOLD LABEL RESERVE 750 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_johnnie_walker_gold_label_reserve_750ml.png"
    },
    {
        "id": 179,
        "name": "WHISKY JOHNNIE WALKER RED LABEL 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_johnnie_walker_red_label_1l.png"
    },
    {
        "id": 189,
        "name": "WHISKY NATU NOBILIS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_natu_nobilis_1l.png"
    },
    {
        "id": 188,
        "name": "WHISKY OLD EIGHT 900 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_old_eight_900ml.png"
    },
    {
        "id": 183,
        "name": "WHISKY OLD PARR 12 ANOS 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_old_parr_12_anos_1l.png"
    },
    {
        "id": 186,
        "name": "WHISKY PASSPORT 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_passport_1l.png"
    },
    {
        "id": 184,
        "name": "WHISKY WHITE HORSE 1 L",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Whisky",
        "image": "src_produtos/images/whisky_white_horse_1l.png"
    },
    {
        "id": 337,
        "name": "XAROPE MONIN AMORA 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_amora_700_ml.png"
    },
    {
        "id": 338,
        "name": "XAROPE MONIN CURAÇAU BLUE 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_curacao_blue_700_ml.png"
    },
    {
        "id": 339,
        "name": "XAROPE MONIN FRAMBOESA 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_framboesa_700_ml.png"
    },
    {
        "id": 340,
        "name": "XAROPE MONIN GENGIBRE 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_gengibre_700_ml.png"
    },
    {
        "id": 333,
        "name": "XAROPE MONIN GRENADINE 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_grenadine_700_ml.png"
    },
    {
        "id": 341,
        "name": "XAROPE MONIN KIWI 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_kiwi_700_ml.png"
    },
    {
        "id": 335,
        "name": "XAROPE MONIN LIMÃO SICILIANO 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_limao_siciliano_700_ml.png"
    },
    {
        "id": 336,
        "name": "XAROPE MONIN MARACUJÁ 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_maracuja_700_ml.png"
    },
    {
        "id": 334,
        "name": "XAROPE MONIN MAÇÃ VERDE 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_maca_verde_700_ml.png"
    },
    {
        "id": 342,
        "name": "XAROPE MONIN MELANCIA 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_melancia_700_ml.png"
    },
    {
        "id": 343,
        "name": "XAROPE MONIN MORANGO 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_morango_700_ml.png"
    },
    {
        "id": 344,
        "name": "XAROPE MONIN TANGERINA 700 ML",
        "description": "",
        "category": "Bebidas",
        "subcategory": "Xarope",
        "image": "src_produtos/images/xarope_monin_tangerina_700_ml.png"
    },
    {
        "id": 568,
        "name": "ÁGUA DE COCO GRANDE KERO COCO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_kero_coco_1l.webp"
    },
    {
        "id": 17,
        "name": "ÁGUA DE COCO GRANDE MAIS COCO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_mais_coco_1l.webp"
    },
    {
        "id": 19,
        "name": "ÁGUA DE COCO GRANDE COCO QUADRADO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_quadrado_1l.webp"
    },
    {
        "id": 18,
        "name": "ÁGUA DE COCO PEQUENA COCO QUADRADO 200 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_quadrado_200ml.webp"
    },
    {
        "id": 16,
        "name": "ÁGUA DE COCO GRANDE SOCOCO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_sococo_1l.webp"
    },
    {
        "id": 14,
        "name": "ÁGUA DE COCO MÉDIA SOCOCO 330 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_sococo_330ml.webp"
    },
    {
        "id": 15,
        "name": "ÁGUA DE COCO PEQUENA SOCOCO 200 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_sococo_200ml.webp"
    },
    {
        "id": 27,
        "name": "ÁGUA MINERAL BUONAVITA COM GÁS 510 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_buonavita_com_gas_510ml.webp"
    },
    {
        "id": 28,
        "name": "ÁGUA MINERAL BUONAVITA SEM GÁS 510 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_buonavita_sem_gas_510ml.webp"
    },
    {
        "id": 29,
        "name": "ÁGUA MINERAL GRANDE BUONAVITA SEM GÁS 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_buonavita_sem_gas_1500ml.webp"
    },
    {
        "id": 24,
        "name": "ÁGUA MINERAL CRYSTAL COM GÁS 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_crystal_com_gas_1500ml.webp"
    },
    {
        "id": 23,
        "name": "ÁGUA MINERAL CRYSTAL COM GÁS 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_crystal_com_gas_500ml.webp"
    },
    {
        "id": 21,
        "name": "ÁGUA MINERAL CRYSTAL SEM GÁS 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_crystal_sem_gas_500ml.webp"
    },
    {
        "id": 22,
        "name": "ÁGUA MINERAL GRANDE CRYSTAL SEM GÁS 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_crystal_sem_gas_1500ml.webp"
    },
    {
        "id": 26,
        "name": "ÁGUA MINERAL SÃO LOURENÇO COM GÁS 300 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_sao_lourenco_com_gas_300ml.webp"
    },
    {
        "id": 25,
        "name": "ÁGUA MINERAL SÃO LOURENÇO SEM GÁS 300 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_sao_lourenco_sem_gas_300ml.webp"
    },
    {
        "id": 621,
        "name": "ERVILHA BONARE GOIÁS VERDE 170 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Ervilhas",
        "image": "src_produtos/images/ervilha_bonare_170g.png"
    },
    {
        "id": 620,
        "name": "ERVILHA GRANDE BONARE GOIÁS VERDE 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Ervilhas",
        "image": "src_produtos/images/ervilha_grande_bonare_1_7kg.png"
    },
    {
        "id": 618,
        "name": "ERVILHA GRANDE CAMIL 2 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Ervilhas",
        "image": "src_produtos/images/ervilha_grande_camil_2kg.png"
    },
    {
        "id": 617,
        "name": "ERVILHA GRANDE QUERO 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Ervilhas",
        "image": "src_produtos/images/ervilha_grande_quero_1_7kg.png"
    },
    {
        "id": 619,
        "name": "ERVILHA QUERO 170 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Ervilhas",
        "image": "src_produtos/images/ervilha_quero_170g.png"
    },
    {
        "id": 622,
        "name": "ERVILHA PEQUENA DA TERRINHA 500 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Ervilhas",
        "image": "src_produtos/images/ervilha_terrinha_500g.png"
    },
    {
        "id": 349,
        "name": "EXTRATO DE TOMATE AJINOMOTO 2 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_ajinomoto_2kg.png"
    },
    {
        "id": 351,
        "name": "EXTRATO DE TOMATE BONARE GOIÁS VERDE 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_bonare_goias_17kg.png"
    },
    {
        "id": 348,
        "name": "EXTRATO DE TOMATE BONARE GOIÁS VERDE 4 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_bonare_goias_4kg.png"
    },
    {
        "id": 346,
        "name": "EXTRATO DE TOMATE BONARE GOURMET SUPER CONCENTRADO GOIÁS VERDE 4 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_bonare_gourmet_4kg.png"
    },
    {
        "id": 347,
        "name": "EXTRATO DE TOMATE EKMA 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_ekma_17kg.png"
    },
    {
        "id": 353,
        "name": "EXTRATO DE TOMATE ELEFANTE 1,04 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_elefante_104kg.png"
    },
    {
        "id": 352,
        "name": "EXTRATO DE TOMATE ELEFANTE 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_elefante_17kg.png"
    },
    {
        "id": 345,
        "name": "EXTRATO DE TOMATE GRANDE ELEFANTE 4,08 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_grande_elefante_4080g.png"
    },
    {
        "id": 354,
        "name": "EXTRATO DE TOMATE KNORR 1,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_knorr_15kg.png"
    },
    {
        "id": 350,
        "name": "EXTRATO DE TOMATE QUERO 1,020 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Extrato de Tomate",
        "image": "src_produtos/images/extrato_tomate_quero_1020g.png"
    },
    {
        "id": 623,
        "name": "LENTILHA CAMIL 500 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Lentilhas",
        "image": "src_produtos/images/lentilha_camil_500g.png"
    },
    {
        "id": 624,
        "name": "LENTILHA KICALDO 500 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Lentilhas",
        "image": "src_produtos/images/lentilha_kicaldo_500g.png"
    },
    {
        "id": 616,
        "name": "MILHO BONARE GOIÁS VERDE 170 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Milhos",
        "image": "src_produtos/images/milho_bonare_170g.png"
    },
    {
        "id": 615,
        "name": "MILHO GRANDE BONARE GOIÁS VERDE 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Milhos",
        "image": "src_produtos/images/milho_grande_bonare_1_7kg.png"
    },
    {
        "id": 613,
        "name": "MILHO GRANDE PREDILECTA 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Milhos",
        "image": "src_produtos/images/milho_grande_predilecta_1_7kg.png"
    },
    {
        "id": 612,
        "name": "MILHO GRANDE QUERO 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Milhos",
        "image": "src_produtos/images/milho_grande_quero_1_7kg.png"
    },
    {
        "id": 614,
        "name": "MILHO QUERO 170 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Milhos",
        "image": "src_produtos/images/milho_quero_170g.png"
    },
    {
        "id": 367,
        "name": "MOLHO DE TOMATE PIZZA BONARE GOIÁS VERDE 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_pizza_bonare_goias_17kg.png"
    },
    {
        "id": 363,
        "name": "MOLHO DE TOMATE PIZZA CEPÊRA MAMMA D ORO 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_pizza_cepera_17kg.png"
    },
    {
        "id": 359,
        "name": "MOLHO DE TOMATE REFOGADO TRADICIONAL EKMA 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_ekma_refogado_17kg.png"
    },
    {
        "id": 365,
        "name": "MOLHO DE TOMATE TRADICIONAL BONARE GOIÁS VERDE 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_bonare_goias_17kg.png"
    },
    {
        "id": 364,
        "name": "MOLHO DE TOMATE TRADICIONAL FUGINI 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_fugini_17kg.png"
    },
    {
        "id": 362,
        "name": "MOLHO DE TOMATE TRADICIONAL HEINZ 1,02 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_heinz_102kg.png"
    },
    {
        "id": 369,
        "name": "MOLHO DE TOMATE TRADICIONAL KNORR 1,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_knorr_15kg.png"
    },
    {
        "id": 360,
        "name": "MOLHO DE TOMATE TRADICIONAL MAMMA D ORO CEPÊRA 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_cepera_tradicional_17kg.png"
    },
    {
        "id": 368,
        "name": "MOLHO DE TOMATE TRADICIONAL POMAROLA 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_pomarola_17kg.png"
    },
    {
        "id": 366,
        "name": "MOLHO DE TOMATE TRADICIONAL QUERO BAG 2 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_quero_bag_2kg.png"
    },
    {
        "id": 361,
        "name": "MOLHO DE TOMATE TRADICIONAL TARANTELLA 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_tomate_tarantella_17kg.png"
    },
    {
        "id": 358,
        "name": "MOLHO PARA PIZZA EKMA 1,7 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molho de Tomate",
        "image": "src_produtos/images/molho_pizza_ekma_17kg.png"
    },
    {
        "id": 382,
        "name": "MOLHO ALHO CEPÊRA 1,01 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_alho_cepera_101l.png"
    },
    {
        "id": 413,
        "name": "MOLHO AMERICANO SACHÊ ZAFRÁN 30 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_americano_sache_zafran_30g.png"
    },
    {
        "id": 408,
        "name": "MOLHO AMERICANO ZAFRÁN 1,05 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_americano_zafran_105kg.png"
    },
    {
        "id": 416,
        "name": "MOLHO BACONNAISE JUNIOR 1,1 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_baconnaise_junior_11kg.png"
    },
    {
        "id": 403,
        "name": "MOLHO BARBECUE CEPÊRA 1,01 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_barbecue_cepera_101kg.png"
    },
    {
        "id": 384,
        "name": "MOLHO BARBECUE CEPÊRA 3,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_barbecue_cepera_35kg.png"
    },
    {
        "id": 390,
        "name": "MOLHO BARBECUE EKMA 3,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_barbecue_ekma_35kg.png"
    },
    {
        "id": 399,
        "name": "MOLHO BARBECUE HEINZ 2 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_barbecue_heinz_2kg.png"
    },
    {
        "id": 391,
        "name": "MOLHO BARBECUE SACHÊ CEPÊRA 7 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_barbecue_sache_cepera_7g.png"
    },
    {
        "id": 412,
        "name": "MOLHO BARBECUE SACHÊ FUGINI 7 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_barbecue_sache_fugini_7g.png"
    },
    {
        "id": 406,
        "name": "MOLHO BECHAMEL AJINOMOTO 1 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_bechamel_ajinomoto_1kg.png"
    },
    {
        "id": 389,
        "name": "MOLHO BILLY & JACK ORIGINAL KISABOR 1,01 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_billy_jack_original_kisabor_101kg.png"
    },
    {
        "id": 411,
        "name": "MOLHO BILLY & JACK TASTY KISABOR 1,01 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_billy_jack_tasty_kisabor_101kg.png"
    },
    {
        "id": 414,
        "name": "MOLHO CHIPOTLE JUNIOR 1,01 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_chipotle_junior_101kg.png"
    },
    {
        "id": 383,
        "name": "MOLHO DE PIMENTA VERMELHA CEPÊRA 1,01 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_pimenta_cepera_101l.png"
    },
    {
        "id": 373,
        "name": "MOLHO DE PIMENTA VERMELHA EKMA 1,01 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_pimenta_ekma_101l.png"
    },
    {
        "id": 410,
        "name": "MOLHO DE PIMENTA VERMELHA KISABOR 150 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_pimenta_vermelha_kisabor_150ml.png"
    },
    {
        "id": 380,
        "name": "MOLHO DE PIMENTA VERMELHA MC ILHENNY TABASCO 60 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_tabasco_60ml.png"
    },
    {
        "id": 392,
        "name": "MOLHO DE PIMENTA VERMELHA SACHÊ CEPÊRA 5 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_pimenta_vermelha_sache_cepera_5g.png"
    },
    {
        "id": 397,
        "name": "MOLHO DE PIMENTA VERMELHA SACHÊ PREDILECTA 3 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_pimenta_vermelha_sache_predilecta_3g.png"
    },
    {
        "id": 405,
        "name": "MOLHO DEMI GLACE AJINOMOTO 1 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_demi_glace_ajinomoto_1kg.png"
    },
    {
        "id": 379,
        "name": "MOLHO DEMI GLACE JUNIOR 500 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_demi_glace_junior_500g.png"
    },
    {
        "id": 381,
        "name": "MOLHO INGLÊS CEPÊRA 1,01 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_ingles_cepera_101l.png"
    },
    {
        "id": 378,
        "name": "MOLHO ITALIAN SACHÊ JUNIOR 18 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_italian_junior_18g.png"
    },
    {
        "id": 396,
        "name": "MOLHO ITALIANO SACHÊ LANCHERO 8 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_italiano_sache_lanchero_8ml.png"
    },
    {
        "id": 417,
        "name": "MOLHO PIMENTA SACHÊ EKMA 3 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_pimenta_sache_ekma_3ml.png"
    },
    {
        "id": 395,
        "name": "MOLHO SALADA CAESAR CASTELO 236 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_caesar_castelo_236ml.png"
    },
    {
        "id": 374,
        "name": "MOLHO SALADA CAESAR KISABOR 240 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_caesar_kisabor_240ml.png"
    },
    {
        "id": 404,
        "name": "MOLHO SALADA ITALIAN SACHÊ EKMA 18 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_italian_sache_ekma_18g.png"
    },
    {
        "id": 393,
        "name": "MOLHO SALADA ITALIANO CASTELO 236 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_italiano_castelo_236ml.png"
    },
    {
        "id": 386,
        "name": "MOLHO SALADA ITALIANO KISABOR 240 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_italiano_kisabor_240ml.png"
    },
    {
        "id": 394,
        "name": "MOLHO SALADA LIMÃO CASTELO 236 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_limao_castelo_236ml.png"
    },
    {
        "id": 388,
        "name": "MOLHO SALADA LIMÃO KISABOR 240 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_limao_kisabor_240ml.png"
    },
    {
        "id": 387,
        "name": "MOLHO SALADA PARMESÃO KISABOR 240 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_parmesao_kisabor_240ml.png"
    },
    {
        "id": 385,
        "name": "MOLHO SALADA ROSE KISABOR 240 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_salada_rose_kisabor_240ml.png"
    },
    {
        "id": 375,
        "name": "MOLHO SHOYU CEPÊRA 1,01 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_cepera_101l.png"
    },
    {
        "id": 376,
        "name": "MOLHO SHOYU EKMA 1,01 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_ekma_101l.png"
    },
    {
        "id": 377,
        "name": "MOLHO SHOYU GRANDE EKMA 3,1 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_grande_ekma_31l.png"
    },
    {
        "id": 401,
        "name": "MOLHO SHOYU MÉDIO MITSUWA 3,1 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_medio_mitsuwa_31l.png"
    },
    {
        "id": 409,
        "name": "MOLHO SHOYU PONZAN 5 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_ponzan_5l.png"
    },
    {
        "id": 418,
        "name": "MOLHO SHOYU PREMIUM CEPÊRA 5 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_premium_cepera_5l.png"
    },
    {
        "id": 402,
        "name": "MOLHO SHOYU PREMIUM MITSUWA 900 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_premium_mitsuwa_900ml.png"
    },
    {
        "id": 398,
        "name": "MOLHO SHOYU SACHÊ EKMA 8 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_sache_ekma_8ml.png"
    },
    {
        "id": 407,
        "name": "MOLHO SHOYU SATIS AJINOMOTO 5 L",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_satis_ajinomoto_5l.png"
    },
    {
        "id": 415,
        "name": "MOLHO SHOYU SUAVE MITSUWA 900 ML",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_shoyu_suave_mitsuwa_900ml.png"
    },
    {
        "id": 400,
        "name": "MOLHO TÁRTARO FOOD SERVICE KISABOR 1,01",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Molhos",
        "image": "src_produtos/images/molho_tartaro_food_service_kisabor_101kg.png"
    },
    {
        "id": 356,
        "name": "PASSATA DI POMODORO LA PASTINA 680 G",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Polpa",
        "image": "src_produtos/images/passata_la_pastina_680g.png"
    },
    {
        "id": 357,
        "name": "PASSATA KNORR 1,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Polpa",
        "image": "src_produtos/images/passata_knorr_15kg.png"
    },
    {
        "id": 355,
        "name": "POLPA DE TOMATE QUERO 1,050 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Polpa",
        "image": "src_produtos/images/polpa_tomate_quero_1050kg.png"
    },
    {
        "id": 370,
        "name": "TOMATE PELADO INTEIRO ARCO BELLO 2,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Tomate Pelado",
        "image": "src_produtos/images/tomate_pelado_arco_bello_25kg.png"
    },
    {
        "id": 371,
        "name": "TOMATE PELADO INTEIRO OLÉ 2,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Tomate Pelado",
        "image": "src_produtos/images/tomate_pelado_ole_25kg.png"
    },
    {
        "id": 372,
        "name": "TOMATE PELADO INTEIRO PREDILECTA 2,5 KG",
        "description": "",
        "category": "Conservas/Enlatados",
        "subcategory": "Tomate Pelado",
        "image": "src_produtos/images/tomate_pelado_predilecta_25kg.png"
    },
    {
        "id": 668,
        "name": "QUEIJO BRIE FORMA POLENGHI 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Brie",
        "image": "src_produtos/images/queijo_brie_forma_polenghi_1kg.png"
    },
    {
        "id": 667,
        "name": "QUEIJO BRIE FORMA TIROLEZ 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Brie",
        "image": "src_produtos/images/queijo_brie_forma_tirolez_1kg.png"
    },
    {
        "id": 666,
        "name": "QUEIJO BRIE FORMA YEMA 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Brie",
        "image": "src_produtos/images/queijo_brie_forma_yema_1kg.png"
    },
    {
        "id": 669,
        "name": "QUEIJO FRACIONADO BRIE SÃO VICENTE 115 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Brie",
        "image": "src_produtos/images/queijo_fracionado_brie_sao_vicente_115g.png"
    },
    {
        "id": 711,
        "name": "CHEDDAR FATIADO PROCESSADO 160 FATIAS POLENGHI 2,27 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/cheddar-processado-polenghi-2-27kg.png"
    },
    {
        "id": 705,
        "name": "CHEDDAR FATIADO PROCESSADO 160 FATIAS VIGOR 2,24 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/cheddar-processado-fatiado-vigor-2-24kg.png"
    },
    {
        "id": 707,
        "name": "CHEDDAR FATIADO PROCESSADO 184 FATIAS SCHREIBER 2,27 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/cheddar-processado-schreiber-2-27kg.png"
    },
    {
        "id": 701,
        "name": "MISTURA DE REQUEIJÃO SABOR CHEDDAR CORONATA 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/mistura-requeijao-cheddar-coronata-1-5kg.png"
    },
    {
        "id": 702,
        "name": "MISTURA DE REQUEIJÃO SABOR CHEDDAR DALLORA 1,8 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/mistura-requeijao-cheddar-dallora-1-8kg.png"
    },
    {
        "id": 714,
        "name": "MISTURA DE REQUEIJÃO SABOR CHEDDAR PARMATO 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/mistura-requeijao-cheddar-parmato-1-2kg.png"
    },
    {
        "id": 700,
        "name": "MISTURA DE REQUEIJÃO SABOR CHEDDAR PURANATA 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/mistura-requeijao-cheddar-puranata-1-2kg.png"
    },
    {
        "id": 710,
        "name": "MISTURA DE REQUEIJÃO SABOR CHEDDAR ROSELI 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/mistura-requeijao-cheddar-roseli-1-2kg.png"
    },
    {
        "id": 703,
        "name": "MISTURA DE REQUEIJÃO SABOR CHEDDAR TOP CHEDDAR 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/mistura-requeijao-top-cheddar-1-2kg.png"
    },
    {
        "id": 722,
        "name": "MOLHO CHEDDAR CORONATA 1,02 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/molho-cheddar-coronata-1-02kg.png"
    },
    {
        "id": 720,
        "name": "MOLHO CHEDDAR DEFUMADO POLENGHI 1,01 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/molho-cheddar-defumado-polenghi-1-01kg.png"
    },
    {
        "id": 712,
        "name": "MOLHO CHEDDAR POLENGHI 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/molho-cheddar-polenghi-1-5kg.png"
    },
    {
        "id": 704,
        "name": "MOLHO CHEDDAR SCHREIBER 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/molho-cheddar-schreiber-1-5kg.png"
    },
    {
        "id": 716,
        "name": "MOLHO CHEDDAR VIGOR 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/molho-cheddar-vigor-1-5kg.png"
    },
    {
        "id": 713,
        "name": "REQUEIJÃO SABOR CHEDDAR CATUPIRY 1,010 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-catupiry-1-010kg.png"
    },
    {
        "id": 709,
        "name": "REQUEIJÃO SABOR CHEDDAR CORONATA 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-coronata-1-5kg.png"
    },
    {
        "id": 715,
        "name": "REQUEIJÃO SABOR CHEDDAR PEQUENO CORONATA 240 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-pequeno-coronata-240g.png"
    },
    {
        "id": 717,
        "name": "REQUEIJÃO SABOR CHEDDAR POLENGHI 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-polenghi-1-5kg.png"
    },
    {
        "id": 718,
        "name": "REQUEIJÃO SABOR CHEDDAR SCALA 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-scala-1-5kg.png"
    },
    {
        "id": 719,
        "name": "REQUEIJÃO SABOR CHEDDAR SCALON 1,02 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-scalon-1-02kg.png"
    },
    {
        "id": 708,
        "name": "REQUEIJÃO SABOR CHEDDAR SOFFICE 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-soffice-1-2kg.png"
    },
    {
        "id": 706,
        "name": "REQUEIJÃO SABOR CHEDDAR TIROLEZ 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-tirolez-1-5kg.png"
    },
    {
        "id": 721,
        "name": "REQUEIJÃO SABOR CHEDDAR VALEZA 1,003 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cheddar",
        "image": "src_produtos/images/requeijao-cheddar-valeza-1-003kg.png"
    },
    {
        "id": 776,
        "name": "QUEIJO ESTEPE IPANEMA 6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Estepe",
        "image": "src_produtos/images/estepe-ipanema6kg.png"
    },
    {
        "id": 775,
        "name": "QUEIJO ESTEPE TIROLEZ 7 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Estepe",
        "image": "src_produtos/images/estepe-tirolez7kg.png"
    },
    {
        "id": 627,
        "name": "GORGONZOLA BELLA ITÁLIA 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_bella_italia_3kg.png"
    },
    {
        "id": 628,
        "name": "GORGONZOLA FRACIONADO BELLA ITÁLIA 160 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_fracionado_bella_italia_160g.png"
    },
    {
        "id": 633,
        "name": "GORGONZOLA FRACIONADO QUATÁ 180 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_fracionado_quata_180g.png"
    },
    {
        "id": 634,
        "name": "GORGONZOLA FRACIONADO QUEIJO AZUL SCALA 180 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_fracionado_queijo_azul_scala_180g.png"
    },
    {
        "id": 632,
        "name": "GORGONZOLA FRACIONADO QUEIJO AZUL SÃO VICENTE 180 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_fracionado_queijo_azul_sao_vicente_180g.png"
    },
    {
        "id": 629,
        "name": "GORGONZOLA FRACIONADO QUEIJO AZUL TIROLEZ 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_fracionado_queijo_azul_tirolez_200g.png"
    },
    {
        "id": 631,
        "name": "GORGONZOLA FRACIONADO QUEIJO AZUL YEMA 170 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_fracionado_queijo_azul_yema_170g.png"
    },
    {
        "id": 625,
        "name": "GORGONZOLA QUATÁ 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_quata_3kg.png"
    },
    {
        "id": 635,
        "name": "GORGONZOLA QUEIJO AZUL BURITIS 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_queijo_azul_buritis_3kg.png"
    },
    {
        "id": 626,
        "name": "GORGONZOLA QUEIJO AZUL SÃO VICENTE 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_queijo_azul_sao_vicente_3kg.png"
    },
    {
        "id": 630,
        "name": "GORGONZOLA QUEIJO AZUL TIROLEZ 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gorgonzola",
        "image": "src_produtos/images/gorgonzola_queijo_azul_tirolez_3kg.png"
    },
    {
        "id": 672,
        "name": "QUEIJO GOUDA BELLA ITÁLIA 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gouda",
        "image": "src_produtos/images/queijo_gouda_bella_italia_3kg.png"
    },
    {
        "id": 671,
        "name": "QUEIJO GOUDA QUATÁ 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gouda",
        "image": "src_produtos/images/queijo_gouda_quata_3kg.png"
    },
    {
        "id": 670,
        "name": "QUEIJO GOUDA TIROLEZ 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gouda",
        "image": "src_produtos/images/queijo_gouda_tirolez_3kg.png"
    },
    {
        "id": 780,
        "name": "QUEIJO FRACIONADO GRUYÉRE VIGOR 145 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gruyére",
        "image": "src_produtos/images/gruyere-fracionado-vigor145g.png"
    },
    {
        "id": 781,
        "name": "QUEIJO GRUYÉRE DOR 12 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gruyére",
        "image": "src_produtos/images/gruyere-dor12kg.png"
    },
    {
        "id": 778,
        "name": "QUEIJO GRUYÉRE PEQUENO YEMA 7 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gruyére",
        "image": "src_produtos/images/gruyere-pequeno-yema-7kg.png"
    },
    {
        "id": 779,
        "name": "QUEIJO GRUYÉRE QUATÁ 12 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Gruyére",
        "image": "src_produtos/images/gruyere-quata-12kg.png"
    },
    {
        "id": 682,
        "name": "CREME DE QUEIJO MINAS FRESCAL TIROLEZ 150 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Frescal",
        "image": "src_produtos/images/creme-de-queijo-minas-frescal-tirolez-150g.png"
    },
    {
        "id": 681,
        "name": "QUEIJO FRESCAL VALEZA 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Frescal",
        "image": "src_produtos/images/queijo-frescal-valeza-500g.png"
    },
    {
        "id": 677,
        "name": "QUEIJO MINAS FRESCAL CORONATA 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Frescal",
        "image": "src_produtos/images/queijo-minas-frescal-coronata-500g.png"
    },
    {
        "id": 678,
        "name": "QUEIJO MINAS FRESCAL ITAMONTÉS",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Frescal",
        "image": "src_produtos/images/queijo-minas-frescal-itamontes.png"
    },
    {
        "id": 680,
        "name": "QUEIJO MINAS FRESCAL POLENGHI 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Frescal",
        "image": "src_produtos/images/queijo-minas-frescal-polenghi-400g.png"
    },
    {
        "id": 679,
        "name": "QUEIJO MINAS FRESCAL TIROLEZ 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Frescal",
        "image": "src_produtos/images/queijo-minas-frescal-tirolez-500g.png"
    },
    {
        "id": 683,
        "name": "QUEIJO MINAS FRESCAL YEMA 450 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Frescal",
        "image": "src_produtos/images/queijo-minas-frescal-yema-450g.png"
    },
    {
        "id": 777,
        "name": "QUEIJO MINAS MEIA CURA SCALA 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Meia Cura",
        "image": "src_produtos/images/meia-cura-scala1kg.png"
    },
    {
        "id": 675,
        "name": "QUEIJO MINAS PADRÃO CRIOULO 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Padrão",
        "image": "src_produtos/images/queijo_minas_padrao_crioulo_500g.png"
    },
    {
        "id": 674,
        "name": "QUEIJO MINAS PADRÃO SCALA 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Padrão",
        "image": "src_produtos/images/queijo_minas_padrao_scala_500g.png"
    },
    {
        "id": 676,
        "name": "QUEIJO MINAS PADRÃO TIROLEZ 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Padrão",
        "image": "src_produtos/images/queijo_minas_padrao_tirolez_500g.png"
    },
    {
        "id": 673,
        "name": "QUEIJO MINAS PADRÃO TRÊS MARIAS 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Minas Padrão",
        "image": "src_produtos/images/queijo_minas_padrao_tres_marias_500g.png"
    },
    {
        "id": 733,
        "name": "MUÇARELA DE BÚFALA BOCCONCINO YEMA 330 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-de-bufala-bocconcino-yema-330g.png"
    },
    {
        "id": 729,
        "name": "MUÇARELA DE BÚFALA BOLA LEVITARE 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-de-bufala-bola-levitare-400g.png"
    },
    {
        "id": 728,
        "name": "MUÇARELA DE BÚFALA CEREJINHA LEVITARE 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-de-bufala-cerejinha-levitare-400g.png"
    },
    {
        "id": 732,
        "name": "MUÇARELA DE BÚFALA CEREJINHA YEMA 330 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-de-bufala-cerejinha-yema-330g.png"
    },
    {
        "id": 727,
        "name": "MUÇARELA DE BÚFALA LEVITARE 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-de-bufala-levitare-4kg.png"
    },
    {
        "id": 723,
        "name": "MUÇARELA DE BÚFALA YEMA 3,7 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-de-bufala-yema-3-7kg.png"
    },
    {
        "id": 726,
        "name": "MUÇARELA VACA E BÚFALA BOCCONCINO YEMA",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-vaca-e-bufala-bocconcino-yema.png"
    },
    {
        "id": 725,
        "name": "MUÇARELA VACA E BÚFALA CEREJAS YEMA",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-vaca-e-bufala-cerejas-yema.png"
    },
    {
        "id": 724,
        "name": "MUÇARELA VACA E BÚFALA MARGHERITA YEMA",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/mucarela-vaca-e-bufala-margherita-yema.png"
    },
    {
        "id": 731,
        "name": "QUEIJO TIPO BURRATA DE BÚFALA DOR 180 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/burrata-de-bufala-dor-180g.png"
    },
    {
        "id": 730,
        "name": "QUEIJO TIPO BURRATA DE BÚFALA LEVITARE 150 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Búfala",
        "image": "src_produtos/images/burrata-de-bufala-levitare-150g.png"
    },
    {
        "id": 749,
        "name": "MUÇARELA COYOTE 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-coyote-4kg.png"
    },
    {
        "id": 753,
        "name": "MUÇARELA ITALAC 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-italac-4kg.png"
    },
    {
        "id": 740,
        "name": "MUÇARELA JÓIA 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-joia-4kg.png"
    },
    {
        "id": 758,
        "name": "MUÇARELA MONTE CASTELO 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-monte-castelo-4kg.png"
    },
    {
        "id": 761,
        "name": "MUÇARELA POLENGHI 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-pollenghi35kg.png"
    },
    {
        "id": 744,
        "name": "MUÇARELA SCALA 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-scala-4kg.png"
    },
    {
        "id": 747,
        "name": "MUÇARELA TIROLEZ 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-tirolez-4kg.png"
    },
    {
        "id": 741,
        "name": "MUÇARELA TRÊS MARIAS 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-tres-marias-minas-gerais-4kg.png"
    },
    {
        "id": 763,
        "name": "MUÇARELA ZERO LACTOSE CRIOULO 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-zero-lactose-crioulo-5kg.png"
    },
    {
        "id": 760,
        "name": "MUÇARELA ZERO LACTOSE TRÊS MARIAS 4 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Muçarela de Vaca",
        "image": "src_produtos/images/mucarela-zero-lactose-tres-marias-4kg.png"
    },
    {
        "id": 644,
        "name": "PARMESÃO 1/4 SCALA 1,35 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_1_4_scala_1_35kg.png"
    },
    {
        "id": 656,
        "name": "PARMESÃO 6 MESES IPANEMA 6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_ipanema_6kg.png"
    },
    {
        "id": 663,
        "name": "PARMESÃO 6 MESES LA SERENISSIMA 8 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_la_serenissima_8kg.png"
    },
    {
        "id": 665,
        "name": "PARMESÃO 6 MESES NOAL 6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_noal_6kg.png"
    },
    {
        "id": 647,
        "name": "PARMESÃO 6 MESES PEQUENO SIBÉRIA 3 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_pequeno_siberia_3kg.png"
    },
    {
        "id": 664,
        "name": "PARMESÃO 6 MESES POLENGHI 6,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_polenghi_6_5kg.png"
    },
    {
        "id": 642,
        "name": "PARMESÃO 6 MESES QUATÁ 5,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_quata_5_5kg.png"
    },
    {
        "id": 637,
        "name": "PARMESÃO 6 MESES SCALA 6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_scala_6kg.png"
    },
    {
        "id": 643,
        "name": "PARMESÃO 6 MESES SIBÉRIA 6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_siberia_6kg.png"
    },
    {
        "id": 661,
        "name": "PARMESÃO 6 MESES TIROLEZ 7 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_6_meses_tirolez_7kg.png"
    },
    {
        "id": 645,
        "name": "PARMESÃO CAPA PRETA BURITIS 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_capa_preta_buritis_5kg.png"
    },
    {
        "id": 652,
        "name": "PARMESÃO FRACIONADO CAPA PRETA DOR 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_fracionado_capa_preta_dor_200g.png"
    },
    {
        "id": 649,
        "name": "PARMESÃO FRACIONADO QUATÁ 160 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_fracionado_quata_160g.png"
    },
    {
        "id": 662,
        "name": "PARMESÃO FRACIONADO SCALA 180 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_fracionado_scala_180g.png"
    },
    {
        "id": 648,
        "name": "PARMESÃO FRACIONADO TIROLEZ 245 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_fracionado_tirolez_245g.png"
    },
    {
        "id": 651,
        "name": "PARMESÃO FRACIONADO VIGOR 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_fracionado_vigor_200g.png"
    },
    {
        "id": 641,
        "name": "PARMESÃO MONTANHÊS TRÊS MARIAS",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_montanhes_tres_marias.png"
    },
    {
        "id": 639,
        "name": "PARMESÃO PREMIUM 12 MESES SCALA 6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_premium_12_meses_scala_6kg.png"
    },
    {
        "id": 657,
        "name": "PARMESÃO RALADO FINO RJR 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_ralado_fino_rjr_1kg.png"
    },
    {
        "id": 660,
        "name": "PARMESÃO RALADO FINO S & A 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_ralado_fino_s_a_1kg.png"
    },
    {
        "id": 654,
        "name": "PARMESÃO RALADO FINO VALEZA 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_ralado_fino_valeza_1kg.png"
    },
    {
        "id": 650,
        "name": "PARMESÃO RALADO FINO VIGOR 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_ralado_fino_vigor_1kg.png"
    },
    {
        "id": 658,
        "name": "PARMESÃO RALADO GROSSO RJR 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_ralado_grosso_rjr_1kg.png"
    },
    {
        "id": 640,
        "name": "PARMESÃO RALADO MÉDIO FILETTINO 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_ralado_medio_filettino_1kg.png"
    },
    {
        "id": 659,
        "name": "PARMESÃO RALADO MÉDIO RJR 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_ralado_medio_rjr_1kg.png"
    },
    {
        "id": 638,
        "name": "PARMESÃO SACHÊ RALADO FAIXA AZUL 10 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_sache_ralado_faixa_azul_10g.png"
    },
    {
        "id": 646,
        "name": "PARMESÃO SACHÊ RALADO ITAMONTÊS 50 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_sache_ralado_itamontes_50g.png"
    },
    {
        "id": 653,
        "name": "PARMESÃO SACHÊ RALADO VIGOR 50 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_sache_ralado_vigor_50g.png"
    },
    {
        "id": 655,
        "name": "PARMESÃO TROPICAL CRISTAL 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_tropical_cristal_5kg.png"
    },
    {
        "id": 636,
        "name": "PARMESÃO TROPICAL SAFIRA 6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Parmesão",
        "image": "src_produtos/images/parmesao_tropical_safira_6kg.png"
    },
    {
        "id": 691,
        "name": "QUEIJO PRATO APOLO 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-apolo-35kg.png"
    },
    {
        "id": 686,
        "name": "QUEIJO PRATO CORONATA 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-coronata-35kg.png"
    },
    {
        "id": 685,
        "name": "QUEIJO PRATO CRISTAL 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-cristal-35kg.png"
    },
    {
        "id": 684,
        "name": "QUEIJO PRATO DA VACA 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-da-vaca-35kg.png"
    },
    {
        "id": 698,
        "name": "QUEIJO PRATO DEALE 2,8 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-deale-28kg.png"
    },
    {
        "id": 693,
        "name": "QUEIJO PRATO ESFÉRICO TIROLEZ 2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-esferico-tirolez-2kg.png"
    },
    {
        "id": 697,
        "name": "QUEIJO PRATO FATIADO PROCESSADO 160 FATIAS VIGOR 2,24 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-fatiado-vigor-224kg.png"
    },
    {
        "id": 689,
        "name": "QUEIJO PRATO FATIADO PROCESSADO 184 FATIAS SCHREIBER 2,27 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-fatiado-schreiber-227kg.png"
    },
    {
        "id": 690,
        "name": "QUEIJO PRATO FATIADO PROCESSADO 192 FATIAS POLENGHI 2,73 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-fatiado-polenghi-273kg.png"
    },
    {
        "id": 696,
        "name": "QUEIJO PRATO FATIADO PROCESSADO SABOR AMERICAN CHEESE 25 FATIAS SCAR 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-fatiado-american-scar-500g.png"
    },
    {
        "id": 695,
        "name": "QUEIJO PRATO FATIADO PROCESSADO SABOR CHEDDAR 25 FATIAS SCAR 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-fatiado-cheddar-scar-500g.png"
    },
    {
        "id": 699,
        "name": "QUEIJO PRATO FATIADO TIROLEZ 150 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-fatiado-tirolez-150g.png"
    },
    {
        "id": 694,
        "name": "QUEIJO PRATO MONTE CASTELO 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-monte-castelo-35kg.png"
    },
    {
        "id": 692,
        "name": "QUEIJO PRATO SCALA 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-scala-35kg.png"
    },
    {
        "id": 688,
        "name": "QUEIJO PRATO TIROLEZ 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-tirolez-35kg.png"
    },
    {
        "id": 687,
        "name": "QUEIJO PRATO TRÊS MARIAS 3,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Prato",
        "image": "src_produtos/images/queijo-prato-tres-marias-35kg.png"
    },
    {
        "id": 770,
        "name": "PROVOLONE APOLO 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-apolo-5kg.png"
    },
    {
        "id": 766,
        "name": "PROVOLONE CRISTAL 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-cristal-5kg.png"
    },
    {
        "id": 771,
        "name": "PROVOLONE GRANDE TIROLEZ 10 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-grande-tirolez.png"
    },
    {
        "id": 765,
        "name": "PROVOLONE PEQUENO TRÊS MARIAS 2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-pequeno-tres-marias.png"
    },
    {
        "id": 769,
        "name": "PROVOLONE SCALA 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-scala-5kg.png"
    },
    {
        "id": 767,
        "name": "PROVOLONE TIROLEZ 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-tirolez.png"
    },
    {
        "id": 764,
        "name": "PROVOLONE TRÊS MARIAS 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-tres-marias.png"
    },
    {
        "id": 768,
        "name": "PROVOLONE TÂNIA 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-tania-5kg.png"
    },
    {
        "id": 774,
        "name": "PROVOLONE YEMA 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolone-yema.png"
    },
    {
        "id": 773,
        "name": "PROVOLONETE SCALA 300 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolonete-scala-300g.png"
    },
    {
        "id": 772,
        "name": "PROVOLONETE TIROLEZ 335 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Provolone",
        "image": "src_produtos/images/provolonete-tirolez-335g.png"
    },
    {
        "id": 802,
        "name": "REQUEIJÃO CATUPIRY SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-catupiry-sem-amido-1-5kg.png"
    },
    {
        "id": 803,
        "name": "REQUEIJÃO CATUPIRY SEM AMIDO 3,6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-catupiry-sem-amido-3-6kg.png"
    },
    {
        "id": 783,
        "name": "REQUEIJÃO COPO CRIOULO SEM AMIDO 220 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-crioulo-sem-amido-220g.png"
    },
    {
        "id": 787,
        "name": "REQUEIJÃO COPO GRANDE CATUPIRY SEM AMIDO 420 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-grande-catupiry-sem-amido-420g.png"
    },
    {
        "id": 788,
        "name": "REQUEIJÃO COPO GRANDE SCALA SEM AMIDO 380 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-grande-scala-sem-amido-380g.png"
    },
    {
        "id": 789,
        "name": "REQUEIJÃO COPO GRANDE TIROLEZ SEM AMIDO 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-grande-tirolez-sem-amido-400g.png"
    },
    {
        "id": 785,
        "name": "REQUEIJÃO COPO LIGHT TIROLEZ 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-light-tirolez-200g.png"
    },
    {
        "id": 786,
        "name": "REQUEIJÃO COPO POÇOS DE CALDAS SEM AMIDO 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-pocos-de-caldas-sem-amido-200g.png"
    },
    {
        "id": 782,
        "name": "REQUEIJÃO COPO SCALA SEM AMIDO 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-scala-sem-amido-200g.png"
    },
    {
        "id": 790,
        "name": "REQUEIJÃO COPO SUPREMO SEM AMIDO 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-supremo-sem-amido-200g.png"
    },
    {
        "id": 784,
        "name": "REQUEIJÃO COPO TIROLEZ SEM AMIDO 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-copo-tirolez-sem-amido-200g.png"
    },
    {
        "id": 792,
        "name": "REQUEIJÃO CORONATA COM AMIDO 3,6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-coronata-com-amido3.6kg.png"
    },
    {
        "id": 791,
        "name": "REQUEIJÃO CORONATA COM GORDURA VEGETAL E AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-coronata-gordura-vegetal1.5kg.png"
    },
    {
        "id": 799,
        "name": "REQUEIJÃO CORONATA CREMOSO COM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-coronata-cremoso1.5kg.png"
    },
    {
        "id": 793,
        "name": "REQUEIJÃO DANÚBIO SEM AMIDO 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-danubio1kg.png"
    },
    {
        "id": 800,
        "name": "REQUEIJÃO IPANEMA SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-ipanema1.5kg.png"
    },
    {
        "id": 796,
        "name": "REQUEIJÃO PEQUENO CORONATA COM AMIDO 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-coronata-pequeno400g.png"
    },
    {
        "id": 794,
        "name": "REQUEIJÃO QUATÁ SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-quatá1.5kg.png"
    },
    {
        "id": 806,
        "name": "REQUEIJÃO SCALA SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-scala-sem-amido-1-5kg.png"
    },
    {
        "id": 807,
        "name": "REQUEIJÃO SCALA SEM AMIDO 3,6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-scala-sem-amido-3-6kg.png"
    },
    {
        "id": 797,
        "name": "REQUEIJÃO SCALON SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-scalon1,5kg.png"
    },
    {
        "id": 805,
        "name": "REQUEIJÃO TIROLEZ SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-tirolez-sem-amido-1-5kg.png"
    },
    {
        "id": 804,
        "name": "REQUEIJÃO TIROLEZ SEM AMIDO 3,6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-tirolez-sem-amido-3-6kg.png"
    },
    {
        "id": 795,
        "name": "REQUEIJÃO TRADICIONAL CORONATA SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-coronata-tradicional1.5kg.png"
    },
    {
        "id": 798,
        "name": "REQUEIJÃO TRÊS MARIAS SEM AMIDO 1,8 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-tres-marias1.8kg.png"
    },
    {
        "id": 801,
        "name": "REQUEIJÃO YEMA SEM AMIDO 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Requeijão",
        "image": "src_produtos/images/requeijao-yema1.5kg.png"
    },
    {
        "id": 80,
        "name": "ALMÔNDEGA BOVINA PERDIGÃO MONTANA 500G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Almôndega",
        "image": "src_produtos/images/almondega_bovina_perdigao_500g.png"
    },
    {
        "id": 81,
        "name": "ALMÔNDEGA BOVINA SADIA 500G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Almôndega",
        "image": "src_produtos/images/almondega_bovina_sadia_500g.png"
    },
    {
        "id": 79,
        "name": "ALMÔNDEGA BOVINA SEARA 500G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Almôndega",
        "image": "src_produtos/images/almondega_bovina_seara_500g.png"
    },
    {
        "id": 419,
        "name": "ALMÔNDEGA AVES E BOVINA CONGELADA BRASA 1KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Almôndegas",
        "image": "src_produtos/images/almondega_congelada_brasa1kg.png"
    },
    {
        "id": 420,
        "name": "ALMÔNDEGA BOVINA ANGUS CONGELADA BRASA 500 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Almôndegas",
        "image": "src_produtos/images/almondega_brasa_congelada500g.png"
    },
    {
        "id": 447,
        "name": "ACÉM BOVINO RESFRIADO BOI BRASIL 7 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/acem_bovino_resfriado_boi_brasil_7kg.png"
    },
    {
        "id": 462,
        "name": "ALCATRA COM MAMINHA BOVINA RESFRIADA MATOSO 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/alcatra_com_maminha_bovina_resfriada_matoso_5kg.png"
    },
    {
        "id": 460,
        "name": "ARANHA DA ALCATRA BOVINA CONGELADA BOI BRASIL 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/aranha_alcatra_bovina_congelada_boi_brasil_15kg.png"
    },
    {
        "id": 456,
        "name": "ARANHA DA ALCATRA BOVINA RESFRIADA FRIGOSTRELA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/aranha_alcatra_bovina_resfriada_frigostrela_1kg.png"
    },
    {
        "id": 471,
        "name": "CAPA DE FILÉ BOVINA RESFRIADA FRIGOL 2 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/capa_de_file_bovina_resfriada_frigol_2kg.png"
    },
    {
        "id": 434,
        "name": "CAPA DE FILÉ BOVINA RESFRIADA JORDANÉSIA 4 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/capa_de_file_bovina_resfriada_jordanesia_4kg.png"
    },
    {
        "id": 454,
        "name": "CARNE MOÍDA BOVINA CONGELADA ACÉM BOI FORTE 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/carne_moida_bovina_congelada_acem_boi_forte_1kg.png"
    },
    {
        "id": 453,
        "name": "CARNE MOÍDA BOVINA CONGELADA PATINHO BOI FORTE 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/carne_moida_bovina_congelada_patinho_boi_forte_1kg.png"
    },
    {
        "id": 444,
        "name": "CARNE MOÍDA BOVINA GRANDE CONGELADA ALFAMA 2,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/carne_moida_bovina_grande_congelada_alfama_25kg.png"
    },
    {
        "id": 464,
        "name": "CARNE MOÍDA BOVINA LIGHT CONGELADA ALFAMA GOURMET 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/carne_moida_bovina_light_congelada_alfama_gourmet_1kg.png"
    },
    {
        "id": 439,
        "name": "CARNE MOÍDA BOVINA PEQUENA CONGELADA ALFAMA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/carne_moida_bovina_pequena_congelada_alfama_1kg.png"
    },
    {
        "id": 472,
        "name": "CONTRA FILÉ BOVINO RESFRIADO COM NOIX AO PONTO 3 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/contra_file_bovino_resfriado_com_noix_ao_ponto_3kg.png"
    },
    {
        "id": 466,
        "name": "CONTRA FILÉ BOVINO RESFRIADO SEM NOIX FRIGOL 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/contra_file_bovino_resfriado_sem_noix_frigol_5kg.png"
    },
    {
        "id": 437,
        "name": "CORDÃO DO FILÉ MIGNON BOVINO CONGELADO PLENA 2 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/cordao_file_mignon_bovino_congelado_plena_2kg.png"
    },
    {
        "id": 442,
        "name": "CORDÃO DO FILÉ MIGNON BOVINO RESFRIADO FRIGOSTRELA 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/cordao_file_mignon_bovino_resfriado_frigostrela_15kg.png"
    },
    {
        "id": 435,
        "name": "CORDÃO DO FILÉ MIGNON BOVINO RESFRIADO JORDANÉSIA 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/cordao_file_mignon_bovino_resfriado_jordanesia_15kg.png"
    },
    {
        "id": 452,
        "name": "COSTELA BOVINA CONGELADA DESFIADA ALFAMA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/costela_bovina_congelada_desfiada_alfama_1kg.png"
    },
    {
        "id": 468,
        "name": "COSTELA BOVINA CONGELADA EM TIRAS COM OSSO MATOSO 2 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/costela_bovina_congelada_em_tiras_com_osso_matoso_2kg.png"
    },
    {
        "id": 469,
        "name": "COSTELA BOVINA CONGELADA ROJÃO MINGA COM OSSO MATOSO 7 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/costela_bovina_congelada_rojao_minga_com_osso_matoso_7kg.png"
    },
    {
        "id": 455,
        "name": "COXÃO DURO BOVINO RESFRIADO BOI BRASIL 4 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/coxao_duro_bovino_resfriado_boi_brasil_4kg.png"
    },
    {
        "id": 463,
        "name": "COXÃO DURO BOVINO RESFRIADO MATOSO 4 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/coxao_duro_bovino_resfriado_matoso_4kg.png"
    },
    {
        "id": 451,
        "name": "COXÃO MOLE BOVINO RESFRIADO BOI BRASIL 9 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/coxao_mole_bovino_resfriado_boi_brasil_9kg.png"
    },
    {
        "id": 461,
        "name": "COXÃO MOLE BOVINO RESFRIADO MATOSO 7 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/coxao_mole_bovino_resfriado_matoso_7kg.png"
    },
    {
        "id": 433,
        "name": "COXÃO MOLE BOVINO RESFRIADO NOSSO BEEF FRIGO NOSSO 8 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/coxao_mole_bovino_resfriado_nosso_beef_8kg.png"
    },
    {
        "id": 470,
        "name": "CUPIM BOVINO CONGELADO \"TIPO A\" RAMAX 2 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/cupim_bovino_congelado_tipo_a_ramax_2kg.png"
    },
    {
        "id": 432,
        "name": "CUPIM BOVINO CONGELADO DESFIADO ALFAMA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/cupim_bovino_congelado_desfiado_alfama_1kg.png"
    },
    {
        "id": 446,
        "name": "CUPIM BOVINO CONGELADO TIPO B BOI BRASIL 3 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/cupim_bovino_congelado_tipo_b_boi_brasil_3kg.png"
    },
    {
        "id": 458,
        "name": "FILÉ MIGNON BOVINO RESFRIADO \"3 / 4\" SEM CORDÃO BOI BRASIL 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/file_mignon_bovino_resfriado_34_sem_cordao_boi_brasil_15kg.png"
    },
    {
        "id": 474,
        "name": "FILÉ MIGNON BOVINO RESFRIADO \"4 / 5\" SEM CORDÃO ESTRELA NOVILHA JOVEM 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/file_mignon_bovino_resfriado_4_5_sem_cordao_estrela_novilha_jovem_15kg.png"
    },
    {
        "id": 441,
        "name": "FILÉ MIGNON BOVINO RESFRIADO 3/4 SEM CORDÃO FRIGOSTRELA 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/file_mignon_bovino_resfriado_frigostrela_15kg.png"
    },
    {
        "id": 448,
        "name": "FRALDINHA BOVINA RESFRIADA BOI BRASIL 1,2 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/fraldinha_bovina_resfriada_boi_brasil_12kg.png"
    },
    {
        "id": 465,
        "name": "FÍGADO BOVINO CONGELADO FRIGOL 6 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/figado_bovino_congelado_frigol_6kg.png"
    },
    {
        "id": 467,
        "name": "LAGARTO BOVINO RESFRIADO MATOSO 3 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/lagarto_bovino_resfriado_matoso_3kg.png"
    },
    {
        "id": 473,
        "name": "MAMINHA DA ALCATRA BOVINA RESFRIADA FRIGOL 1,3 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/maminha_da_alcatra_bovina_resfriada_frigol_13kg.png"
    },
    {
        "id": 440,
        "name": "MIOLO DA ALCATRA BOVINA RESFRIADO PLENA 4 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/miolo_alcatra_bovina_resfriado_plena_4kg.png"
    },
    {
        "id": 457,
        "name": "PALETA BOVINA RESFRIADA SEM OSSO E SEM MÚSCULO BOI BRASIL 9 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/paleta_bovina_resfriada_sem_osso_musculo_boi_brasil_9kg.png"
    },
    {
        "id": 436,
        "name": "PALETA BOVINA RESFRIADA SEM OSSO E SEM MÚSCULO JORDANÉSIA 8 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/paleta_bovina_resfriada_sem_osso_jordanesia_8kg.png"
    },
    {
        "id": 443,
        "name": "PASTRAMI BOVINO COZIDO E DEFUMADO CERATTI 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/pastrami_bovino_defumado_ceratti_15kg.png"
    },
    {
        "id": 438,
        "name": "PATINHO BOVINO RESFRIADO PLENA 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/patinho_bovino_resfriado_plena_5kg.png"
    },
    {
        "id": 445,
        "name": "PEITO BOVINO RESFRIADO SEM OSSO FRIBOI 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/peito_bovino_resfriado_sem_osso_friboi_5kg.png"
    },
    {
        "id": 450,
        "name": "PEITO BOVINO RESFRIADO SEM OSSO GOLD BEEF 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/peito_bovino_resfriado_sem_osso_gold_beef_5kg.png"
    },
    {
        "id": 431,
        "name": "PICANHA BOVINA RESFRIADA DEFUMADA CERATTI 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/picanha_bovina_resfriada_defumada_ceratti_1kg.png"
    },
    {
        "id": 459,
        "name": "PICANHA BOVINA RESFRIADA TIPO A BOI BRASIL 1,2 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/picanha_bovina_resfriada_tipo_a_boi_brasil_12kg.png"
    },
    {
        "id": 449,
        "name": "RABO BOVINO CONGELADO BOI BRASIL 1,5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Bovina",
        "image": "src_produtos/images/rabo_bovino_congelado_boi_brasil_15kg.png"
    },
    {
        "id": 430,
        "name": "CARNE DE SOL BOVINA CONGELADA DESFIADA ALFAMA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_de_sol_bovina_congelada_desfiada_alfama_1kg.png"
    },
    {
        "id": 428,
        "name": "CARNE SECA BOVINA CONGELADA DESFIADA ALFAMA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_congelada_desfiada_alfama_1kg.png"
    },
    {
        "id": 421,
        "name": "CARNE SECA BOVINA DESFIADA REFOGADA TEMPERADA RG 300 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_desfiada_refogada_rg_300g.png"
    },
    {
        "id": 425,
        "name": "CARNE SECA BOVINA DIANTEIRO JORDANÉSIA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_dianteiro_jordanesia_1kg.png"
    },
    {
        "id": 424,
        "name": "CARNE SECA BOVINA GRANDE DIANTEIRO JORDANÉSIA 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_grande_dianteiro_jordanesia_5kg.png"
    },
    {
        "id": 423,
        "name": "CARNE SECA BOVINA GRANDE DIANTEIRO REAL SABOR 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_grande_dianteiro_real_sabor_5kg.png"
    },
    {
        "id": 427,
        "name": "CARNE SECA BOVINA GRANDE TRASEIRO JORDANÉSIA 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_grande_traseiro_jordanesia_5kg.png"
    },
    {
        "id": 426,
        "name": "CARNE SECA BOVINA GRANDE TRASEIRO REAL SABOR 5 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_grande_traseiro_real_sabor_5kg.png"
    },
    {
        "id": 422,
        "name": "CARNE SECA BOVINA PEQUENA TRASEIRO REAL SABOR 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Carne Seca",
        "image": "src_produtos/images/carne_seca_bovina_pequena_traseiro_real_sabor_1kg.png"
    },
    {
        "id": 487,
        "name": "HAMBÚRGUER MÉDIO DE CARNE DE FRANGO E CARNE SUÍNA E CARNE BOVINA FAROESTE BURGER AURORA 90 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_medio_frango_suina_bovina_faroeste_aurora_90g.png"
    },
    {
        "id": 476,
        "name": "HAMBÚRGUER PEQUENO DE CARNE DE FRANGO CARNE SUÍNA E CARNE BOVINA FAROESTE BURGER AURORA 56 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_pequeno_frango_suina_bovina_aurora_56g.png"
    },
    {
        "id": 488,
        "name": "HAMBÚRGUER DE CARNE BOVINA COSTELA MATURATTA FRIBOI 180 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_costela_maturatta_friboi_180g.png"
    },
    {
        "id": 491,
        "name": "HAMBÚRGUER DE CARNE BOVINA FRALDINHA MATURATTA FRIBOI 180 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_fraldinha_maturatta_friboi_180g.png"
    },
    {
        "id": 477,
        "name": "HAMBÚRGUER DE CARNE BOVINA MISTER BEEF 100 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_carne_bovina_mister_beef_100g.png"
    },
    {
        "id": 490,
        "name": "HAMBÚRGUER DE CARNE BOVINA PICANHA MATURATTA FRIBOI 180 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_picanha_maturatta_friboi_180g.png"
    },
    {
        "id": 475,
        "name": "HAMBÚRGUER DE CARNE BOVINA SABOR PICANHA MISTER BEEF 120 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_carne_bovina_picanha_mister_beef_120g.png"
    },
    {
        "id": 486,
        "name": "HAMBÚRGUER DE CARNE DE FRANGO E CARNE SUÍNA REZENDE 56 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_frango_suina_rezende_56g.png"
    },
    {
        "id": 493,
        "name": "HAMBÚRGUER DE PROTEÍNA VEGETAL SABOR CARNE INCRÍVEL 113 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_proteina_vegetal_incrivel_113g.png"
    },
    {
        "id": 483,
        "name": "HAMBÚRGUER GRANDE DE CARNE BOVINA E AVES SABOR PICANHA BRASA BURGUERS 120 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_grande_picanha_brasa_120g.png"
    },
    {
        "id": 480,
        "name": "HAMBÚRGUER GRANDE DE CARNE BOVINA E AVES TRADICIONAL BRASA BURGUERS 120 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_grande_tradicional_brasa_120g.png"
    },
    {
        "id": 495,
        "name": "HAMBÚRGUER GRANDE DE CARNE BOVINA GOURMET MISTER BEEF 150 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_grande_gourmet_mister_beef_150g.png"
    },
    {
        "id": 485,
        "name": "HAMBÚRGUER MÉDIO DE CARNE BOVINA COSTELA ALFAMA 150 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_medio_costela_alfama_150g.png"
    },
    {
        "id": 484,
        "name": "HAMBÚRGUER MÉDIO DE CARNE BOVINA E AVES SABOR PICANHA BRASA BURGUERS 90 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_medio_picanha_brasa_90g.png"
    },
    {
        "id": 482,
        "name": "HAMBÚRGUER MÉDIO DE CARNE BOVINA E AVES TRADICIONAL BRASA BURGUERS 90 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_medio_tradicional_brasa_90g.png"
    },
    {
        "id": 494,
        "name": "HAMBÚRGUER MÉDIO DE CARNE DE AVES E BOVINA COM SOJA MISTER BEEF 90 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_medio_aves_bovina_soja_mister_beef_90g.png"
    },
    {
        "id": 481,
        "name": "HAMBÚRGUER PEQUENO DE CARNE BOVINA E AVES TRADICIONAL BRASA BURGUERS 56 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_pequeno_tradicional_brasa_56g.png"
    },
    {
        "id": 478,
        "name": "HAMBÚRGUER PEQUENO DE CARNE DE AVES E BOVINA COM SOJA MISTER BEEF 56 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_pequeno_aves_bovina_soja_mister_beef_56g.png"
    },
    {
        "id": 479,
        "name": "HAMBÚRGUER MÉDIO DE CARNE DE FRANGO E CARNE BOVINA TEXAS BURGER SEARA 90 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_medio_frango_bovina_texas_seara_90g.png"
    },
    {
        "id": 492,
        "name": "HAMBÚRGUER PEQUENO DE CARNE DE FRANGO E CARNE BOVINA TEXAS BURGUER SEARA 56 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/hamburguer_pequeno_frango_bovina_texas_seara_56g.png"
    },
    {
        "id": 489,
        "name": "QUEIJO CRISPY BURGER SEARA GOURMET 100 G",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Hambúrguer",
        "image": "src_produtos/images/queijo_crispy_burger_seara_gourmet_100g.png"
    },
    {
        "id": 496,
        "name": "PICANHA SUÍNA CONGELADA TEMPERADA PAMPLONA 1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Picanha Suína",
        "image": "src_produtos/images/picanha_suína_congelada_temperada_pamplona.png"
    },
    {
        "id": 501,
        "name": "PICANHA SUÍNA TEMPERADA CONGELADA PRIETO 1KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Picanha Suína",
        "image": "src_produtos/images/picanha_suina_prieto1kg.png"
    },
    {
        "id": 497,
        "name": "PICANHA SUÍNA TEMPERADA SWIFT 1.2 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Picanha Suína",
        "image": "src_produtos/images/picanha_suina_swift.png"
    },
    {
        "id": 503,
        "name": "PICANHA SUINA SADIA 1,1KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Picanha Suína",
        "image": "src_produtos/images/picanha_suina_sadia11kg.png"
    },
    {
        "id": 498,
        "name": "PICANHA SUÍNA TEMPERADA SEARA GOURMET 1,1 KG",
        "description": "",
        "category": "Proteinas",
        "subcategory": "Picanha Suína",
        "image": "src_produtos/images/picanha_suina_seara_gourmet_11kg.png"
    },
    {
        "id": 525,
        "name": "BISTECA SUÍNA AURORA CONGELADA 1KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Bisteca",
        "image": "src_produtos/images/bisteca_aurora.png"
    },
    {
        "id": 523,
        "name": "BISTECA SUÍNA CONGELADA FRIMESA",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Bisteca",
        "image": "src_produtos/images/bisteca_frimesa.png"
    },
    {
        "id": 524,
        "name": "BISTECA SUÍNA CONGELADA PAMPLONA",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Bisteca",
        "image": "src_produtos/images/bisteca_pamplona.png"
    },
    {
        "id": 526,
        "name": "BISTECA SUÍNA SADIA CONGELADA 800G",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Bisteca",
        "image": "src_produtos/images/bisteca_sadia.png"
    },
    {
        "id": 513,
        "name": "COSTELA SUÍNA CONGELADA COM OSSO AURORA 1,5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Costela Suína",
        "image": "src_produtos/images/costela_suina_aurora_1_5kg.png"
    },
    {
        "id": 515,
        "name": "COSTELA SUÍNA CONGELADA COM OSSO MY PORK 2 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Costela Suína",
        "image": "src_produtos/images/costela_suina_my_pork_2kg.png"
    },
    {
        "id": 514,
        "name": "COSTELA SUÍNA CONGELADA TEMPERADA PAMPLONA 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Costela Suína",
        "image": "src_produtos/images/costela_suina_pamplona_temperada_1kg.png"
    },
    {
        "id": 516,
        "name": "COSTELA SUÍNA SALGADA REFFINATO 5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Costela Suína",
        "image": "src_produtos/images/costela_suina_salgada_reffinato_5kg.png"
    },
    {
        "id": 517,
        "name": "COSTELA SUÍNA TEMPERADA SADIA 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Costela Suína",
        "image": "src_produtos/images/costela_suina_sadia1kg.png"
    },
    {
        "id": 560,
        "name": "FILÉ DE MEIO PEITO DE FRANGO CONGELADO SEM OSSO SEM PELE SEM SASSAMI JAGUÁ 2 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filé de Frango",
        "image": "src_produtos/images/file_meio_peito_frango_jagua_2kg.png"
    },
    {
        "id": 558,
        "name": "FILÉ DE MEIO PEITO DE FRANGO CONGELADO SEM OSSO SEM PELE SEM SASSAMI SUBLIME SULL",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filé de Frango",
        "image": "src_produtos/images/file_meio_peito_frango_sublime.png"
    },
    {
        "id": 556,
        "name": "FILÉ DE PEITO DE FRANGO CONGELADO COZIDO DESFIADO E TEMPERADO PIF PAF 4 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filé de Frango",
        "image": "src_produtos/images/file_peito_frango_pifpaf_4kg.png"
    },
    {
        "id": 559,
        "name": "FILÉ DE PEITO DE FRANGO CONGELADO SEM OSSO SEM PELE COM SASSAMI JAGUÁ",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filé de Frango",
        "image": "src_produtos/images/file_peito_frango_sassami_jagua.png"
    },
    {
        "id": 557,
        "name": "FILÉ DE PEITO DE FRANGO CONGELADO SEM OSSO SEM PELE SEM SASSAMI CANÇÃO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filé de Frango",
        "image": "src_produtos/images/file_peito_frango_cancao.png"
    },
    {
        "id": 562,
        "name": "FILEZINHO SASSAMI DE FRANGO CONGELADO AURORA 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filézinho Sassami",
        "image": "src_produtos/images/filezinho_aurora_1kg.png"
    },
    {
        "id": 566,
        "name": "FILEZINHO SASSAMI DE FRANGO CONGELADO DIPLOMATA",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filézinho Sassami",
        "image": "src_produtos/images/filezinho_diplomata.png"
    },
    {
        "id": 563,
        "name": "FILEZINHO SASSAMI DE FRANGO CONGELADO JAGUÁ 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filézinho Sassami",
        "image": "src_produtos/images/filezinho_jagua_1kg.png"
    },
    {
        "id": 567,
        "name": "FILEZINHO SASSAMI DE FRANGO CONGELADO RICO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filézinho Sassami",
        "image": "src_produtos/images/filezinho_rico.png"
    },
    {
        "id": 564,
        "name": "FILEZINHO SASSAMI DE FRANGO CONGELADO TEMPERADOS E EMPANADOS BAITA 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filézinho Sassami",
        "image": "src_produtos/images/filezinho_baita_1kg.png"
    },
    {
        "id": 565,
        "name": "FILEZINHO SASSAMI DE FRANGO CONGELADO TEMPERADOS E EMPANADOS LAR 1,5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filézinho Sassami",
        "image": "src_produtos/images/filezinho_lar_1_5kg.png"
    },
    {
        "id": 561,
        "name": "FILEZINHO SASSAMI DE FRANGO CONGELADO PERDIGÃO 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Filézinho Sassami",
        "image": "src_produtos/images/filezinho_perdigao_1kg.png"
    },
    {
        "id": 543,
        "name": "ASAS DE FRANGO CONGELADAS COPACOL",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/asas_frango_copacol.png"
    },
    {
        "id": 539,
        "name": "CHICKEN DE FRANGO CONGELADO EMPANADO BAITA 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/chicken_frango_empanado_baita_1kg.png"
    },
    {
        "id": 542,
        "name": "CORAÇÃO DE FRANGO CONGELADO A GOSTO 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/coracao_frango_a_gosto_1kg.png"
    },
    {
        "id": 531,
        "name": "COXAS E SOBRECOXAS DE FRANGO CONGELADAS COM OSSO ADORO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/coxa_sobrecoxa_frango_osso_adoro.png"
    },
    {
        "id": 547,
        "name": "COXAS E SOBRECOXAS DE FRANGO CONGELADAS COM OSSO ALLIZ",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/coxa_sobrecoxa_frango_alliz.png"
    },
    {
        "id": 548,
        "name": "COXAS E SOBRECOXAS DE FRANGO CONGELADAS COM OSSO CANÇÃO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/coxa_sobrecoxa_frango_cancao.png"
    },
    {
        "id": 549,
        "name": "COXAS E SOBRECOXAS DE FRANGO CONGELADAS COM OSSO RICO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/coxa_sobrecoxa_frango_rico.png"
    },
    {
        "id": 553,
        "name": "COXAS E SOBRECOXAS DE FRANGO TEMPERADAS CONGELADAS COM OSSO FRANGÃO FOODS",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/coxa_sobrecoxa_temperada_frangao.png"
    },
    {
        "id": 544,
        "name": "COXINHAS DAS ASAS DE FRANGO CONGELADAS ADORO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/coxinhas_asas_frango_adoro.png"
    },
    {
        "id": 537,
        "name": "FILÉ DE COXAS E SOBRECOXAS DE FRANGO CONGELADO ITABOM",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/file_coxa_sobrecoxa_itabom.png"
    },
    {
        "id": 545,
        "name": "FRANGO A PASSARINHO CONGELADO TEMPERADO ADORO 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/frango_passarinho_temperado_adoro_1kg.png"
    },
    {
        "id": 540,
        "name": "FRANGO A PASSARINHO CONGELADO TEMPERADO ITABOM",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/frango_passarinho_temperado_itabom.png"
    },
    {
        "id": 536,
        "name": "FRANGO INTEIRO CONGELADO ALILZ 2,5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/frango_inteiro_congelado_alilz_25kg.png"
    },
    {
        "id": 552,
        "name": "FRANGO INTEIRO CONGELADO NUTRIBEM 2,9 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/frango_inteiro_nutribem_2_9kg.png"
    },
    {
        "id": 550,
        "name": "FRANGO SEM MIÚDOS CARCAÇA CONGELADO ALLIZ 1,7 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/frango_sem_miudos_alliz.png"
    },
    {
        "id": 545,
        "name": "HAMBÚRGUER DE CARNE DE FRANGO EMPANADO LAR 100 G",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/hamburguer_frango_lar_100g.png"
    },
    {
        "id": 533,
        "name": "MEIO DAS ASAS DE FRANGO TULIPAS CONGELADAS TEMPERADAS FRANGÃO FOODS",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/tulipa_frango_temperado_frangao.png"
    },
    {
        "id": 538,
        "name": "PEITO DE FRANGO CONGELADO COM OSSO ADORO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/peito_frango_osso_adoro.png"
    },
    {
        "id": 532,
        "name": "PEITO DE FRANGO CONGELADO COM OSSO ALILZ",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/peito_frango_osso_alilz.png"
    },
    {
        "id": 546,
        "name": "PEITO DE FRANGO CONGELADO COZIDO DESFIADO ALFAMA 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/peito_frango_desfiado_alfama_1kg.png"
    },
    {
        "id": 534,
        "name": "PEITO DE FRANGO DEFUMADO SEM OSSO CERATTI 2,3 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/peito_frango_defumado_ceratti_23kg.png"
    },
    {
        "id": 551,
        "name": "BURGER CHICKEN DE FRANGO CONGELADO EMPANADO SUPREME SEARA 2 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/burger_chicken_frango_seara_2kg.png"
    },
    {
        "id": 535,
        "name": "CHICKEN DE FRANGO CONGELADO EMPANADO SUPREME SEARA 2,5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/chicken_empanado_supreme_seara_25kg.png"
    },
    {
        "id": 554,
        "name": "ISCAS DE FRANGO APIMENTADAS EMPANADAS CONGELADAS SEARA 300 G",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/iscas_frango_apimentadas_seara_300g.png"
    },
    {
        "id": 555,
        "name": "ISCAS DE FRANGO EMPANADAS CONGELADAS SEARA 900 G",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/iscas_frango_seara_900g.png"
    },
    {
        "id": 541,
        "name": "SOBRECOXAS DE FRANGO CONGELADAS COM OSSO ADORO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Frango",
        "image": "src_produtos/images/sobrecoxa_frango_osso_adoro.png"
    },
    {
        "id": 504,
        "name": "LOMBO CANADENSE AURORA 750 G",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Lombo Suíno",
        "image": "src_produtos/images/lombo_canadense_aurora_750g.png"
    },
    {
        "id": 506,
        "name": "LOMBO CANADENSE CERATTI 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Lombo Suíno",
        "image": "src_produtos/images/lombo_canadense_ceratti_1kg.png"
    },
    {
        "id": 508,
        "name": "LOMBO CANADENSE LACTOFRIOS 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Lombo Suíno",
        "image": "src_produtos/images/lombo_canadense_lactofrios_1kg.png"
    },
    {
        "id": 505,
        "name": "LOMBO CANADENSE NOBRE 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Lombo Suíno",
        "image": "src_produtos/images/lombo_canadense_nobre_1kg.png"
    },
    {
        "id": 507,
        "name": "LOMBO CANADENSE SEARA GOURMET 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Lombo Suíno",
        "image": "src_produtos/images/lombo_canadense_seara_gourmet_1kg.png"
    },
    {
        "id": 519,
        "name": "PERNIL SUINO AURORA CONGELADO COM OSSO 7KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Pernil",
        "image": "src_produtos/images/pernil_aurora7kg.png"
    },
    {
        "id": 521,
        "name": "CUBOS DE PERNIL SUÍNO SWIFT",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Pernil",
        "image": "src_produtos/images/pernil_cubos_swift.png"
    },
    {
        "id": 518,
        "name": "PERNIL SUÍNO CONGELADO SEM OSSO TEMPERADO PAMPLONA 1 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Pernil",
        "image": "src_produtos/images/Pernil_pamplona1kg.png"
    },
    {
        "id": 522,
        "name": "PERNIL SUÍNO SEM OSSO AO VINHO ESPUMANTE SADIA 3,6KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Pernil",
        "image": "src_produtos/images/pernil_sadia_ao_espumante3.6kg.png"
    },
    {
        "id": 520,
        "name": "SADIA PERNIL DESOSSADO TEMPERADO",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Pernil",
        "image": "src_produtos/images/pernil_desossado_sadia.png"
    },
    {
        "id": 528,
        "name": "PEITO DE PERU REZENDE 2,5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Peru",
        "image": "src_produtos/images/peito_peru_rezende_2_5kg.png"
    },
    {
        "id": 527,
        "name": "BLANQUET DE PERU SADIA 1,75 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Peru",
        "image": "src_produtos/images/blanquet_peru_sadia_1_75kg.png"
    },
    {
        "id": 529,
        "name": "PEITO DE PERU SADIA 2,5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Peru",
        "image": "src_produtos/images/peito_peru_sadia_2_5kg.png"
    },
    {
        "id": 530,
        "name": "PEITO DE PERU SEARA 2,5 KG",
        "description": "",
        "category": "Proteínas",
        "subcategory": "Peru",
        "image": "src_produtos/images/eito_peru_seara_2_5kg.png"
    },
    {
        "id": 812,
        "name": "CREAM CHEESE CATUPIRY 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-catupiry-1-2kg.png"
    },
    {
        "id": 816,
        "name": "CREAM CHEESE COROCHEESE CORONATA 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-corocheese-coronata-1-2kg.png"
    },
    {
        "id": 808,
        "name": "CREAM CHEESE DANÚBIO 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-danubio-1kg.png"
    },
    {
        "id": 809,
        "name": "CREAM CHEESE SACHÊ DANÚBIO 18 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-sache-danubio-18g.png"
    },
    {
        "id": 821,
        "name": "CREAM CHEESE IPANEMA 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-ipanema-1-2kg.png"
    },
    {
        "id": 815,
        "name": "CREAM CHEESE PHILADELPHIA 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-philadelphia-1-5kg.png"
    },
    {
        "id": 819,
        "name": "CREAM CHEESE PHILADELPHIA 3,6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-philadelphia-3-6kg.png"
    },
    {
        "id": 820,
        "name": "CREAM CHEESE PEQUENO POLENGHI 300 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-pequeno-polenghi-300g.png"
    },
    {
        "id": 810,
        "name": "CREAM CHEESE POLENGHI",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-polenghi.png"
    },
    {
        "id": 824,
        "name": "CREAM CHEESE POLENGHI 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-polenghi1kg.png"
    },
    {
        "id": 823,
        "name": "CREAM CHEESE SACHÊ PRESIDENT 18 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-president-sache.png"
    },
    {
        "id": 811,
        "name": "CREAM CHEESE QUATÁ 1,01 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-quata-1-01kg.png"
    },
    {
        "id": 818,
        "name": "CREAM CHEESE PEQUENO SCALA 150 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-pequeno-scala-150g.png"
    },
    {
        "id": 814,
        "name": "CREAM CHEESE SCALA 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-scala-1-2kg.png"
    },
    {
        "id": 817,
        "name": "CREAM CHEESE SCALA 3,6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-scala-3-6kg.png"
    },
    {
        "id": 822,
        "name": "CREAM CHEESE SCALON 1,02 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-scalon-1-02kg.png"
    },
    {
        "id": 813,
        "name": "CREAM CHEESE SULMINAS 1,2 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Cream Cheese",
        "image": "src_produtos/images/cream-cheese-sulminas-1-2kg.png"
    },
    {
        "id": 830,
        "name": "CREME CULINÁRIO DAUS 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/creme-culinario-daus-1kg.png"
    },
    {
        "id": 829,
        "name": "CREME DE LEITE GRANDE FOOD SERVICE ITALAC 1,030 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/creme-de-leite-grande-food-service-italac-1030kg.png"
    },
    {
        "id": 825,
        "name": "CREME DE LEITE ITALAC 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/creme-de-leite-italac-200g.png"
    },
    {
        "id": 828,
        "name": "CREME DE LEITE JUSSARA 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/creme-de-leite-jussara-200g.png"
    },
    {
        "id": 826,
        "name": "BASE CULINÁRIA LECO 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/base-culinaria-leco-1kg.png"
    },
    {
        "id": 831,
        "name": "MISTURA LÁCTEA CREME DE LEITE MOCOCA 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/mistura-lactea-creme-de-leite-mococa-200g.png"
    },
    {
        "id": 832,
        "name": "CREME DE LEITE GRANDE FOOD SERVICE PIRACANJUBA 1,030 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/creme-de-leite-grande-food-service-piracanjuba-1030kg.png"
    },
    {
        "id": 827,
        "name": "CREME DE LEITE PIRACANJUBA 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/creme-de-leite-piracanjuba-200g.png"
    },
    {
        "id": 833,
        "name": "CREME DE LEITE QUATÁ 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Creme de Leite",
        "image": "src_produtos/images/creme-de-leite-quata-200g.png"
    },
    {
        "id": 863,
        "name": "DOCE DE LEITE FRIMESA 4,8 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Doce de Leite",
        "image": "src_produtos/images/doce-de-leite-frimesa-4-8kg.png"
    },
    {
        "id": 865,
        "name": "DOCE DE LEITE TRADICIONAL FRIMESA 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Doce de Leite",
        "image": "src_produtos/images/doce-de-leite-tradicional-frimesa-400g.png"
    },
    {
        "id": 864,
        "name": "DOCE DE LEITE NESTLÉ 1,01 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Doce de Leite",
        "image": "src_produtos/images/doce-de-leite-nestle-1-01kg.png"
    },
    {
        "id": 862,
        "name": "DOCE DE LEITE SABOR DE MINAS 1,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Doce de Leite",
        "image": "src_produtos/images/doce-de-leite-sabor-de-minas-1-5kg.png"
    },
    {
        "id": 866,
        "name": "DOCE DE LEITE LA SERENISSIMA 1 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Doce de Leite",
        "image": "src_produtos/images/doce-de-leite-la-serenissima-1kg.png"
    },
    {
        "id": 860,
        "name": "LEITE CONDENSADO \"INTEGRAL\" ITALAC 395 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-integral-italac-395g.png"
    },
    {
        "id": 853,
        "name": "LEITE CONDENSADO MÉDIO \"SEMIDESNATADO\" ITALAC 395 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-medio-semi-italac-395g.png"
    },
    {
        "id": 849,
        "name": "LEITE CONDENSADO PEQUENO SEMIDESNATADO ITALAC 270 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-pequeno-semi-italac-270g.png"
    },
    {
        "id": 854,
        "name": "LEITE CONDENSADO SEMIDESNATADO FOOD SERVICE ITALAC 2,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-foodservice-italac-2-5kg.png"
    },
    {
        "id": 861,
        "name": "LEITE CONDENSADO GRANDE INTEGRAL ITAMBÉ 1,01 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-grande-integral-itambe-1-01kg.png"
    },
    {
        "id": 859,
        "name": "LEITE CONDENSADO GRANDE INTEGRAL MOCOCA 5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-grande-integral-mococa-5kg.png"
    },
    {
        "id": 858,
        "name": "LEITE CONDENSADO INTEGRAL MOCOCA 2,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-integral-mococa-2-5kg.png"
    },
    {
        "id": 857,
        "name": "LEITE CONDENSADO PEQUENO INTEGRAL MOCOCA 395 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-pequeno-integral-mococa-395g.png"
    },
    {
        "id": 856,
        "name": "MISTURA LÁCTEA CONDENSADA PEQUENA MOCOCA 395 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/mistura-lactea-condensada-mococa-395g.png"
    },
    {
        "id": 851,
        "name": "LEITE CONDENSADO GRANDE INTEGRAL MOÇA NESTLÉ 2,6 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-grande-integral-moca-nestle-2-6kg.png"
    },
    {
        "id": 850,
        "name": "LEITE CONDENSADO PEQUENO INTEGRAL MOÇA NESTLÉ 395 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-pequeno-integral-moca-nestle-395g.png"
    },
    {
        "id": 852,
        "name": "LEITE CONDENSADO PEQUENO SEMIDESNATADO PIRACANJUBA 270 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-pequeno-semi-piracanjuba-270g.png"
    },
    {
        "id": 855,
        "name": "LEITE CONDENSADO SEMIDESNATADO FOOD SERVICE PIRACANJUBA 2,5 KG",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leite Condensado",
        "image": "src_produtos/images/leite-condensado-foodservice-piracanjuba-2-5kg.png"
    },
    {
        "id": 836,
        "name": "LEITE EM PÓ INTEGRAL ITALAC 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-em-po-integral-italac-400g.png"
    },
    {
        "id": 834,
        "name": "LEITE INTEGRAL ITALAC 1 L",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-integral-italac-1l.png"
    },
    {
        "id": 841,
        "name": "LEITE INTEGRAL ZERO LACTOSE ITALAC 1 L",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-zero-lactose-italac-1l.png"
    },
    {
        "id": 840,
        "name": "LEITE SEMIDESNATADO ITALAC 1 L",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-semi-italac-1l.png"
    },
    {
        "id": 844,
        "name": "LEITE EM PÓ INTEGRAL JUSSARA 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-em-po-integral-jussara-400g.png"
    },
    {
        "id": 838,
        "name": "LEITE INTEGRAL GARRAFA MAX JUSSARA 1 L",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-integral-garrafa-max-jussara-1l.png"
    },
    {
        "id": 837,
        "name": "LEITE INTEGRAL JUSSARA 1 L",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-integral-jussara-1l.png"
    },
    {
        "id": 839,
        "name": "LEITE SEMIDESNATADO ZERO LACTOSE JUSSARA 1 L",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-semi-zero-lactose-jussara-1l.png"
    },
    {
        "id": 835,
        "name": "LEITE EM PÓ INTEGRAL PIRACANJUBA 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-em-po-integral-piracanjuba-400g.png"
    },
    {
        "id": 848,
        "name": "LEITE EM PÓ DESNATADO INSTANTÂNEO LA SERENISSIMA 300 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-em-po-desnatado-instantaneo-la-serenissima-300g.png"
    },
    {
        "id": 847,
        "name": "LEITE EM PÓ INTEGRAL LA SERENISSIMA 400 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Leites",
        "image": "src_produtos/images/leite-em-po-integral-la-serenissima-400g.png"
    },
    {
        "id": 878,
        "name": "MANTEIGA COM SAL COYOTE",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-com-sal-coyote.png"
    },
    {
        "id": 872,
        "name": "MANTEIGA SEM SAL COYOTE",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sem-sal-coyote.png"
    },
    {
        "id": 879,
        "name": "MANTEIGA PEQUENA COM SAL CRIOULO 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-pequena-com-sal-crioulo-200g.png"
    },
    {
        "id": 885,
        "name": "MANTEIGA COM SAL TABLETE DOR 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-pequena-com-sal-dor-200g.png"
    },
    {
        "id": 877,
        "name": "MANTEIGA SEM SAL FRIZZO",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sem-sal-frizzo.png"
    },
    {
        "id": 874,
        "name": "MANTEIGA COM SAL ITALAC 500 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-com-sal-italac-500g.png"
    },
    {
        "id": 873,
        "name": "MANTEIGA COM SAL TRÊS MARIAS",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-com-sal-tres-marias.png"
    },
    {
        "id": 869,
        "name": "MANTEIGA SEM SAL TRÊS MARIAS",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sem-sal-tres-marias.png"
    },
    {
        "id": 875,
        "name": "MANTEIGA SACHÊ COM SAL PRESIDENT 10 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sache-com-sal-president-10g.png"
    },
    {
        "id": 876,
        "name": "MANTEIGA SACHÊ SEM SAL PRESIDENT 10 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sache-sem-sal-president-10g.png"
    },
    {
        "id": 883,
        "name": "MANTEIGA SEM SAL BLEND PASSA QUATRO",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-pequena-sem-sal-blend-passa-quatro.png"
    },
    {
        "id": 868,
        "name": "MANTEIGA SEM SAL SCALA",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sem-sal-scala.png"
    },
    {
        "id": 882,
        "name": "MANTEIGA PEQUENA EXTRA SEM SAL LA SERENISSIMA 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-pequena-extra-sal-serenissima200g.png"
    },
    {
        "id": 884,
        "name": "MANTEIGA COM SAL TABLETE TIROLEZ 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-pequena-com-sal-tablete-tirollez-200g.png"
    },
    {
        "id": 880,
        "name": "MANTEIGA PEQUENA COM SAL TIROLEZ 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-pequena-com-sal-tirollez-200g.png"
    },
    {
        "id": 881,
        "name": "MANTEIGA PEQUENA SEM SAL TIROLEZ 200 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-pequena-sem-sal-tirollez-200g.png"
    },
    {
        "id": 871,
        "name": "MANTEIGA SEM SAL TIROLEZ",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sem-sal-tirollez.png"
    },
    {
        "id": 870,
        "name": "MANTEIGA SACHÊ COM SAL VIGOR 10 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sache-com-sal-vigor-10g.png"
    },
    {
        "id": 867,
        "name": "MANTEIGA SACHÊ SEM SAL VIGOR 10 G",
        "description": "",
        "category": "Laticínios",
        "subcategory": "Manteiga",
        "image": "src_produtos/images/manteiga-sache-sem-sal-vigor-10g.png"
    }
];

// Variáveis globais
let filteredProducts = [...productsData];
let currentCategory = '';

// Elementos DOM
const productsGrid = document.getElementById('productsGrid');
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const suggestionsList = document.getElementById('suggestionsList');
const noResults = document.getElementById('noResults');
const searchTerm = document.getElementById('searchTerm');

// Função para detectar dispositivos móveis
function isMobileDevice() {
    return window.innerWidth <= 768 || 
           /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Função para inicializar eventos do Mega Menu
function initializeMegaMenu() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(navItem => {
        const megaMenu = navItem.querySelector('.mega-menu');
        const navButton = navItem.querySelector('.nav-button');
        
        if (isMobileDevice()) {
            // Comportamento para dispositivos móveis
            let isMenuOpen = false;
            
            // Evento de clique no botão de navegação
            navButton.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                // Fechar todos os outros menus
                navItems.forEach(otherItem => {
                    if (otherItem !== navItem) {
                        const otherMenu = otherItem.querySelector('.mega-menu');
                        otherMenu.style.opacity = '0';
                        otherMenu.style.visibility = 'hidden';
                    }
                });
                
                // Alternar o menu atual
                if (isMenuOpen) {
                    megaMenu.style.opacity = '0';
                    megaMenu.style.visibility = 'hidden';
                    isMenuOpen = false;
                } else {
                    megaMenu.style.opacity = '1';
                    megaMenu.style.visibility = 'visible';
                    isMenuOpen = true;
                }
            });
            
            // Fechar menu ao clicar em um link
            const menuLinks = megaMenu.querySelectorAll('a');
            menuLinks.forEach(link => {
                link.addEventListener('click', function() {
                    megaMenu.style.opacity = '0';
                    megaMenu.style.visibility = 'hidden';
                    isMenuOpen = false;
                });
            });
            
            // Fechar menu ao clicar fora
            document.addEventListener('click', function(e) {
                if (!navItem.contains(e.target)) {
                    megaMenu.style.opacity = '0';
                    megaMenu.style.visibility = 'hidden';
                    isMenuOpen = false;
                }
            });
            
        } else {
            // Comportamento para desktop (mantém o hover original)
            navItem.addEventListener('mouseenter', function() {
                megaMenu.style.opacity = '1';
                megaMenu.style.visibility = 'visible';
            });

            navItem.addEventListener('click', function() {
                megaMenu.style.opacity = '0';
                megaMenu.style.visibility = 'hidden';
            });
            
            navItem.addEventListener('mouseleave', function() {
                megaMenu.style.opacity = '0';
                megaMenu.style.visibility = 'hidden';
            });
        }
    });
}

// Função para renderizar produtos
function renderProducts(products) {
    if (products.length === 0) {
        productsGrid.innerHTML = '';
        return;
    }

    const productsHTML = products.map(product => `
        <div class="product-card" onclick="viewProductDetails(${product.id})">
            <div class="product-image">
                <div class="image_card">
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;" onerror="this.style.display='none'; this.parentElement.innerHTML='<span>Imagem não disponível</span>';">
                </div>
            </div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description || 'Produto de qualidade premium'}</p>
                <div class="product-footer">
                    <span class="product-category">${product.subcategory || product.category}</span>
                    <button class="product-button" onclick="event.stopPropagation(); viewProductDetails(${product.id})">
                        Ver detalhes
                    </button>
                </div>
            </div>
        </div>
    `).join('');

    productsGrid.innerHTML = productsHTML;
}

// Função para filtrar produtos por categoria
function filterByCategory(category, subcategory = '') {
    currentCategory = category;
    
    if (subcategory) {
        filteredProducts = productsData.filter(product => 
            product.category.toLowerCase() === category.toLowerCase() && 
            product.subcategory.toLowerCase().includes(subcategory.toLowerCase())
        );
    } else {
        filteredProducts = productsData.filter(product => 
            product.category.toLowerCase() === category.toLowerCase()
        );
    }
    
    renderProducts(filteredProducts);
    updateNoResults('');
    
    // Scroll suave para a seção de produtos
    const productsSection = document.querySelector('.products-section');
    if (productsSection) {
        smoothScrollTo(productsSection);
    }
}

// Função para buscar produtos
function searchProducts(query) {
    if (!query.trim()) {
        filteredProducts = [...productsData];
        renderProducts(filteredProducts);
        updateNoResults('');
        return;
    }

    const searchTerm = query.toLowerCase();
    filteredProducts = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.subcategory.toLowerCase().includes(searchTerm) ||
        (product.description && product.description.toLowerCase().includes(searchTerm))
    );

    renderProducts(filteredProducts);
    
    if (filteredProducts.length === 0) {
        updateNoResults(query);
    } else {
        updateNoResults('');
    }
}

// Função para mostrar sugestões de busca
function showSearchSuggestions(query) {
    if (!query.trim()) {
        searchSuggestions.classList.remove('show');
        return;
    }

    const searchTerm = query.toLowerCase();
    const suggestions = productsData.filter(product => 
        product.name.toLowerCase().includes(searchTerm) ||
        product.category.toLowerCase().includes(searchTerm) ||
        product.subcategory.toLowerCase().includes(searchTerm)
    ).slice(0, 5);

    if (suggestions.length === 0) {
        searchSuggestions.classList.remove('show');
        return;
    }

    const suggestionsHTML = suggestions.map(product => `
        <div class="suggestion-item" onclick="selectSuggestion('${product.name}')">
            <div class="suggestion-image">
                <div class="suggestion-image-img" >
                    <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
                </div>
            </div>
            <div class="suggestion-info">
                <h5>${product.name}</h5>
                <p>${product.subcategory || product.category}</p>
            </div>
        </div>
    `).join('');

    suggestionsList.innerHTML = suggestionsHTML;
    searchSuggestions.classList.add('show');
}

// Função para selecionar sugestão
function selectSuggestion(productName) {
    searchInput.value = productName;
    searchProducts(productName);
    searchSuggestions.classList.remove('show');
}

// Função para limpar busca
function clearSearch() {
    searchInput.value = '';
    filteredProducts = [...productsData];
    renderProducts(filteredProducts);
    updateNoResults('');
    searchSuggestions.classList.remove('show');
}

// Função para atualizar mensagem de "sem resultados"
function updateNoResults(query) {
    if (query) {
        searchTerm.textContent = query;
        noResults.style.display = 'block';
        productsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        productsGrid.style.display = 'grid';
    }
}

// Função para ver detalhes do produto
function viewProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        alert(`Produto: ${product.name}\nCategoria: ${product.subcategory || product.category}\n\nPara mais informações, entre em contato via WhatsApp!`);
    }
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Inicializar Mega Menu
    initializeMegaMenu();
    
    // Renderizar todos os produtos inicialmente
    renderProducts(filteredProducts);

    // Event listener para busca
    searchInput.addEventListener('input', function() {
        const query = this.value;
        searchProducts(query);
        showSearchSuggestions(query);
    });

    // Event listener para focar na busca
    searchInput.addEventListener('focus', function() {
        if (this.value.trim()) {
            showSearchSuggestions(this.value);
        }
    });

    // Event listener para clicar fora das sugestões
    document.addEventListener('click', function(e) {
        if (!searchInput.contains(e.target) && !searchSuggestions.contains(e.target)) {
            searchSuggestions.classList.remove('show');
        }
    });

    // Event listeners para links do mega menu
    document.querySelectorAll('.mega-menu a').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const text = this.textContent.trim();
            
            // Mapear categorias
            const categoryMap = {
                'Água de Coco': () => filterByCategory('bebidas', 'Água de Coco'),
                'Água Mineral': () => filterByCategory('bebidas', 'Água Mineral'),
                'Vodka': () => filterByCategory('bebidas', 'vodka'),
                'Cachaça': () => filterByCategory('bebidas', 'cachaça'),
                'Whisky': () => filterByCategory('bebidas', 'whisky'),
                'Gin': () => filterByCategory('bebidas', 'gin'),
                'Tequila': () => filterByCategory('bebidas', 'tequila'),
                'Conhaque': () => filterByCategory('bebidas', 'conhaque'),
                'Licor': () => filterByCategory('bebidas', 'licor'),
                'Cervejas': () => filterByCategory('bebidas', 'cerveja'),
                'Vinhos Nacionais': () => filterByCategory('bebidas', 'vinho nacional'),
                'Vinhos Importados': () => filterByCategory('bebidas', 'vinho importado'),
                'Espumantes': () => filterByCategory('bebidas', 'espumante'),
                'Refrigerantes': () => filterByCategory('bebidas', 'refrigerantes'),
                'Energéticos': () => filterByCategory('bebidas', 'energético'),
                'Sucos': () => filterByCategory('bebidas', 'suco'),
                'Xarope': () => filterByCategory('bebidas', 'xarope')
            };

            if (categoryMap[text]) {
                categoryMap[text]();
            } else {
                // Busca genérica se não encontrar categoria específica
                searchInput.value = text;
                searchProducts(text);
            }
        });
    });

    // Reinicializar mega menu quando a tela for redimensionada
    window.addEventListener('resize', function() {
        // Aguardar um pouco para garantir que o resize terminou
        setTimeout(initializeMegaMenu, 100);
    });
});

// Função para scroll suave (opcional)
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Adicionar efeito de loading (opcional)
function showLoading() {
    productsGrid.innerHTML = '<div style="text-align: center; padding: 40px; color: #666;">Carregando produtos...</div>';
}

// Função para adicionar novos produtos (para uso futuro)
function addProduct(product) {
    productsData.push({
        ...product,
        id: productsData.length + 1
    });
    
    if (searchInput.value.trim() === '') {
        filteredProducts = [...productsData];
        renderProducts(filteredProducts);
    }
}

// Função para remover produto (para uso futuro)
function removeProduct(productId) {
    const index = productsData.findIndex(p => p.id === productId);
    if (index > -1) {
        productsData.splice(index, 1);
        filteredProducts = filteredProducts.filter(p => p.id !== productId);
        renderProducts(filteredProducts);
    }
}

// Exportar funções para uso global (se necessário)
window.viewProductDetails = viewProductDetails;
window.filterByCategory = filterByCategory;
window.clearSearch = clearSearch;
window.addProduct = addProduct;
window.removeProduct = removeProduct;