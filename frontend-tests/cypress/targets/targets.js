//inputs
const CREATE_ROOM_CATEGORY = "Single"
const CREATE_ROOM_NUMBER = "1"
const CREATE_ROOM_FLOOR = "1"
const CREATE_ROOM_PRICE = "100"
const CREATE_ROOM_FEATURES = "Balcony"
const CREATE_ROOM_CONFIRMATIONCONTENT = "Rooms"

const VERIFY_LAST_ROOM_CATEGORY = "single"  // text has to be in lowercase
const VERIFY_LAST_ROOM_NUMBER = "1"
const VERIFY_LAST_ROOM_FLOOR = "1"
const VERIFY_LAST_ROOM_PRICE = "100"
const VERIFY_LAST_ROOM_FEATURES = "balcony" // text has to be in lowercase

//faker
var faker = require('faker');
let rndName = faker.name.findName();
let rndMail = faker.internet.email();
let rndPhone = faker.phone.phoneNumber();
let rndPrice = faker.datatype.number();


//exports
module.exports = {
    base_url: 'http://localhost:3000', 
    username: 'tester01', 
    password: 'GteteqbQQgSr88SwNExUQv2ydb7xuf8c',

    globalCreateRoomCat: CREATE_ROOM_CATEGORY,
    globalCreateRoomNum: CREATE_ROOM_NUMBER,
    globalCreateRoomFloor: CREATE_ROOM_FLOOR,
    globalCreateRoomPrice: CREATE_ROOM_PRICE,
    globalCreateRoomFeat: CREATE_ROOM_FEATURES,
    globalCreateRoomConfCont: CREATE_ROOM_CONFIRMATIONCONTENT,
    globalVerifyLastRoomCat: VERIFY_LAST_ROOM_CATEGORY,
    globalVerifyLastRoomNum: VERIFY_LAST_ROOM_NUMBER,
    globalVerifyLastRoomFloor: VERIFY_LAST_ROOM_FLOOR,
    globalVerifyLastRoomPrice: VERIFY_LAST_ROOM_PRICE,
    globalVerifyLastRoomFeat: VERIFY_LAST_ROOM_FEATURES,
    globalFakerRndName: rndName,
    globalFakerRndMail: rndMail,
    globalFakerRndPhone: rndPhone,
    globalFakerRndPrice: rndPrice
}