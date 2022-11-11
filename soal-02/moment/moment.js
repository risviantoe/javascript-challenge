function getAge() {
	var name = document.getElementById('name').value;
	var result = document.getElementById('result');
	var date = document.getElementById('birthday').value;

	if (date === '' || name === '') {
		alert('Silahkan lengkapi form tersebut!');
	} else {
		var today = moment();
		var birthday = moment(date);
		if (birthday > today) {
			return alert('Anda belum lahir!');
		}
		var nextBirthday = moment().set({
			year: today.year(),
			month: birthday.month(),
			date: birthday.date(),
		});
		var age = moment().diff(birthday, 'years');

		if (today.month() > birthday.month()) {
			nextBirthday.add(1, 'years');
		} else if (today.month() === birthday.month()) {
			if (today.date() > birthday.date()) {
				nextBirthday.add(1, 'years');
			}
		}

		var diffInDay = nextBirthday.diff(today, 'day');
		if (diffInDay > 335) {
			var toBirthday = (diffInDay = 364 - diffInDay + ' hari yang lalu');
		} else if (diffInDay !== 0) {
			var toBirthday = diffInDay + ' hari lagi';
		} else {
			var toBirthday = ' hari ini';
		}

		result.classList.remove('d-block');
		result.classList.add('d-block');

		document.getElementById('printName').innerHTML = name;
		document.getElementById('printAge').innerHTML = age;
		document.getElementById('printDay').innerHTML = toBirthday;

		console.log('moment birthday', birthday);
		console.log('moment nextBirthday', nextBirthday);
		console.log('moment age', age);
		console.log('moment diffInDay', diffInDay);
	}
}
