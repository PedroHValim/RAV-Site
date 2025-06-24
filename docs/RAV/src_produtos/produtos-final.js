// Dados dos produtos
const productsData = [
    {
        "id": 1,
        "name": "Tênis Esportivo Premium",
        "description": "Tênis de alta performance para corrida e academia",
        "category": "masculino",
        "subcategory": "Calçados"
    },
    {
        "id": 2,
        "name": "Camisa Polo Clássica",
        "description": "Camisa polo em algodão premium com acabamento refinado",
        "category": "masculino",
        "subcategory": "Roupas"
    },
    {
        "id": 3,
        "name": "Jaqueta Impermeável",
        "description": "Jaqueta resistente à água ideal para atividades ao ar livre",
        "category": "masculino",
        "subcategory": "Roupas"
    },
    {
        "id": 4,
        "name": "Vestido Elegante",
        "description": "Vestido sofisticado para ocasiões especiais",
        "category": "feminino",
        "subcategory": "Roupas"
    },
    {
        "id": 5,
        "name": "Tênis Feminino Sport",
        "description": "Tênis confortável para atividades esportivas",
        "category": "feminino",
        "subcategory": "Calçados"
    },
    {
        "id": 6,
        "name": "Shorts de Corrida",
        "description": "Shorts leve e respirável para corrida",
        "category": "masculino",
        "subcategory": "Roupas"
    },
    {
        "id": 7,
        "name": "Mochila Urbana",
        "description": "Mochila moderna com compartimentos organizadores",
        "category": "masculino",
        "subcategory": "Acessórios"
    },
    {
        "id": 8,
        "name": "Tênis Infantil Colorido",
        "description": "Tênis divertido e confortável para crianças",
        "category": "criancas",
        "subcategory": "Calçados"
    },
    {
        "id": 9,
        "name": "Blusa Feminina Casual",
        "description": "Blusa confortável para o dia a dia",
        "category": "feminino",
        "subcategory": "Roupas"
    },
    {
        "id": 10,
        "name": "Calça Jeans Premium",
        "description": "Calça jeans de alta qualidade com corte moderno",
        "category": "masculino",
        "subcategory": "Roupas"
    },
    {
        "id": 11,
        "name": "Sandália Infantil",
        "description": "Sandália resistente e confortável para crianças",
        "category": "criancas",
        "subcategory": "Calçados"
    },
    {
        "id": 12,
        "name": "Bolsa Feminina Elegante",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "feminino",
        "subcategory": "Acessórios"
    },
    {
        "id": 13,
        "name": "Bolsa Feminina Elegante",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "feminino",
        "subcategory": "Acessórios"
    },
    {
        "id": 14,
        "name": "ÁGUA DE COCO MÉDIA SOCOCO 330 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "/RAV/src_produtos/images/agua_de_coco_sococo_330ml.webp"
    },
    {
        "id": 15,
        "name": "ÁGUA DE COCO PEQUENA SOCOCO 200 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "/RAV/src_produtos/images/agua_de_coco_sococo_200ml.webp"
    },
    {
        "id": 16,
        "name": "ÁGUA DE COCO GRANDE SOCOCO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "/RAV/src_produtos/images/agua_de_coco_sococo_1l.webp"
    },
    {
        "id": 17,
        "name": "ÁGUA DE COCO GRANDE MAIS COCO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "/RAV/src_produtos/images/agua_de_coco_mais_coco_1l.webp"
    },
    {
        "id": 18,
        "name": "ÁGUA DE COCO PEQUENA COCO QUADRADO 200 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "/RAV/src_produtos/images/agua_de_coco_quadrado_200ml.webp"
    },
    {
        "id": 19,
        "name": "ÁGUA DE COCO GRANDE COCO QUADRADO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "/RAV/src_produtos/images/agua_de_coco_quadrado_1l.webp"
    },
    {
        "id": 20,
        "name": "SUCO MAGUARY MANGA 500 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Sucos",
        "image": "/RAV/src_produtos/images/suco_maguary_manga_500ml.webp"
    },
    {
        "id": 21,
        "name": "ÁGUA MINERAL CRYSTAL SEM GÁS 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_crystal_sem_gas_500ml.webp"
    },
    {
        "id": 22,
        "name": "ÁGUA MINERAL GRANDE CRYSTAL SEM GÁS 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_crystal_sem_gas_1500ml.webp"
    },
    {
        "id": 23,
        "name": "ÁGUA MINERAL CRYSTAL COM GÁS 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_crystal_com_gas_500ml.webp"
    },
    {
        "id": 24,
        "name": "ÁGUA MINERAL CRYSTAL COM GÁS 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_crystal_com_gas_1500ml.webp"
    },
    {
        "id": 25,
        "name": "ÁGUA MINERAL SÃO LOURENÇO SEM GÁS 300 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_sao_lourenco_sem_gas_300ml.webp"
    },
    {
        "id": 26,
        "name": "ÁGUA MINERAL SÃO LOURENÇO COM GÁS 300 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_sao_lourenco_com_gas_300ml.webp"
    },
    {
        "id": 27,
        "name": "ÁGUA MINERAL BUONAVITA COM GÁS 510 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_buonavita_com_gas_510ml.webp"
    },
    {
        "id": 28,
        "name": "ÁGUA MINERAL BUONAVITA SEM GÁS 510 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_buonavita_sem_gas_510ml.webp"
    },
    {
        "id": 29,
        "name": "ÁGUA MINERAL GRANDE BUONAVITA SEM GÁS 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "/RAV/src_produtos/images/agua_buonavita_sem_gas_1500ml.webp"
    },
    {
        "id": 30,
        "name": "COCA COLA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_pet_2_l.png"
    },
    {
        "id": 31,
        "name": "COCA COLA SEM AÇÚCAR PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_sem_acucar_pet_2_l.png"
    },
    {
        "id": 32,
        "name": "COCA COLA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_lata_350_ml.png"
    },
    {
        "id": 33,
        "name": "COCA COLA SEM AÇÚCAR LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_sem_acucar_lata_350_ml.png"
    },
    {
        "id": 34,
        "name": "FANTA LARANJA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/fanta_laranja_pet_2_l.png"
    },
    {
        "id": 35,
        "name": "FANTA LARANJA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/fanta_laranja_lata_350_ml.png"
    },
    {
        "id": 36,
        "name": "FANTA UVA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/fanta_uva_pet_2_l.png"
    },
    {
        "id": 37,
        "name": "SPRITE PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/sprite_pet_2_l.png"
    },
    {
        "id": 38,
        "name": "GUARANÁ ANTARCTICA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/guarana_antarctica_pet_2_l.png"
    },
    {
        "id": 39,
        "name": "GUARANÁ ANTARCTICA SEM AÇÚCARES PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/guarana_antarctica_sem_acucares_pet_2_l.png"
    },
    {
        "id": 40,
        "name": "GUARANÁ ANTARCTICA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/guarana_antarctica_lata_350_ml.png"
    },
    {
        "id": 41,
        "name": "GUARANÁ ANTARCTICA SEM AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/guarana_antarctica_sem_acucares_lata_350_ml.png"
    },
    {
        "id": 42,
        "name": "DOLLY GUARANÁ PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/dolly_guarana_pet_2_l.png"
    },
    {
        "id": 43,
        "name": "DOLLY LARANJA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/dolly_laranja_pet_2_l.png"
    },
    {
        "id": 44,
        "name": "DOLLY LIMÃO PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/dolly_limao_pet_2_l.png"
    },
    {
        "id": 45,
        "name": "COCA COLA PEQUENA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_pequena_pet_600_ml.png"
    },
    {
        "id": 46,
        "name": "ITUBÁINA TUTTI FRUTTI RETRÔ LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/itubaina_tutti_frutti_retro_lata_350_ml.png"
    },
    {
        "id": 47,
        "name": "ÁGUA TÔNICA SCHWEPPES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/agua_tonica_schweppes_lata_350_ml.png"
    },
    {
        "id": 48,
        "name": "SPRITE LEMON FRESH PET 510 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/sprite_lemon_fresh_pet_510_ml.png"
    },
    {
        "id": 49,
        "name": "TUBAÍNA CAMPOS TUTTI FRUTTI PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/tubaina_campos_tutti_frutti_pet_2_l.png"
    },
    {
        "id": 50,
        "name": "SUKITA TUBAÍNA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/sukita_tubaina_pet_2_l.png"
    },
    {
        "id": 51,
        "name": "COCA COLA MÉDIA PET 1 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_media_pet_1_l.png"
    },
    {
        "id": 52,
        "name": "SUKITA LIMÃO PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/sukita_limao_pet_2_l.png"
    },
    {
        "id": 53,
        "name": "COCA COLA MIÚDA ZERO AÇÚCARES PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_miuda_zero_acucares_pet_200_ml.png"
    },
    {
        "id": 54,
        "name": "GUARANÁ ANTARCTICA MIÚDA PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/guarana_antarctica_miuda_pet_200_ml.png"
    },
    {
        "id": 55,
        "name": "DOLLY UVA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/dolly_uva_pet_2_l.png"
    },
    {
        "id": 56,
        "name": "FANTA UVA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/fanta_uva_lata_350_ml.png"
    },
    {
        "id": 57,
        "name": "SCHWEPPES CITRUS LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/schweppes_citrus_lata_350_ml.png"
    },
    {
        "id": 58,
        "name": "FANTA LARANJA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/fanta_laranja_pet_600_ml.png"
    },
    {
        "id": 59,
        "name": "PEPSI COLA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/pepsi_cola_pet_2_l.png"
    },
    {
        "id": 60,
        "name": "ÁGUA TÔNICA ANTARCTICA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/agua_tonica_antarctica_lata_350_ml.png"
    },
    {
        "id": 61,
        "name": "GUARANÁ ANTARCTICA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/guarana_antarctica_pet_600_ml.png"
    },
    {
        "id": 62,
        "name": "COCA COLA SEM AÇÚCAR PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_sem_acucar_pet_600_ml.png"
    },
    {
        "id": 63,
        "name": "ITUBÁINA TUTTI FRUTTI RETRÔ LONG NECK 355 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/itubaina_tutti_frutti_retro_long_neck_355_ml.png"
    },
    {
        "id": 64,
        "name": "SUKITA LARANJA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/sukita_laranja_pet_2_l.png"
    },
    {
        "id": 65,
        "name": "SODA ANTARCTICA LIMONADA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/soda_antarctica_limonada_pet_2_l.png"
    },
    {
        "id": 66,
        "name": "ÁGUA TÔNICA ANTARCTICA ZERO AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/agua_tonica_antarctica_zero_acucares_lata_350_ml.png"
    },
    {
        "id": 67,
        "name": "SODA ANTARCTICA LIMONADA ZERO AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/soda_antarctica_limonada_zero_acucares_lata_350_ml.png"
    },
    {
        "id": 68,
        "name": "SCHWEPPES CITRUS LEVE EM AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/schweppes_citrus_leve_em_acucares_lata_350_ml.png"
    },
    {
        "id": 69,
        "name": "H2O LIMONETO SEM AÇÚCARES PET 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/h2o_limoneto_sem_acucares_pet_500_ml.png"
    },
    {
        "id": 70,
        "name": "H2O LIMÃO SEM AÇÚCARES PET 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/h2o_limao_sem_acucares_pet_1_5_l.png"
    },
    {
        "id": 71,
        "name": "H2O LIMONETO SEM AÇÚCARES PET 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/h2o_limoneto_sem_acucares_pet_1_5_l.png"
    },
    {
        "id": 72,
        "name": "SPRITE LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/sprite_lata_350_ml.png"
    },
    {
        "id": 73,
        "name": "COCA COLA MIÚDA PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/coca_cola_miuda_pet_200_ml.png"
    },
    {
        "id": 74,
        "name": "GUARANÁ ANTARCTICA PEQUENO PET 1 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/guarana_antarctica_pequeno_pet_1_l.png"
    },
    {
        "id": 75,
        "name": "PEPSI COLA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/pepsi_cola_lata_350_ml.png"
    },
    {
        "id": 76,
        "name": "SUKITA LARANJA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/sukita_laranja_lata_350_ml.png"
    },
    {
        "id": 77,
        "name": "SODA ANTARCTICA LIMONADA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/soda_antarctica_limonada_lata_350_ml.png"
    },
    {
        "id": 78,
        "name": "H2O LIMÃO SEM AÇÚCARES PET 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "/RAV/src_produtos/images/h2o_sem_acucares_pet_500_ml.png"
    },
{
    "id": 79,
    "name": "ALMÔNDEGA BOVINA SEARA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_seara_500g.png"
},
{
    "id": 80,
    "name": "ALMÔNDEGA BOVINA PERDIGÃO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_perdigao_500g.png"
},
{
    "id": 81,
    "name": "ALMÔNDEGA BOVINA SADIA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_sadia_500g.png"
},
{
    "id": 82,
    "name": "ALMÔNDEGA BOVINA CONGELADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_congelada_1kg.png"
},
{
    "id": 83,
    "name": "CARNE SECA PAINEIRA DESFIADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_paineira_desfiada_500g.png"
},
{
    "id": 84,
    "name": "CARNE SECA PAINEIRA PEÇA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_paineira_peca_1kg.png"
},
{
    "id": 85,
    "name": "CARNE SECA RESFRIADA SERTANEJA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_resfriada_sertaneja_1kg.png"
},
{
    "id": 86,
    "name": "CARNE DE SOL PICADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_de_sol_picada_500g.png"
},
{
    "id": 87,
    "name": "CARNE BOVINA MOÍDA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_moida_1kg.png"
},
{
    "id": 88,
    "name": "CARNE BOVINA MOÍDA CONGELADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_moida_congelada_1kg.png"
},
{
    "id": 89,
    "name": "CARNE BOVINA CUBOS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_cubos_500g.png"
},
{
    "id": 90,
    "name": "CARNE BOVINA PICADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_picada_1kg.png"
},
{
    "id": 91,
    "name": "CARNE BOVINA EM TIRAS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_em_tiras_500g.png"
},
{
    "id": 92,
    "name": "HAMBÚRGUER SEARA 56G CADA",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_seara_56g.png"
},
{
    "id": 93,
    "name": "HAMBÚRGUER SADIA 56G CADA",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_sadia_56g.png"
},
{
    "id": 94,
    "name": "HAMBÚRGUER PERDIGÃO 56G CADA",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_perdigao_56g.png"
},
{
    "id": 95,
    "name": "HAMBÚRGUER CONGELADO PCT 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_congelado_1kg.png"
},
{
    "id": 96,
    "name": "HAMBÚRGUER BOVINO ARTESANAL 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_artesanal_120g.png"
},
{
    "id": 97,
    "name": "HAMBÚRGUER BLACK ANGUS 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_black_angus_120g.png"
},
{
    "id": 98,
    "name": "HAMBÚRGUER BOVINO GRILL 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_grill_100g.png"
}
,
{
    "id": 99,
    "name": "HAMBÚRGUER CASEIRO BOVINO 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_caseiro_bovino_120g.png"
},
{
    "id": 100,
    "name": "HAMBÚRGUER BOVINO PÃO DE ALHO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_pao_de_alho_100g.png"
},
{
    "id": 101,
    "name": "HAMBÚRGUER BOVINO PICANTE 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_picante_100g.png"
},
{
    "id": 102,
    "name": "HAMBÚRGUER BOVINO TRADICIONAL 90G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_tradicional_90g.png"
},
{
    "id": 103,
    "name": "CARNE BOVINA ASSADA FATIADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_assada_fatiada_500g.png"
},
{
    "id": 104,
    "name": "CARNE BOVINA COZIDA DESFIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_cozida_desfiada_1kg.png"
},
{
    "id": 105,
    "name": "CARNE BOVINA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_ao_molho_500g.png"
},
{
    "id": 106,
    "name": "CARNE BOVINA TEMPERADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_temperada_1kg.png"
},
{
    "id": 107,
    "name": "CARNE BOVINA DESFIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_desfiada_1kg.png"
},
{
    "id": 108,
    "name": "CARNE SECA COZIDA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_cozida_500g.png"
},
{
    "id": 109,
    "name": "CARNE SECA PICADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_picada_1kg.png"
},
{
    "id": 110,
    "name": "CARNE DE SOL EM CUBOS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_de_sol_em_cubos_500g.png"
},
{
    "id": 111,
    "name": "ALMÔNDEGA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_ao_molho_500g.png"
},
{
    "id": 112,
    "name": "ALMÔNDEGA BOVINA TEMPERADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_temperada_500g.png"
},
{
    "id": 113,
    "name": "ALMÔNDEGA BOVINA ARTESANAL 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_artesanal_1kg.png"
},
{
    "id": 114,
    "name": "ALMÔNDEGA COM QUEIJO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_com_queijo_500g.png"
},
{
    "id": 115,
    "name": "ALMÔNDEGA PICANTE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_picante_500g.png"
},
{
    "id": 116,
    "name": "ALMÔNDEGA DE CHURRASCO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_churrasco_500g.png"
},
{
    "id": 117,
    "name": "ALMÔNDEGA DE PANELA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_de_panela_500g.png"
},
{
    "id": 118,
    "name": "ALMÔNDEGA BOVINA LIGHT 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_light_500g.png"
}
,
{
    "id": 119,
    "name": "CARNE BOVINA DESFIADA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_desfiada_ao_molho_500g.png"
},
{
    "id": 120,
    "name": "CARNE BOVINA COZIDA AO MOLHO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_cozida_ao_molho_1kg.png"
},
{
    "id": 121,
    "name": "CARNE BOVINA GRELHADA FATIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_grelhada_fatiada_1kg.png"
},
{
    "id": 122,
    "name": "CARNE DE SOL DESFIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_de_sol_desfiada_1kg.png"
},
{
    "id": 123,
    "name": "CARNE DE SOL TEMPERADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_de_sol_temperada_500g.png"
},
{
    "id": 124,
    "name": "CARNE SECA DESFIADA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_desfiada_ao_molho_500g.png"
},
{
    "id": 125,
    "name": "CARNE SECA COZIDA TEMPERADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_cozida_temperada_1kg.png"
},
{
    "id": 126,
    "name": "HAMBÚRGUER ARTESANAL BOVINO 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_artesanal_bovino_150g.png"
},
{
    "id": 127,
    "name": "HAMBÚRGUER BOVINO COM BACON 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_com_bacon_120g.png"
},
{
    "id": 128,
    "name": "HAMBÚRGUER BOVINO CEBOLA CARAMELIZADA 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_cebola_caramelizada_120g.png"
},
{
    "id": 129,
    "name": "HAMBÚRGUER BOVINO GOURMET 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_gourmet_150g.png"
},
{
    "id": 130,
    "name": "HAMBÚRGUER BOVINO PIMENTA DO REINO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_pimenta_do_reino_100g.png"
},
{
    "id": 131,
    "name": "HAMBÚRGUER BOVINO DEFUMADO 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_defumado_120g.png"
},
{
    "id": 132,
    "name": "HAMBÚRGUER BOVINO LOW CARB 90G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_low_carb_90g.png"
},
{
    "id": 133,
    "name": "ALMÔNDEGA COM ERVAS FINAS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_com_ervas_finas_500g.png"
},
{
    "id": 134,
    "name": "ALMÔNDEGA COM MOLHO BARBECUE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_com_molho_barbecue_500g.png"
},
{
    "id": 135,
    "name": "ALMÔNDEGA BOVINA LIGHT COM AVEIA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_light_com_aveia_500g.png"
},
{
    "id": 136,
    "name": "ALMÔNDEGA BOVINA AO FORNO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_ao_forno_1kg.png"
},
{
    "id": 137,
    "name": "ALMÔNDEGA RECHEADA COM CATUPIRY 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_recheada_catupiry_500g.png"
},
{
    "id": 138,
    "name": "ALMÔNDEGA COM PIMENTA BIQUINHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_com_pimenta_biquinho_500g.png"
}
,
{
    "id": 139,
    "name": "ALMÔNDEGA BOVINA TRADICIONAL 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_tradicional_1kg.png"
},
{
    "id": 140,
    "name": "ALMÔNDEGA BOVINA COM CHIMICHURRI 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_com_chimichurri_500g.png"
},
{
    "id": 141,
    "name": "ALMÔNDEGA COM MOLHO DE TOMATE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_com_molho_de_tomate_500g.png"
},
{
    "id": 142,
    "name": "ALMÔNDEGA BOVINA COM ESPINAFRE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "/RAV/src_produtos/images/almondega_bovina_com_espinafre_500g.png"
},
{
    "id": 143,
    "name": "HAMBÚRGUER BOVINO COM QUEIJO 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_com_queijo_120g.png"
},
{
    "id": 144,
    "name": "HAMBÚRGUER COM CHEDDAR E BACON 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_com_cheddar_e_bacon_150g.png"
},
{
    "id": 145,
    "name": "HAMBÚRGUER BOVINO CLÁSSICO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_classico_100g.png"
},
{
    "id": 146,
    "name": "HAMBÚRGUER BOVINO PICANTE 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_picante_150g.png"
},
{
    "id": 147,
    "name": "HAMBÚRGUER BOVINO COM CEBOLA ROXA 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_cebola_roxa_120g.png"
},
{
    "id": 148,
    "name": "HAMBÚRGUER BOVINO COM ALHO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_com_alho_100g.png"
},
{
    "id": 149,
    "name": "HAMBÚRGUER BOVINO COM TOMILHO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "/RAV/src_produtos/images/hamburguer_bovino_com_tomilho_100g.png"
},
{
    "id": 150,
    "name": "CARNE SECA COM ABÓBORA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_com_abobora_1kg.png"
},
{
    "id": 151,
    "name": "CARNE SECA ACEBOLADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_acebolada_500g.png"
},
{
    "id": 152,
    "name": "CARNE SECA TRADICIONAL 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_seca_tradicional_1kg.png"
},
{
    "id": 153,
    "name": "CARNE DE SOL DESFIADA COM CEBOLA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "/RAV/src_produtos/images/carne_de_sol_desfiada_com_cebola_1kg.png"
},
{
    "id": 154,
    "name": "CARNE BOVINA AO MOLHO MADEIRA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_ao_molho_madeira_1kg.png"
},
{
    "id": 155,
    "name": "CARNE BOVINA COZIDA AO VINHO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_cozida_ao_vinho_1kg.png"
},
{
    "id": 156,
    "name": "CARNE BOVINA EM TIRAS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_em_tiras_500g.png"
},
{
    "id": 157,
    "name": "CARNE BOVINA DESFIADA TEMPERADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_desfiada_temperada_500g.png"
},
{
    "id": 158,
    "name": "CARNE BOVINA GRELHADA AO PONTO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_grelhada_ao_ponto_1kg.png"
},
{
    "id": 159,
    "name": "CARNE BOVINA EM CUBOS 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_em_cubos_1kg.png"
},
{
    "id": 160,
    "name": "CARNE BOVINA DESFIADA COM ERVAS 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "/RAV/src_produtos/images/carne_bovina_desfiada_com_ervas_1kg.png"
}
,
{
    "id": 161,
    "name": "PALETA MOÍDA MAGRA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/paleta_moida_magra_bovina_kg.png"
},
{
    "id": 162,
    "name": "CHÃ DE FORA MOÍDO MAGRO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/cha_de_fora_moido_magro_bovino_kg.png"
},
{
    "id": 163,
    "name": "CHÃ DE DENTRO MOÍDO MAGRO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/cha_de_dentro_moido_magro_bovino_kg.png"
},
{
    "id": 164,
    "name": "ACÉM FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/acem_fatiado_bovino_kg.png"
},
{
    "id": 165,
    "name": "CHÃ DE DENTRO FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/cha_de_dentro_fatiado_bovino_kg.png"
},
{
    "id": 166,
    "name": "CHÃ DE FORA FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/cha_de_fora_fatiado_bovino_kg.png"
},
{
    "id": 167,
    "name": "PATINHO FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/patinho_fatiado_bovino_kg.png"
},
{
    "id": 168,
    "name": "COXÃO MOLE FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/coxao_mole_fatiado_bovino_kg.png"
},
{
    "id": 169,
    "name": "ACÉM EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/acem_em_cubos_bovino_kg.png"
},
{
    "id": 170,
    "name": "PATINHO EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/patinho_em_cubos_bovino_kg.png"
},
{
    "id": 171,
    "name": "COXÃO MOLE EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/coxao_mole_em_cubos_bovino_kg.png"
},
{
    "id": 172,
    "name": "CHÃ DE FORA EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/cha_de_fora_em_cubos_bovino_kg.png"
},
{
    "id": 173,
    "name": "CHÃ DE DENTRO EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/cha_de_dentro_em_cubos_bovino_kg.png"
},
{
    "id": 174,
    "name": "PICANHA PEÇA INTEIRA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/picanha_peca_inteira_bovina_kg.png"
},
{
    "id": 175,
    "name": "PICANHA FATIADA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/picanha_fatiada_bovina_kg.png"
},
{
    "id": 176,
    "name": "PICANHA EM BIFES BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/picanha_em_bifes_bovina_kg.png"
},
{
    "id": 177,
    "name": "CARNE MOÍDA DE PRIMEIRA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "/RAV/src_produtos/images/carne_moida_primeira_bovina_kg.png"
}

];

