var records = eval("("+localStorage.record+")")|| [];

function showStarRecord() {
	var arr = $(".column");
	for(var i = 0; i < arr.length; i++) {
		if(records.length < i) {
			$(arr[i]).append("<br><img src='../assets/0star.png' style='pointer-events:none;width:73%;margin-left:27%;margin-top:-30%;display:block;' />");
		} else {
			$(arr[i]).append("<br><img src='../assets/" + (records[i]?records[i]:0) + "star.png' style='pointer-events:none;width:73%;margin-left:27%;margin-top:-30%;display:block;'/>");
		}
	}
}

function saveStarRecord(num,level){
	if(records[level]){
		if(num>records[level]){
			records[level]=num;
		}
	}else{
		records[level]=num;
	}
	localStorage.record=JSON.stringify(records);
	var changeDiv=$(".column")[level];
	$(changeDiv).find("img").attr("src","../assets/" + records[level] + "star.png");
}
