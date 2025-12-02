 // const res = await fetch(url);
 //  const data = await res.json();

//Fetch a public API, log it
const apiFetch = await fetch(url);
console.log(apiFetch);
const apiData = await res.json();
console.log(apiData);


//Catch an error











// // ---------------------------------------- //


// //timeout threshold, in ms
// const timeoutExpiration = 800

// //random timeout generator
// function fetchTime() {
// 	return Math.floor(Math.random() * 1000);
// }

// //random value generator
// function newRandomNum() {
// 	return Math.random() * 12334;
// }

// // ---------------------------------------- //

// //waterfall simulated API
// async function waterfallFunction() {
// 	const waterfallContents = [];
// 	await waterfallA(waterfallContents);
// 	await waterfallB(waterfallContents);
// 	await waterfallC(waterfallContents);
// 	return waterfallContents;
// };

// //Waterfall function A
// async function waterfallA(waterfallContents) {
// 	await new Promise(resolve => setTimeout(resolve, timeoutExpiration));
// 	waterfallContents.push('A');
// 	return waterfallContents;
// };

// //Waterfall function B
// async function waterfallB(waterfallContents) {
// 	await new Promise(resolve => setTimeout(resolve, timeoutExpiration));
// 	waterfallContents.push('B');
// 	return waterfallContents;
// };

// //Waterfall function C
// async function waterfallC(waterfallContents) {	
// 	await new Promise(resolve => setTimeout(resolve, timeoutExpiration));
// 	waterfallContents.push('C');
// 	return waterfallContents;
// };

// waterfallFunction().then(console.log);






// // //function to get the data
// // function APISimulator(name, email){
// // 	return new Promise((resolve, reject) => {
// // 		if (fetchTime() < timeoutExpiration) {
// // 			resolve({
// // 				name: name,
// // 				email: email
// // 			})
// // 		} else {
// // 			reject('API Fetch Failed')
// // 		}
// // 	})
// // };

// // //promise to get to data
// // async function getAPI(name, email) {
// // 	try {
// // 		for (let i=0; i<3; i++){
// // 			console.log(`attempt #${i}`);
// // 			const resolvedData = await APISimulator(name, email);
// // 			console.log(resolvedData);

// // 		}
// // 	} catch (error) {
// // 		console.log(error)
// // 	}
// // };

// // //call to get the data

// // getAPI('John', 'JA@gmail.com');
