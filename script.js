const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

var date = new Date();
console.log(date);
let hr = date.getHours();
let min = date.getMinutes();
let sec = date.getSeconds();
console.log("Hour: " + hr + " Minute: " + min + " Second: " + sec );

let hrPosition = (hr*360/12)+(min*(360/60)/12);
let minPosition = (min*360/60)+(sec*(360/60)/60);
let secPosition = sec*360/60;

function runTheClock() {
    //degree to move every second 
    hrPosition = hrPosition + (30/3600);
    minPosition = minPosition + (1/60)*6;
    secPosition = secPosition + (360/60);//360deg / 60sec

    HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
    MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
    SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}

var inteval = setInterval(runTheClock, 1000);


// grab the current value of sec position 
// then I add the number of degrees necessary to display one additional second. 
// the clock face has 360 degrees then we divide 360 degrees by 60 seconds 
// and if you do that math on a calculator you'll find out that equals six degrees. 
// Next we'll take min position. 

// grab the existing value of min position and the minute arm moves the distance of one second 
// over 60 seconds, so we're looking for one sixtieth of the degrees of the second hand.

// grab the existing hour position and this arm moves the distance of one hour so 360 over 12, 
// which is 30 over 3,600 seconds, that's how many seconds are in an hour.
// So we end up with (30/3600)