class Product{
    id: number;
    name: String;
    price: number;
    description: String;
    img: String;
    link: String;
  
    constructor(id: number, name: String, price: number, description: String, img:String, link:String){
      this.id = id;
      this.name = name;
      this.price = price;
      this.description = description;
      this.img = img;
      this.link = link;
    }
  }
  
  class Mobile extends Product{
    constructor(id: number, name: String, price: number, description: String, img:String, link:String){
      super(id,name, price, description,img,link);
    }
  } 
  
  class Laptop extends Product{
    constructor(id: number, name: String, price: number, description: String, img:String, link:String){
      super(id,name, price, description,img,link);
    }
  }

  class SmartWatch extends Product{
    constructor(id: number, name: String, price: number, description: String, img: String, link: String){
      super( id,name, price, description,img, link);
    }
  }
  
  class Earbuds extends Product{
    constructor(id: number, name: String, price: number, description: String, img: String, link: String){
      super( id,name, price, description,img, link);
    }
  }

  export const mobiles = [
    new Mobile(1,'СМАРТФОН APPLE IPHONE 7 32GB ROSE GOLD',164890,'A large phone with one of the best screens','assets/img/1.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_rose_gold_32_gb'),
    new Mobile(2,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY', 384890, 'A large phone with one of the best screens', 'assets/img/2.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_64gb_black_mwlt2_77_2121' ),
    new Mobile(3,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY',549890,'A large phone with one of the best screens','assets/img/3.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_pro_64gb_space_grey_mwc22_77_2141'),
    new Mobile (4,'СМАРТФОН APPLE IPHONE 11 PRO 64GB SPACE GREY',604890,'A large phone with one of the best screens','assets/img/4.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_11_pro_max_64gb_midnight_green_mwhh2_77_2157'),
    new Mobile (5,'СМАРТФОН APPLE IPHONE 8 64GB GOLD', 254890, 'A large phone with one of the best screens', 'assets/img/5.jpg', 'https://www.sulpak.kz/g/smartfon_apple__iphone8_64gb_gold'),
    new Mobile(6,'СМАРТФОН APPLE IPHONE 7 32GB BLACK', 164890, 'A large phone with one of the best screens', 'assets/img/6.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_black_32_gb'),
    new Mobile(7,'СМАРТФОН APPLE IPHONE 7 32GB GOLD', 164890,'A large phone with one of the best screens', 'assets/img/7.jpg', 'https://www.sulpak.kz/g/smartfon_apple_iphone_7_gold_32_gb'),
    new Mobile(8,'СМАРТФОН APPLE IPHONE 7 32GB SILVER', 164890, 'A large phone with one of the best screens', 'assets/img/8.jpg','https://www.sulpak.kz/g/smartfon_apple_iphone_7_silver_32_gb'),
  
  ];
  
  export const laptops = [
    new Laptop(9,'НОУТБУК APPLE MACBOOK AIR 13″ I5 1.8/8GB/128SSD SILVER (MQD32)', 409990, 'Powerful Laptop', 'assets/img/l_1.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_air_13_mqd32rua'),
    new Laptop(10,'НОУТБУК APPLE MACBOOK PRO 13″ I5 2.3/8/128GB SILVER (MPXR2)', 399990, 'Powerful Laptop', 'assets/img/l_3.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_13_mpxr2_silver__a1708'),
    new Laptop(11,'НОУТБУК APPLE MACBOOK PRO 13" I5 2.3/8/128GB SPACE GRAY (MPXQ2)', 399990, 'Powerful Laptop', 'assets/img/l_3.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_with_retina_display_mpxq2_space_gray'),
    new Laptop(12,'НОУТБУК APPLE MACBOOK 12″ CORE M3 1.1/8/256SSD SPACE GRAY (MLH72)', 441590, 'Powerfu; Laptop', 'assets/img/l_4.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_dyujmov_mlh72_space_gray'),
    new Laptop(13,'НОУТБУК APPLE MACBOOK 12″ CORE M3/ 8.0GB / 256GB SSD GOLD (MLHE2)',446290, 'Powerful Laptop', 'assets/img/l_5.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12__gold_mlhe2'),
    new Laptop(14,'НОУТБУК APPLE MACBOOK PRO 13" I5 2.3/8/128GB SPACE GRAY (MPXQ2)', 399990, 'Powerful Laptop', 'assets/img/l_6.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_pro_with_retina_display_mpxq2_space_gray'),
    new Laptop(15,'НОУТБУК APPLE MACBOOK 12″ I5/512GB/1.3GHZ SPACE GREY (MNYG2)', 496790,'Powerful Laptop', 'assets/img/l_7.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_space_grey_1_3ghz_mnyg2'),
    new Laptop(16,'НОУТБУК APPLE MACBOOK 12″ I5/512GB/1.3GHZ SPACE GREY (MNYG2)', 496790,'Powerful Laptop', 'assets/img/l_8.jpg', 'https://www.sulpak.kz/g/noutbuk_apple_macbook_12_space_grey_1_3ghz_mnyg2')
  ];

  export const smartWatches = [
    new SmartWatch(17, 'СМАРТ ЧАСЫ APPLE WATCH SERIES 2 SPACE BLACK, СПОРТИВНЫЙ РЕМЕШОК ЧЕРНОГО ЦВЕТА (MP4A2GKA)', 199990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_55_0.jpg', 'https://www.sulpak.kz/g/smart_chasiy_apple_watch_series_2_space_black_sportivniyj_remeshok_chernogo_cveta_mp4a2gka'),
    new SmartWatch(18, 'СМАРТ-ЧАСЫ GARMIN FENIX 5X SAPPHIRE (SLATE GREY WITH BLACK BAND)', 229990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_100_1.PNG', 'https://www.sulpak.kz/g/smart_chasiy_garmin_fenix_5x_sapphire_slate_grey_with_black_band'),
    new SmartWatch(19, 'СМАРТ-ЧАСЫ GARMIN VIVOMOVE HR (GOLD) 010-01850-25', 94990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_116_3.jpg', 'https://www.sulpak.kz/g/smart_chasiy_garmin_vivomove_hr_gold_010_01850_25'),
    new SmartWatch(20, 'СМАРТ ЧАСЫ SAMSUNG GALAXY WATCH SM-R800 46 ММ SILVER (SM-R800NZSASKZ)', 129990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_160_5.jpg', 'https://www.sulpak.kz/g/smart_chasiy_samsung_galaxy_watch_galileo_sm_r800nzsaskz'),
    new SmartWatch(21, 'СМАРТ ЧАСЫ SAMSUNG GALAXY WATCH ACTIVE2 STAINLESS 40MM BLACK SM-R830NSKASKZ', 149990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_363_0.jpg', 'https://www.sulpak.kz/g/smart_chasiy__samsung_galaxy_watch_active2_stainless_40mm_black_sm_r830nskaskz_911_363'),
    new SmartWatch(22, 'СМАРТ ЧАСЫ HONOR WATCH MAGIC TLS-B19 LAVA BLACK', 54890, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_309_0.jpg', 'https://www.sulpak.kz/g/smart_chasiy_honor_watch_magic_black_tls_b19__911_309'),
    new SmartWatch(23, 'СМАРТ ЧАСЫ XIAOMI GTS (BLACK)', 67990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_405_0.jpg', 'https://www.sulpak.kz/g/smart_chasiy_xiaomi_gts_black_911_405'),
    new SmartWatch(24, 'СМАРТ ЧАСЫ XIAOMI GTR 47MM', 69990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_406_0.jpg', 'https://www.sulpak.kz/g/smart_chasiy_xiaomi_gtr_47mm_911_406'),
    new SmartWatch(25, 'СМАРТ-ЧАСЫ GARMIN FENIX 5S SILVER С БЕЛЫМ РЕМЕШКОМ (010-01685-00)', 242990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_911_119_3.jpg', 'https://www.sulpak.kz/g/smart_chasiy_garmin_fenix_5s_silver_s_beliym_remeshkom_010_01685_00'),
    new SmartWatch(26, 'СМАРТ ЧАСЫ APPLE WATCH EDITION WHITE CERAMIC, СПОРТИВНЫЙ РЕМЕШОК ЦВЕТА "ОБЛАКО" (MNPQ2GK/A)', 479990, 'Smart Watch','https://object.pscloud.io/cms/cms/Photo/img_0_519_62_0.png', 'https://www.sulpak.kz/g/smart_chasiy_apple_watch_edition_white_ceramic_sportivniyj_remeshok_cveta_oblako_mnpq2gka')
  ];

  
  export const earBuds = [
    new Earbuds(27, 'НАУШНИКИ ГАРНИТУРА SAMSUNG GALAXY BUDS SM-R170NZKASKZ BLACK', 39990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_1040_0.jpg', 'https://www.sulpak.kz/g/naushniki_garnitura_samsung_galaxy_buds_black_sm_r170nzkaskz'),
    new Earbuds(28, 'НАУШНИКИ ВНУТРИКАНАЛЬНЫЕ SONY WF1000XB.E BLACK', 44990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_873_0.png', 'https://www.sulpak.kz/g/naushniki_vnutrikanalniye_sony_wf1000xb_echerniyj'),
    new Earbuds(29, 'НАУШНИКИ-ГАРНИТУРА SONY WF1000XM3S.E GOLD', 89990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_1138_5.png', 'https://www.sulpak.kz/g/naushniki_garnitura_sony_wf1000xm3s_e_83_1138'),
    new Earbuds(30, 'НАУШНИКИ ВКЛАДЫШИ JBL T220TWSBLU', 54990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_1439_0.jpg', 'https://www.sulpak.kz/g/naushniki_vkladiyshi_jbl_jblt220twsblu_83_1439'),
    new Earbuds(31, 'НАУШНИКИ-ГАРНИТУРА XIAOMI MI WIRELESS EARPHONES WHITE', 31990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_1036_0.jpg', 'https://www.sulpak.kz/g/naushniki_garnitura_xiaomi_mi_airdots_pro'),
    new Earbuds(32, 'НАУШНИКИ JBL TUNE T120TWS BLACK', 39990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_1265_3.jpg', 'https://www.sulpak.kz/g/naushniki_jbl_t120twsblk_83_1265'),
    new Earbuds(33, 'НАУШНИКИ-ГАРНИТУРА APPLE AIRPODS MV7N2RU/A WHITE', 89990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_1081_0.jpg', 'https://www.sulpak.kz/g/naushniki_garnitura_apple_airpods_mv7n2rua_with_charging_case'),
    new Earbuds(34, 'НАУШНИКИ APPLE AIRPODS PRO WITH WIRELESS CASE MWP22 WHITE', 139990, 'True Wireless Ear buds','https://object.pscloud.io/cms/cms/Photo/img_0_83_1263_2.png', 'https://www.sulpak.kz/g/naushniki_apple_airpods_pro_with_wireless_case_mwp22_83_1263')
    ];
  
  export const products = [
        
  ];
  
    
    /*
    Copyright Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license
    */