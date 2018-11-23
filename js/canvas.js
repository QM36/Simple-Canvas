(function () {
	var drawingUnder = document.getElementById("canvasunder");
	var drawingOn = document.getElementById("canvason");

	var down = false;
	var brush = true;
	var size = 10;
	var color = "red";
	var imageUrl = "https://ws1.sinaimg.cn/large/006XqmrNly1fxftmamyd9j31hc0xc425.jpg";
	
	showPic (imageUrl);
	function selectImage(file) {
        if (!file.files || !file.files[0]) {
            return;
        }
        var reader = new FileReader();
        reader.onload = function (evt) {
        	imageUrl = evt.target.result;
            showPic (imageUrl); //这里是base64编码
        }
        reader.readAsDataURL(file.files[0]);
    }

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
			contextOn.moveTo(x-20, y-20);
		} else {
			contextOn.clearRect(x-20-size/2, y-20-size/2, size, size);
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
				contextOn.lineTo(x-20, y-20);
				contextOn.stroke();
			} else {
				contextOn.clearRect(x-20-size/2, y-20-size/2, size, size);
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
    		console.log(size);
    		var image = new Image ();
			image.src = imageUrl;
			// image.src = "1.png";
			image.onload = function () {
				contextUnder.drawImage(image, 0, 0, 900, 500);
			}
		}
	}
	function clean () {
		contextOn.clearRect(0, 0, 900, 500);
	}
	$("#size").click(function(event) {
		size = event.target.dataset.num;
		$("#big,#middle,#small,#minmum").css("opacity", "0.5");
		$(`#${event.target.id}`).css("opacity", "1");
		console.log(event.target.id, event.target.dataset.num);
		console.log(size);
	});
	$("#color").click(function(event) {
		color = event.target.id;
		$("#red,#yellow,#blue,#green,#black").css("opacity", "0.5");
		$(`#${event.target.id}`).css("opacity", "1");
		console.log(event.target.id);
		console.log(color);
	});
})();