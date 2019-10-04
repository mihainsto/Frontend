function changeScheduleToEven(){
    document.getElementById("webOdd").innerHTML = ''
    document.getElementById("webOdd").classList.remove('bg-primary')

    document.getElementById("webEven").innerHTML = 'Web L.121D'
    document.getElementById("webEven").classList.add('bg-primary')

    document.getElementById("tapThu").innerHTML = 'Geom L.308'

    document.getElementById("calcThu").innerHTML = ''
    document.getElementById("calcThu").classList.remove('bg-primary')
}

function changeScheduleToOdd(){
    document.getElementById("webOdd").innerHTML = 'Web L.121D'
    document.getElementById("webOdd").classList.add('bg-primary')

    document.getElementById("webEven").innerHTML = ''
    document.getElementById("webEven").classList.remove('bg-primary')

    document.getElementById("tapThu").innerHTML = 'Tap 220'

    document.getElementById("calcThu").innerHTML = 'Calc 10'
    document.getElementById("calcThu").classList.add('bg-primary')
}

function scheduleA(event) {
    option = this.options[this.selectedIndex].text
    if (option.includes('Even')){
    changeScheduleToEven()
    }else{
    changeScheduleToOdd()
    }
}