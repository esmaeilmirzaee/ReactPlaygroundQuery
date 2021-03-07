const Person = ({ person }) => {
	return (
		<div className="flex mx-auto justify-center">
			<div className="w-96 p-4 bg-blue-50 m-5">
				{/* title */}
				<div className="">
					<span className="text-3xl text-blue-700">{person.name}</span>
				</div>

				{/* eye colour */}
				<div className="">
					<span className="text-lg text-blue-800">{person.eye_color}</span>
					<span className="text-lg text-blue-800">{person.skin_color}</span>
				</div>
			</div>
		</div>
	);
};

export default Person;
