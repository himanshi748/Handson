// day 

let day = 3;
let dayName;

switch (day) {
  case 1:
    dayName = 'Sunday';
    break;
  case 2:
    dayName = 'Monday';
    break;
  case 3:
    dayName = 'Tuesday';
    break;
  case 4:
    dayName = 'Wednesday';
    break;
  case 5:
    dayName = 'Thursday';
    break;
  case 6:
    dayName = 'Friday';
    break;
  case 7:
    dayName = 'Saturday';
    break;
  default:
    dayName = 'Invalid day';
}

console.log(dayName); 

// fruit

let fruit = "mango";
switch(fruit){
	case'apple':
	console.log('i am apple');
	break;
	case'banana':
	console.log('i am banana');
	break;
	case'mango':
	console.log('i am mango');
	default:
	console.log('i am not a fruit');

}

// condition

let age=18;
if(age<18){
	console.log('you are not eligibile for vote');
}
if(age<5){
	console.log('you are a kid');
}
if(age>=18){
	console.log('you are eligibile for voting');
}
else{
	console.log('you cannot give vote');
}

// animal 

const pet = "dog";

if (pet === "lizard") {
  console.log("I own a lizard");
} else if (pet === "dog") {
  console.log("I own a dog");
} else if (pet === "cat") {
  console.log("I own a cat");
} else if (pet === "snake") {
  console.log("I own a snake");
} else if (pet === "parrot") {
  console.log("I own a parrot");
} else {
  console.log("I don't own a pet");
}