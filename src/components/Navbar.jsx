import React from 'react';

function Navbar({ setPage }) {
	return (
		<div className="flex justify-center items-center mt-10">
			<nav>
				<button
					className="mx-10 px-5 py-2 bg-indigo-600 text-white text-center rounded hover:bg-indigo-800"
					onClick={() => setPage('people')}
				>
					People
				</button>
				<button
					className="mx-10 px-5 py-2 bg-indigo-600 text-white text-center rounded hover:bg-indigo-800"
					onClick={() => setPage('planets')}
				>
					Planets
				</button>
			</nav>
		</div>
	);
}

export default Navbar;
