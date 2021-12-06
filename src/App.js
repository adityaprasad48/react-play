import { Link, Route, Routes } from 'react-router-dom';
import { About } from './About';
import './App.css';
import ClassCompPage from './ClassCompPage';
import CommentPage from './CommentPage';
import Home from './Home';

function App() {
	return (
		<div className="App">
			{/* <h1>Welcome to React-Play</h1> */}
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/comments">Comments</Link>
				<Link to="/classbased">Class Components</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="comments" element={<CommentPage />} />
				<Route path="classbased" element={<ClassCompPage />} />
			</Routes>
		</div>
	);
}

export default App;
