(function () {
	$("#download").onclick=function(){
		var type = 'png';
		var imgData = canvas.toDataURL(type);
		imgData = imgData.replace(_fixType(type),'image/octet-stream');  
		var filename = 'bloglaotou_' + (new Date()).getTime() + '.' + type;
		saveFile(imgData,filename);
	}
})();
