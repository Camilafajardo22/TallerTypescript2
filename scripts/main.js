import { data } from './data.js';
var seriesTbody = document.getElementById('series');
var cardContainer = document.getElementById('card');
var currentCard = null;
var avgSeasonsElm = document.getElementById("average-seasons");
renderSeriesInTable(data);
avgSeasonsElm.innerHTML = "Average seasons: ".concat(getAverageSeasons(data));
function renderSeriesInTable(series) {
    console.log('Desplegando cursos');
    series.forEach(function (serie) {
        var trElement = document.createElement("tr");
        var id = document.createElement("td");
        id.textContent = "".concat(serie.id);
        trElement.appendChild(id);
        var name = document.createElement("td");
        var nameLink = document.createElement("a");
        nameLink.textContent = serie.name;
        nameLink.href = "#";
        name.appendChild(nameLink);
        name.onclick = function () { return applyDetailSerie(serie); };
        trElement.appendChild(name);
        var channel = document.createElement("td");
        channel.textContent = serie.channel;
        trElement.appendChild(channel);
        var seasons = document.createElement("td");
        seasons.textContent = serie.seasons.toString();
        trElement.appendChild(seasons);
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var totalSeries = 0;
    series.forEach(function (serie) { return totalSeries = totalSeries + 1; });
    series.forEach(function (serie) { return totalSeasons = totalSeasons + serie.seasons; });
    var averageSeasons = totalSeasons / totalSeries;
    return averageSeasons;
}
function createDetailSerie(serie) {
    var cardElement = document.createElement("div");
    cardElement.classList.add("card");
    cardElement.style.width = "18rem";
    var imgElement = document.createElement("img");
    imgElement.src = serie.image;
    imgElement.classList.add("card-img-top");
    var cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
    var titleElement = document.createElement("h5");
    titleElement.classList.add("card-title");
    titleElement.textContent = serie.name;
    var textElement = document.createElement("p");
    textElement.classList.add("card-text");
    textElement.textContent = serie.description;
    var urlElement = document.createElement("a");
    urlElement.href = "".concat(serie.url);
    urlElement.textContent = "".concat(serie.url);
    cardElement.appendChild(imgElement);
    cardBody.appendChild(titleElement);
    cardBody.appendChild(textElement);
    cardBody.appendChild(urlElement);
    cardElement.appendChild(cardBody);
    cardContainer.appendChild(cardElement);
    return cardElement;
}
function applyDetailSerie(serie) {
    var newCard = createDetailSerie(serie);
    if (currentCard) {
        currentCard.remove();
    }
    cardContainer.appendChild(newCard);
    currentCard = newCard;
}
