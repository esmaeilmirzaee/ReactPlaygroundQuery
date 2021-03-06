import { useState } from 'react';
import './styles.css';

import Navbar from './components/Navbar';
import People from './components/People';
import Planets from './components/Planets';

import { Bultin } from './components/posts/main';

export default function App() {
	let [page, setPage] = useState('people');
	return (
		<>
			<div className="h-screen w-screen justify-center">
				<div className="bg-gray-100 p-10">
					<div className="text-center text-4xl">
						Esmaeil MIRZAEE's React & Tailwind playground
					</div>
					<div className="text-center text-2xl">
						Thanks to <span className="text-red-500">Codesandbox</span>.
					</div>
				</div>
				<Navbar setPage={setPage} />
				{page === 'people' ? <People /> : <Planets />}
			</div>
			<div>
				<Bultin />
			</div>
		</>
	);
}
