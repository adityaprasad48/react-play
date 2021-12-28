import { Link, Route, Routes } from 'react-router-dom';
import { About } from './About';
import MiscLen from './MiscLen';
import Header from './Header';
import Home from './Home';

function App() {
	const navigation = [
		{ name: 'Home', href: '/', current: true },
		{ name: 'About', href: '/about', current: false },
		{ name: 'Filter', href: '/filter', current: false },
	];
	return (
		<div className="App">
			<Header navigation={navigation} />
			{/* <nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/filter">Filter</Link>
			</nav> */}
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="filter" element={<MiscLen />} />
			</Routes>
		</div>
	);
}

export default App;
