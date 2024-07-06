console.log('scipt added');

function isNameValid(name) {
	for (let i = 0; i < name.length; i++) {
		const char = name[i];
		if (
			!(
				(char >= 'A' && char <= 'Z') ||
				(char >= 'a' && char <= 'z') ||
				char === ' '
			)
		) {
			return false;
		}
	}
	return true;
}

function isMobileValid(mobile) {
	if (mobile.length !== 10) {
		return false;
	}
	for (let i = 0; i < mobile.length; i++) {
		if (!(mobile[i] >= '0' && mobile[i] <= '9')) {
			return false;
		}
	}
	return true;
}

document.getElementById('my-form').addEventListener('submit', function (e) {
	e.preventDefault();
	const name = document.getElementById('name').value;
	const mobile = document.getElementById('phone').value;

	// Validate name (only alphabets and spaces)
	if (!isNameValid(name)) {
		alert('Name should contain only alphabets and spaces.');
		return;
	}

	// Validate mobile number (should be 10 digits long)
	if (!isMobileValid(mobile)) {
		alert(
			'Mobile number should have only digits and should be 10 digits long.'
		);
		return;
	}

	alert('Submitted');
});
