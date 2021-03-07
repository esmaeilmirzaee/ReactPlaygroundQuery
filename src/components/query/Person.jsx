const Person = ({ person }) => {
	return (
		<div className="flex bg-gray-100 p-10 m-5 justify-center w-96">
			<div className="">
				{/* title */}
				<div className="">
					<span className="text-blue-800 font-bold text-3xl text-center">
						{person.name}
					</span>
				</div>
				{/* eye colour */}
				<div className="">
					<span className="text-blue-500 text-xl text-center">
						{person.eye_color}
					</span>
				</div>
			</div>
		</div>
	);
};

export default Person;
