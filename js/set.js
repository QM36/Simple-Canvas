function setSize (num,id) {
	size = num;
	$("#big,#middle,#small,#minmum").css("opacity", "0.5");
	$(`#${id}`).css("opacity", "1");
	console.log(size);
}
function setColor (col) {
	color = col;
	$("#red,#yellow,#blue,#green,#black").css("opacity", "0.5");
	$(`#${col}`).css("opacity", "1");
	console.log(color);
}
function clean () {
	contextOn.clearRect(0, 0, 900, 500);
}