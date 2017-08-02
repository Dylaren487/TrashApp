export default{
  "items": [
    {
      "id": 0,
      "header":"ประเภทของขยะ",
      "name": "ประเภทของขยะ",
      "description": "ประเภทขยะ",
       "bin":0,
      "parentID":"-1",
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
      "header":"พลาสติก",
      "name": "พลาสติก",
      "description": "-",
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
      "header":"เศษอาหาร",
      "name": "เศษอาหาร",
      "description":"-",
      "bin":3,
      "parentID": "0",
      "childID": [36,37],
      "status": "category",
        "image": require('../image/img2.png')
    
    },
    {
      "id": 3,
      "header":"ผ้า",
      "name": "ผ้า",
      "description": "-",
      "bin":1,
      "parentID":"0",
      "childID": [],
      "status": "trash",
      "image": require('../image/img3.png')
    },
    {
      "id": 4,
      "header":"กระดาษ",
      "name":"กระดาษ",
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
      "header":"โฟม",
      "name":"โฟม",
      "description":"-",
      "bin":1,
      "parentID":"0",
      "childID": [],
      "status": "trash",
      "image": require('../image/img5.png')
    },
    {
      "id": 6,
      "header":"แก้ว",
      "name":"แก้ว",
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
      "header":"โลหะ",
      "name":"โลหะ",
      "description":"-",
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
      "header":"ขยะอันตราย",
      "name": "ขยะอันตราย",
      "description":"-",
      "bin":0,
      "parentID":"0",
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
      "header":"พลาสติก > ถุงพลาสติกใส่อาหาร",
      "name": "ถุงพลาสติกใส่อาหาร",
      "description": "ทำความสะอาดก่อนทิ้ง",
        "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
     "image": require('../image/img9.png')
    },
    {
      "id": 10,
      "header":"พลาสติก > ถุงพลาสติก",
      "name": "ถุงพลาสติก",
      "description": "ทำความสะอาดก่อนทิ้ง",
      "bin":2,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img10.png')
            
    },
    {
      "id": 11,
      "header":"พลาสติก > หลอด",
      "name": "หลอด",
      "description": "ทำความสะอาดก่อนทิ้ง",
        "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img11.png')
    },
    {
      "id": 12,
      "header":"พลาสติก > ขวดพลาสติก",
      "name": "ขวดพลาสติก",
      "description": "ทำความสะอาดก่อนทิ้ง",
       "bin":2,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img12.png')
    },
    {
      "id": 13,
      "header":"พลาสติก > แก้วพลาสติก",
      "name": "แก้วพลาสติก",
      "description": "ทำความสะอาดก่อนทิ้ง",
       "bin":2,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img13.png')
    },
    {
      "id": 14,
      "header":"พลาสติก > ซองขนม",
      "name": "ซองขนม",
      "description": "ทำความสะอาดก่อนทิ้ง",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img14.png')
    },
    {
      "id": 15,
      "header":"พลาสติก > กล่องอาหาร",
      "name": "กล่องอาหาร",
      "description": "ทำความสะอาดก่อนทิ้ง",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img15.png')
    },
    {
      "id": 16,
      "header":"กระดาษ > กระดาษหนังสือพิมพ์",
      "name": "กระดาษหนังสือพิมพ์",
      "description":"ใช้เชือกมัดหนังสือพิมพ์เข้าด้วยกันก่อนทิ้ง ",
      "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img16.png')
    },
    {
      "id": 17,
      "header":"กระดาษ > นิตยสาร",
      "name": "นิตยสาร",
      "description": "ใช้เชือกมัดนิตยสารเข้าด้วยกันก่อนทิ้ง",
      "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img17.png')
    },
    {
      "id": 18,
      "header":"กระดาษ > กล่องกระดาษลัง",
      "name": "กล่องกระดาษลัง",
      "description": "พับให้เป็นแผ่นก่อนทิ้ง",
      "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img18.png')
    },
    {
      "id": 19,
      "header":"กระดาษ > กระดาษทิชชู้",
      "name": "กระดาษทิชชู",
      "description": "",
      "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img19.png')
    },
    {
      "id": 20,
      "header":"กระดาษ > กล่องนม",
      "name": "กล่องนม",
      "description": "ทำความสะอาดก่อนทิ้ง",
      "bin":2,
      "parentID": "4",
      "childID": [],
      "status": "trash",
      "image": require('../image/img20.png')
    },
    {
      "id": 21,
      "header":"แก้ว > ขวดแก้ว",
      "name": "ขวดแก้ว",
      "description": "แยกฝาจีบออกจากขวดแก้ว",
      "bin":2,
      "parentID": "6",
      "childID": [],
      "status": "trash",
      "image": require('../image/img21.png')
    },
    {
      "id": 22,
      "header":"แก้ว > เศษแก้ว",
      "name": "เศษแก้ว",
      "description": "ห่อเศษแก้วด้วยกระดาษหนังสือพิมพ์ก่อนทิ้ง",
      "bin":2,
      "parentID": "6",
      "childID": [],
      "status": "trash",
      "image": require('../image/img22.png')
    },
    {
      "id": 23,
      "header":"โลหะ > กระป๋อง",
      "name": "กระป๋อง",
      "description": "ทำความสะอาดก่อนทิ้ง",
      "bin":2,
      "parentID": "7",
      "childID": [],
      "status": "trash",
      "image": require('../image/img23.png')
    },
    {
      "id": 24,
      "name": "โลหะ > ฝาจีบ",
      "description": "-",
      "bin":2,
      "parentID": "7",
      "childID": [],
      "status": "trash",
      "image": require('../image/img24.png')
    },
    {
      "id": 25,
      "header":"ขยะอันตราย > น้ำยาทำความสะอาด",
      "name": "น้ำยาทำความสะอาด",
      "description": "-",
      "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img25.png')
    },
    {
      "id": 26,
      "header":"ขยะอันตราย > ยาฆ่าแมลง",
      "name": "ยาฆ่าแมลง",
      "description": "-",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img26.png')
    },
    {
      "id": 27,
      "header":"ขยะอันตราย > สเปรย์",
      "name": "สเปรย์",
      "description": "ใช้จนหมดและเจาะรูที่กระป๋องก่อนทิ้ง.",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
     "image": require('../image/img27.png')
    },
    {
      "id": 28,
      "header":"ขยะอันตราย > ยาหมดอายุ",
      "name": "ยาหมดอายุ",
      "description": "-",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img28.png')
    },
    {
      "id": 29,
      "header":"ขยะอันตราย > เครื่องสำอาง",
      "name": "เครื่องสำอาง",
      "description": "-",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img29.png')
    },
    {
      "id": 30,
      "header":"ขยะอันตราย > ขวดน้ำมันเครื่อง",
      "name": "ขวดน้ำมันเครื่อง",
      "description": "ถ่ายน้ำมันเครื่องไปไว้ในภาชนะอื่นก่อนทิ้ง",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img30.png')
    },
    {
      "id": 31,
      "name": "หลอดไฟ",
      "header":"ขยะอันตราย > หลอดไฟ",
      "description": "ใส่หลอดไฟในถุงพลาสติกและห่อให้มิดชิดก่อนทิ้ง",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img31.png')
    },
    {
      "id": 32,
      "header":"ขยะอันตราย > แบตเตอรี่",
      "name": "แบตเตอรี่",
      "description": "ใส่แบตเตอรี่ในถุงพลาสติกและห่อให้มิดชิดก่อนทิ้ง",
       "bin":4,
      "parentID": "8",
      "childID": [],
      "status": "trash",
      "image": require('../image/img32.png')
    },
     {
      "id": 33,
      "header":"พลาสติก > ซองบะหมี่กึ่งสำเร็จรูป",
      "name": "ซองบะหมี่กึ่งสำเร็จรูป",
      "description": "-",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
       "image": require('../image/img33.png')

    },
    {
      "id": 34,
      "header":"พลาสติก > ถ้วยบะหมี่กึ่งสำเร็จรูป",
      "name": "ถ้วยบะหมี่กึ่งสำเร็จรูป",
      "description": "-",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
       "image": require('../image/img34.png')

    },
    {
       "id": 35,
       "header":"พลาสติก > ซองลูกอม",
      "name": "ซองลูกอม",
      "description": "-",
      "bin":1,
      "parentID": "1",
      "childID": [],
      "status": "trash",
      "image": require('../image/img35.png')

    },
     {
       "id": 36,
       "header":"เศษอาหาร > เปลือกผลไม้",
      "name": "เปลือกผลไม้",
      "description": "-",
      "bin":1,
      "parentID": "3",
      "childID": [],
      "status": "trash",
       "image": require('../image/img36.png')

    },
    {
       "id": 37,
       "header":"เศษอาหาร > เศษเนื้อ",
      "name": "เศษเนื้อ",
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
    "name":"ประเภทถังขยะ",
    "color":"",
    "dispose":[],
    "parentID":"-1",
    "childID":[1,2,3,4],
    "status": "category",
    "image": require('../image/imgB0.png')
    },
  {
    "id":1,
    "name":"ถังขยะทั่วไป",
    "color":"สี:น้ำเงิน",
    "displose":[3,5,9,11,14,15,33,34,35],
    "parentID":"0",
    "childID":[],
    "status": "bin",
    "image": require('../image/imgB1.png')
  },
  {
    "id":2,
    "name":"ถังขยะรีไซเคิล",
    "color":"สี:เหลือง",
    "displose":[10,12,13,16,17,18,19,20,21,22,23,24],
    "parentID":"0",
    "childID":[],
    "status": "bin",
    "image": require('../image/imgB2.png')
  },
  {
    "id":3,
    "name":"ถังขยะมูลฝอย",
    "color":"สี:เขียว",
    "displose":[36,37],
    "parentID":"0",
    "childID":[],
     "status": "bin",
    "image": require('../image/imgB3.png')
    
  },
  {
    "id":4,
    "name":"ถังขยะอันตราย",
    "color":"สี:แดง",
    "displose":[25,26,27,28,29,30,31,32,33],
    "parentID":"0",
    "childID":[],
     "status": "bin",
     "image": require('../image/imgB4.png')
    
  }
  ],
  "favorite":"ชื่นชอบ",
  "recent":"ล่าสุด",
  "mostSelect":"ทิ้งมากที่สุด",
  "globalStatistic":"สถิติทั่วโลก",
  "localStatistical":"สถิติของฉัน",
  "clearHistory":"ล้างการค้นหา",
  "changeLanguage":"เปลี่ยนภาษา",
  "item":"ประเภท",
  "quantity":"จำนวน",
  "notes":"คำแนะนำ",
  "dispose":"ทิ้งขยะ",
  "globalStat":"สถิติสากล",
  "localStat":"สถิติของฉัน",
  "wasteStat":"สถิติการทิ้งขยะ",
  "history":"ประวัติ",
  "clearHistory":"ล้างประวัติ",
  "language":"ภาษา"
}