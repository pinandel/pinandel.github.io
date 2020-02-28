var temp = document.querySelector('.time');
 	var button = document.querySelector("button");
 	var words = document.querySelector(".words");
 	var timerDiv = document.querySelector(".time");
 	var scoreDiv = document.querySelector(".score");
 	var points
 	var spans;
	var seconds = 10;
  

 	function countdown() {
 		var timer = setInterval(function(){
 			button.disabled = true;
    		seconds--;
    		temp.innerHTML = seconds;
    		if (seconds < 0) {
    			scoreDiv.innerHTML = "-";
    			words.innerHTML = "";
    			button.disabled = false;
    			clearInterval(timer);
    			timerDiv.innerHTML = "tidak ada";
				button.disabled = true;
				words.innerHTML = "tekan f5 untuk memulai kembali"
    		}
 		}, 1000);
  	}

  	function random() {
  		words.innerHTML = "";
  		var random = Math.floor(Math.random() * 3);
  		var wordArray = list[random].split("");
  		for (var i = 0; i < wordArray.length; i++) {
  			var span = document.createElement("span");
  			span.classList.add("span");
  			span.innerHTML = wordArray[i];
  			words.appendChild(span);
  		}
  		spans = document.querySelectorAll(".span");
  	}


  	const list = ['HECHALUTZLEMANAVODAH','AVODAHLEMANHECHALUTZ','YZUMGALIGALIYZUM'];

  	button.addEventListener("click", function(ketik){
  		countdown();
  		random();
  		button.disabled = true;	
  	});


  	function typing(ketik) {
		typed = String.fromCharCode(ketik.which);
		for (var i = 0; i < spans.length; i++) {
			if (spans[i].innerHTML === typed) {
				if (spans[i].classList.contains("bg")) {
					continue;
				} else if (spans[i].classList.contains("bg") === false && spans[i-1] === undefined || spans[i-1].classList.contains("bg") !== false ) {
					spans[i].classList.add("bg");
					break;
				}
			}
		}
		var checker = 0;
		for (var j = 0; j < spans.length; j++) {
			if (spans[j].className === "span bg") {
				checker++;
			}
			if (checker === spans.length) {
				points = "Puja puji angkoro murko";
				scoreDiv.innerHTML = points;
				document.removeEventListener("keydown", typing, false);
				alert("Hahahahaahhaha kamu telah berhasil membebaskan ku, manusia.... Perkenalkan aku adalah K E L A N A")
			}
			

		}
}

document.addEventListener("keydown", typing, false);