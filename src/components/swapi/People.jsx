import axios from 'axios';
import { useQuery } from 'react-query';
import Person from './Person';

const fetchPeople = async () => {
	return await axios.get('https://swapi.dev/api/people/');
};

function People() {
	let { data, status } = useQuery('people', fetchPeople);
	return (
		<div className="">
			<div className="">
				<span className="text-3xl">People</span>
				<div className="">
					<span className="text-3xl text-blue-800">{status}</span>
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
