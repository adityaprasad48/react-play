import { Link, Route, Routes } from 'react-router-dom';
import { About } from './About';
import './App.css';
import Counter from './Counter';
import Home from './Home';

function App() {
	return (
		<div className="App">
			{/* <h1>Welcome to React-Play</h1> */}
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/counter">Counter</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="counter" element={<Counter />} />
			</Routes>
		</div>
	);
}

export default App;
