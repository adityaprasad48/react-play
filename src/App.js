import { Link, Route, Routes } from 'react-router-dom';
import { About } from './About';
import './App.css';
import Home from './Home';
import NewTag from './NewTag';

function App() {
	// padStart and padEnd
	//* The padStart() method pads the current string with another string (multiple times, if needed) until the resulting string reaches the given length.

	const str1 = '5';
	console.log(str1.padStart(2, '0'));

	let log = console.log;

	// Genrators
	// The Generator object is returned by a generator function and it conforms to both the iterable protocol and the iterator protocol.

	//* The next() method returns an object with two properties done and value. You can also provide a parameter to the next method to send a value to the generator.

	function* gen() {
		yield 1;
		yield 2;
		yield new Date();
	}

	const g = gen(); // "Generator { }"
	log(g.next()); // "Object { value: 1, done: false }"
	log(g.next()); // "Object { value: 2, done: false }"
	log(g.next()); // "Object { value: 3, done: false }"
	log(g.next());

	// next() with a list
	function* getPage(len, myList) {
		let _len = 0;

		while (true) {
			let _myList = myList.slice(0, _len);
			_len = _len + 3;
			yield _myList;
		}
	}

	const list = [1, 2, 3, 4, 5, 6, 7, 8];
	var page = getPage(3, list);

	let aLen = 0;
	while (aLen < 3) {
		log(`pageGenrator ${aLen}`, page.next());
		aLen = aLen + 1;
	}

	// log('ll0', page.next());
	// log('ll1', page.next());
	// log('ll2', page.next());
	// log('ll2', page.next());

	// Sending Values to genrators
	function* sendGen() {
		while (true) {
			let value = yield null;
			console.log(value);
		}
	}

	const sg = sendGen();
	g.next(1);
	// "{ value: null, done: false }"
	g.next(2);
	// 2

	//* The return() method returns the given value and finishes the generator.

	// function* gen() {
	// 	yield 1;
	// 	yield 2;
	// 	yield 3;
	// }

	// const g = gen();

	// g.next(); // { value: 1, done: false }
	// g.return('foo'); // { value: "foo", done: true }
	// g.next();

	//* The throw() method resumes the execution of a generator by throwing an error into it and returns an object with two properties done and value.

	function* errorGen() {
		while (true) {
			try {
				yield 42;
			} catch (e) {
				console.log('Error caught!');
			}
		}
	}

	const egen = errorGen();
	log('egen', egen.next());
	// { value: 42, done: false }
	log('egen', egen.throw(new Error('Something went wrong')));
	// "Error caught!"
	// { value: 42, done: false }

	// Symbols

	let sym3 = Symbol('foo');
	// let sym4 = Symbol.key('foo');

	let nameSym = Symbol.for('name');
	let ageSym = Symbol.for('age');

	//* The Symbol.keyFor(sym) method retrieves a shared symbol key from the global symbol registry for the given symbol.
	let ageSymFor = Symbol.keyFor(ageSym);

	console.log({ nameSym, ageSym, ageSymFor });

	console.log('sym3', sym3.description);
	console.log('sym4', sym3.description);
	console.log('nameSym', nameSym.description);

	console.log(Symbol.for('bar') === Symbol.for('bar'));
	// expected output: true

	console.log(Symbol('bar') === Symbol('bar'));
	// expected output: false

	// Symbol.iterator method

	const iterable1 = {};

	iterable1[Symbol.iterator] = function* () {
		yield 1;
		yield 2;
		yield 3;
	};

	console.log('iterator', [...iterable1]);
	// expected output: Array [1, 2, 3]

	// TypeError:-
	// 1. when you are trying todo thing which related to type like calling string variable as it is method.

	// tagged functions
	function myTag(strings, personExp, ageExp) {
		let str0 = strings[0]; // "That "
		let str1 = strings[1]; // " is a "
		let str2 = strings[2]; // "."

		let ageStr;
		if (ageExp > 99) {
			ageStr = 'centenarian';
		} else {
			ageStr = 'youngster';
		}

		// We can even return a string built using a template literal
		return `${str0}${personExp}${str1}${ageStr}${str2}`;
	}

	let output = myTag`That ${'Aditya'} is a ${21}.`;

	console.log(output);

	// let t1Closure = template`${0}${1}${0}!`;

	// let t2Closure = template`${0} ${'foo'}!`;

	// let t3Closure = template`I'm ${'name'}. I'm almost ${'age'} years old.`;

	// String.raw
	let str = String.raw`Hi\n${2 + 3}!`;
	let exp = `Hi\n${2 + 3}!`;

	let docPath = `C:\Users\nadmin\Desktop\pre_joining`;
	let docPathRqw = String.raw`C:\Users\nadmin\Desktop\pre_joining`;

	console.log('str', str);
	console.log('exp', exp);

	console.log('docPath', docPath);
	console.log('docPathRqw', docPathRqw);

	// Promise

	const sleep = async () => {
		const promise = await new Promise((res, rej) => {
			setTimeout(() => {
				res('Sleeping.....');
			}, 1000);
		});
		return promise;
	};

	// (async () => {
	// 	await sleep();
	// })();

	console.log('sleep', sleep());

	console.log(
		'sleep',
		sleep().then((data) => console.log('data', data))
	);

	// Freezing
	//* The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. freeze() returns the same object that was passed in.
	const obj = {
		prop: 42,
	};

	Object.freeze(obj);

	// obj.prop = 33;
	// Throws an error in strict mode

	console.log(obj.prop);
	// expected output: 42

	// defineProperty method
	// Object.defineProperty(obj, 'micromax', { value: 17 });

	console.log('isObjFrozen', Object.isFrozen(obj));

	// Set, Map, Proxy,

	// Map is a collection of keyed data items, just like an Object. But the main difference is that Map allows keys of any type.

	// Methods and properties are:

	// new Map() – creates the map.
	// map.set(key, value) – stores the value by the key.
	// map.get(key) – returns the value by the key, undefined if key doesn’t exist in map.
	// map.has(key) – returns true if the key exists, false otherwise.
	// map.delete(key) – removes the value by the key.
	// map.clear() – removes everything from the map.
	// map.size – returns the current element count.

	let listMap = new Map();
	listMap.set('1', 'Counter-1');
	listMap.set(22, 'Counter-233');
	listMap.set('count', 200);

	console.log('listMap', listMap);
	console.log('1 Value from listMap', listMap.has('1') && listMap.get('1'));

	listMap.delete(22);

	console.log('listMap', listMap);
	console.log('listMap size', listMap.size);

	[...listMap].map((item) => console.log(item));

	listMap.set('1', 'str1').set(1, 'num1').set(true, 'bool1');

	console.log('listMap', listMap);

	let lookMap = new Map([
		['1', 'str1'],
		[1, 'num1'],
		[true, 'bool1'],
	]);

	console.log('lookMap', lookMap);

	console.log('lookMap.entries', lookMap.entries());
	console.log('lookMap.keys', lookMap.keys());
	console.log('lookMap.values', lookMap.values());

	// map to object
	let fruitMap = new Map();
	fruitMap.set('banana', 1);
	fruitMap.set('orange', 2);
	fruitMap.set('meat', 4);

	let fruitObj = Object.fromEntries(fruitMap.entries());

	console.log('fruitObj', fruitObj);

	// Set:--
	// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

	let set = new Set();

	let john = { name: 'John' };
	let pete = { name: 'Pete' };
	let mary = { name: 'Mary' };

	// visits, some users come multiple times
	set.add(john);
	set.add(pete);
	set.add(mary);
	set.add(john);
	set.add(mary);
	set.add('Aditya');

	console.log('set', set);

	for (let value of set) console.log(value);

	// the same with forEach:
	// set.forEach((value, valueAgain, set) => {
	// 	alert(value);
	// });

	console.log('set.entries', [...set.entries()]);
	console.log('set.keys', [...set.keys()]);
	console.log('set.values', [...set.values()]);

	// Flataning Arrary

	const arr2 = [1, 2, [3, 4, [5, 6]]];
	arr2.flat();
	// [1, 2, 3, 4, [5, 6]]

	const arr3 = [1, 2, [3, 4, [5, 6]]];
	arr3.flat(2);
	// [1, 2, 3, 4, 5, 6]

	const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
	arr4.flat(Infinity);

	const arr5 = [1, 2, , 4, 5];
	arr5.flat();
	// [1, 2, 4, 5]

	// Object.assign()
	// The Object.assign() method copies all enumerable own properties from one or more source objects to a target object. It returns the modified target object

	const returnedTarget = Object.assign({ a: 1 }, { name: 'adi' });

	// cloning an object
	const originalObj = { a: 1 };
	const copy = Object.assign({}, originalObj);
	console.log(copy); // { a: 1 }

	// Merging Objects
	const o1 = { a: 1 };
	const o2 = { b: 2 };
	const o3 = { c: 3 };

	const objMerege = Object.assign(o1, o2, o3);

	// Merging with same properties
	const o4 = {
		a: 1,
		b: 1,
		c: 1,
		d: {
			name: {
				first_name: 'adi',
				last_name: 'prasad',
			},
		},
	};
	const o5 = { b: 2, c: 2 };
	const o6 = { c: 3 };

	// Proxy

	// A Proxy object wraps another object and intercepts operations, like reading/writing properties and others, optionally handling them on its own, or transparently allowing the object to handle them.

	// target – is an object to wrap, can be anything, including functions.
	// handler – proxy configuration: an object with “traps”, methods that intercept operations. – e.g. get trap for reading a property of target, set trap for writing a property into target, and so on.

	let target = {};
	let proxyExp = new Proxy(target, {});

	proxyExp.test = 5; // writing to proxy

	console.log({ proxyExp });

	// Proxy is a special “exotic object”. It doesn’t have own properties. With an empty handler it transparently forwards operations to target.

	// To activate more capabilities, let’s add traps.

	// For most operations on objects, there’s a so-called “internal method” in the JavaScript specification that describes how it works at the lowest level. For instance [[Get]], the internal method to read a property, [[Set]], the internal method to write a property, and so on. These methods are only used in the specification, we can’t call them directly by nam

	let numbers = [0, 1, 2];

	let numbersProxy = new Proxy(numbers, {
		get(target, prop) {
			if (prop in target) {
				return target[prop];
			} else {
				return 0; // default value
			}
		},
		// (*)
		set(target, prop, val) {
			// to intercept property writing
			if (typeof val == 'number') {
				target[prop] = val;
				return true;
			} else {
				return false;
			}
		},
	});

	console.log('numbersProxy[1]', numbersProxy[2]);
	console.log('numbersProxy[123]', numbersProxy[123]);

	console.log('numbersProxy.push(44)', numbersProxy.push(44));
	console.log('numbersProxy.push(22)', numbersProxy.push(22));

	// Object['entries'][1,2,3]

	console.log(`Object['entries']([1, 2, 3])`, Object['keys']([1, 3, 4]));

	// !Slice and Splice
	// The slice method returns a new array with a copied slice from the original array. The first optional argument is the beginning index and the second optional argument is the ending index (non-inclusive).

	const myArr = ['1', '2', '3', '4'];

	let myArrCopy = myArr.slice();

	console.log(myArrCopy);

	// with one arguement
	myArrCopy = myArr.slice(2);

	// with neagtive arguement
	myArrCopy = myArr.slice(-1);

	// with two arguement
	myArrCopy = myArr.slice(0, 3);

	// The splice method changes the content of the array in place and can be used to add or remove items from the array.

	// When only one argument is provided, all the items after the provided starting index are removed from the array:

	let myArrSp = ['1', '2', '3', '4'];
	console.log('myArrSp.splice(2)', myArrSp.splice(2));

	// The second optional argument is for the number of items to remove:
	myArrSp = ['1', '2', '3', '4'];
	console.log('myArrSp.splice(2, 1)', myArrSp.splice(2, 1));

	// The second optional argument is for the number of items to remove:
	myArrSp = ['1', '2', '3', '4'];
	console.log(`myArrSp.splice(2, 1, '4', '5')`, myArrSp.splice(2, 1, '4', '5'));

	// You can specify 0 as the number of items to remove to simply add new items at the specified location in the array:
	myArrSp = ['1', '2', '3', '4'];
	console.log(
		`myArrSp.splice(2, 0, '33', '44')`,
		myArrSp.splice(2, 1, '33', '44')
	);

	// !Empty Reduce

	// let reduceVal = [1, 3, 4, 3].reduce((total, item) => total + item);
	// let reduceVal = ['a', 'b'].reduce((total, item) => total + item);
	let reduceVal = ['a', 'b'].reduce((total, item) => total[item]);
	console.log('reduceVal', reduceVal);

	// Promise.all
	const p1 = Promise.resolve('P1 Resolved');
	const p2 = Promise.resolve('P2 Resolved');

	const p3 = Promise.reject('P3 Reject');
	const p4 = Promise.resolve('P4 Resolved');

	// p1 & p2
	Promise.all([p1, p2]).then((res) => console.log('res p1 & p2', res)); // returns responce array

	// p3 & p4
	Promise.all([p3, p4]).then((res) => console.log('res p3 & p4', res)); // does not return if any of promise rejects

	// WeakSet
	// WeakSet objects are collections of objects.

	// WeakSets are collections of objects only. They cannot contain arbitrary values of any type, as Sets can.
	// The WeakSet is weak, meaning references to objects in a WeakSet are held weakly. If no other references to an object stored in the WeakSet exist, those objects can be garbage collected.

	const weakSet = new WeakSet(); // after task complete they garbage collected.

	// add(), delete(), has()

	weakSet.add({ a: 1 });
	let a = { a: 1 };
	let b = { b: 1 };
	weakSet.add(a);
	weakSet.add(b);

	console.log('weakSet.has(a)', weakSet.has(a));
	console.log('weakSet.has(b)', weakSet.has(b));

	console.log('weakSet.has(c)', weakSet.has({}));

	const weakObj = weakSet;

	console.log('weakSet', weakSet);
	console.log('weakObj', weakObj);

	// WeakMap
	// The WeakMap object is a collection of key/value pairs in which the keys are weakly referenced. The keys must be objects and the values can be arbitrary values.

	// Keys of WeakMaps are of the type Object only. Primitive data types as keys are not allowed (e.g. a Symbol can't be a WeakMap key)

	// Because the references are weak, WeakMap keys are not enumerable.
	// There is no method to obtain a list of the keys. If there was, the list would depend on the state of garbage collection, introducing non-determinism.

	// delete(), has(), get(), set()

	const wm1 = new WeakMap(),
		w1 = {},
		w2 = function () {},
		w3 = window;

	wm1.set(w1, 37);
	wm1.set(w2, 'azerty');
	wm1.set(w3, 'azerty');

	console.log('wm1.get(w1)', wm1.get(w1));
	console.log('wm1.get(w2)', wm1.get(w2));
	console.log('wm1.get(w3)', wm1.get(w3));

	console.log('wm1.has(w1)', wm1.has(w1));

	console.log('wm1.delete(w2)', wm1.delete(w2));

	console.log('wm1.has(w2)', wm1.has(w2));

	console.log('weakMap', wm1);

	return (
		<div className="App">
			{/* <h1>Welcome to React-Play</h1> */}
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/new_tag">NewTag</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="about" element={<About />} />
				<Route path="new_tag" element={<NewTag />} />
			</Routes>
		</div>
	);
}

export default App;
