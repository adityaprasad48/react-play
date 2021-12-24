import React from 'react';

const SetWeakSet = () => {
	// Set:--
	// A Set is a special type collection – “set of values” (without keys), where each value may occur only once.

	// add(), has(), delete(), for of, entries(), keys(), values()

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



	return <div></div>;
};

export default SetWeakSet;
