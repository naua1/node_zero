import {sql} from "./db.js"

sql`DROP TABLE IF EXISTS videos;`.then(()=>{
    console.log('tabela apagada!!')

})

sql`
    CREATE TABLE videos (
  id UUID PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  describe TEXT,
  duration INTEGER
);`
.then(()=>{
    console.log('tabela criada!!')
})