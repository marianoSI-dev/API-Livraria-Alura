import express from "express";
import db from '../config/dbConnect.js';
import livros from '../models/Livro.js';
import routes from '../Routes/index.js'

db.on("error", console.log.bind(console, "Erro de conexão"))
db.once("open", ()=> {
    console.log("conexão com o banco feita com sucesso")
})

const app = express();
app.use(express.json());
routes(app)

//const livros= [{id:1, "titulo": "O Senhor dos Anéis"}, {id:2, "titulo":"O Hobbit"}];





app.get("/livros/:id", (req,res)=>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])

})




app.put("/livros/:id", (req,res)=>{
    const index = buscaLivro(req.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)

})

app.delete("/livros/:id", (req,res)=>{
    const {id} = req.params
    const index = buscaLivro(id);
    livros.splice(index, 1)
    res.status(200).send(`Livro ${id} removido com sucesso`)

})

function buscaLivro(id){
    return livros.findIndex(livro => livro.id == id)
}

export default app