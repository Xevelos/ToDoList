function addItem() {
	let thing = document.getElementById("thing").value;
	let datetime = document.getElementById("datetime").value;
	let year = datetime.slice(0, 4);
	let month = datetime.slice(5, 7);
	let day = datetime.slice(8, 10);
	let hour = datetime.slice(11, 13);
	let minute = datetime.slice(14, 16);
	
	document.getElementById("thingList1").innerHTML=thing;
}