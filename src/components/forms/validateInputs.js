export default function validateInputs(values) {
	let errors = {};
	console.log(errors, values);

	if (!values.username) {
		errors.username = 'Username is required';
	}

	if (!values.email) {
		errors.email = 'Email is required';
	} else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
		errors.email = 'Email is invalid.';
	}

	if (!values.password) {
		errors.password = 'Password is required.';
	} else if (values.password.length < 2) {
		errors.password = 'Password must be at least 2 characters';
	}

	if (!values.password2) {
		errors.password2 = 'Please confirm the password';
	} else if (values.password2 !== values.password) {
		errors.password2 = 'Passwords do not match.';
	}

	return errors;
}
