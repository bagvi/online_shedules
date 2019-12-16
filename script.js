/* Онлайн расписание */

window.onload = function () {
var day = new Date();
var match = day.getDate();

	if (match == 1) {
	 	$('#dated').load('loading.html #date1');
	 	$('#vksdated').load('loading.html #vksdate1');
	}

	else if (match == 2) {
	 	$('#dated').load('loading.html #date2');
	 	$('#vksdated').load('loading.html #vksdate2');
	}

	else if (match == 3) {
	 	$('#dated').load('loading.html #date3');
	 	$('#vksdated').load('loading.html #vksdate3');
	}
	
	else if (match == 4) {
	 	$('#dated').load('loading.html #date4');
	 	$('#vksdated').load('loading.html #vksdate4');
	}
	
	else if (match == 5) {
	 	$('#dated').load('loading.html #date5');
	 	$('#vksdated').load('loading.html #vksdate5');
	}
	
	else if (match == 6) {
	 	$('#dated').load('loading.html #date6');
	 	$('#vksdated').load('loading.html #vksdate6');
	}
	
	else if (match == 7) {
	 	$('#dated').load('loading.html #date7');
	 	$('#vksdated').load('loading.html #vksdate7');
	}
	
	else if (match == 8) {
	 	$('#dated').load('loading.html #date8');
	 	$('#vksdated').load('loading.html #vksdate8');
	}
	
	else if (match == 9) {
	 	$('#dated').load('loading.html #date9');
	 	$('#vksdated').load('loading.html #vksdate9');
	}
	
	else if (match == 10) {
	 	$('#dated').load('loading.html #date10');
	 	$('#vksdated').load('loading.html #vksdate10');
	}
	
	else if (match == 11) {
	 	$('#dated').load('loading.html #date11');
	 	$('#vksdated').load('loading.html #vksdate11');
	}
	
	else if (match == 12) {
	 	$('#dated').load('loading.html #date12');
	 	$('#vksdated').load('loading.html #vksdate12');
	}

	else if (match == 13) {
	 	$('#dated').load('loading.html #date13');
	 	$('#vksdated').load('loading.html #vksdate13');
	}
	
	else if (match == 14) {
	 	$('#dated').load('loading.html #date14');
	 	$('#vksdated').load('loading.html #vksdate14');
	}
	
	else if (match == 15) {
	 	$('#dated').load('loading.html #date15');
	 	$('#vksdated').load('loading.html #vksdate15');
	}
	
	else if (match == 16) {
	 	$('#dated').load('loading.html #date16');
	 	$('#vksdated').load('loading.html #vksdate16');
	}
	
	else if (match == 17) {
	 	$('#dated').load('loading.html #date17');
	 	$('#vksdated').load('loading.html #vksdate17');
	}
	
	else if (match == 18) {
	 	$('#dated').load('loading.html #date18');
	 	$('#vksdated').load('loading.html #vksdate18');
	}
	
	else if (match == 19) {
	 	$('#dated').load('loading.html #date19');
	 	$('#vksdated').load('loading.html #vksdate19');
	}
	
	else if (match == 20) {
	 	$('#dated').load('loading.html #date20');
	 	$('#vksdated').load('loading.html #vksdate20');
	}
	
	else if (match == 21) {
	 	$('#dated').load('loading.html #date21');
	 	$('#vksdated').load('loading.html #vksdate21');
	}
	
	else if (match == 22) {
	 	$('#dated').load('loading.html #date22');
	 	$('#vksdated').load('loading.html #vksdate22');
	}
	
	else if (match == 23) {
	 	$('#dated').load('loading.html #date23');
	 	$('#vksdated').load('loading.html #vksdate23');
	}
	
	else if (match == 24) {
	 	$('#dated').load('loading.html #date24');
	 	$('#vksdated').load('loading.html #vksdate24');
	}
	
	else if (match == 25) {
	 	$('#dated').load('loading.html #date25');
	 	$('#vksdated').load('loading.html #vksdate25');
	}
	
	else if (match == 26) {
	 	$('#dated').load('loading.html #date26');
	 	$('#vksdated').load('loading.html #vksdate26');
	}
	
	else if (match == 27) {
	 	$('#dated').load('loading.html #date27');
	 	$('#vksdated').load('loading.html #vksdate27');
	}
	
	else if (match == 28) {
	 	$('#dated').load('loading.html #date28');
	 	$('#vksdated').load('loading.html #vksdate28');
	}
	
	else if (match == 29) {
	 	$('#dated').load('loading.html #date29');
	 	$('#vksdated').load('loading.html #vksdate29');
	}
	
	else if (match == 30) {
	 	$('#dated').load('loading.html #date30');
	 	$('#vksdated').load('loading.html #vksdate30');
	}
	
	else if (match == 31) {
	 	$('#dated').load('loading.html #date31');
	 	$('#vksdated').load('loading.html #vksdate31');
	}
	
	else {
	 	alert ("Что-то пошло не так! Обратитесь к разработчику расписания.");
	}



/* Дата и время сегодня на странице расписания*/


setInterval(function () {  
date = new Date(),  
h = date.getHours(),  
m = date.getMinutes(),  
s = date.getSeconds(),  
h = (h < 10) ? '0' + h : h,  
m = (m < 10) ? '0' + m : m,  
s = (s < 10) ? '0' + s : s,  
document.getElementById('time').innerHTML = h + ':' + m + ':' + s;  
}, 1000);  




var m_names = ["января", "февраля", "марта", 
"апреля", "мая", "июня", "июля", "августа", "сентября", 
"октября", "ноября", "декабря"];

var d_names = ["Воскресенье","Понедельник", "Вторник", "Среда", 
"Четверг", "Пятница", "Суббота"];

var myDate = new Date();
myDate.setDate(myDate.getDate());
var curr_date = myDate.getDate();
var curr_month = myDate.getMonth();
var curr_day  = myDate.getDay();
document.getElementById('day').innerHTML = (d_names[curr_day] + "," + " " + curr_date + " " + m_names[curr_month] );

};