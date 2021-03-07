import { useState } from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';

import Navbar from './Navbar';
import People from './People';
import Planets from './Planets';

export const StarWarsQuery = () => {
	let [page, setPage] = useState('people');
	let queryClient = new QueryClient();
	return (
		<QueryClientProvider client={queryClient}>
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
		</QueryClientProvider>
	);
};
