import Post from './Post';
function Posts() {
	return posts.map((p) => <Post key={p.title} post={p} />);
}

export default Posts;

let posts = [
	{
		poster:
			'https://images.unsplash.com/photo-1507325670434-aa8da9a9626c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1226&q=80',
		title: 'The Advantages and Disadvantages of Working from Home',
		date: 'January 15, 2021',
		description:
			'Interdum posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae congue mauris rhoncus aenean vel elit.',
	},
	{
		poster:
			'https://images.unsplash.com/photo-1531934788018-04c3cd417b80?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80',
		title: 'Understanding Street Photography',
		date: 'February 15, 2021',
		description:
			'Interdum posuere lorem ipsum dolor sit amet consectetur. Odio morbi quis commodo odio aenean sed adipiscing diam donec. Vitae congue mauris rhoncus aenean vel elit.',
	},
];
