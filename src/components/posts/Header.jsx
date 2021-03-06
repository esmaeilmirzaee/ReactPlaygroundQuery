function Header({ post }) {
	console.log(post.title);
	return (
		<div className="shadow-xl overflow-hidden m-2">
			<div className="">
				<img
					src={post.poster}
					alt=""
					className="w-full rounded rounded-b-none h-64"
				/>
				{/* Post title */}
				<div className="m-3">
					<span className="text-2xl font-bold">{post.title}</span>
				</div>
				{/* Publish date */}
				<div className="m-1">
					<span className="text-gray-400 font-light text-md">{post.date}</span>
				</div>
			</div>
			{/* brief */}
			<div className="mt-1 mb-1 p-1">
				<span className="text-align text-lg">{post.description}</span>
			</div>
		</div>
	);
}

export default Header;
