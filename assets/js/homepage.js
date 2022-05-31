var userFormEl = document.querySelector("#user-form");
var nameInputEl = document.querySelector("#username");

var getUserRepos = function(user) {
    var apiUrl = "https://api.github.com/users/" + user + "/repos";

    //make a get request to github
    fetch(apiUrl).then(function(response) {
        response.json().then(function(data) {
            console.log(data);
        });
    });
};

var formSubmitHandler = function(event) {
    event.preventDefault();

    //get value from input element
    var username = nameInputEl.value.trim();

    if (username) {
        getUserRepos(username);
        //clears input field
        nameInputEl.value = "";
    } else {
        alert("Please enter a GitHub username");
    }
    console.log(event);
};
  userFormEl.addEventListener("submit", formSubmitHandler);