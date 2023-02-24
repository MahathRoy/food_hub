function validate() {
	let nam = document.getElementById("n").value;
	let em = document.getElementById("e").value;
	let emregx =
		/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
	let mess = document.getElementById("m").value;
	if (nam == "") {
		alert("Enter a Name !");
		return false;
	} else if (!isNaN(nam)) {
		alert("Please enter valid name!");
		return false;
	} else if (em == "") {
		alert("Enter email id !");
		return false;
	} else if (!emregx.test(em)) {
		alert("Enter valid email id !");
		return false;
	} else if (mess == "") {
		alert("Enter your message!");
		return false;
	}
}

function nav() {
	document.getElementById("navigate").style.backgroundColor =
		"rgba(0,0,0,0.7)";
}
