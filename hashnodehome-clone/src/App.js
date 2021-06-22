import "./App.scss";
import MainFeed from "./components/main-feed/MainFeed.component";
import Navbar from "./components/left-nav/Navbar.component";
import RightFeed from "./components/right-feed/RightFeed.component";

function App() {
	return (
		<div className="app">
			<Navbar />
			<div className="scroll">
				<MainFeed />
				<RightFeed />
			</div>
		</div>
	);
}

export default App;
