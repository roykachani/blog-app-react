import { useContext } from 'react';
import { AuthContext } from '../../contex/Auth';
import { useFetch } from '../../hooks/useFetch';
import Blog from '../Blog';

const BlogData = ({ id }) => {
	const { auth } = useContext(AuthContext);
	//traer data response para comparar si es su perfil u de otro user para que pueda editar el blog
	console.log(id);
	const config = {
		headers: {
			Authorization: `bearer ${auth}`,
		},
	};

	const [data, loading] = useFetch(`blog/${id}`, config);
	if (loading) return <h3>Cargando</h3>;

	if (!loading)
		return (
			<>
				<Blog {...data} />
			</>
		);
};

export default BlogData;
