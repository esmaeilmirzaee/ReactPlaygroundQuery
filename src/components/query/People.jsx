import { useQuery } from 'react-query';
import axios from 'axios';
import Person from './Person';

const fetchPeople = async () => {
	return await axios.get('https://swapi.dev/api/people/');
};

function People() {
	let { data, status } = useQuery('people', fetchPeople);
	return (
		<div className="flex flex-row justify-center mt-5 text-center">
			<div className="">
				<div className="mb-10">
					<span className="text-3xl text-center font-black text-gray-800">
						People
					</span>
				</div>
				<div className="bg-red-300 border-red-400 w-96 text-center">
					<div className="text-red-600 p-3">{status}</div>
				</div>
				<div className="">
					{data &&
						data.data.results.map((p) => <Person key={p.name} person={p} />)}
				</div>
			</div>
		</div>
	);
}

export default People;
