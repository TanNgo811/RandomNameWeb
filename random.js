var storageKey = 'Store';
var dataString = sessionStorage.getItem(storageKey);
var htmlList = document.getElementById('todo-list');
var addBtn = document.getElementById('add-btn');
var input = document.getElementById('new-item');
var deleteAll = document.getElementById('delete-all');

//delete-all button
deleteAll.onclick = function(){
    randomName = [];
    render();
    sessionStorage.setItem(storageKey, JSON.stringify(randomName));
};

// addBtn.onclick = addItem;
addBtn.addEventListener('click', addItem);
input.addEventListener("keyup", function(event){
    if (event.keyCode === 13){
        event.preventDefault();
        addBtn.click();
    }
});
htmlList.addEventListener('click', onListClicked);

var randomName;

if (dataString) {
    randomName = JSON.parse(dataString);
} else {
    randomName = [];
}

function onListClicked(event) {
    var button = event.target;
    var i = parseInt(button.dataset.id);
    randomName.splice(i, 1);
    render();
    sessionStorage.setItem(storageKey, JSON.stringify(randomName));
}

function addItem() {
    // get value of the input
    var newItem = input.value;
    // add to randomName array
    randomName.push(newItem);
    // re-render
    render();
    // clear input
    input.value = '';
    // store data
    sessionStorage.setItem(storageKey, JSON.stringify(randomName));
}

function render() {
    var content = randomName.map(function(item, index) {
    return '<li>' + item + ' <button class = "deleteBtn" data-id="' + index + '">X</button></li>';
    });

    htmlList.innerHTML = content.join('');
}

render();

//getRandomNumber
var length = randomName.length;
function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}
var Random = getRandomInt(length);

//Random Button
var randomBtn = document.getElementById('random-btn');
randomBtn.onclick = function(){
    onClickRandomButton();
};
// function onClickRandomButton(){
//     var output = document.getElementById('result');
//     output.innerHTML = randomName[Random];
// }

function onClickRandomButton()
{
    var myarray= randomName;
    var i = Math.floor(Math.random() * myarray.length);
    var random = myarray[i];
    //alert(random);
    document.getElementById("message").innerHTML = random;
    javascript:alert('Congratulation!!!' + random)
    randomName.splice(i, 1);
    render();
    sessionStorage.setItem(storageKey, JSON.stringify(randomName));
}
