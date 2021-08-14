import BlogData from '../../components/BlogData';

const Blog = ({ match }) => {
	const id = match.params.id;
	// console.log(id);
	return (
		<>
			<BlogData id={id} />
		</>
	);
};

export default Blog;
