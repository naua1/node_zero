import { randomUUID } from "node:crypto";

export class databaseMemory{

#videos = new Map();
    
list(busca){
    return Array.from(this.#videos.entries())
    
    .filter(([id,video]) =>{
        if(busca){
            return video.title.includes(busca)
        }
        return true;
    });
}
create(videos){

    const id = randomUUID();

    this.#videos.set(id, videos);
    
}

update(id, videos){
        this.#videos.set(id,videos);
     
}

delete(id){

    this.#videos.delete(id);
}

}