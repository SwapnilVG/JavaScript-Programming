const currentDate = new Date('January 24, 2023, 12:00:00');
const sameDate = new Date();
sameDate.setTime(currentDate.getTime());
console.log(sameDate);

setInterval(()=>{
  let date  = new Date()
  let v = date.toLocaleTimeString()
    console.log(v)
},1000) 

console.log("-------------------------------setInterval()----------------------------")
/*The method repeats a give function at every given time interval and returns an interval ID that uniquely  identifies the interval
*/

// Example 1: Displaying messages with the help of setInterval()
const exSetInterval = setInterval(myRepeatedMessage, 300);
function myRepeatedMessage()
{
 console.log('Hi');
 console.log('Hi Again !');
}
/*Here, the function myRepeatedMessage() will keep on printing the messages ‘Hi’ and ‘Hi Again’ after every 
300 milliseconds.*/


// Example 2: Modify the above example by passing arguments to the function.
const exSetInterval1 = setInterval(myRepeatedMessage, 300, 'Hi', 'Hi Again');
function myRepeatedMessage(a,b)
{
 console.log(a);
 console.log(b);
}



/*Example 3: Displaying time with the help of setInterval and another helping function*/
setInterval(timer, 1000);
function timer() {
  const date = new Date();
  const newTime = date.toLocaleTimeString();
  console.log(newTime);
}


("-------------------------------clearInterval())----------------------------")
/*The clearInterval() method cancels a timed, repeating action which was previously established by a 
call to setInterval(). 
If the parameter does not identify a previously established action, this method does nothing.*/


// Example 4: How clearInterval works on setInterval()

var interval = setInterval(warning, 3000);
 function warning() {
  console.log('3 second warning');
  clearInterval(interval);
}


("-------------------------------setTimeout()----------------------------")
/*The setTimeout() method sets a timer that executes a function or specified piece of code once the timer 
expires.

function: is executed after timer expires
*/


// Example 1 : Display a set of messages using setTimeout()
setTimeout(() => {console.log("First message")}, 1000);
setTimeout(() => {console.log("Second message")}, 2000);
setTimeout(() => {console.log("Third message")}, 3000);



("-------------------------------clearTimeout()----------------------------")
// The clearTimeout() method cancels a timeout previously established by calling setTimeout()

// Example 2 : To demonstrate the functioning of clearTimeout()
const timeoutId = setTimeout(function(){
  console.log("Hi");
}, 2000);
clearTimeout(timeoutId);
console.log(`Timeout ID ${timeoutId} has been cleared`);

