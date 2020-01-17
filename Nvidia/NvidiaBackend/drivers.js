const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

let drivers = [];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/driversALL', (req, res) => {
    drivers.push('test');
    res.json(drivers);
    const data = req.body;
    card = data[card]
    response['card'] = String(card).replace("Gforce","GeForce")
    res.json(response);
    

});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));

var vcardsTypes = {};
var videoCards = {};
var vadd = {}
initDatabase()

function initDatabase(){
    vcardsTypes["Geforce"] = 
    ["GeForce RTX 20 Series (Notebooks)", "GeForce RTX 20 Series", 
     "GeForce 16 Series", "GeForce 10 Series"];

    vcardsTypes["Titan"] = ["Nvidia Titan Series", "Nvidia Titan 2 Series"]

    videoCards["GeForce RTX 20 Series (Notebooks)"] = 
    ["GeForce RTX 2080", "GeForce RTX 2070", "GeForce RTX 2060"]

    videoCards["GeForce RTX 20 Series"] = 
    ["GeForce RTX 2080 TI", "GeForce RTX 2080", "GeForce RTX 2070", "GeForce RTX 2060", 
    "GeForce RTX 2080 SUPER", "GeForce RTX 2070 SUPER", "GeForce RTX 2060 SUPER"]

    videoCards["GeForce 16 Series"] = 
    ["GeForce GTX 1660 SUPER", "GeForce GTX 1650 SUPER", "GeForce GTX 1660 TI", "GeForce 1660", "GeForce 1650"]

    videoCards["GeForce 10 Series"] = 
    ["GeForce GTX 1080 TI", "GeForce GTX 1080", "GeForce GTX 1070 TI", 
    "GeForce GTX 1070 TI", "GeForce GTX 1070", "GeForce GTX 1060", 
    "GeForce GTX 1050 TI", "GeForce GTX 1050", "GeForce GTX 1030"]

    videoCards["Nvidia Titan Series"] = 
    ["NVIDIA TITAN RTX", "NVIDIA TITAN V", "NVIDIA TITAN Xp", "NVIDIA TITAN X (Pascal)",
    "GeForce GTX Titan X", "GeForce GTX TITAN", "GeForce Titan Z"]

    vadd['os'] =[
        "Windows 10 32-bit",
        "Windows 10 64-bit",
        "Windows 7 32-bit",
        "Windows 7 64-bit",
        "Windows 8.1 32-bit",
        "Windows 8.1 64-bit",
        "Windows Vista 32-bit",
        "Windows Vista  64-bit",
        "Windows XP 32-bit",
        "Windows XP 64-bit",
        "Windows Server 2003 x64",
        "Linux 32-bit",
        "Linux 32-bit ARM",
        "Linux 64-bit",
        "Solaris x86/x64",
        "FreeBSD x86",
        "FreeBSD x64"
    ]

    vadd['lang'] = [
        "English (US)",
        "English (UK)",
        "English (India)",
        "Chinese (Simplified)",
        "Chinese (Traditional)",
        "Japanese",
        "Korean",
        "Deutsch",
        "Espanol (Espana)",
        "Espanol (America Latina)",
        "Francais",
        "Italiano",
        "Polski",
        "Portugues (Brazil)",
        "Pyccknn",
        "Turkis",
        "Other"
        
    ]
    //console.log(vadd);

}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

app.post("/driver", (req, res) => {
    const data = req.body;
    response = {}
    videocard = data.card;

    driver = {}
    driverVersion = String(getRandomInt(1,10))+"."+String(getRandomInt(1,10))+"."+String(getRandomInt(1,10))
    driver["name"] = "GeForce Gaming Driver"
    driver["driverversion"] = driverVersion
    driver["videocard"] = videocard
    response["driver1"] = driver

    driver = {}
    driverVersion = String(getRandomInt(1,10))+"."+String(getRandomInt(1,10))+"."+String(getRandomInt(1,10))
    driver["name"] = "GeForce Pro Driver"
    driver["driverversion"] = driverVersion
    driver["videocard"] = videocard
    response["driver2"] = driver
    res.json(response);
});

// app.post("/videocards", (req, res) => {
//     const data = req.body;
//     cardsFamily = data.cards;
//     response = {}
//     response['cards'] = videoCards[cardsFamily]
//     res.json(response);
// });

app.get("/videocards", (req, res) => {
    res.json(videoCards);
});
app.get("/lang", (req, res) => {
    res.json(vadd['lang']);
});

app.get("/os", (req, res) => {
    res.json(vadd['os']);
});

app.get("/cardtypesseries", (req, res) => {
    res.json(vcardsTypes);
});

