import PostsList from '../../PostsList/PostsList';

const Main = ({ posts }) => {
	return (
		<>
			<h3 className="text-center mt-3 mb-3">Ultimos Posteos...</h3>

			<PostsList posts={posts} />
		</>
	);
};

export default Main;
