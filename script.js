/* Онлайн расписание */

window.onload = function () {
	const day = new Date();
	const match = day.getDate();

	switch (match) {
		case 1:
			$('#dated').load('loading.html #date1');
			$('#vksdated').load('loading.html #vksdate1');
			break;

		case 2:
			$('#dated').load('loading.html #date2');
			$('#vksdated').load('loading.html #vksdate2');
			break;

		case 3:
			$('#dated').load('loading.html #date3');
			$('#vksdated').load('loading.html #vksdate3');
			break;

		case 4:
			$('#dated').load('loading.html #date4');
			$('#vksdated').load('loading.html #vksdate4');
			break;

		case 5:
			$('#dated').load('loading.html #date5');
			$('#vksdated').load('loading.html #vksdate5');
			break;

		case 6:
			$('#dated').load('loading.html #date6');
			$('#vksdated').load('loading.html #vksdate6');
			break;

		case 7:
			$('#dated').load('loading.html #date7');
			$('#vksdated').load('loading.html #vksdate7');
			break;

		case 8:
			$('#dated').load('loading.html #date8');
			$('#vksdated').load('loading.html #vksdate8');
			break;

		case 9:
			$('#dated').load('loading.html #date9');
			$('#vksdated').load('loading.html #vksdate9');
			break;

		case 10:
			$('#dated').load('loading.html #date10');
			$('#vksdated').load('loading.html #vksdate10');
			break;

		case 11:
			$('#dated').load('loading.html #date11');
			$('#vksdated').load('loading.html #vksdate11');
			break;

		case 12:
			$('#dated').load('loading.html #date12');
			$('#vksdated').load('loading.html #vksdate12');
			break;

		case 13:
			$('#dated').load('loading.html #date13');
			$('#vksdated').load('loading.html #vksdate13');
			break;

		case 14:
			$('#dated').load('loading.html #date14');
			$('#vksdated').load('loading.html #vksdate14');
			break;

		case 15:
			$('#dated').load('loading.html #date15');
			$('#vksdated').load('loading.html #vksdate15');
			break;

		case 16:
			$('#dated').load('loading.html #date16');
			$('#vksdated').load('loading.html #vksdate16');
			break;

		case 17:
			$('#dated').load('loading.html #date17');
			$('#vksdated').load('loading.html #vksdate17');
			break;

		case 18:
			$('#dated').load('loading.html #date18');
			$('#vksdated').load('loading.html #vksdate18');
			break;

		case 19:
			$('#dated').load('loading.html #date19');
			$('#vksdated').load('loading.html #vksdate19');
			break;

		case 20:
			$('#dated').load('loading.html #date20');
			$('#vksdated').load('loading.html #vksdate20');
			break;

		case 21:
			$('#dated').load('loading.html #date21');
			$('#vksdated').load('loading.html #vksdate21');
			break;

		case 22:
			$('#dated').load('loading.html #date22');
			$('#vksdated').load('loading.html #vksdate22');
			break;

		case 23:
			$('#dated').load('loading.html #date23');
			$('#vksdated').load('loading.html #vksdate23');
			break;

		case 24:
			$('#dated').load('loading.html #date24');
			$('#vksdated').load('loading.html #vksdate24');
			break;

		case 25:
			$('#dated').load('loading.html #date25');
			$('#vksdated').load('loading.html #vksdate25');
			break;

		case 26:
			$('#dated').load('loading.html #date26');
			$('#vksdated').load('loading.html #vksdate26');
			break;

		case 27:
			$('#dated').load('loading.html #date27');
			$('#vksdated').load('loading.html #vksdate27');
			break;

		case 28:
			$('#dated').load('loading.html #date28');
			$('#vksdated').load('loading.html #vksdate28');
			break;

		case 29:
			$('#dated').load('loading.html #date29');
			$('#vksdated').load('loading.html #vksdate29');
			break;

		case 30:
			$('#dated').load('loading.html #date30');
			$('#vksdated').load('loading.html #vksdate30');
			break;

		case 31:
			$('#dated').load('loading.html #date31');
			$('#vksdated').load('loading.html #vksdate31');
			break;

		default:
			alert("Что-то пошло не так! Обратитесь к разработчику расписания.");
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

	const m_names = ["января", "февраля", "марта",
		"апреля", "мая", "июня", "июля", "августа", "сентября",
		"октября", "ноября", "декабря"
	];

	const d_names = ["Воскресенье", "Понедельник", "Вторник", "Среда",
		"Четверг", "Пятница", "Суббота"
	];

	const myDate = new Date();
	myDate.setDate(myDate.getDate());
	const curr_date = myDate.getDate();
	const curr_month = myDate.getMonth();
	const curr_day = myDate.getDay();
	document.getElementById('day').innerHTML = (d_names[curr_day] + "," + " " + curr_date + " " + m_names[curr_month]);

};