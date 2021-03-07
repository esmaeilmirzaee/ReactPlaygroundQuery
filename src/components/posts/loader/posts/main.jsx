import PostLoader from './PostLoader';
import HeaderLoader from './HeaderLoader';

export function PostsLoader() {
	return (
		<div className="flex justify-center">
			<div className="items-center justify-center">
				<div className="flex flex-1">
					<div className="w-1/2">
						<HeaderLoader />
					</div>
					<div className="w-1/2">
						<HeaderLoader />
					</div>
				</div>
				<div className="flex flex-1">
					<div className="rounded-md">
						<PostLoader />
					</div>
					<div className="rounded-md">
						<PostLoader />
					</div>
					<div className="rounded-md">
						<PostLoader />
					</div>
				</div>
			</div>
		</div>
	);
}
