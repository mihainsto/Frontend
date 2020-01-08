
//dt={}
//dt['card'] = 'GeForce GTX 1660 SUPER'
//alert(httpGet("http://localhost:3000/cardtypesseries"))
//alert(httpPost("http://localhost:3000/driver"), dt)
cardsSeries()
function cardsSeries(){
    seriesArh = JSON.parse(httpGet("http://localhost:3000/cardtypesseries"));
    series = Object.keys(seriesArh);
    var SeriesSelectEl = document.getElementById('DriverSearchSeries')
    for (var i = 0; i<series.length;i++)
    {
        s = series[i];
        var option = document.createElement("option");
        option.text = s;
        option.value = s;
        SeriesSelectEl.add(option);
    }

}
function httpGet(theUrl)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

function httpPost(theUrl, data)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "POST", theUrl, false ); // false for synchronous request
    xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xmlHttp.send(JSON.stringify(data));
    return xmlHttp.responseText;
}

function Change_DriverSearchSeries(value)
{
    update_DriverSearchArhitectures(value)
} 


function update_DriverSearchArhitectures(series)
{
    resetSelect("DriverSearchArhitectures")
    seriesArh = JSON.parse(httpGet("http://localhost:3000/cardtypesseries"));
    var ArhitectureSelectEl = document.getElementById("DriverSearchArhitectures")
    arh = seriesArh[series]
    for (var i = 0; i<arh.length;i++)
    {
        a = arh[i];
        var option = document.createElement("option");
        option.text = a;
        option.value = a;
        ArhitectureSelectEl.add(option);
    }

}

function resetSelect(id) {
    var x = document.getElementById(id);

    while (x.length > 0) {
      x.remove(x.length-1);
    }
  }

function Change_DriverSearchArhitectures(value)
{
    update_DriverSearchCards(value)
}

function update_DriverSearchCards(cardArh)
{
    resetSelect("DriverSearchCards")
    var ArhitectureSelectEl = document.getElementById("DriverSearchCards")
    response = JSON.parse(httpGet("http://localhost:3000/videocards"))
    cards = response[cardArh]
    for (var i = 0; i<arh.length;i++)
    {
        c = cards[i];
        var option = document.createElement("option");
        option.text = c;
        option.value = c;
        ArhitectureSelectEl.add(option);
    }
}

update_DriverSearchOs()
function update_DriverSearchOs()
{
    resetSelect("DriverSearchOs")
    var DriverSearchOs = document.getElementById("DriverSearchOs")
    response = JSON.parse(httpGet("http://localhost:3000/os"))
    os = response
    for (var i = 0; i<os.length;i++)
    {
        c = os[i];
        var option = document.createElement("option");
        option.text = c;
        option.value = c;
        DriverSearchOs.add(option);
    }
}

update_DriverSearchLang()
function update_DriverSearchLang()
{
    resetSelect("DriverSearchLang")
    var DriverSearchLang = document.getElementById("DriverSearchLang")
    response = JSON.parse(httpGet("http://localhost:3000/lang"))
    lang = response
    for (var i = 0; i<lang.length;i++)
    {
        c = lang[i];
        var option = document.createElement("option");
        option.text = c;
        option.value = c;
        DriverSearchLang.add(option);
    }
}

function searchButtonClicked()
{
    var btn = document.getElementById("searchButton")
    btn.classList.add("hideSearchButton")
    
    var DriverSearchSeries = document.getElementById("DriverSearchSeries").value
    var DriverSearchArhitectures = document.getElementById("DriverSearchArhitectures").value
    var DriverSearchCards = document.getElementById("DriverSearchCards").value
    var DriverSearchOs = document.getElementById("DriverSearchOs").value
    var DriverSearchLang = document.getElementById("DriverSearchLang").value

    requestData = {}
    requestData["card"] = DriverSearchCards
    drivers = JSON.parse(httpPost("http://localhost:3000/driver", requestData))
    var driversResponse = document.getElementById("driversResponse")
    while(driversResponse.firstChild){
        driversResponse.removeChild(driversResponse.firstChild)
    }
    html1 = getDriverEntry(drivers['driver1']['name'], 
    drivers['driver1']['driverversion'], DriverSearchCards)

    html2 = getDriverEntry(drivers['driver2']['name'], 
    drivers['driver2']['driverversion'], DriverSearchCards)
    html = html1 + " " + html2
    driversResponse.innerHTML = html
}

function getDriverEntry(driverName, driverVersion, videocard)
{
    htmlContent = ` <div class="responseItem">
    <div class="responseItemBlock">
    <div class="responseItemBlockDownloadImage">
    <a href="">
        <img src="resources/downloadImage.png">
    </a>
    </div>
    <div class="responseItemBlocktext">
    <div class="responseItemTitle">`+driverName+`</div>
    <div class="responseItemDescription">`+videocard+ ' ' +driverVersion+`</div>
    
    </div>
    </div>
    </div>`
    return htmlContent
}
// function postTest(){  
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", "http://localhost:3000/driver", true);
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.send(JSON.stringify({
//         card: 'GeForce GTX 1660 SUPER'
//     }));

//     xhr.onload = function() {
//     alert("HELLO")
//     alert(this.responseText);
//     var data = JSON.parse(this.responseText);
//     alert(data);
//     }
// }

//postTest()
// function postTest(){  
    
//     var xmlHttp = new XMLHttpRequest();
//     xmlHttp.open("POST", "http://localhost:3000/videocards", false ); // false for synchronous request
//     xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     alert("hello");
//     xmlHttp.send(JSON.stringify({
//         cards: 'GeForce 16 Series'
//         }));
    
//     alert(xmlHttp.responseText)
//     return xmlHttp.responseText;
// }
