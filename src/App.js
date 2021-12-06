import { Link, Route, Routes } from 'react-router-dom';
import About from './About';
import './App.css';
import Home from './Home';
import Posts from './Posts';

function App() {
	return (
		<div className="App">
			{/* <h1>Welcome to React-Play</h1> */}
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/posts">Posts</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="posts" element={<Posts />} />
			</Routes>
		</div>
	);
}

export default App;
