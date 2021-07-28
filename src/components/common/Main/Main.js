import Posts from '../../Posts/Posts';

const Main = ({ posts, loading }) => {
	//const [counter, setCounter] = useState(0);

	// const handlerCounter = (operator) => {
	// 	if (operator === '+') return setCounter(counter + 1);
	// 	setCounter(counter - 1);
	// };
	if (loading) return 'cargando';

	return (
		<>
			<h3>Ultimos Posteos...</h3>
			{/* <h4>contador: {counter}</h4>
			<button onClick={() => handlerCounter('+')}>+</button>
			<button onClick={() => handlerCounter('-')}>-</button> */}
			<Posts posts={posts} />
		</>
	);
};

export default Main;
