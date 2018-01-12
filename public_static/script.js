function postTodos(task,cb) {
    $.post('/addtodo',{
        task:task
    },function(data){
        if(data.success) {
            cb(data.todos)
        }
    })
}

function gettodos(cb) {
    $.get('/showtodos', function(todos) {
        cb(todos)
    })
}

function deletetodos(id,cb) {
    $.get('/deletetodo',{
        id:id
    }, function (todos) {
        cb(todos)
    })
}

$(function () {

    let task = $('#task')
    let todolist=$('#todolist')


    function Refreshtodos(todos) {
        todolist.empty()
        str=""

        for(let i=0;i<todos.length;i++) {
            str+=  `
             <li class="list-group-item list-group-item-dark mt-4 row">
            <div class="col-10">${todos[i].task}</div>
            <div class="col-2 input-group">
                <input type="checkbox" class="mr-2">
                <button class="btn btn-primary btn-sm px-0 py-0 mr-2">
                    <i class="btn fa fa-trash-o px-0 py-0" aria-hidden="true"></i></button>
                <button class="btn btn-warning btn-sm px-0 py-0 mr-2">
                    <i class="btn fa fa-arrow-up px-0 py-0" aria-hidden="true"></i></button>
                <button class="btn btn-warning btn-sm px-0 py-0 mr-2">
                    <i class="btn fa fa-arrow-down px-0 py-0" aria-hidden="true"></i></button>
            </div>
        </li> `
        }
        todolist.append(str)
    }

    $('#add').click(function () {
        postTodos(task.val(),Refreshtodos)
    })


    gettodos(Refreshtodos)


})