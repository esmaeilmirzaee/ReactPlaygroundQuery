import Header from './Header';
function Headers() {
	return (
		<div className="flex">
			{posts.map((p) => (
				<Header key={p.title} post={p} />
			))}
		</div>
	);
}

export default Headers;

let posts = [
	{
		poster:
			'https://images.unsplash.com/photo-1487192057994-ea21046f03a3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDh8fGNhbmFkYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
		title: 'The Advantages and Disadvantages of Working from Home',
		date: 'December 15, 2021',
		description:
			'Interdum posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae congue mauris rhoncus aenean vel elit.',
	},
	{
		poster:
			'https://images.unsplash.com/photo-1489447068241-b3490214e879?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NDl8fGNhbmFkYXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
		title: 'Understanding Street Photography',
		date: 'February 15, 2021',
		description:
			'Interdum posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae congue mauris rhoncus aenean vel elit.',
	},
];
