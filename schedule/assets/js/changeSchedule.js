function changeScheduleToEven(){
    document.getElementById("webOdd").innerHTML = ''
    document.getElementById("webOdd").classList.remove('bg-primary')

    document.getElementById("webEven").innerHTML = 'Web L.121D'
    document.getElementById("webEven").classList.add('bg-primary')

    document.getElementById("tapThu").innerHTML = 'Geom L.308'
}

function changeScheduleToOdd(){
    document.getElementById("webOdd").innerHTML = 'Web L.121D'
    document.getElementById("webOdd").classList.add('bg-primary')

    document.getElementById("webEven").innerHTML = ''
    document.getElementById("webEven").classList.remove('bg-primary')

    document.getElementById("tapThu").innerHTML = 'Tap 220'
}

function scheduleA(event) {
    option = this.options[this.selectedIndex].text
    if (option.includes('Even')){
    changeScheduleToEven()
    }else{
    changeScheduleToOdd()
    }
}