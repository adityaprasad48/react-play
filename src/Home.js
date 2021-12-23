/* eslint-disable no-eval */
import React, { useEffect, useRef, useState } from 'react';

const Home = () => {
	const [accepted, setAccepted] = useState(false);
	const [user, setUser] = useState(null);
	const [timer, setTimer] = useState(0);
	const timerRef = useRef('');

	// Getting User Val from session and setting userState
	useEffect(() => {
		let sessionStorage = window.sessionStorage;
		const userVal =
			sessionStorage.getItem('user') &&
			JSON.parse(sessionStorage.getItem('user'));

		if (userVal) {
			setUser(userVal);
		}
	}, []);

	const userLoggedIn = () => {
		const user = {
			name: 'Aditya',
			was_in: new Date(),
		};
		setUser(user);
		sessionStorage.setItem('user', JSON.stringify(user));
	};

	const userLogOut = () => {
		setUser(null);
		sessionStorage.removeItem('user');
	};

	// Getting cookies details and setting
	useEffect(() => {
		if (sessionStorage.getItem('cookies')) {
			let cookiesValue =
				sessionStorage.getItem('cookies') &&
				JSON.parse(sessionStorage.getItem('cookies'));
			setAccepted(cookiesValue);
		}
	}, []);

	function acceptPolicy() {
		sessionStorage.setItem('cookies', true);
		setAccepted(true);
	}

	const authHandler = () => {
		if (!user) {
			userLoggedIn();
			clearInterval(timerRef.current);
			timerRef.current = setInterval(() => {
				setTimer((timer) => timer + 1);
			}, 1000);
		} else {
			userLogOut();
			clearInterval(timerRef.current);
			setTimer(0);
		}
	};

	console.log('sessionStorage', sessionStorage);

	// Auto user Logout after 20 sec
	useEffect(() => {
		if (timer > 10) {
			clearInterval(timerRef.current);
			setUser(null);
			setTimer(0);
			userLogOut();
		}
	}, [timer, user]);

	// When componentWillUnmount
	useEffect(
		() => () => {
			clearInterval(timerRef.current);
			alert('component Unmounted');
		},
		[]
	);

	let count = 0;
	const nums = [0, 1, 2, 3];

	nums.forEach((item) => {
		// 0 skips
		if (item) {
			console.log({ count });
			count += 1;
		}
	});

	console.log({ count, nums });

	// what you need to add in person object to get output like this // [...person] //['Aditya Prasad', 21]
	let person = {
		name: 'Aditya Prasad',
		age: 21,
	};

	// You need to add Symbol.iterator function

	person = {
		name: 'Aditya Prasad',
		age: 21,
		*[Symbol.iterator]() {
			yield* Object.values(this);
		},
	};

	// person[Symbol.iterator] = function* () {
	// 	yield* Object.values(this);
	// };

	console.log('personValues', [...person]);

	// instance game
	class Calc {
		constructor() {
			this.count = 0;
		}
		increase() {
			this.count++;
		}
	}

	// one instance
	const clac = new Calc();

	// second instance
	new Calc().increase();

	console.log('clac.count', clac.count);

	// private fields
	class Counter {
		#count = 0;
		increase() {
			this.#count++;
		}
	}

	// one instance
	const counter = new Counter();
	counter.increase();

	// cannot access private field
	// console.log({ count: counter.#count });

	// !eval()
	console.log(eval(10 + 10));
	console.log(eval(10 * 20 * 10 + 1));

	return (
		<div>
			<h1>Home</h1>
			<button type="button" onClick={acceptPolicy}>
				Accept Cookies
			</button>

			{accepted ? 'You have Accepted Cookies' : 'Please Accept Cookies'}

			<button type="button" onClick={authHandler}>
				{user ? 'Logout' : 'Login'}
			</button>

			<h1>Timer : {timer}</h1>

			{user && (
				<div>
					<h1>User Info</h1>
					<p>Name: {user.name}</p>
				</div>
			)}
		</div>
	);
};

export default Home;
