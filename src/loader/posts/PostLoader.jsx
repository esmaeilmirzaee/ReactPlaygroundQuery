function PostLoader() {
	return (
		<div className="w-96 shadow-xl overflow-hidden m-2">
			<div className="">
				{/* Post poster */}
				<div className="h-64 bg-gray-200 animate-pulse"></div>
				{/* Post title */}
				<div className="m-3">
					<div className="h-10 bg-gray-200 animate-pulse"></div>
				</div>
				{/* Publish date */}
				<div className="m-1 pl-5">
					<div className="h-3 w-10 bg-gray-200 animate-pulse"></div>
				</div>
			</div>
			{/* brief */}
			<div className="mt-1 mb-1 p-4">
				<div className="grid grid-cols-5 gap-1">
					<div className="col-span-2 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-3 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-5 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-1 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-2 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-2 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-5 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-3 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-2 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-2 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-1 h-4 bg-gray-200 animate-pulse"></div>
					<div className="col-span-2 h-4 bg-gray-200 animate-pulse"></div>
				</div>
			</div>
		</div>
	);
}

export default PostLoader;
