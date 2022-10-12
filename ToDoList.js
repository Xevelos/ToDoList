function addItem() {
	let thing = document.getElementById("thing").value;
	let datetime = document.getElementById("datetime").value;
	for(let i = 1; i<11; i++) {
		let str = "thingList" + i;
		if(document.getElementById(str).innerHTML == "") {
			document.getElementById(str).innerHTML = thing + " | Deadline: " + datetime.replace("T", " ");
			break;
		} else {}
	}
}

function swap(str1, str2) {
	let temp = document.getElementById(str1).innerHTML;
	document.getElementById(str1).innerHTML = document.getElementById(str2).innerHTML;
	document.getElementById(str2).innerHTML = temp;
}

function moveUp(int) {
	switch(int) {
		case 1:
			break;
		case 2:
			swap("thingList2", "thingList1")
			break;
		case 3:
			swap("thingList3", "thingList2")
			break;
		case 4:
			swap("thingList4", "thingList3")
			break;
		case 5:
			swap("thingList5", "thingList4")
			break;
		case 6:
			swap("thingList6", "thingList5")
			break;
		case 7:
			swap("thingList7", "thingList6")
			break;
		case 8:
			swap("thingList8", "thingList7")
			break;
		case 9:
			swap("thingList9", "thingList8")
			break;
		case 10:
			swap("thingList10", "thingList9")
			break;
	}
}

function moveDown(int) {
	switch(int) {
		case 1:
			swap("thingList1", "thingList2")
			break;
		case 2:
			swap("thingList2", "thingList3")
			break;
		case 3:
			swap("thingList3", "thingList4")
			break;
		case 4:
			swap("thingList4", "thingList5")
			break;
		case 5:
			swap("thingList5", "thingList6")
			break;
		case 6:
			swap("thingList6", "thingList7")
			break;
		case 7:
			swap("thingList7", "thingList8")
			break;
		case 8:
			swap("thingList8", "thingList9")
			break;
		case 9:
			swap("thingList9", "thingList10")
			break;
		case 10:
			break;
	}
}


function remove(int) {
	switch(int) {
		case 1:
			document.getElementById("thingList1").innerHTML = null;
			break;
		case 2:
			document.getElementById("thingList2").innerHTML = null;
			break;
		case 3:
			document.getElementById("thingList3").innerHTML = null;
			break;
		case 4:
			document.getElementById("thingList4").innerHTML = null;
			break;
		case 5:
			document.getElementById("thingList5").innerHTML = null;
			break;
		case 6:
			document.getElementById("thingList6").innerHTML = null;
			break;
		case 7:
			document.getElementById("thingList7").innerHTML = null;
			break;
		case 8:
			document.getElementById("thingList8").innerHTML = null;
			break;
		case 9:
			document.getElementById("thingList9").innerHTML = null;
			break;
		case 10:
			document.getElementById("thingList10").innerHTML = null;
			break;
	}
}