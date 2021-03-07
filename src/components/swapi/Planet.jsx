let Person = ({ planet }) => {
	return (
		<div className="justify-center m-4">
			<div className="w-96 p-4 border-4 shadown-xl">
				<div className="">
					<span className="text-3xl font-bold text-center text-blue-800">
						{planet.name}
					</span>
				</div>
				<span className="text-lg">{planet.diameter}</span>
				<span className="text-lg">{planet.terrain}</span>
			</div>
		</div>
	);
};

export default Person;
