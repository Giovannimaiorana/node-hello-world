const http = require("http");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");
//avvio 
dotenv.config();

const motivationalPhrase = [
    "Il successo è/ la somma di piccoli sforzi ripetuti giorno dopo giorno.",
    "Non importa quanto sia difficile oggi, se continui a spingere, domani sarà migliore.",
    "Le sfide sono l'opportunità di crescere. Non avere paura di esse.",
    "Sii la migliore versione di te stesso ogni giorno.",
    "Il tuo unico limite è/ la tua mente. Sogna in grande e supera i tuoi limiti.",
    "Il fallimento è/ solo l'opportunità di iniziare di nuovo, in modo più intelligente.",
]


function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
};

function randomPhrase(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

const server = http.createServer(function (req, res) {

    const phrase = randomPhrase(motivationalPhrase)
    res.end(`<h1>${phrase}</h1>`);

})

server.listen(port, function () {
    console.log("server is running on port: " + port)
})