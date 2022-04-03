// print 1 to 10
// for(let i=1;i<11;i++){
// 	console.log(i);
// }

// print table;

// for(let i=1;i<11;i++){
// 	result = 2 * i;
// 	console.log(result);
// }

// find no. of digit
// let N = 1234;
// count=0;
// 	let sum=Math.abs(N);
// 	while(sum>0)
// 	{
// 	  sum=(sum-sum%10)/10;
// 	  count++;
// 	}
// 		console.log(count);


let n = "Meerkats family";
let count = 0;
for(let i=0;i<n.length;i++){
	count = count + n[i]
	console.log(count);
}		