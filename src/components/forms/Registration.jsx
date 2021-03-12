import { useForm } from './hooks/useForm';
import validate from './validateInputs';

const Registration = () => {
	const { handleChange, handleSubmit, values, errors } = useForm(validate);
	return (
		<>
			<div className="justify-center">
				<span className="text-2xl text-center text-indigo-800">Forms</span>
			</div>
			<div className="justify-right">
				<form action="" className="" onSubmit={handleSubmit}>
					<div className="form_inputs">
						<label htmlFor="email" className="form_label">
							Email
						</label>
						<input
							name="email"
							type="email"
							className="form_input"
							value={values.email}
							onChange={handleChange}
						/>
						<span className="text-red-500">{errors.email && errors.email}</span>
					</div>
					<div className="form_inputs">
						<label htmlFor="password" className="form_label">
							Password
						</label>
						<input
							name="password"
							type="password"
							className="form_input"
							value={values.password}
							onChange={handleChange}
						/>
						<span className="text-red-500">
							{errors.password && errors.password}
						</span>
					</div>
					<div className="flex flex-col justify-center mx-1">
						<label htmlFor="password2" className="form_label">
							Confirm password
						</label>
						<input
							name="password2"
							type="password"
							className="border rounded-lg py-2 px-3 border-gray-300 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 autocomplete"
							value={values.password2}
							onChange={handleChange}
						/>
						<span className="text-red-500">
							{errors.password2 && errors.password2}
						</span>
					</div>
					<button className="bg-blue-600 px-5 py-3 rounded text-white m-5 w-full">
						Sign up
					</button>
					<div className="form_info">
						To login press <span className="form_btn_secondary">Login</span>
					</div>
				</form>
			</div>
		</>
	);
};

export default Registration;
