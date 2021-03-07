import { useQuery } from 'react-query';
import axios from 'axios';
import Planet from './Planet';

let fetchPlanets = async () => {
	let res = await axios.get('https://swapi.dev/api/planets/');

	return res;
};
function Planets() {
	let { data, status } = useQuery('planets', fetchPlanets);

	return (
		<div className="">
			<div className="">
				<span className="text-3xl">Planets</span>
			</div>
			<div className="">{status}</div>
			<div className="">
				{data &&
					data.data.results.map((p) => <Planet key={p.name} planet={p} />)}
			</div>
		</div>
	);
}

export default Planets;
