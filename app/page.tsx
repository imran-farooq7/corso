import Discover from "./components/Discover";
import Header from "./components/Header";
import Invitation from "./components/Invitation";
import Register from "./components/Register";
import Summary from "./components/Summary";
import Takeaways from "./components/Takeaways";

const Home = () => {
	return (
		<div>
			<Header />
			<Register />
			<Discover />
			<Summary />
			<Invitation />
			<Takeaways />
		</div>
	);
};
export default Home;
