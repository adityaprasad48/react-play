const user = {
	name: {
		firstName: 'Adity',
	},
	address: {
		street: '92',
		area: 'Kali badi',
	},
};

// const updateUser = {
//   ...user,
//   {
//     ...user.name,
//     firstName: 'Archita'
//   }
// }

const updateUser = {
	...JSON.parse(JSON.stringify(user)),
};

// 'aditya prasad'.split(' ').map (item => item.charAt(0).toUpperCase() + item.slice(1)).join(' ')

// 3 +”3”
// 3 -“3”
// 3-“dasd”

// 'aditya'.toCapitalize()

// user.name = 'Aditya'

// function random(){
//   var x;
// x++;
// console.log(x);
// x = 21;
// }

// <div style={{display: ''}}>
//   <div>one</div>
//   <div>two</div>
// </div>

// str.charAt(0).toUpperCase() + str.slice(1);
