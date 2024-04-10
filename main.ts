import { Serie } from './serie.js';

import { data } from './data.js';

let seriesTbody: HTMLElement = document.getElementById('series')!;

const cardContainer: HTMLElement = document.getElementById('card')!;

let currentCard: HTMLElement | null = null;


  

const avgSeasonsElm: HTMLElement = document.getElementById("average-seasons")!;

renderSeriesInTable(data);

avgSeasonsElm.innerHTML = `Average seasons: ${getAverageSeasons(data)}`


function renderSeriesInTable(series: Serie[]): void {
    console.log('Desplegando cursos');
    series.forEach((serie) => {
      let trElement = document.createElement("tr");

      let id = document.createElement("td");
      id.textContent = `${serie.id}`;
      trElement.appendChild(id);

      let name = document.createElement("td");
      let nameLink = document.createElement("a");
      nameLink.textContent = serie.name;
      nameLink.href = "#";
      name.appendChild(nameLink)
      name.onclick = () => applyDetailSerie(serie);
      trElement.appendChild(name);

      let channel = document.createElement("td");
      channel.textContent = serie.channel;
      trElement.appendChild(channel);

      let seasons = document.createElement("td");
      seasons.textContent = serie.seasons.toString();
      trElement.appendChild(seasons);

      seriesTbody.appendChild(trElement);
    });
  }

  


function getAverageSeasons(series: Serie[]): number {
    let totalSeasons: number = 0;
    let totalSeries: number = 0;
    series.forEach((serie) => totalSeries = totalSeries + 1);
    series.forEach((serie) => totalSeasons =totalSeasons + serie.seasons);

    let averageSeasons: number = totalSeasons/totalSeries;

    return averageSeasons;
}

function createDetailSerie(serie: Serie): HTMLElement { 
    
      const cardElement = document.createElement("div");
      cardElement.classList.add("card");
      cardElement.style.width = "18rem";
      
      const imgElement = document.createElement("img");
      imgElement.src = serie.image;
      imgElement.classList.add("card-img-top");

      const cardBody = document.createElement("div");
      cardBody.classList.add("card-body");

      const titleElement = document.createElement("h5");
      titleElement.classList.add("card-title");
      titleElement.textContent = serie.name;

      const textElement = document.createElement("p");
      textElement.classList.add("card-text");
      textElement.textContent = serie.description;

      let urlElement = document.createElement("a");
      urlElement.href = `${serie.url}`; 
      urlElement.textContent = `${serie.url}`


      cardElement.appendChild(imgElement);
      cardBody.appendChild(titleElement);
      cardBody.appendChild(textElement);
      cardBody.appendChild(urlElement);
      cardElement.appendChild(cardBody);

      cardContainer.appendChild(cardElement);

      return cardElement;
}

function applyDetailSerie(serie : Serie): void{
  const newCard = createDetailSerie(serie);

  if (currentCard) {
    currentCard.remove();
  }

  cardContainer.appendChild(newCard);
  currentCard = newCard;
}



