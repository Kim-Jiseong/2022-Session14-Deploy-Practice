const toDoForm = document.querySelector(".inputForm");
const notFinished = document.querySelector(".notFinished")
const finished = document.querySelector(".finished")
let todolist_notFinished = null
let todolist_finished = null
let template = null

function check(id, done) {
    console.log('id, done', id, done)
    //여기서부터 직접 작성하세요
    //item.id와 item.done을 받았습니다. !item.done은 item.done의 반대를 나타냅니다. !를 사용하면 토글 효과를 낼 수 있습니다.
}

function get_finished() {
    let paintList = []
    axios.get("/get_finished")
        .then((response) => {
        todolist_finished = response.data.todolist;
        console.log('finished', todolist_finished);
        todolist_finished.forEach((item) =>{
        let template = `<div class="todoWrapper finished"><div id="inner" onclick="check(${item.id}, ${!item.done})">${item.content}</div><div id="delete" onclick="deleteTodo(${item.id})"><i class="fas fa-trash-alt"></i></div></div>`
            paintList.push(template)
        })
        console.dir(paintList)
        finished.innerHTML = paintList.join('')
        })
        .catch(function (error) {
        console.log(error);
        });
}

function get_notFinished() {
    let paintList = []
    //여기서부터 직접 작성하세요

}

function deleteTodo(id) {
    console.log(id)
    //여기서부터 직접 작성하세요
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




