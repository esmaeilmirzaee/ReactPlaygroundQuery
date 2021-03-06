import Headers from './Headers';
import Posts from './Posts';
export function Bultin() {
	return (
		<div>
			<div>
				<div className="">
					<Headers />
				</div>
				<div className="flex mx-2">
					<Posts />
				</div>
			</div>
		</div>
	);
}
