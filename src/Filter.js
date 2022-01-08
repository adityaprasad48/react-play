import React, { useEffect, useMemo, useState } from 'react';

const KIJAN_API_URL = 'https://api.jikan.moe/v3/top/anime/1/upcoming';

const Home = () => {
	const [animes, setAnimes] = useState([]);
	const [sortedAnimes, setSortedAnimes] = useState([]);
	const [searchValue, setSearchValue] = useState('');
	const [filterByType, setFilterByType] = useState('');
	const [filterByYear, setFilterByYear] = useState('');

	useEffect(() => {
		const fetchApi = async () => {
			try {
				const resPromise = await fetch(KIJAN_API_URL);
				const data = await resPromise.json();
				setAnimes(data.top);
			} catch (error) {
				console.log(error);
			}
		};

		fetchApi();
	}, []);

	// useEffect(() => {
	// 	const searchRegex = searchValue && new RegExp(`${searchValue}`, 'gi');
	// 	const yearRegex = filterByYear && new RegExp(`${filterByYear}`, 'gi');
	// 	const result = animes.filter(
	// 		(anime) =>
	// 			(!searchRegex || searchRegex.test(anime.title)) &&
	// 			(!filterByType || anime.type === filterByType) &&
	// 			(!yearRegex || yearRegex.test(anime.start_date))
	// 	);
	// 	setSortedAnimes(result);
	// }, [searchValue, animes, filterByType, filterByYear]);

	useEffect(() => {
		const searchRegex = searchValue && new RegExp(`${searchValue}`, 'gi');
		console.log({ searchRegex });
		// const result = animes.filter(
		// 	(anime) => !searchRegex || searchRegex.test(anime.title)
		// );
		const result = animes.filter(
			(anime) =>
				anime.title.toLowerCase().includes(searchValue.toLowerCase()) &&
				(!filterByType || anime.type === filterByType)
		);
		console.log({ result });
		setSortedAnimes(result);
	}, [searchValue, animes, filterByType]);

	const clearFilter = (e) => {
		setFilterByType('');
	};

	console.log({ filterByType, filterByYear, searchValue });

	const types = ['TV', 'Movie', 'OVA'];
	const years = ['2020', '2021', '2022'];

	// Task One:- How many movies are published in 2022

	const total2022Movies = useMemo(() => {
		return animes.reduce((total, anime) => {
			if (
				(anime.start_date && anime.start_date.includes('2022')) ||
				anime.start_date === '2022'
			) {
				total = total + 1;
			}
			return total;
		}, 0);
	}, [animes]);

	console.log({ total2022Movies });

	function startPosition() {
		var a = 'Aditya';

		console.log('a', a);
	}

	startPosition();

	// console.log('a outside', a);

	// All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined , but let and const declarations remain uninitialized.

	return (
		<div>
			<h1 className="px-2 text-6xl my-4">Home</h1>

			<form className="search">
				<input
					className="border border-1 border-gray-500 p-2 outline-none rounded-md  text-xl hover:shadow-md"
					placeholder="Search Here..."
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					type="text"
				/>
				<div className="p-5 border-2 border-r-emerald-100 my-3">
					<div>
						<label>Type : </label>
						<select
							className="border-2 border-gray-400 px-2 py-1 "
							value={filterByType}
							onChange={(e) => setFilterByType(e.target.value)}
						>
							<option value="">Select Type--</option>
							{types.map((type, index) => (
								<option key={index} value={type}>
									{type}
								</option>
							))}
						</select>

						<label> year : </label>
						<select
							className="border-2 border-gray-400 px-2 py-1 "
							value={filterByYear}
							onChange={(e) => setFilterByYear(e.target.value)}
						>
							<option value="">Select Year--</option>
							{years.map((year, index) => (
								<option key={index} value={year}>
									{year}
								</option>
							))}
						</select>
					</div>
					<button
						className="px-5 py-1 bg-red-400 text-white text-2xl capitalize my-2 rounded-md"
						onClick={clearFilter}
						type="button"
					>
						clear
					</button>
				</div>
			</form>
			<h1 className="px-2 text-3xl my-4">
				Total Movies released in 2022:- {total2022Movies}
			</h1>

			<div className="w-1/2  border-2 border-red-200 rounded-md mx-auto">
				{sortedAnimes.length > 0 &&
					sortedAnimes.map((anime, index) => (
						<div key={index} className="flex mb-4 space-x-5 p-2 shadow-sm">
							<div className="h-20 w-20">
								<img
									className="rounded-sm border border-gray-100 shadow-sm h-full w-full"
									alt={`The anime titled: ${anime.title}`}
									src={anime.image_url}
								/>
							</div>
							<div>
								<h2 className="text-2xl text-left">{anime.title}</h2>
								<p className="text-1xl text-gray-500 text-left">
									Publication : {anime.start_date}
								</p>
							</div>
						</div>
					))}
			</div>
		</div>
	);
};

export default Home;
