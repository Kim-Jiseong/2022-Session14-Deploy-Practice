const toDoForm = document.querySelector(".inputForm");
const notFinished = document.querySelector(".notFinished")
const finished = document.querySelector(".finished")
let todolist_notFinished = null
let todolist_finished = null
let template = null

function check(id, done) {
    console.log('id, done', id, done)
    axios('/check',{
        method: "POST",
        data: {
            id: id,
            done: done,
        }
    })      
    .then(function (response) {
        console.log(response);
        get_notFinished()
        get_finished();
    })
    .catch(function (error) {
        console.log(error);
    });
}

function get_finished() {
    let paintList = []
    // 여기에 직접 작성하세요
}

function get_notFinished() {
    let paintList = []
    axios.get("/get_notFinished")
        .then((response) => {
        todolist_notFinished = response.data.todolist;
        console.log('notFinished', todolist_notFinished);
        todolist_notFinished.forEach((item) =>{
        let template = `<div class="todoWrapper"><div id="inner" onclick="check(${item.id}, ${!item.done})">${item.content}</div><div id="delete" onclick="deleteTodo(${item.id})"><i class="fas fa-trash-alt"></i></div></div>`
            paintList.push(template)
        })
        console.dir(paintList)
        notFinished.innerHTML = paintList.join('')
        })
        .catch(function (error) {
        console.log(error);
        });

}

function deleteTodo(id) {
    console.log(id)
    axios('/delete',{
        method: "POST",
        data: {
            id: id
        }
    })      
    .then(function (response) {
        console.log(response);
        get_notFinished()
        get_finished();
    })
    .catch(function (error) {
        console.log(error);
    });
}

function add() {
    const input = document.querySelector("#content")
    const newTodo = input.value;
    input.value = "";
    console.log(newTodo)
    axios('/new',{
        method: "POST",
        data: {
            content: newTodo,
            done: 'False',
        }
    })      
    .then(function (response) {
        console.log(response);
        get_notFinished()
        get_finished();
    })
    .catch(function (error) {
        console.log(error);
    });
}

function handleToDoSubmit(event) {
    event.preventDefault(); //새로고침방지
    add()
}
  
toDoForm.addEventListener("submit", handleToDoSubmit);
get_notFinished();
get_finished();
