var timer = document.getElementById('timer');
//界面
var restart = document.getElementById('restart');
var control = document.getElementById('control');
var buttonBox = document.getElementById('button-box');

//番茄界面
var pomodoro = document.getElementById('pomodoro');
//输入框
var changePomodoro = document.getElementById('change-Pomodoro');
//番茄界面的按钮
var cpDone = document.getElementById('cp-done');
var cpCancel = document.getElementById('cp-cancel');
var cpNumber = document.getElementById('cp-number');
//任务栏
var todos = document.getElementById('todos');
var todo = document.getElementsByClassName('todo');
var addTodo = document.getElementById('addTodo');
var addTodoDiv = document.getElementById('addTodo-div');

var m = document.getElementById('m');
var s = document.getElementById('s');
var ms = document.getElementById('ms');

var time;
var lists = 0;
var i = parseInt(m.innerText) * 6000 + parseInt(s.innerText) * 100;

//开始按钮函数
var onStart = function () {
    control.removeEventListener('click', onStart);
    control.addEventListener('click', onPause);
    control.innerText = '暂停';
    time = setInterval(function () {
        //毫秒
        if ((i % 100) < 10) {
            ms.innerText = '0' + (i % 100);
        } else {
            ms.innerText = i % 100;
        }
        //秒
        if ((parseInt(i / 100)) % 60 < 10) {
            s.innerText = '0' + (parseInt(i / 100)) % 60;
        } else {
            s.innerText = (parseInt(i / 100)) % 60;
        }
        // 分
        if (parseInt(i / 6000) < 10) {
            m.innerText = '0' + parseInt(i / 6000);
        } else {
            m.innerText = parseInt(i / 6000);
        }
        i--;
        if (i < 0) {
            timeout();
        }
    }, 10);
};
//暂停按钮函数
var onPause = function () {
    control.removeEventListener('click', onPause);
    control.addEventListener('click', onStart);
    control.innerText = '开始';
    clearInterval(time);
};

//一个番茄结束
var timeout = function () {
    onPause();
    var audio = new Audio("./For River.flac");
    audio.play();
};

var addBlur = function () {
    pomodoro.style.display = 'flex';
    timer.style.filter = 'blur(15px)';
    buttonBox.style.filter = 'blur(5px)';
    for (var i = 0; i < todo.length; i++) {
        todo[i].style.filter = 'blur(5px)';
    }
};
var removeBlur = function () {
    pomodoro.style.display = 'none';
    timer.style.filter = 'blur(0px)';
    buttonBox.style.filter = 'blur(0px)';
    for (var i = 0; i < todo.length; i++) {
        todo[i].style.filter = 'blur(0px)';
    }
};

var addlist = function () {
    lists++;
    var newTodo = document.createElement('div');
    var newCheck = document.createElement('input');
    var newLabel = document.createElement('label');
    var newText = document.createElement('input');
    var newPpomodoros = document.createElement('div');
    //div
    newTodo.setAttribute('class', 'todo');
    //cleckbox
    newCheck.setAttribute('type', 'checkbox');
    newCheck.setAttribute('name', 'todo-box');
    newCheck.setAttribute('id', 'todo-box' + lists);
    //label
    newLabel.setAttribute('for', 'todo-box' + lists);
    //text
    newText.setAttribute('type', 'text');
    newText.setAttribute('id', 'todo' + lists);
    //pomodoros
    newPpomodoros.setAttribute('class', 'pomodoros');
    newTodo.appendChild(newCheck);
    newTodo.appendChild(newLabel);
    newTodo.appendChild(newText);
    newTodo.appendChild(newPpomodoros);

    todos.insertBefore(newTodo, addTodoDiv);
    if (lists === 9) {
        addTodo.setAttribute('disabled', 'disabled');
    }
};

control.addEventListener('click', onStart);

restart.addEventListener('click', function () {
    m.innerText = cpNumber.value;
    s.innerText = '00';
    ms.innerText = '00';
    i = parseInt(m.innerText) * 6000;
    onPause();
});

changePomodoro.addEventListener('click', addBlur);

cpDone.addEventListener('click', function () {
    if (cpNumber.value < 15) {
        window.alert('建议大于15分钟');
        cpNumber.value = 15;
    } else {
        removeBlur();
        m.innerText = cpNumber.value;
        i = parseInt(m.innerText) * 6000;
        restart.dispatchEvent(new Event('click'));
    }
});

cpCancel.addEventListener('click', removeBlur);

addTodo.addEventListener('click', addlist);




var box00 = document.getElementById('box00');
var box0 = document.getElementById('box0');
var creatBox = function(el){
    for (var i = 0; i <= 9; i++) {
        var number = document.createElement('p');
        number.innerText = i;
        el.appendChild(number);
    }
}
creatBox(box00);
creatBox(box0);