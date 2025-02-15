const SHOP_DATA = [
  {
    title: 'Rings',
    items: [
      {
        id: 1,
        name: 'Diamond Solitaire Ring',
        imageUrl: 'https://www.serendipitydiamonds.com/blog/wp-content/uploads/2021/11/kensington-engagement-ring-side-view.jpg',
        price: 499,
      },
      {
        id: 2,
        name: 'Gold Wedding Band',
        imageUrl: 'https://cdn.sanity.io/images/kkdykxo2/production/e84e15b88ed514f0c1d7c2e28fbf3b1f94db87a8-8000x8000.jpg/spectra-ring-yellow-gold-efva-attling_13-101-02237_.jpg?auto=format&w=780&h=780&fit=max',
        price: 299,
      },
      {
        id: 3,
        name: 'Emerald Cocktail Ring',
        imageUrl: 'https://m.media-amazon.com/images/I/61Ga2HjzUYL._AC_UY1000_.jpg',
        price: 599,
      },
      {
        id: 4,
        name: 'Sapphire Halo Ring',
        imageUrl: 'https://www.larsenjewellery.com.au/wp-content/uploads/2023/09/rosetta-azure-brilliant-white-gold-500x500.jpg',
        price: 549,
      },
      {
        id: 5,
        name: 'Rose Gold Promise Ring',
        imageUrl: 'https://www.zalesoutlet.com/productimages/processed/V-19980689_0_800.jpg?pristine=true',
        price: 399,
      },
      {
        "id": 6,
        "name": "Platinum Eternity Ring",
        "imageUrl": "https://www.fraserhart.co.uk/dw/image/v2/BFNQ_PRD/on/demandware.static/-/Sites-ang_master-catalog/default/dwdb9ef5d2/hi-res/platinum-050-carat-princess-cut-diamond-eternity-ring-01-02-0-5133-img1.jpg?sw=1000&sh=1000&sm=fit",
        "price": 699
      },
      {
        "id": 7,
        "name": "Vintage Opal Ring",
        "imageUrl": "https://images.squarespace-cdn.com/content/v1/5e2f4f8d2c34c839cff565ae/1673053344944-WH9SB9ZK5J2PQJWKNF2N/turner-tatler-vintage-opal-and-diamond-ring-1.jpg?format=2500w",
        "price": 459
      },
      {
        "id": 8,
        "name": "Black Diamond Ring",
        "imageUrl": "https://www.shimansky.co.za/cdn/shop/files/FCR34-WG1.40ctBlkRO-Image01-3DView.jpg?v=1693218420&width=3024",
        "price": 799
      },
      {
        "id": 9,
        "name": "Twist Infinity Ring",
        "imageUrl": "https://www.tailoredjewel.com/wp-content/uploads/2020/08/infinity-twist-band-WG-2.jpg",
        "price": 349
      }
    ],
  },
  {
    title: 'Necklaces',
    items: [
      {
        id: 10,
        name: 'Pearl Strand Necklace',
        imageUrl: 'https://www.benbridge.com/dw/image/v2/ABAW_PRD/on/demandware.static/-/Sites-bbj-master-catalog/default/dw8a5d98cb/images/11901832_01.jpg?sw=800&sh=800',
        price: 699,
      },
      {
        id: 11,
        name: 'Diamond Pendant Necklace',
        imageUrl: 'https://cdn11.bigcommerce.com/s-7plbcvh/images/stencil/1280x1280/products/1295/4799/Natural-Diamond-Solitaire-Pendant-Necklace-0.65-Carat-14K-White-Gold-handmade__35575.1712334027.jpg?c=2',
        price: 899,
      },
      {
        id: 12,
        name: 'Gold Chain Necklace',
        imageUrl: 'https://www.gorjana.com/cdn/shop/files/APR24_PRO_244-110-G_01_6641f73f-e59e-4793-9cf5-7511b492d67f.jpg?v=1710951181&%3Bwidth=1080&em-format=auto',
        price: 599,
      },
      {
        id: 13,
        name: 'Sapphire Heart Necklace',
        imageUrl: 'https://jianlondon.co.uk/prodimages/Large/18258WE-2.jpg',
        price: 799,
      },
      {
        id: 14,
        name: 'Emerald Teardrop Necklace',
        imageUrl: 'https://image.brilliantearth.com/media/product_images/0A/BE4E335_yellow_top.jpg',
        price: 749,
      },
      {
        id: 15,
        name: 'Rose Gold Locket',
        imageUrl: 'https://www.loveloxlockets.com/cdn/shop/products/heart-locket-rose-hero_345x345@2x.jpg?v=1596480169',
        price: 679,
      },
      {
        id: 16,
        name: 'Opal Charm Necklace',
        imageUrl: 'https://atpresent.com/cdn/shop/files/akaila-reid-small-ethiopian-opal-charm-764876.jpg?v=1722322901&width=1200',
        price: 720,
      },
      {
        id: 17,
        name: 'Ruby Cluster Necklace',
        imageUrl: 'https://ferkosfinejewelry.com/cdn/shop/products/N11264WWR_1x1_ec39c37d-3cfa-4f7b-8a09-998dbe3ab42a_1024x1024.jpg?v=1631585032',
        price: 800,
      },
    ],
  },
  {
    title: 'Earrings',
    items: [
      {
        id: 18,
        name: 'Diamond Stud Earrings',
        imageUrl: 'https://www.diamondmansion.com/media/catalog/product/cache/5a3741af3b52fc8df45571a3fad389d7/2/_/2_carat_diamond_stud_earrings_1.jpg',
        price: 450,
      },
      {
        id: 19,
        name: 'Gold Hoop Earrings',
        imageUrl: 'https://prod-sfcc-api.michaelhill.com/dw/image/v2/AANC_PRD/on/demandware.static/-/Sites-MHJ_Master/default/dwaceba6c2/images/P15465955/P15465955-25-21.jpg',
        price: 350,
      },
      {
        id: 20,
        name: 'Emerald Drop Earrings',
        imageUrl: 'https://placehold.co/350x350https://www.keanes.ie/cdn/shop/products/1102068.png?v=1655823190',
        price: 550,
      },
      {
        id: 21,
        name: 'Pearl Cluster Earrings',
        imageUrl: 'https://berlingerjewelry.com/cdn/shop/files/P2410469-WG_192c69d5-e6b7-4124-a294-94ab13654588_1445x.jpg?v=1693333321',
        price: 400,
      },
      {
        id: 22,
        name: 'Ruby Stud Earrings',
        imageUrl: 'https://www.wixonjewelers.com/wp-content/uploads/2019/05/162080-1-ruby-stud-earrings.jpg',
        price: 500,
      },
    ],
  },
  {
    title: 'Bracelets',
    items: [
      {
        id: 23,
        name: 'Gold Chain Bracelet',
        imageUrl: 'https://cdn.abicart.com/shop/ws85/120085/art85/h3539/206463539-origpic-78a09a.jpg',
        price: 550,
      },
      {
        id: 24,
        name: 'Silver Bangle Set',
        imageUrl: 'https://deuxlionsjewelry.com/cdn/shop/files/MG_3466_800x.jpg?v=1685818734',
        price: 400,
      },
      {
        id: 25,
        name: 'Diamond Tennis Bracelet',
        imageUrl: 'https://www.nk.se/globalassets/20089317.jpg?ref=96ED4C4AF9&w=640&format=jpg&quality=85',
        price: 750,
      },
      {
        id: 26,
        name: 'Rose Gold Cuff Bracelet',
        imageUrl: 'https://hillbergandberk.com/cdn/shop/files/23EMBA05-ROS-SM_3200x.png?v=1722031957',
        price: 500,
      },
      {
        id: 27,
        name: 'Platinum Charm Bracelet',
        imageUrl: 'https://www.lelandlittle.com/images/inventory/large/362/362079_1.jpg',
        price: 600,
      },
      {
        id: 28,
        name: 'Sapphire Beaded Bracelet',
        imageUrl: 'https://www.ommo-london.co.uk/wp-content/uploads/2020/06/Saphire-18ct-gold-bracelet-OMMO-London-122834.jpg',
        price: 450,
      },
      {
        id: 29,
        name: 'Leather Wrap Bracelet',
        imageUrl: 'https://www.jewelrybybloom.com/wp-content/uploads/2020/02/CB1013-Tobacco-Turquoise-Thin-Rondelle-Triple-Wrap-Bracelet-2.png',
        price: 350,
      },
    ],
  },
  {
    title: 'Brooches',
    items: [
      {
        id: 30,
        name: 'Vintage Pearl Brooch',
        imageUrl: 'https://wristaficionado.com/cdn/shop/files/antique-brooch-platinum-jewels-aficionado-41305804898548.jpg?v=1713208306&width=2160',
        price: 300,
      },
      {
        id: 31,
        name: 'Sapphire Floral Brooch',
        imageUrl: 'https://jemsofremuera.co.nz/cdn/shop/products/A4123__2022-05-24-10-50-00-lFyQc_1024x1024@2x.jpg?v=1653357893',
        price: 450,
      },
      {
        id: 32,
        name: 'Gold Leaf Brooch',
        imageUrl: 'https://sothebys-md.brightspotcdn.com/dims4/default/54b1a40/2147483647/strip/true/crop/6105x6105+0+0/resize/1024x1024!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fdd%2Fc8%2Fcc8823ff43c38ce10c2c42af721e%2F191n11214-c8czv-01.jpg',
        price: 350,
      },
      {
        id: 33,
        name: 'Emerald Feather Brooch',
        imageUrl: 'https://whitelily.uk/wp-content/uploads/2024/11/Emerald-Feather-Brooch-600x658.webp',
        price: 400,
      },
      {
        id: 34,
        name: 'Crystal Starburst Brooch',
        imageUrl: 'https://www.jennifergibsonjewellery.com/wp-content/uploads/2023/05/Jennifer-Gibson-Jewellery-1603-2-1000x1000.jpg',
        price: 500,
      },
      {
        id: 35,
        name: 'Ruby Rose Brooch',
        imageUrl: 'https://sothebys-md.brightspotcdn.com/dims4/default/649deb5/2147483647/strip/true/crop/2000x2000+0+0/resize/4096x4096!/quality/90/?url=http%3A%2F%2Fsothebys-brightspot.s3.amazonaws.com%2Fmedia-desk%2Fwebnative%2Fimages%2F88%2F18%2F51d8334a47b7a95469471462d43a%2Fn11519-cxr9h-t3-01.jpg',
        price: 550,
      },
    ],
  },
];

export default SHOP_DATA;
