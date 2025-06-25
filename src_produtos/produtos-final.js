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
        "id": 16,
        "name": "ÁGUA DE COCO GRANDE SOCOCO 1 L",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_sococo_1l.webp"
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
        "id": 18,
        "name": "ÁGUA DE COCO PEQUENA COCO QUADRADO 200 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Água de Coco",
        "image": "src_produtos/images/agua_de_coco_quadrado_200ml.webp"
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
        "id": 20,
        "name": "SUCO MAGUARY MANGA 500 ML",
        "description": "Bolsa sofisticada para ocasiões especiais",
        "category": "bebidas",
        "subcategory": "Sucos",
        "image": "src_produtos/images/suco_maguary_manga_500ml.webp"
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
        "id": 23,
        "name": "ÁGUA MINERAL CRYSTAL COM GÁS 500 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_crystal_com_gas_500ml.webp"
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
        "id": 25,
        "name": "ÁGUA MINERAL SÃO LOURENÇO SEM GÁS 300 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "Água Mineral",
        "image": "src_produtos/images/agua_sao_lourenco_sem_gas_300ml.webp"
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
        "id": 30,
        "name": "COCA COLA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_pet_2_l.png"
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
        "id": 32,
        "name": "COCA COLA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_lata_350_ml.png"
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
        "id": 34,
        "name": "FANTA LARANJA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/fanta_laranja_pet_2_l.png"
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
        "id": 36,
        "name": "FANTA UVA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/fanta_uva_pet_2_l.png"
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
        "id": 38,
        "name": "GUARANÁ ANTARCTICA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_pet_2_l.png"
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
        "id": 40,
        "name": "GUARANÁ ANTARCTICA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_lata_350_ml.png"
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
        "id": 42,
        "name": "DOLLY GUARANÁ PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/dolly_guarana_pet_2_l.png"
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
        "id": 45,
        "name": "COCA COLA PEQUENA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_pequena_pet_600_ml.png"
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
        "id": 47,
        "name": "ÁGUA TÔNICA SCHWEPPES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/agua_tonica_schweppes_lata_350_ml.png"
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
        "id": 49,
        "name": "TUBAÍNA CAMPOS TUTTI FRUTTI PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/tubaina_campos_tutti_frutti_pet_2_l.png"
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
        "id": 51,
        "name": "COCA COLA MÉDIA PET 1 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_media_pet_1_l.png"
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
        "id": 53,
        "name": "COCA COLA MIÚDA ZERO AÇÚCARES PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_miuda_zero_acucares_pet_200_ml.png"
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
        "id": 55,
        "name": "DOLLY UVA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/dolly_uva_pet_2_l.png"
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
        "id": 57,
        "name": "SCHWEPPES CITRUS LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/schweppes_citrus_lata_350_ml.png"
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
        "id": 59,
        "name": "PEPSI COLA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/pepsi_cola_pet_2_l.png"
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
        "id": 61,
        "name": "GUARANÁ ANTARCTICA PET 600 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/guarana_antarctica_pet_600_ml.png"
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
        "id": 63,
        "name": "ITUBÁINA TUTTI FRUTTI RETRÔ LONG NECK 355 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/itubaina_tutti_frutti_retro_long_neck_355_ml.png"
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
        "id": 65,
        "name": "SODA ANTARCTICA LIMONADA PET 2 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/soda_antarctica_limonada_pet_2_l.png"
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
        "id": 67,
        "name": "SODA ANTARCTICA LIMONADA ZERO AÇÚCARES LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/soda_antarctica_limonada_zero_acucares_lata_350_ml.png"
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
        "id": 71,
        "name": "H2O LIMONETO SEM AÇÚCARES PET 1,5 L",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/h2o_limoneto_sem_acucares_pet_1_5_l.png"
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
        "id": 73,
        "name": "COCA COLA MIÚDA PET 200 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/coca_cola_miuda_pet_200_ml.png"
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
        "id": 75,
        "name": "PEPSI COLA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/pepsi_cola_lata_350_ml.png"
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
        "id": 77,
        "name": "SODA ANTARCTICA LIMONADA LATA 350 ML",
        "description": "",
        "category": "bebidas",
        "subcategory": "refrigerantes",
        "image": "src_produtos/images/soda_antarctica_limonada_lata_350_ml.png"
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
    "id": 79,
    "name": "ALMÔNDEGA BOVINA SEARA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_seara_500g.png"
},
{
    "id": 80,
    "name": "ALMÔNDEGA BOVINA PERDIGÃO 500G",
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
    "id": 82,
    "name": "ALMÔNDEGA BOVINA CONGELADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_congelada_1kg.png"
},
{
    "id": 83,
    "name": "CARNE SECA PAINEIRA DESFIADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_paineira_desfiada_500g.png"
},
{
    "id": 84,
    "name": "CARNE SECA PAINEIRA PEÇA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_paineira_peca_1kg.png"
},
{
    "id": 85,
    "name": "CARNE SECA RESFRIADA SERTANEJA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_resfriada_sertaneja_1kg.png"
},
{
    "id": 86,
    "name": "CARNE DE SOL PICADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_de_sol_picada_500g.png"
},
{
    "id": 87,
    "name": "CARNE BOVINA MOÍDA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_moida_1kg.png"
},
{
    "id": 88,
    "name": "CARNE BOVINA MOÍDA CONGELADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_moida_congelada_1kg.png"
},
{
    "id": 89,
    "name": "CARNE BOVINA CUBOS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_cubos_500g.png"
},
{
    "id": 90,
    "name": "CARNE BOVINA PICADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_picada_1kg.png"
},
{
    "id": 91,
    "name": "CARNE BOVINA EM TIRAS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_em_tiras_500g.png"
},
{
    "id": 92,
    "name": "HAMBÚRGUER SEARA 56G CADA",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_seara_56g.png"
},
{
    "id": 93,
    "name": "HAMBÚRGUER SADIA 56G CADA",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_sadia_56g.png"
},
{
    "id": 94,
    "name": "HAMBÚRGUER PERDIGÃO 56G CADA",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_perdigao_56g.png"
},
{
    "id": 95,
    "name": "HAMBÚRGUER CONGELADO PCT 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_congelado_1kg.png"
},
{
    "id": 96,
    "name": "HAMBÚRGUER BOVINO ARTESANAL 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_artesanal_120g.png"
},
{
    "id": 97,
    "name": "HAMBÚRGUER BLACK ANGUS 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_black_angus_120g.png"
},
{
    "id": 98,
    "name": "HAMBÚRGUER BOVINO GRILL 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_grill_100g.png"
}
,
{
    "id": 99,
    "name": "HAMBÚRGUER CASEIRO BOVINO 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_caseiro_bovino_120g.png"
},
{
    "id": 100,
    "name": "HAMBÚRGUER BOVINO PÃO DE ALHO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_pao_de_alho_100g.png"
},
{
    "id": 101,
    "name": "HAMBÚRGUER BOVINO PICANTE 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_picante_100g.png"
},
{
    "id": 102,
    "name": "HAMBÚRGUER BOVINO TRADICIONAL 90G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_tradicional_90g.png"
},
{
    "id": 103,
    "name": "CARNE BOVINA ASSADA FATIADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_assada_fatiada_500g.png"
},
{
    "id": 104,
    "name": "CARNE BOVINA COZIDA DESFIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_cozida_desfiada_1kg.png"
},
{
    "id": 105,
    "name": "CARNE BOVINA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_ao_molho_500g.png"
},
{
    "id": 106,
    "name": "CARNE BOVINA TEMPERADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_temperada_1kg.png"
},
{
    "id": 107,
    "name": "CARNE BOVINA DESFIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_desfiada_1kg.png"
},
{
    "id": 108,
    "name": "CARNE SECA COZIDA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_cozida_500g.png"
},
{
    "id": 109,
    "name": "CARNE SECA PICADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_picada_1kg.png"
},
{
    "id": 110,
    "name": "CARNE DE SOL EM CUBOS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_de_sol_em_cubos_500g.png"
},
{
    "id": 111,
    "name": "ALMÔNDEGA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_ao_molho_500g.png"
},
{
    "id": 112,
    "name": "ALMÔNDEGA BOVINA TEMPERADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_temperada_500g.png"
},
{
    "id": 113,
    "name": "ALMÔNDEGA BOVINA ARTESANAL 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_artesanal_1kg.png"
},
{
    "id": 114,
    "name": "ALMÔNDEGA COM QUEIJO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_com_queijo_500g.png"
},
{
    "id": 115,
    "name": "ALMÔNDEGA PICANTE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_picante_500g.png"
},
{
    "id": 116,
    "name": "ALMÔNDEGA DE CHURRASCO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_churrasco_500g.png"
},
{
    "id": 117,
    "name": "ALMÔNDEGA DE PANELA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_de_panela_500g.png"
},
{
    "id": 118,
    "name": "ALMÔNDEGA BOVINA LIGHT 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_light_500g.png"
}
,
{
    "id": 119,
    "name": "CARNE BOVINA DESFIADA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_desfiada_ao_molho_500g.png"
},
{
    "id": 120,
    "name": "CARNE BOVINA COZIDA AO MOLHO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_cozida_ao_molho_1kg.png"
},
{
    "id": 121,
    "name": "CARNE BOVINA GRELHADA FATIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_grelhada_fatiada_1kg.png"
},
{
    "id": 122,
    "name": "CARNE DE SOL DESFIADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_de_sol_desfiada_1kg.png"
},
{
    "id": 123,
    "name": "CARNE DE SOL TEMPERADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_de_sol_temperada_500g.png"
},
{
    "id": 124,
    "name": "CARNE SECA DESFIADA AO MOLHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_desfiada_ao_molho_500g.png"
},
{
    "id": 125,
    "name": "CARNE SECA COZIDA TEMPERADA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_cozida_temperada_1kg.png"
},
{
    "id": 126,
    "name": "HAMBÚRGUER ARTESANAL BOVINO 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_artesanal_bovino_150g.png"
},
{
    "id": 127,
    "name": "HAMBÚRGUER BOVINO COM BACON 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_com_bacon_120g.png"
},
{
    "id": 128,
    "name": "HAMBÚRGUER BOVINO CEBOLA CARAMELIZADA 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_cebola_caramelizada_120g.png"
},
{
    "id": 129,
    "name": "HAMBÚRGUER BOVINO GOURMET 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_gourmet_150g.png"
},
{
    "id": 130,
    "name": "HAMBÚRGUER BOVINO PIMENTA DO REINO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_pimenta_do_reino_100g.png"
},
{
    "id": 131,
    "name": "HAMBÚRGUER BOVINO DEFUMADO 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_defumado_120g.png"
},
{
    "id": 132,
    "name": "HAMBÚRGUER BOVINO LOW CARB 90G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_low_carb_90g.png"
},
{
    "id": 133,
    "name": "ALMÔNDEGA COM ERVAS FINAS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_com_ervas_finas_500g.png"
},
{
    "id": 134,
    "name": "ALMÔNDEGA COM MOLHO BARBECUE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_com_molho_barbecue_500g.png"
},
{
    "id": 135,
    "name": "ALMÔNDEGA BOVINA LIGHT COM AVEIA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_light_com_aveia_500g.png"
},
{
    "id": 136,
    "name": "ALMÔNDEGA BOVINA AO FORNO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_ao_forno_1kg.png"
},
{
    "id": 137,
    "name": "ALMÔNDEGA RECHEADA COM CATUPIRY 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_recheada_catupiry_500g.png"
},
{
    "id": 138,
    "name": "ALMÔNDEGA COM PIMENTA BIQUINHO 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_com_pimenta_biquinho_500g.png"
}
,
{
    "id": 139,
    "name": "ALMÔNDEGA BOVINA TRADICIONAL 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_tradicional_1kg.png"
},
{
    "id": 140,
    "name": "ALMÔNDEGA BOVINA COM CHIMICHURRI 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_com_chimichurri_500g.png"
},
{
    "id": 141,
    "name": "ALMÔNDEGA COM MOLHO DE TOMATE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_com_molho_de_tomate_500g.png"
},
{
    "id": 142,
    "name": "ALMÔNDEGA BOVINA COM ESPINAFRE 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Almôndega",
    "image": "src_produtos/images/almondega_bovina_com_espinafre_500g.png"
},
{
    "id": 143,
    "name": "HAMBÚRGUER BOVINO COM QUEIJO 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_com_queijo_120g.png"
},
{
    "id": 144,
    "name": "HAMBÚRGUER COM CHEDDAR E BACON 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_com_cheddar_e_bacon_150g.png"
},
{
    "id": 145,
    "name": "HAMBÚRGUER BOVINO CLÁSSICO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_classico_100g.png"
},
{
    "id": 146,
    "name": "HAMBÚRGUER BOVINO PICANTE 150G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_picante_150g.png"
},
{
    "id": 147,
    "name": "HAMBÚRGUER BOVINO COM CEBOLA ROXA 120G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_cebola_roxa_120g.png"
},
{
    "id": 148,
    "name": "HAMBÚRGUER BOVINO COM ALHO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_com_alho_100g.png"
},
{
    "id": 149,
    "name": "HAMBÚRGUER BOVINO COM TOMILHO 100G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Hambúrguer",
    "image": "src_produtos/images/hamburguer_bovino_com_tomilho_100g.png"
},
{
    "id": 150,
    "name": "CARNE SECA COM ABÓBORA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_com_abobora_1kg.png"
},
{
    "id": 151,
    "name": "CARNE SECA ACEBOLADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_acebolada_500g.png"
},
{
    "id": 152,
    "name": "CARNE SECA TRADICIONAL 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_seca_tradicional_1kg.png"
},
{
    "id": 153,
    "name": "CARNE DE SOL DESFIADA COM CEBOLA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Seca",
    "image": "src_produtos/images/carne_de_sol_desfiada_com_cebola_1kg.png"
},
{
    "id": 154,
    "name": "CARNE BOVINA AO MOLHO MADEIRA 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_ao_molho_madeira_1kg.png"
},
{
    "id": 155,
    "name": "CARNE BOVINA COZIDA AO VINHO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_cozida_ao_vinho_1kg.png"
},
{
    "id": 156,
    "name": "CARNE BOVINA EM TIRAS 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_em_tiras_500g.png"
},
{
    "id": 157,
    "name": "CARNE BOVINA DESFIADA TEMPERADA 500G",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_desfiada_temperada_500g.png"
},
{
    "id": 158,
    "name": "CARNE BOVINA GRELHADA AO PONTO 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_grelhada_ao_ponto_1kg.png"
},
{
    "id": 159,
    "name": "CARNE BOVINA EM CUBOS 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_em_cubos_1kg.png"
},
{
    "id": 160,
    "name": "CARNE BOVINA DESFIADA COM ERVAS 1KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Carne Bovina",
    "image": "src_produtos/images/carne_bovina_desfiada_com_ervas_1kg.png"
}
,
{
    "id": 161,
    "name": "PALETA MOÍDA MAGRA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/paleta_moida_magra_bovina_kg.png"
},
{
    "id": 162,
    "name": "CHÃ DE FORA MOÍDO MAGRO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/cha_de_fora_moido_magro_bovino_kg.png"
},
{
    "id": 163,
    "name": "CHÃ DE DENTRO MOÍDO MAGRO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/cha_de_dentro_moido_magro_bovino_kg.png"
},
{
    "id": 164,
    "name": "ACÉM FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/acem_fatiado_bovino_kg.png"
},
{
    "id": 165,
    "name": "CHÃ DE DENTRO FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/cha_de_dentro_fatiado_bovino_kg.png"
},
{
    "id": 166,
    "name": "CHÃ DE FORA FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/cha_de_fora_fatiado_bovino_kg.png"
},
{
    "id": 167,
    "name": "PATINHO FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/patinho_fatiado_bovino_kg.png"
},
{
    "id": 168,
    "name": "COXÃO MOLE FATIADO BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/coxao_mole_fatiado_bovino_kg.png"
},
{
    "id": 169,
    "name": "ACÉM EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/acem_em_cubos_bovino_kg.png"
},
{
    "id": 170,
    "name": "PATINHO EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/patinho_em_cubos_bovino_kg.png"
},
{
    "id": 171,
    "name": "COXÃO MOLE EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/coxao_mole_em_cubos_bovino_kg.png"
},
{
    "id": 172,
    "name": "CHÃ DE FORA EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/cha_de_fora_em_cubos_bovino_kg.png"
},
{
    "id": 173,
    "name": "CHÃ DE DENTRO EM CUBOS BOVINO KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/cha_de_dentro_em_cubos_bovino_kg.png"
},
{
    "id": 174,
    "name": "PICANHA PEÇA INTEIRA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/picanha_peca_inteira_bovina_kg.png"
},
{
    "id": 175,
    "name": "PICANHA FATIADA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/picanha_fatiada_bovina_kg.png"
},
{
    "id": 176,
    "name": "PICANHA EM BIFES BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/picanha_em_bifes_bovina_kg.png"
},
{
    "id": 177,
    "name": "CARNE MOÍDA DE PRIMEIRA BOVINA KG",
    "description": "",
    "category": "Proteinas",
    "subcategory": "Bovina",
    "image": "src_produtos/images/carne_moida_primeira_bovina_kg.png"
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
    "id": 179,
    "name": "WHISKY JOHNNIE WALKER RED LABEL 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_johnnie_walker_red_label_1l.png"
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
    "id": 182,
    "name": "WHISKY JOHNNIE WALKER GOLD LABEL RESERVE 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_johnnie_walker_gold_label_reserve_750ml.png"
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
    "id": 184,
    "name": "WHISKY WHITE HORSE 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_white_horse_1l.png"
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
    "id": 186,
    "name": "WHISKY PASSPORT 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_passport_1l.png"
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
    "id": 188,
    "name": "WHISKY OLD EIGHT 900 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_old_eight_900ml.png"
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
    "id": 190,
    "name": "WHISKY JOHNNIE WALKER DOUBLE BLACK 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_johnnie_walker_double_black_1l.png"
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
    "id": 192,
    "name": "WHISKY BALLANTINES 12 ANOS 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_ballantines_12_anos_1l.png"
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
    "id": 194,
    "name": "WHISKY JACK DANIEL´S TENNESSEE HONEY 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_jack_daniels_tennessee_honey_1l.png"
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
    "id": 196,
    "name": "WHISKY JACK DANIEL´S TENNESSEE FIRE 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Whisky",
    "image": "src_produtos/images/whisky_jack_daniels_tennessee_fire_1l.png"
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
    "id": 198,
    "name": "VODKA CIROC 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Vodka",
    "image": "src_produtos/images/vodka_ciroc_750ml.png"
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
    "id": 200,
    "name": "VODKA ABSOLUT 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Vodka",
    "image": "src_produtos/images/vodka_absolut_1l.png"
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
    "id": 202,
    "name": "VODKA BALALAIKA 1 L",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Vodka",
    "image": "src_produtos/images/vodka_balalaika_1l.png"
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
    "id": 206,
    "name": "VODKA ASKOV TRADICIONAL 900 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Vodka",
    "image": "src_produtos/images/vodka_askov_tradicional_900ml.png"
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
    "id": 208,
    "name": "VODKA PEQUENA SMIRNOFF 600 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Vodka",
    "image": "src_produtos/images/vodka_pequena_smirnoff_600ml.png"
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
    "id": 210,
    "name": "VODKA SMIRNOFF ICE LIMÃO LONG NECK 275 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Vodka",
    "image": "src_produtos/images/vodka_smirnoff_ice_limao_long_neck_275ml.png"
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
    "id": 212,
    "name": "GIN TANQUERAY 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Gin",
    "image": "src_produtos/images/gin_tanqueray_750ml.png"
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
    "id": 217,
    "name": "GIN BEEFEATER 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Gin",
    "image": "src_produtos/images/gin_beefeater_750ml.png"
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
    "id": 220,
    "name": "ESPUMANTE CHANDON RÉSERVE BRUT 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Espumantes",
    "image": "src_produtos/images/espumante_chandon_reserve_brut_750ml.png"
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
    "id": 222,
    "name": "ESPUMANTE CHANDON BRUT ROSÉ 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Espumantes",
    "image": "src_produtos/images/espumante_chandon_brut_rose_750ml.png"
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
    "id": 224,
    "name": "ESPUMANTE CHANDON PASSION ON ICE ROSÉ MEIO DOCE 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Espumantes",
    "image": "src_produtos/images/espumante_chandon_passion_on_ice_rose_meio_doce_750ml.png"
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
    "id": 226,
    "name": "CACHAÇA VALE VERDE EXTRA PREMIUM 700 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_vale_verde_700ml.png"
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
    "id": 228,
    "name": "CACHAÇA SAPUCAIA VELHA CARVALHO 5 ANOS 700 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_sapucaia_velha_750ml.png"
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
    "id": 230,
    "name": "CACHAÇA TIJUCA PREMIUM 670 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_tijuca_premium_670ml.png"
  },
  {
    "id": 231,
    "name": "CACHAÇA GERÔNIMO OURO 670 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_geronimo_ouro_670ml.png"
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
    "id": 233,
    "name": "CACHAÇA YPIOCA 150 OURO 700 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_ypioca_150_ouro_700ml.png"
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
    "id": 235,
    "name": "CACHAÇA SALINAS OURO 700 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_salinas_ouro_700ml.png"
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
    "name": "CACHAÇA WEBER HAUS OURO 700 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_weber_haus_ouro_700ml.png"
  },
  {
    "id": 238,
    "name": "CACHAÇA THORO OURO 670 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_thoro_ouro_670ml.png"
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
    "id": 240,
    "name": "CACHAÇA PRINCESA ISABEL CARVALHO 700 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Cachaça",
    "image": "src_produtos/images/cachaca_princesa_isabel_ouro_750ml.png"
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
    "id": 242,
    "name": "TEQUILA JOSE CUERVO ESPECIAL PRATA 750 ML",
    "description": "",
    "category": "Bebidas",
    "subcategory": "Tequila",
    "image": "src_produtos/images/tequila_prata.png"
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
  "id": 245,
  "name": "CONHAQUE DE ALCATRÃO SÃO JOÃO DA BARRA 900 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Conhaque",
  "image": "src_produtos/images/conhaque_sao_joao.png"
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
  "id": 248,
  "name": "LICOR BAILEYS 750 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Licor",
  "image": "src_produtos/images/licor_baileys.png"
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
  "id": 250,
  "name": "LICOR COINTREAU 700 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Licor",
  "image": "src_produtos/images/licor_cointreau.png"
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
  "id": 252,
  "name": "LICOR STOCK CURAÇAU FINO 720 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Licor",
  "image": "src_produtos/images/licor_stock_curacao_fino.png"
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
  "id": 254,
  "name": "LICOR 43 700 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Licor",
  "image": "src_produtos/images/licor_43.png"
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
  "id": 258,
  "name": "LICOR JAGERMEISTER 700 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Licor",
  "image": "src_produtos/images/licor_jagermeister.png"
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
  "id": 260,
  "name": "LICOR STOCK MARULA 720 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Licor",
  "image": "src_produtos/images/licor_stock_marula.png"
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
  "id": 264,
  "name": "CERVEJA MÉDIA SKOL PILSEN LATA 350 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_media_skol_pilsen_lata_350_ml.png"
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
  "id": 266,
  "name": "CERVEJA PEQUENA SKOL PILSEN LATA 269 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_pequena_skol_pilsen_lata_269_ml.png"
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
  "id": 268,
  "name": "CERVEJA HEINEKEN PURE MALT LAGER LATA 350 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_heineken_pure_malt_lager_lata_350_ml.png"
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
  "id": 272,
  "name": "CERVEJA HEINEKEN PURE MALT LAGER LONG NECK 330 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_heineken_pure_malt_lager_long_neck_330_ml.png"
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
  "id": 274,
  "name": "CERVEJA AMSTEL PURO MALTE LATA 350 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_amstel_puro_malte_lata_350_ml.png"
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
  "id": 278,
  "name": "CERVEJA ORIGINAL PILSEN GARRAFA 600 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_original_pilsen_garrafa_600_ml.png"
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
  "id": 280,
  "name": "CERVEJA PEQUENA BUDWEISER LATA 269 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_pequena_budweiser_lata_269_ml.png"
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
  "id": 282,
  "name": "CERVEJA PETRA PURO MALTE LATA 350 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_petra_puro_malte_lata_350_ml.png"
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
  "id": 284,
  "name": "CERVEJA ITAIPAVA MALZBIER LONG NECK 330 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_itaipava_malzbier_long_neck_330_ml.png"
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
  "id": 286,
  "name": "CERVEJA STELLA ARTOIS LONG NECK 330 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_stella_artois_long_neck_330_ml.png"
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
  "id": 288,
  "name": "CERVEJA PEQUENA HEINEKEN PURE MALT LAGER LATA 269 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_pequena_heineken_pure_malt_lager_lata_269_ml.png"
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
  "id": 290,
  "name": "CERVEJA SPATEN MUNICH GARRAFA 600 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_spaten_munich_garrafa_600_ml.png"
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
  "id": 292,
  "name": "CERVEJA SPATEN MUNICH LONG NECK 330 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Cervejas",
  "image": "src_produtos/images/cerveja_spaten_munich_long_neck_330_ml.png"
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
  "id": 295,
  "name": "RED BULL EDIÇÃO TROPICAL 250 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Energéticos",
  "image": "src_produtos/images/red_bull_edicao_tropical_250_ml.png"
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
  "id": 298,
  "name": "RED BULL EDIÇÃO COCO (COCONUT EDITION) 250 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Energéticos",
  "image": "src_produtos/images/red_bull_edicao_coco_250_ml.png"
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
  "id": 301,
  "name": "RED BULL EDIÇÃO FRUTAS SILVESTRES (BLUE EDITION) 250 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Energéticos",
  "image": "src_produtos/images/red_bull_edicao_frutas_silvestres_250_ml.png"
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
  "id": 304,
  "name": "MONSTER ULTRA BRANCO 473 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Energéticos",
  "image": "src_produtos/images/monster_ultra_branco_473_ml.png"
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
  "id": 306,
  "name": "MONSTER ULTRA MELANCIA 473 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Energéticos",
  "image": "src_produtos/images/monster_ultra_melancia_473_ml.png"
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
  "id": 308,
  "name": "SUCO MAGUARY ABACAXI 500 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_maguary_abacaxi_500_ml.png"
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
  "id": 311,
  "name": "SUCO MAGUARY UVA 500 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_maguary_uva_500_ml.png"
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
  "id": 313,
  "name": "SUCO DEL VALLE UVA TETRA PACK 1 L",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_del_valle_uva_tetra_pack_1l.png"
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
  "id": 315,
  "name": "SUCO DEL VALLE MARACUJÁ LATA 290 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_del_valle_maracuja_lata_290_ml.png"
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
  "id": 317,
  "name": "SUCO DEL VALLE MANGA LATA 290 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_del_valle_manga_lata_290_ml.png"
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
  "id": 323,
  "name": "SUCO GUARAVITON AÇAÍ 500 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_guaraviton_acai_500_ml.png"
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
  "id": 325,
  "name": "SUCO MAGUARY UVA TETRA PACK 1 L",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_maguary_uva_tetra_pack_1l.png"
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
  "id": 327,
  "name": "SUCO DE TOMATE SUPERBOM 1 L",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_de_tomate_superbom_1l.png"
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
  "id": 329,
  "name": "SUCO PEQUENO MAGUARY UVA 200 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_pequeno_maguary_uva_200_ml.png"
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
  "id": 331,
  "name": "SUCO DE TOMATE RAIOLA 1 L",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Sucos",
  "image": "src_produtos/images/suco_de_tomate_raiola_1l.png"
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
  "id": 333,
  "name": "XAROPE MONIN GRENADINE 700 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Xarope",
  "image": "src_produtos/images/xarope_monin_grenadine_700_ml.png"
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
  "id": 341,
  "name": "XAROPE MONIN KIWI 700 ML",
  "description": "",
  "category": "Bebidas",
  "subcategory": "Xarope",
  "image": "src_produtos/images/xarope_monin_kiwi_700_ml.png"
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
  "id": 345,
  "name": "EXTRATO DE TOMATE GRANDE ELEFANTE 4,08 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_grande_elefante_4080g.png"
},
{
  "id": 346,
  "name": "EXTRATO DE TOMATE BONARE GOURMET SUPER CONCENTRADO GOIÁS VERDE 4 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_bonare_gourmet_4kg.png"
},
{
  "id": 347,
  "name": "EXTRATO DE TOMATE EKMA 1,7 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_ekma_17kg.png"
},
{
  "id": 348,
  "name": "EXTRATO DE TOMATE BONARE GOIÁS VERDE 4 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_bonare_goias_4kg.png"
},
{
  "id": 349,
  "name": "EXTRATO DE TOMATE AJINOMOTO 2 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_ajinomoto_2kg.png"
},
{
  "id": 350,
  "name": "EXTRATO DE TOMATE QUERO 1,020 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_quero_1020g.png"
},
{
  "id": 351,
  "name": "EXTRATO DE TOMATE BONARE GOIÁS VERDE 1,7 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_bonare_goias_17kg.png"
},
{
  "id": 352,
  "name": "EXTRATO DE TOMATE ELEFANTE 1,7 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_elefante_17kg.png"
},
{
  "id": 353,
  "name": "EXTRATO DE TOMATE ELEFANTE 1,04 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_elefante_104kg.png"
},
{
  "id": 354,
  "name": "EXTRATO DE TOMATE KNORR 1,5 KG",
  "description": "",
  "category": "Alimentos",
  "subcategory": "Extrato de Tomate",
  "image": "src_produtos/images/extrato_tomate_knorr_15kg.png"
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

