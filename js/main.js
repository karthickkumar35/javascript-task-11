let form = document.querySelector("form");
form.addEventListener('submit',function(e){
	e.preventDefault();
	let rupee = parseInt(document.querySelector("#rupee").value);
	let tips = parseInt(document.querySelector("#tips").value);
	let tipsvalue= document.querySelector("#tipsvalue");
	let total = document.querySelector("#total");
	let result = document.querySelector("#result");
	let error = document.querySelector("#error");
	
	if((rupee==" ")||(rupee<0)||(isNaN(rupee))){
		error.innerHTML="enter the correct value of bill";
		error.style.color="red";
	}
	else if((tips==" ")||(tips<0)||(tips>100)||(isNaN(tips))){
		error.innerHTML="enter the correct value of tips";
		error.style.color="red";
	}
	else{
		let valuee=rupee*(tips/100);
		tipsvalue.value=valuee;
		total.value=valuee+rupee;
	}
	
});