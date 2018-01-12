const express=require('express')
const app=express()

const path=require('path')

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const todos=[]

app.get('/showtodos',function(req,res) {
    res.send(todos)
})

app.post('/addtodo',function(req,res) {
    todos.push( {
        task: req.body.task,
        done: false
    })
    res.send({
        success:true,
        todos:todos
    })
})

app.post('/deletetodo', function(req,res) {
    todos.splice(parseInt(req.body.id),1)
    res.send(todos)
})

app.use('/todos',express.static(path.join(__dirname + '/public_static')))

app.listen(2500, function () {
    console.log('server listening to port 2500')
})