// Variáveis globais
let filteredProducts = [...productsData];
let searchTimeout;

// Elementos DOM
const searchInput = document.getElementById('searchInput');
const searchSuggestions = document.getElementById('searchSuggestions');
const suggestionsList = document.getElementById('suggestionsList');
const productsGrid = document.getElementById('productsGrid');
const noResults = document.getElementById('noResults');
const searchTerm = document.getElementById('searchTerm');

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    renderProducts(productsData);
    setupEventListeners();
});

// Configurar event listeners
function setupEventListeners() {
    // Pesquisa
    searchInput.addEventListener('input', handleSearch);
    searchInput.addEventListener('focus', handleSearchFocus);
    searchInput.addEventListener('blur', handleSearchBlur);
    
    // Mega menu
    setupMegaMenu();
    
    // Clique fora para fechar sugestões
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-container')) {
            hideSuggestions();
        }
    });
}

// Configurar mega menu
function setupMegaMenu() {
    const navItems = document.querySelectorAll('.nav-item');
    
    navItems.forEach(item => {
        const button = item.querySelector('.nav-button');
        const megaMenu = item.querySelector('.mega-menu');
        
        if (button && megaMenu) {
            item.addEventListener('mouseenter', () => {
                showMegaMenu(megaMenu);
            });
            
            item.addEventListener('mouseleave', () => {
                hideMegaMenu(megaMenu);
            });
        }
    });
}

