var database = [
    {
        username: "motheo",
        password: "1234"
    }
];

var newsFeed = [
	{
		username: "Bobby",
		timeline: "So tired from all that learning!"
	},
	{
		username: "Sally",
		timeline: "Javascript is sooooo cool!"
	},
	{
		username: "Mitch",
		timeline: "Javascript is preeetyy cool!"
	}
];

var userName = prompt("What is your username?")
var userPassword = prompt("What is your passsword?")


function signIn(user, pass) {
	if (user === database[0].username &&
		pass === database[0].password) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!")
    }
}

signIn(userName, userPassword);
