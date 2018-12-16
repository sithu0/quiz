setTimeout(function check(){
	
	var question1=document.quiz.question1.value;
	var question2=document.quiz.question2.value;
	var question3=document.quiz.question3.value;
	var correct=0;
	
	if(question1=="display"){
		correct++;
	}
	if(question2=="red"){
		correct++;
	}
	if(question3=="bind"){
		correct++;
	}

	 
	document.getElementById("after_submit").style.visibility="visible";
	
	alert("You got "+correct+" marks ");
	
},60000);