// Mostrar mega menu
function showMegaMenu(megaMenu) {
    megaMenu.style.opacity = '1';
    megaMenu.style.visibility = 'visible';
}

// Esconder mega menu
function hideMegaMenu(megaMenu) {
    megaMenu.style.opacity = '0';
    megaMenu.style.visibility = 'hidden';
}

// Manipular pesquisa
function handleSearch(e) {
    const query = e.target.value.trim().toLowerCase();
    
    // Limpar timeout anterior
    clearTimeout(searchTimeout);
    
    // Definir novo timeout para evitar muitas chamadas
    searchTimeout = setTimeout(() => {
        if (query === '') {
            filteredProducts = [...productsData];
            hideSuggestions();
        } else {
            filteredProducts = productsData.filter(product =>
                product.name.toLowerCase().includes(query) ||
                product.description.toLowerCase().includes(query) ||
                product.category.toLowerCase().includes(query) ||
                product.subcategory.toLowerCase().includes(query)
            );
            showSuggestions(filteredProducts.slice(0, 4), query);
        }
        
        renderProducts(filteredProducts);
        updateNoResults(query);
    }, 300);
}

// Manipular foco na pesquisa
function handleSearchFocus() {
    const query = searchInput.value.trim();
    if (query !== '') {
        const filtered = productsData.filter(product =>
            product.name.toLowerCase().includes(query.toLowerCase()) ||
            product.description.toLowerCase().includes(query.toLowerCase())
        );
        showSuggestions(filtered.slice(0, 4), query);
    }
}

