var txt = document.getElementById("text");
txt.addEventListener("click", gettext)

function gettext() {
    fetch("file.txt")
        .then(res => res.text())
        .then(data => {
            console.log(data);
            document.getElementById("data").innerHTML = data
        })
        .catch(err => console.log(err))
}

var json = document.getElementById("JSON");
json.addEventListener("click", getJson);

function getJson() {
    fetch("content.json")
        .then(res => res.json())
        .then(data => {
            for (let i = 0; i < data.length; i++) {
                document.getElementById("data").innerHTML += `${data[i].title}: ${data[i].body} </br>`
            }
        })
        .catch((err) => (document.getElementById("data").innerHTML = err))
}

var api = document.getElementById("API")
api.addEventListener("click", getAPI);

function getAPI() {
    fetch("https://api.github.com/users")
        .then((res) => res.json())
        .then((data) => {
            console.log(data)
            let x = ""
            data.forEach(user => {
                x += `<li> ${user.login}, ${user.id} </li>`
            });
            document.getElementById("data").innerHTML = x;
        })
}
