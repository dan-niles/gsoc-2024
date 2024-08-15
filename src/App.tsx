import { Article } from "./components/Article";
import "./App.css";
import ReactGA from "react-ga4";

function App() {
	ReactGA.initialize("G-NPYJB27K6C");
	return (
		<>
			<Article />
		</>
	);
}

export default App;
