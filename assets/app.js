/* CPIS-358 JavaScript Part 1, 2 and 3: variables, if, functions, DOM and events. */
var totalTasks = 0;

function addTask() {
    var name = document.getElementById('task-name').value;
    var course = document.getElementById('task-course').value;
    var date = document.getElementById('task-date').value;
    if (name == '') {
        document.getElementById('task-message').innerHTML = 'Please write a task name.';
        return false;
    }
    var item = document.createElement('li');
    item.textContent = name + ' - ' + course + ' - ' + date;
    document.getElementById('task-list').appendChild(item);
    totalTasks = totalTasks + 1;
    document.getElementById('task-count').innerHTML = totalTasks;
    document.getElementById('task-message').innerHTML = 'Your task was added.';
    document.getElementById('task-name').value = '';
    return false;
}

function clearTasks() {
    document.getElementById('task-list').innerHTML = '';
    totalTasks = 0;
    document.getElementById('task-count').innerHTML = totalTasks;
    document.getElementById('task-message').innerHTML = 'All tasks were cleared.';
}

function validateLogin() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    if (email == '' || password == '') {
        document.getElementById('login-message').innerHTML = 'Please fill in both fields.';
    } else {
        document.getElementById('login-message').innerHTML = 'Demo form checked. No account login is performed.';
    }
    return false;
}

function validateSignup() {
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var again = document.getElementById('signup-again').value;
    if (name == '' || email == '' || password == '') {
        document.getElementById('signup-message').innerHTML = 'Please complete all required fields.';
    } else if (password != again) {
        document.getElementById('signup-message').innerHTML = 'Passwords do not match.';
    } else {
        document.getElementById('signup-message').innerHTML = 'Demo form checked. No real account was created.';
    }
    return false;
}

function showTip() {
    document.getElementById('study-tip').innerHTML = 'Study one topic, then take a short break.';
}