// Manipular blur na pesquisa
function handleSearchBlur() {
    // Delay para permitir clique nas sugestões
    setTimeout(() => {
        hideSuggestions();
    }, 200);
}

// Mostrar sugestões
function showSuggestions(products, query) {
    if (products.length === 0) {
        hideSuggestions();
        return;
    }
    
    suggestionsList.innerHTML = '';
    
    products.forEach(product => {
        const suggestionItem = createSuggestionItem(product, query);
        suggestionsList.appendChild(suggestionItem);
    });
    
    searchSuggestions.classList.add('show');
}

// Esconder sugestões
function hideSuggestions() {
    searchSuggestions.classList.remove('show');
}

// Criar item de sugestão
function createSuggestionItem(product, query) {
    const item = document.createElement('div');
    item.className = 'suggestion-item';
    
    // Destacar termo pesquisado
    const highlightedName = highlightSearchTerm(product.name, query);
    const highlightedDescription = highlightSearchTerm(product.description, query);
    
    item.innerHTML = `
        <div class="suggestion-image">
            <img src='${product.image}' class='suggestion-image-img'/>
        </div>
        <div class="suggestion-info">
            <h5>${highlightedName}</h5>
            <p>${highlightedDescription}</p>
        </div>
    `;
    
    // Adicionar evento de clique
    item.addEventListener('click', () => {
        searchInput.value = product.name;
        filteredProducts = [product];
        renderProducts(filteredProducts);
        hideSuggestions();
        updateNoResults('');
    });
    
    return item;
}

