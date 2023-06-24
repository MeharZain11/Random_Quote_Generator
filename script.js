let url = "https://api.quotable.io/random"
let quote = document.getElementById('p1');
let author = document.getElementById('p2');
let btn = document.getElementById('btn');

const getQuote = () => {

    let site = fetch(url).then((v) => {
        return v.json();
    }).then((message) => {
        console.log(message);
        console.log(message.content)
        p1.innerHTML = `${message.content}`
        p2.innerHTML = `~ ${message.author}`
    })
}
getQuote();
btn.addEventListener('click', getQuote);