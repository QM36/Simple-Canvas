(function () {
	var drawingUnder = document.getElementById("canvasunder");
	var drawingOn = document.getElementById("canvason");

	var down = false;
	var brush = true;
	var size = 10;
	var color = "red";
	var imageUrl = "https://ws1.sinaimg.cn/large/006XqmrNly1fxftmamyd9j31hc0xc425.jpg";
	var ratio;

	showPic (imageUrl);

	if (drawingOn.getContext){
		var contextOn = drawingOn.getContext("2d");
	}

	$("#canvason").mousedown(function(event) {
		down = true;
		x=event.clientX;
		y=event.clientY;
		contextOn.lineWidth = size;
		contextOn.strokeStyle = color;
		if(brush) {
			contextOn.beginPath();
			contextOn.moveTo((x-20) * ratio, (y-20) * ratio);
		} else {
			contextOn.clearRect((x-20-size/2) * ratio, (y-20-size/2) * ratio , size * ratio, size * ratio);
		}
	});
	$("#canvason").mouseup(function(event) {
		down = false;
	});
	$("#canvason").mousemove(function(event) {
		if(down) {
			x=event.clientX;
			y=event.clientY;
			contextOn.lineWidth = size;
			contextOn.strokeStyle = color;
			if (brush) {
				contextOn.lineTo((x-20) * ratio, (y-20) * ratio);
				contextOn.stroke();
			} else {
				contextOn.clearRect((x-20-size/2) * ratio, (y-20-size/2) * ratio , size * ratio, size * ratio);
			}
		}
	});
	$("#brush").click(function() {
		brush = true;
		$("#rubber").css("opacity", "0.5");
		$("#brush").css("opacity", "1");
		console.log("brush : " + brush);
	});
	$("#rubber").click(function() {
		brush = false;
		$("#brush").css("opacity", "0.5");
		$("#rubber").css("opacity", "1");
		console.log("brush : " + brush);
	});
	function showPic (imageUrl) {
		if (drawingUnder.getContext){
			var contextUnder = drawingUnder.getContext("2d");
    		var image = new Image ();
			image.src = imageUrl;
			image.onload = function () {
				drawingUnder.width = image.width;
				drawingUnder.height = image.height;
				drawingOn.width = image.width;
				console.log(image.width);
				drawingOn.height = image.height;
				console.log($("#canvasunder").css("width"));
				ratio = image.width / 1000;
				console.log(ratio);
				contextUnder.drawImage(image, 0, 0, image.width, image.height);
				$("#clean").click(function() {
					contextOn.clearRect(0, 0, image.width, image.height);
				});
			}
		}
	}
	$("#open").change(function(event) {
		var file = event.target
		if (!file.files || !file.files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (evt) {
        	imageUrl = evt.target.result;//这里是base64编码
            showPic (imageUrl); 
        }
        reader.readAsDataURL(file.files[0]);
	});
	$("#size").click(function(event) {
		size = event.target.dataset.num;
		$("#big,#middle,#small,#minmum").css("opacity", "0.5");
		$(`#${event.target.id}`).css("opacity", "1");
		console.log(event.target.id, event.target.dataset.num);
	});
	$("#color").click(function(event) {
		color = event.target.id;
		$("#red,#yellow,#blue,#green,#black").css("opacity", "0.5");
		$(`#${event.target.id}`).css("opacity", "1");
		console.log(event.target.id);
	});
})();