import Discover from "./components/Discover";
import Header from "./components/Header";
import Register from "./components/Register";
import Summary from "./components/Summary";

const Home = () => {
	return (
		<div>
			<Header />
			<Register />
			<Discover />
			<Summary />
		</div>
	);
};
export default Home;
