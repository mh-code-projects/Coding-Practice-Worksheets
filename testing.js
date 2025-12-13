
let playerHealth = 100;
let playerScore = 0

function onWin(){
	console.log('You Win');
};
function onLose(){
	console.log('You Lose');
};

function takeDamage(){
	playerHealth = playerHealth - 20;
	dieCheckFunction();
	};

takeDamage();
console.log(playerHealth);

function dieCheckFunction(){
	if (playerHealth <= 0){
		onLose();
	}
};



----

function doubler(callback) {
	callback();
	callback();
};


doubler(() => console.log('hi'));


function callMultipleTimes(times, callback) {
	for (let i=1;i<times + 1; i++){
		callback(i);
	}
}

callMultipleTimes(5, time => console.log(`This was time #${time}`));

---


//multiplcatpn function
function multiply(num1, num2){
	return num1 * num2;
};

//callback multiplier
const callbackMultiplier = (numberOfTimes) => {
	for (let i=0; i < numberOfTimes; i++){
		multiply(i);
	}
}

//call the function
callbackMultiplier(10);
