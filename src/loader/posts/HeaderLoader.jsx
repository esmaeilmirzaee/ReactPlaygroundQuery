function HeaderLoader() {
	return (
		<div className="shadow-xl overflow-hidden m-2">
			<div className="">
				{/* Post poster */}
				<div className="w-full h-64 bg-gray-200 rounded rounded-b-none animate-pulse"></div>
				{/* Post title */}
				<div className="m-3">
					<div className="h-6 mx-6 bg-gray-300 animate-pulse"></div>
				</div>
				{/* Publish date */}
				<div className="m-1">
					<div className="h-3 w-20 ml-10 bg-gray-200 animate-pulse"></div>
				</div>
			</div>
			{/* Post brief */}
			<div className="mt-1 mb-1 p-4">
				<div className="grid grid-cols-7 gap-1">
					<div className="col-span-5 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-2 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-3 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-3 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-1 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-4 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-3 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-1 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-6 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-7 h-5 bg-gray-300 animate-pulse"></div>
					<div className="col-span-1 h-5 bg-gray-300 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
}

export default HeaderLoader;
