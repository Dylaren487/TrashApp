export default{

"items": [
    {
      "id": 0,
      "header":"Trash category",
      "name": "Trash Category",
      "description": "",
      "bin":0,
      "parentID": "-1",
      "childID": [
        1,
        2,
        3,
        4,
        5,
        6,
        7,
        8
      ],
      "status": "category",
     "image": require('../image/img0.png')
    },
    {
      "id": 1,
      "header":"Plastic",
      "name": "Plastic",
      "description":"-",
      "bin":0,
      "parentID":"0",
      "childID": [
        9,
        10,
        11,
        12,
        13,
        14,
        15,
        33,
        34,
        35
      ],
      "status": "category",
      "image": require('../image/img1.png')
    
    },
    {
      "id": 2,
      "header":"Food scraps",
      "name": "Food scraps",
      "description": "-",
      "bin":3,
      "parentID":"0",
      "childID": [36,37],
      "status": "category",
      "image": require('../image/img2.png')
    },
    {
      "id": 3,
      "header":"Cloth",
      "name": "Cloth",
      "description": "-",
       "bin":1,
      "parentID":"0",
      "childID": [],
      "status": "trash",
      "image": require('../image/img3.png')
    },
    {
      "id": 4,
      "header":"Paper",
      "name": "Paper",
      "description": "-",
       "bin":0,
      "parentID":"0",
      "childID": [
        16,
        17,
        18,
        19,
        20
      ],
      "status": "category",
      "image": require('../image/img4.png')
    },
    {
      "id": 5,
      "header":"Foam",
      "name": "Foam",
      "description": "-",
       "bin":1,
      "parentID":"0",
      "childID": [],
      "status": "trash",
      "image": require('../image/img5.png')
    },
    {
      "id": 6,
      "header":"Glass",
      "name": "Glass",
      "description": "-",
       "bin":0,
      "parentID":"0",
      "childID": [
        21,
        22
      ],
      "status": "category",
      "image": require('../image/img6.png')
    },
    {
      "id": 7,
      "header":"Metal",
      "name": "Metal",
      "description": "-",
       "bin":0,
      "parentID":"0",
      "childID": [
        23,
        24
      ],
      "status": "category",
      "image": require('../image/img7.png')
    },
    {
      "id": 8,
      "header":"Hazardous",
      "name": "Hazardous ",
      "description":"-",
       "bin":0,
      "parentID": "0",
      "childID": [
        25,
        26,
        27,
        28,
        29,
        30,
        31,
        32
      ],
      "status": "category",
     "image": require('../image/img8.png')
    },
    {
      "id": 9,
      "header":"Plastic > Food bag",
      "name": "Food bag",
      "description": "Clean before disposal",
       "bin":1,
      "parentID":"1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img9.png')
    },
    {
      "id": 10,
      "header":"Plastic > Plastic bag",
      "name": "Plastic bag",
      "description": "Clean before disposal",
       "bin":2,
      "parentID":"1",
      "childID": [],
      "status": "trash",
     "image": require('../image/img10.png')
    },
    {
      "id": 11,
      "header":"Plastic > Straws",
      "name": "Straws",
      "description": "Clean before disposal",
      "bin":1,
      "parentID":"1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img11.png')
    },
    {
      "id": 12,
      "header":"Plastic > Plastic bottle",
      "name": "Plastic bottle",
      "description": "Clean before disposal",
      "bin":2,
      "parentID":"1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img12.png')
    },
    {
      "id": 13,
      "header":"Plastic > Plastic cup",
      "name": "Plastic cup",
      "description": "Clean before disposal",
      "bin":2,
      "parentID":"1",
      "childID": [],
      "status": "trash",
     "image": require('../image/img13.png')
    },
    {
      "id": 14,
      "header":"Plastic > Snack bag",
      "name": "Snack bag",
      "description": "Clean before disposal",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img14.png')
    },
    {
      "id": 15,
      "header":"Plastic > Food box",
      "name": "Food box",
      "description": "Clean before disposal",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img15.png')
    },
    {
      "id": 16,
      "header":"Paper > Newspaper",
      "name": "Newspaper",
      "description": "Tie a newspaper before trash",
       "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img16.png')
    },
    {
      "id": 17,
      "header":"Paper > Magazines",
      "name": "Magazines",
      "description": "Tie a magazines before trash",
       "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img17.png')
    },
    {
      "id": 18,
      "header":"Paper > Cardbord boxes",
      "name": "Cardboard boxes",
      "description": "Flatten cardboard box before trash",
       "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img18.png')
    },
    {
      "id": 19,
      "header":"Paper > Tissue",
      "name": "Tissue",
      "description": "",
       "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img19.png')
    },
    {
      "id": 20,
      "header":"Paper > Milk box",
      "name": "Milk box",
      "description": "Clean before disposal",
       "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img20.png')
    },
   
    {
      "id": 21,
      "header":"Glass > Bottle",
      "name": "Bottle",
      "description": "Separate the bottle cap from the bottle before trash",
       "bin":2,
      "parentID": "6",
      "childID": [],
      "status": "trash",
      "image": require('../image/img21.png')
    },
    {
      "id": 22,
      "header":"Glass > Glass scrap",
      "name": "Glass scrap",
      "description": "Wrap the glass scrap with newspaper",
       "bin":2,
      "parentID": "6",
      "childID": [],
      "status": "trash",
      "image": require('../image/img22.png')
    },
    {
      "id": 23,
      "header":"Metal > Can",
      "name": "Can",
      "description": "Clean before disposal",
       "bin":2,
      "parentID": "7",
      "childID": [],
      "status": "trash",
      "image": require('../image/img23.png')
    },
    {
      "id": 24,
      "header":"Metal > cap",
      "name": "Metal cap",
      "description": "-",
       "bin":2,
      "parentID": "7",
      "childID": [],
      "status": "trash",
      "image": require('../image/img24.png')
    },
    {
      "id": 25,
      "header":"Hazadous > Cleanser",
      "name": "Cleanser",
      "description": "-",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img25.png')
    },
    {
      "id": 26,
      "header":"Hazadous > Insecticide",
      "name": "Insecticide",
      "description": "-",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img26.png')
    },
    {
      "id": 27,
      "header":"Hazadous > Spary",
      "name": "Spary",
      "description": "Sprays until the content is depleted. then, poke one or two holes on the spray can.",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
    "image": require('../image/img27.png')
    },
    {
      "id": 28,
      "header":"Hazadous > Expired medicine",
      "name": "Expired medicine",
      "description": "-",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img28.png')
    },
    {
      "id": 29,
      "header":"Hazadous > Cosmetic",
      "name": "Cosmetic",
      "description": "-",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img29.png')
    },
    {
      "id": 30,
      "header":"Hazadous > Motor Oil",
      "name": " Motor Oil",
      "description": "Drain your oil into other container ",
      "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img30.png')
    },
    {
      "id": 31,
      "header":"Hazadous > Light bulb",
      "name": "Light bulb",
      "description": "Place the fluorescent light bulb in two plastic bags and seal it before putting it into the outside trash",
      "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img31.png')
    },
    {
      "id": 32,
      "header":"Hazadous > Insecticide",
      "name": "Batteries",
      "description": "Place the batteries bulb in two plastic bags and seal it before putting it into the outside trash",
      "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img32.png')
    },
    {
      "id": 33,
      "header":"Plastic > Noodle bag",
      "name": "Noodle bag",
      "description": "-",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img33.png')

    },
    {
      "id": 34,
      "header":"Plastic > Instant noodle cup",
      "name": "Instant noodle cup",
      "description": "-",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img34.png')

    },
    {
       "id": 35,
       "header":"Plastic > Candy bag",
      "name": "Candy bag",
      "description": "-",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img35.png')

    },
    {
       "id": 36,
       "header":"Food Scraps > Vegetable peels",
      "name": "Vegetable peels",
      "description": "-",
      "bin":1,
      "parentID": "3",
      "childID": [],
      "status": "trash",
    "image": require('../image/img36.png')

    },
    {
       "id": 37,
       "header":"Food Scraps > Meats",
      "name": "Meats",
      "description": "-",
      "bin":3,
      "parentID": "2",
      "childID": [],
      "status": "trash",
      "image": require('../image/img37.png')

    }
  ],
  "Bin":[
     {
      "id":0,
    "name":"Bin Category",
    "color":"",
    "dispose":[],
    "parentID":"-1",
    "childID":[1,2,3,4],
     "status": "category",
     "image": require('../image/imgB0.png')
    },
    {
    "id":1,
    "name":"General trash can",
    "color":"Color:Blue",
    "dispose":[3,5,9,11,14,15,33,34,35],
    "parentID":"0",
    "childID":[],
    "status": "bin",
    "image": require('../image/imgB1.png')
  },
  {
    "id":2,
    "name":"Recycle trash can",
    "color":"Color:Yellow",
    "dispose":[10,12,13,16,17,18,19,20,21,22,23,24],
    "parentID":"0",
    "childID":[],
    "status": "bin",
     "image": require('../image/imgB2.png')
  },
  {
    "id":3,
    "name":"Compostable trash can",
    "color":"Color:Green",
    "dispose":[36,37],
    "parentID":"0",
    "childID":[],
    "status": "bin",
     "image": require('../image/imgB3.png')
    
  },
  {
    "id":4,
    "name":"Hazardous trash can",
    "color":"Color:Red",
    "dispose":[25,26,27,28,29,30,31,32,33],
    "parentID":"0",
    "childID":[],
    "status": "bin",
     "image": require('../image/imgB4.png')
    
  }
  ],
  "favorite":"Favorite",
  "recent":"Recent",
  "mostSelect":"Most Select",
  "globalStatistic":"Global statistics",
  "localStatistical":"Local statistics",
  "clearHistory":"Clear history",
  "changeLanguage":"Change language",
  "item":"Item",
  "quantity":"Quantity",
  "notes":"Notes",
  "dispose":"Dispose",
  "globalStat":"Global statistics",
  "localStat":"Local statistics",
  "wasteStat":"Waste Disposed Statistics",
  "history":"History",
  "clearHistory":"Clear history",
  "language":"Language"
}