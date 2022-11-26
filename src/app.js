import express from "express";

const app = express();
app.use(express.json());

const livros= [{id:1, "titulo": "O Senhor dos Anéis"}, {id:2, "titulo":"O Hobbit"}];

app.get('/',(req,res)=>{
    res.status(200).send("Curso de NODE Alura");
})
app.get("/livros/:id", (req,res)=>{
    const index = buscaLivro(req.params.id);
    res.status(200).json(livros[index])

})

app.get("/livros", (req,res)=>{
    res.status(200).json(livros)
});

app.post("/livros", (req,res)=>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso");
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