// Destacar termo pesquisado
function highlightSearchTerm(text, term) {
    if (!term) return text;
    
    const regex = new RegExp(`(${term})`, 'gi');
    return text.replace(regex, '<strong>$1</strong>');
}

// Renderizar produtos
function renderProducts(products) {
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        return;
    }
    
    products.forEach((product, index) => {
        const productCard = createProductCard(product, index);
        productsGrid.appendChild(productCard);
    });
}

// Criar card de produto
function createProductCard(product, index) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.style.animationDelay = `${(index % 8) * 0.1}s`;
    
    // Capitalizar categoria para exibição
    const categoryDisplay = product.category.charAt(0).toUpperCase() + product.category.slice(1);
    
    card.innerHTML = `
        <div class="product-image">
            <img src="${product.image}" class="image_card"/>
        </div>
        <div class="product-info">
            <h3 class="product-name">${product.name}</h3>
            <p class="product-description">${product.description}</p>
            <div class="product-footer">
                <span class="product-category">${categoryDisplay}</span>
                <button class="product-button" onclick="viewProductDetails(${product.id})">
                    Ver Detalhes
                </button>
            </div>
        </div>
    `;
    
    return card;
}

// Atualizar mensagem de "nenhum resultado"
function updateNoResults(query) {
    if (filteredProducts.length === 0 && query !== '') {
        searchTerm.textContent = query;
        noResults.style.display = 'block';
        productsGrid.style.display = 'none';
    } else {
        noResults.style.display = 'none';
        productsGrid.style.display = 'grid';
    }
}

