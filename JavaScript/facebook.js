var database = [
    {
        username: "motheo",
        password: "1234"
	},
	{
		username: "sally",
		password: "123"
	},
	{
		username: "ingrid",
		password: "12345"
	},
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

function isUserValid(user, pass) {

	for (var i = 0; i < database.length; i++) {

		if (database[i].username === user &&
			database[i].password === pass) {
			return true
		}
	}

	return false
}

function signIn(user, pass) {
	if (isUserValid(user, pass)) {
		console.log(newsFeed);
	} else {
		alert("Sorry, wrong username and password!")
    }
}

signIn(userName, userPassword);
