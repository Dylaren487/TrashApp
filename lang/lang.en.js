export default{
    "items": [
        {
            "id": 0,
            "name": "Trash Category",
            "description": "",
            "bin": 0,
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
            "name": "Plastic",
            "description": "-",
            "bin": 0,
            "parentID": "0",
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
            "name": "Food scraps",
            "description": "-",
            "bin": 3,
            "parentID": "0",
            "childID": [36, 37],
            "status": "category",
            "image": require('../image/img2.png')
        },
        {
            "id": 3,
            "name": "Cloth",
            "description": "-",
            "bin": 1,
            "parentID": "0",
            "childID": [],
            "status": "trash",
            "image": require('../image/img3.png')
        },
        {
            "id": 4,
            "name": "Paper",
            "description": "-",
            "bin": 0,
            "parentID": "0",
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
            "name": "Foam",
            "description": "-",
            "bin": 1,
            "parentID": "0",
            "childID": [],
            "status": "trash",
            "image": require('../image/img5.png')
        },
        {
            "id": 6,
            "name": "Glass",
            "description": "-",
            "bin": 0,
            "parentID": "0",
            "childID": [
                21,
                22
            ],
            "status": "category",
            "image": require('../image/img6.png')
        },
        {
            "id": 7,
            "name": "Metal",
            "description": "-",
            "bin": 0,
            "parentID": "0",
            "childID": [
                23,
                24
            ],
            "status": "category",
            "image": require('../image/img7.png')
        },
        {
            "id": 8,
            "name": "Hazard ",
            "description": "-",
            "bin": 0,
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
            "name": "Food bag",
            "description": "Clean before disposal",
            "bin": 1,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img9.png')
        },
        {
            "id": 10,
            "name": "Plastic bag",
            "description": "Clean before disposal",
            "bin": 2,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img10.png')
        },
        {
            "id": 11,
            "name": "Straws",
            "description": "Clean before disposal",
            "bin": 1,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img11.png')
        },
        {
            "id": 12,
            "name": "Plastic bottle",
            "description": "Clean before disposal",
            "bin": 2,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img12.png')
        },
        {
            "id": 13,
            "name": "Plastic cup",
            "description": "Clean before disposal",
            "bin": 2,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img13.png')
        },
        {
            "id": 14,
            "name": "Snack bag",
            "description": "Clean before disposal",
            "bin": 1,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img14.png')
        },
        {
            "id": 15,
            "name": "Food box",
            "description": "Clean before disposal",
            "bin": 1,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img15.png')
        },
        {
            "id": 16,
            "name": "Newspaper",
            "description": "Tie a newspaper before trash",
            "bin": 2,
            "parentID": "4",
            "childID": [],
            "status": "trash",
            "image": require('../image/img16.png')
        },
        {
            "id": 17,
            "name": "Magazines",
            "description": "Tie a magazines before trash",
            "bin": 2,
            "parentID": "4",
            "childID": [],
            "status": "trash",
            "image": require('../image/img17.png')
        },
        {
            "id": 18,
            "name": "Cardboard boxes",
            "description": "Flatten cardboard box before trash",
            "bin": 2,
            "parentID": "4",
            "childID": [],
            "status": "trash",
            "image": require('../image/img18.png')
        },
        {
            "id": 19,
            "name": "Tissue",
            "description": "",
            "bin": 2,
            "parentID": "4",
            "childID": [],
            "status": "trash",
            "image": require('../image/img19.png')
        },
        {
            "id": 20,
            "name": "Milk box",
            "description": "Clean before disposal",
            "bin": 2,
            "parentID": "4",
            "childID": [],
            "status": "trash",
            "image": require('../image/img20.png')
        },

        {
            "id": 21,
            "name": "Bottle",
            "description": "Separate the bottle cap from the bottle before trash",
            "bin": 2,
            "parentID": "6",
            "childID": [],
            "status": "trash",
            "image": require('../image/img21.png')
        },
        {
            "id": 22,
            "name": "Glass scrap",
            "description": "Wrap the glass scrap with newspaper",
            "bin": 2,
            "parentID": "6",
            "childID": [],
            "status": "trash",
            "image": require('../image/img22.png')
        },
        {
            "id": 23,
            "name": "Can",
            "description": "Clean before disposal",
            "bin": 2,
            "parentID": "7",
            "childID": [],
            "status": "trash",
            "image": require('../image/img23.png')
        },
        {
            "id": 24,
            "name": "Metal cap",
            "description": "-",
            "bin": 2,
            "parentID": "7",
            "childID": [],
            "status": "trash",
            "image": require('../image/img24.png')
        },
        {
            "id": 25,
            "name": "Cleanser",
            "description": "-",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img25.png')
        },
        {
            "id": 26,
            "name": "Insecticide",
            "description": "-",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img26.png')
        },
        {
            "id": 27,
            "name": "Spary",
            "description": "Sprays until the content is depleted. then, poke one or two holes on the spray can.",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img27.png')
        },
        {
            "id": 28,
            "name": "Expired medicine",
            "description": "-",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img28.png')
        },
        {
            "id": 29,
            "name": "Cosmetic",
            "description": "-",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img29.png')
        },
        {
            "id": 30,
            "name": "Motor Oil",
            "description": "Drain your oil into other container ",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img30.png')
        },
        {
            "id": 31,
            "name": "Light bulb",
            "description": "Place the fluorescent light bulb in two plastic bags and seal it before putting it into the outside trash",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img31.png')
        },
        {
            "id": 32,
            "name": "Batteries",
            "description": "Place the batteries bulb in two plastic bags and seal it before putting it into the outside trash",
            "bin": 4,
            "parentID": "8",
            "childID": [],
            "status": "trash",
            "image": require('../image/img32.png')
        },
        {
            "id": 33,
            "name": "Noodle bag",
            "description": "-",
            "bin": 1,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img33.png')

        },
        {
            "id": 34,
            "name": "Instant noodle cub",
            "description": "-",
            "bin": 1,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img34.png')

        },
        {
            "id": 35,
            "name": "Candy bag",
            "description": "-",
            "bin": 1,
            "parentID": "1",
            "childID": [],
            "status": "trash",
            "image": require('../image/img35.png')

        },
        {
            "id": 36,
            "name": "Vegetable peels",
            "description": "-",
            "bin": 1,
            "parentID": "3",
            "childID": [],
            "status": "trash",
            "image": require('../image/img36.png')

        },
        {
            "id": 37,
            "name": "Meats",
            "description": "-",
            "bin": 3,
            "parentID": "2",
            "childID": [],
            "status": "trash",
            "image": require('../image/img37.png')

        }
    ],
    "Bin": [
        {
            "id": 0,
            "name": "Bin Category",
            "color": "",
            "dispose": [],
            "parentID": "-1",
            "childID": [1, 2, 3, 4],
            "status": "category",
            "image": require('../image/imgB0.png')
        },
        {
            "id": 1,
            "name": "General trash can",
            "color": "Color:Blue",
            "dispose": [3, 5, 9, 11, 14, 15, 33, 34, 35],
            "parentID": "0",
            "childID": [],
            "status": "bin",
            "image": require('../image/imgB1.png')
        },
        {
            "id": 2,
            "name": "Recycle trash can",
            "color": "Color:Yellow",
            "dispose": [10, 12, 13, 16, 17, 18, 19, 20, 21, 22, 23, 24],
            "parentID": "0",
            "childID": [],
            "status": "bin",
            "image": require('../image/imgB2.png')
        },
        {
            "id": 3,
            "name": "Compostable trash can",
            "color": "Color:Green",
            "dispose": [36, 37],
            "parentID": "0",
            "childID": [],
            "status": "bin",
            "image": require('../image/imgB3.png')

        },
        {
            "id": 4,
            "name": "Hazardous trash can",
            "color": "Color:Red",
            "dispose": [25, 26, 27, 28, 29, 30, 31, 32, 33],
            "parentID": "0",
            "childID": [],
            "status": "bin",
            "image": require('../image/imgB4.png')

        }
    ],
    "favorite": "Favorite",
    "recent": "Recent",
    "mostSelect": "Most Select",
    "globalStatistic": "Global statistics",
    "localStatistical": "Local statistics",
    "clearHistory": "Clear history",
    "changeLanguage": "Change language",
    "item": "Item",
    "quantity": "Quantity",
    "notes": "Notes",
    "dispose": "Dispose"


}