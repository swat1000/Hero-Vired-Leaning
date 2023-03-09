function load() {
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        switch (xhttp.readyState) {
            case 0:
                console.log("UNSENT");
                break;
            case 1:
                console.log("OPENED");
                break;
            case 2:
                console.log("RECIEVED");
                break;
            case 3:
                console.log("LOADING");
                break;
                case 4:
                    console.log("DONE");
                    document.getElementById("data").innerHTML = this.responseText;
                    console.log(this.responseText);
                    break;
                    default:
                        console.log("Unknown rEADYSTATE VALUE");
                        break;
        }
    }
    xhttp.open("GET", "scroll.txt", true);
    xhttp.send();
}