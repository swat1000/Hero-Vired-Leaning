function randomJokes() {
    var arr = new Array()
    arr[0] = "Joke 1"
    arr[1] = "Joke 2"
    arr[2] = "Joke 3"
    arr[3] = "Joke 4"
    arr[4] = "Joke 5"

    var random = arr[Math.floor(Math.random()*arr.length)]
    document.write(random)
}randomJokes()