// Função para ver detalhes do produto (placeholder)
function viewProductDetails(productId) {
    const product = productsData.find(p => p.id === productId);
    if (product) {
        alert(`Detalhes do produto: ${product.name}\n\n${product.description}\n\nCategoria: ${product.category}\nSubcategoria: ${product.subcategory}`);
    }
}

// Função para filtrar por categoria (pode ser usada futuramente)
function filterByCategory(category) {
    if (category === 'all') {
        filteredProducts = [...productsData];
    } else {
        filteredProducts = productsData.filter(product => product.category === category);
    }
    
    renderProducts(filteredProducts);
    updateNoResults('');
    searchInput.value = '';
    hideSuggestions();
}

// Função para limpar pesquisa
function clearSearch() {
    searchInput.value = '';
    filteredProducts = [...productsData];
    renderProducts(filteredProducts);
    updateNoResults('');
    hideSuggestions();
}

// Adicionar funcionalidade aos links do mega menu (opcional)
document.addEventListener('DOMContentLoaded', function() {
    const megaMenuLinks = document.querySelectorAll('.mega-menu a');
    
    megaMenuLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const linkText = this.textContent.toLowerCase();
            
            // Filtrar produtos baseado no link clicado
            const filtered = productsData.filter(product =>
                product.name.toLowerCase().includes(linkText) ||
                product.description.toLowerCase().includes(linkText) ||
                product.subcategory.toLowerCase().includes(linkText)
            );
            
            if (filtered.length > 0) {
                filteredProducts = filtered;
                renderProducts(filteredProducts);
                searchInput.value = linkText;
                updateNoResults('');
            }
        });
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

