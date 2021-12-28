import { useCallback, useEffect, useState } from 'react';
// import './styles.css';

const defaultData = [
	{
		Name: 'kamaljit',
		Age: 29,
		Address: {
			City: 'pune',
			State: 'Maharashtra',
		},
	},
	{
		Name: 'Sachin',
		Age: 29,
		Address: {
			City: 'Kolhapur',
			State: 'Maharashtra',
		},
	},
	{
		Name: 'Pratik',
		Age: 30,
		Address: {
			City: 'Surat',
			State: 'Gujarat',
		},
	},
];
export default function FilterComp() {
	const [data, setData] = useState(defaultData);
	const [todo, setTodo] = useState({});

	// fetching data only once
	useEffect(() => {
		// fetch('https://jsonplaceholder.typicode.com/todos/1')
		// 	.then((res) => res.json())
		// 	.then((res) => {
		// 		setTodo(res);
		// 	});

		const fetchSingleTodo = async () => {
			const promise = await fetch(
				'https://jsonplaceholder.typicode.com/todos/1'
			);
			const jsonData = await promise.json();
			setTodo(jsonData);
			console.log(jsonData);
		};

		fetchSingleTodo();
	}, []);

	// const [name, setName] =

	const [ageValue, setAgeValue] = useState('');
	const [text, setText] = useState('');

	const filterData = (e) => {
		// e.preventDefault();
		console.log({ ageValue });
		const dataArr = [...data];
		let filteredData = dataArr.filter(
			(item) => item.Age > parseInt(ageValue, 0)
		);
		setData(filteredData);
		console.log({ filteredData });
	};

	const handleText = (e) => {
		setText(e.target.value);
	};

	const handleFilter = useCallback((text) => {
		if (text === '') {
			setData(defaultData);
			return;
		}
		const dataArr = [...data];
		let filteredData = dataArr.filter(
			(item) =>
				item.Name.toLowerCase().includes(text.toLowerCase()) ||
				item.Age.toString().toLowerCase().includes(text.toLowerCase()) ||
				item.Address.State.toLowerCase().includes(text.toLowerCase())
		);
		console.log({ filteredData });
		setData(filteredData);
	}, []);

	useEffect(() => {
		handleFilter(text);
	}, [text, handleFilter]);

	return (
		<div className="App">
			<h1>Hello CodeSandbox</h1>
			<h2>Start editing to see some magic happen!</h2>

			<h2>Address List</h2>

			{/* age is grater than dynamic  */}
			{/* <form onSubmit={filterData}> */}
			<input
				type="number"
				value={ageValue}
				onChange={(e) => setAgeValue(e.target.value)}
			/>
			<button type="button" onClick={filterData}>
				Filter
			</button>

			<input
				type="text"
				placeholder="Type Text"
				value={text}
				onChange={handleText}
			/>
			{/* </form> */}
			<table>
				<th>Name</th>
				<th>Age</th>
				<th>City</th>
				<th>State</th>
				{data &&
					data.length > 0 &&
					data.map((item, index) => (
						<tr key={index}>
							<td>{item.Name}</td>
							<td>{item.Age}</td>
							<td>{item.Address.City}</td>
							<td>{item.Address.State}</td>
						</tr>
					))}
			</table>
		</div>
	);
}
