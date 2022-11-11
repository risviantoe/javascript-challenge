function getAge() {
	var name = document.getElementById('name').value;
	var result = document.getElementById('result');
	var date = document.getElementById('birthday').value;

	if (date === '' || name === '') {
		alert('Silahkan lengkapi form tersebut!');
	} else {
		var today = new Date();
		var birthday = new Date(date);
		if (birthday > today) {
			return alert('Anda belum lahir!');
		}
		var year = 0;
		if (today.getMonth() < birthday.getMonth()) {
			year = 1;
		} else if (
			today.getMonth() === birthday.getMonth() &&
			today.getDate() < birthday.getDate()
		) {
			year = 1;
		}
		var age = today.getFullYear() - birthday.getFullYear() - year;
		if (age < 0) {
			age = 0;
    }
    
		var birthdayDate = birthday.getDate();
		var birthdayMonth = birthday.getMonth() + 1;
		if (today.getMonth() > birthday.getMonth()) {
			var newBirthday = new Date(
				`${birthdayMonth}/${birthdayDate}/${today.getFullYear() + 1}`
			);
			var diffInTime = newBirthday.getTime() - today.getTime();
		} else if (today.getMonth() < birthday.getMonth()) {
			var newBirthday = new Date(
				`${birthdayMonth}/${birthdayDate}/${today.getFullYear()}`
			);
			var diffInTime = newBirthday.getTime() - today.getTime();
		} else {
			if (today.getDate() > birthday.getDate()) {
				var newBirthday = new Date(
					`${birthdayMonth}/${birthdayDate}/${
						today.getFullYear() + 1
					}`
				);
				var diffInTime = newBirthday.getTime() - today.getTime();
			} else if (today.getDate() < birthday.getDate()) {
				var newBirthday = new Date(
					`${birthdayMonth}/${birthdayDate}/${today.getFullYear()}`
				);
				var diffInTime = newBirthday.getTime() - today.getTime();
			} else {
				var diffInTime = 0;
				document.getElementById('printDay').innerHTML = ' hari ini.';
			}
		}

		var diffInDay = parseInt(diffInTime / (1000 * 60 * 60 * 24));
		if (diffInDay > 335) {
			var toBirthday = (diffInDay = 364 - diffInDay + ' hari yang lalu');
		}
    else if (diffInTime > 0) {
			var toBirthday = diffInDay + 1 + ' hari lagi';
    } else if (diffInDay !== 0) {
      var toBirthday = diffInDay + ' hari lagi';
    } else {
			var toBirthday = '';
		}

		result.classList.remove('d-block');
		result.classList.add('d-block');

		document.getElementById('printName').innerHTML = name;
		document.getElementById('printAge').innerHTML = age;
		document.getElementById('printDay').innerHTML = toBirthday;
	}
}
