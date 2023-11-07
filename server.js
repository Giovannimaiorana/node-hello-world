const http = require("http");
const port = process.env.PORT || 3000;
const dotenv = require("dotenv");

dotenv.config();

const motivationalPhrase = [
    "Il successo è la somma di piccoli sforzi ripetuti giorno dopo giorno.",
    "Non importa quanto sia difficile oggi, se continui a spingere, domani sarà migliore.",
    "Le sfide sono l'opportunità di crescere. Non avere paura di esse.",
    "Sii la migliore versione di te stesso ogni giorno.",
    "Il tuo unico limite è la tua mente. Sogna in grande e supera i tuoi limiti.",
    "Il fallimento è solo l'opportunità di iniziare di nuovo, in modo più intelligente."
];

const usedPhrase = [];

function htmlResponse(res, content) {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(content);
}

function randomPhrase(array) {
    if (array.length === 0) {
        array.push(...usedPhrase);
        usedPhrase.length = 0;
    }

    const randomIndex = Math.floor(Math.random() * array.length);
    const phrase = array.splice(randomIndex, 1)[0];
    usedPhrase.push(phrase);
    return phrase;
}

const server = http.createServer(function (req, res) {
    if (req.url === '/favicon.ico') res.writeHead(404).end();
    const phrase = randomPhrase(motivationalPhrase);
    const htmlContent = `<h1>${phrase}</h1>`;
    htmlResponse(res, htmlContent);
    console.log(phrase);
});

server.listen(port, function () {
    console.log("Server is running on port: " + port);
});
