/* CPIS-358 Assignment 2 - JavaScript Parts 1, 2 and 3.
   Demonstrations: variables, functions, if/else, for, DOM, CSS changes and events. */
var totalTasks = 0;

/* Dynamic Picture & Text: change image src, HTML text and CSS styles. */
function changeStudyPicture() {
    document.getElementById('dynamic-picture').src = 'assets/study-plan.png';
    document.getElementById('dynamic-picture').alt = 'Daily study plan picture';
    document.getElementById('dynamic-heading').innerHTML = "Today's Study Plan";
    document.getElementById('dynamic-description').innerHTML = 'Choose one task and study it step by step.';
    document.getElementById('dynamic-demo').style.backgroundColor = '#e4faf2';
    document.getElementById('dynamic-heading').style.color = '#14734e';
    document.getElementById('dynamic-picture').style.borderColor = '#14734e';
}

function resetStudyPicture() {
    document.getElementById('dynamic-picture').src = 'assets/study-banner.png';
    document.getElementById('dynamic-picture').alt = 'CampusTrack introductory study banner';
    document.getElementById('dynamic-heading').innerHTML = 'Dynamic Picture &amp; Text';
    document.getElementById('dynamic-description').innerHTML = 'JavaScript can change a picture, its text, and its CSS style.';
    document.getElementById('dynamic-demo').style.backgroundColor = '#edf8fc';
    document.getElementById('dynamic-heading').style.color = '#115d70';
    document.getElementById('dynamic-picture').style.borderColor = '#9fcbd6';
}

/* Form Validation and DOM: create a new task list item after checking input. */
function addTask() {
    var name = document.getElementById('task-name').value;
    var course = document.getElementById('task-course').value;
    var date = document.getElementById('task-date').value;
    if (name == '') {
        document.getElementById('task-message').innerHTML = 'Please write a task name.';
        document.getElementById('task-message').style.color = '#9f273d';
        return false;
    }
    var item = document.createElement('li');
    item.textContent = name + ' - ' + course + ' - ' + (date == '' ? 'No date' : date);
    document.getElementById('task-list').appendChild(item);
    totalTasks = totalTasks + 1;
    document.getElementById('task-count').innerHTML = totalTasks;
    document.getElementById('task-message').innerHTML = 'Your task was added.';
    document.getElementById('task-message').style.color = '#14734e';
    document.getElementById('task-name').value = '';
    return false;
}

function clearTasks() {
    document.getElementById('task-list').innerHTML = '';
    totalTasks = 0;
    document.getElementById('task-count').innerHTML = totalTasks;
    document.getElementById('task-message').innerHTML = 'All tasks were cleared.';
}

/* for loop + DOM createElement/appendChild: insert multiple dynamic elements. */
function generateTopics() {
    var topics = ['Review HTML forms', 'Practice CSS classes', 'Practice JavaScript functions'];
    document.getElementById('topic-list').innerHTML = '';
    for (var i = 0; i < topics.length; i = i + 1) {
        var item = document.createElement('li');
        item.textContent = topics[i];
        document.getElementById('topic-list').appendChild(item);
    }
    document.getElementById('topic-message').innerHTML = 'Three topics added using a for loop.';
}

function clearTopics() {
    document.getElementById('topic-list').innerHTML = '';
    document.getElementById('topic-message').innerHTML = 'Study topics cleared.';
}

/* Form Validation: branching with if/else, length, getElementById and onsubmit. */
function validateLogin() {
    var email = document.getElementById('login-email').value;
    var password = document.getElementById('login-password').value;
    var message = document.getElementById('login-message');
    if (email == '' || password == '') {
        message.innerHTML = 'Please fill in both fields.';
        message.style.color = '#9f273d';
    } else if (email.indexOf('@') == -1) {
        message.innerHTML = 'Please enter a valid email address.';
        message.style.color = '#9f273d';
    } else if (password.length < 6) {
        message.innerHTML = 'Password should have at least 6 characters.';
        message.style.color = '#9f273d';
    } else {
        message.innerHTML = 'Validation passed (demo only). No real login is performed.';
        message.style.color = '#14734e';
    }
    return false;
}

function checkSignupEmail() {
    var input = document.getElementById('signup-email');
    if (input.value == '' || input.value.indexOf('@') == -1) {
        input.style.borderColor = '#c92e4b';
    } else {
        input.style.borderColor = '#14734e';
    }
}

function validateSignup() {
    var name = document.getElementById('signup-name').value;
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;
    var again = document.getElementById('signup-again').value;
    var message = document.getElementById('signup-message');
    if (name == '' || email == '' || password == '' || again == '') {
        message.innerHTML = 'Please complete all required fields.';
        message.style.color = '#9f273d';
    } else if (email.indexOf('@') == -1) {
        message.innerHTML = 'Please enter a valid email address.';
        message.style.color = '#9f273d';
    } else if (password.length < 6) {
        message.innerHTML = 'Password should have at least 6 characters.';
        message.style.color = '#9f273d';
    } else if (password != again) {
        message.innerHTML = 'Passwords do not match.';
        message.style.color = '#9f273d';
    } else {
        message.innerHTML = 'Form validated (demo only). No real account was created.';
        message.style.color = '#14734e';
    }
    return false;
}

function showTip() {
    document.getElementById('study-tip').innerHTML = 'Study one topic, then take a short break.';
}
