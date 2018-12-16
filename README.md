Pomodoro Clock by William Xia

Description: 
This app is a pomodoro timer powered by Javascript. For more information on what the pomodoro technique is, please visit: https://en.wikipedia.org/wiki/Pomodoro_Technique
The timer supports 4 stages (work and break together is one stage) before one pomodoro cycle is finished. Each working period is 25 mins, and each break period is 5 mins. Users can set which stage they would like to start on, and also if they would like to start on the break stage.

What I Learned:
I implemented the setInterval method to run my timer function. Every 1 second, the timer function will subtract 1 second from the total time (displayed in milliseconds). When the time runs out (goes below 0), the stage is automatically switched to break from work, or vice versa. I learned that javascript automatically executes functions when they are called with the brackets (). Even if they are part of an event such as the click event. To make functions only run when they are supposed to, I removed the brackets from the functions when I inserted them into the event listeners.