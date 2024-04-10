export class Serie {
    id: number;
    name: string;
    channel: string;
    seasons: number;
    description: string;
    image: string;
    url: string;
  
    constructor(id: number, name: string,  channel: string, seasons: number, description: string, url: string, image: string ) {
      this.id = id;
      this.name = name;
      this.channel = channel;
      this.seasons = seasons;
      this.description = description;
      this.image = image;
      this.url = url;
    }
  }