/*uma função que pode criar servidores http
import { write } from "node:fs";
import {createServer} from "node:http";

//está criando um servidor
const server = createServer((req, res) => {

    res.write("ola");

    return res.end();

});

server.listen(3000
*/

import {fastify} from"fastify";
//import {databaseMemory} from"./database_memory.js"

import {databasePostgress} from"./database-postgress.js"

const server = fastify();

const database = new databasePostgress();


server.get("/videos",async (req,res) =>{

    const busca = req.query.busca;

    const videos = await database.list(busca);

    return videos;
});


server.post("/videos", async (req,res) => {

    const {title, describe, duration} = req.body;
    await database.create({
        title,
        describe,
        duration
    });
    console.log(database.list)
    return res.status(201).send();
});

        // params routes
server.put("/videos/:id", (req, res) =>{

    const videoId = req.params.id;

    const {title, describe, duration} = req.body;

    database.update(videoId,{
        title,
        describe,
        duration
    })

    return res.status(204).send();


});

server.delete("/videos/:id", async (req, res) =>{

    const videoid = req.params.id;

    await database.delete(videoid)

    return res.status(204).send();
});


//a porta que o server está escutando
server.listen({
    host:'0.0.0.0',
    port:process.env.PORT ?? 3333
});
