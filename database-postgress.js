import { randomUUID } from "node:crypto";
import {sql }from"./db.js"
import { describe } from "node:test";

export class databasePostgress{


    
async list(busca){

    let videos 

    if(busca){
  videos = await sql`select * from videos where title ilike ${'%' + busca + '%'}`

    }else{
        videos = await sql`select * from videos`
    }
  return videos
}
async create(video){

    const videoId = randomUUID();
    const {title, describe, duration} = video;

    await sql`insert into videos (id, title, describe, duration) Values
    (${videoId},${title}, ${describe},${duration} )`

}

async update(id, video){
const {title, describe, duration} = video;
   await sql`update videos set title= ${title}, describe=${describe}, duration= ${duration} WHERE id = ${id}`
     
}

async delete(id){

    await sql`delete from videos where id =  ${id}`
   
}

}

