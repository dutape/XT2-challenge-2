setInterval(displayTime, 1000);

function displayTime() {

    const timeNow = new Date();

    var urenDag = timeNow.getHours();
    var minuten = timeNow.getMinutes();
    var seconden = timeNow.getSeconds();
    var weekDag = ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag", "Zondag"];
    var vandaag = weekDag[timeNow.getDay()];
    var maanden = timeNow.toLocaleString("default", {
        month: "long"
    });
    var jaar = timeNow.getFullYear();
    var periode = "AM";

    if (urenDag > 12) {
        urenDag-= 12;
        periode = "PM";
    }

    if (urenDag === 0) {
        urenDag = 12;
        periode = "AM";
    }

    urenDag = urenDag < 10 ? "0" + urenDag : urenDag;
    minuten = minuten < 10 ? "0" + minuten : minuten;
    seconden = seconden < 10 ? "0" + seconden : seconden;

    var tijd = urenDag + ":" + minuten + ":" + seconden + periode;

    document.getElementById('klok').innerHTML = tijd + " " + vandaag + " " + maanden + " " + jaar;

}
displayTime();

if (periode = "PM"){
	document.getElementById('main').style.backgroundImage="url(AM.jpg)"; 
	document.getElementById("klok").style.color = "#373737";
} else if (periode = "AM"){
	document.getElementById('main').style.backgroundImage="url(PM.jpg)"; 
	document.getElementById("klok").style.color = "#fff";
}
