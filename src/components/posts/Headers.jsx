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
		poster: 'https://vimeo.com/237527670',
		title: 'The Advantages and Disadvantages of Working from Home',
		date: 'December 15, 2021',
		description:
			'Interdum posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae congue mauris rhoncus aenean vel elit.',
	},
	{
		poster: 'https://vimeo.com/237527670',
		title: 'Understanding Street Photography',
		date: 'February 15, 2021',
		description:
			'Interdum posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae congue mauris rhoncus aenean vel elit.',
	},
];
