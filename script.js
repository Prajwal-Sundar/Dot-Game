score = 0; // score
over = false; // game status
time = [];

game = document.getElementById("game"); // gamezone div
dot = document.getElementById("dot"); // dot image
DX = dot.offsetLeft;
DY = dot.offsetTop;

// Onclick event listener for game
game.addEventListener('click', function() {
	if (over)
	{
		alert("Game is over already.");
		return;
	}
	
	var res = dot.contains(event.target);
	if (!res) // wrong location
	{
		alert("Wrong location clicked. Game Over.");
		showTime();
		over = true;
	}
	
	else
	{
		document.getElementById("score").innerHTML = ++score;
		time.push(event.timeStamp);
		setup();
		random();
	}
});

function setup()
{	
	dot.style.position = 'relative';
	dot.style.left = DX + "px";
	dot.style.top = DY + "px";
}

function down(n)
{
	let x = DY - game.offsetTop;
	x += n;
	dot.style.top = x + "px";
}

function right(n)
{
	let y = DX - game.offsetLeft;
	y += n;
	dot.style.left = y + "px";
}

function random()
{
	let xL = game.offsetWidth * 0.9;
	let yL = game.offsetHeight * 0.9;
	
	let n1 = Math.floor((Math.random() * xL));
	let n2 = Math.floor((Math.random() * yL));
	
	right(n1);
	down(n2);
}

function showTime()
{
	let n = time.length;
	let tot = time[n-1] - time[0];
	tot /= 1000;
	alert("Average Time Between 2 Clicks = " + (tot/n) + " seconds.");
}

setup();
random();