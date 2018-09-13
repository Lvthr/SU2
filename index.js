let myButton = document.querySelector("#myButton");

var username = "noe";
var password = "secret";

var data = {brukernavn: "noe", passord: "secret"};
console.log(data);
let url = "http://localhost:8080/login";
fetch(url, {
	method: "POST",
	body: JSON.stringify(data),
	headers:{
		'Content-Type': 'application/json;charset=utf-8'
	}
})
.then(response => response.json())
.then(json => {
	console.log(JSON.stringify(json));
	localStorage.setItem("token", json.jwt);
})
.catch(error => console.error("Error: ", error));


myButton.addEventListener("click", e => {
	let token = localStorage.getItem("token");
	token = localStorage.getItem("token");
	console.log(token);

	var input_data = {"x-access-token": token};
	console.log(input_data);

	let url = "http://localhost:8080/api/person";
	fetch(url, {
		method: "GET",
		headers: input_data
	})
	.then(response => response.json())
	.then(json => {
	console.log(JSON.stringify(json));
})
});
