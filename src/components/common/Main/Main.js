import Posts from '../../Posts/Posts';

const Main = ({ posts, loading }) => {
	if (loading) return 'cargando';

	return (
		<>
			<h3 className="text-center mt-3 mb-3">Ultimos Posteos...</h3>

			<Posts posts={posts} />
		</>
	);
};

export default Main;
