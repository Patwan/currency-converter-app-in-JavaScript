document.getElementById('Input').addEventListener('input', converter);
		
function converter(e){
	var output = document.getElementById('output');
	var error = document.getElementById('errors');
	var reg= /£?\d+(?:\.\d+)?p?\b/ ;

	var lbs = e.target.value;

	if(reg.test(lbs)){
    error.innerText = "";
		output.style.display = 'block';
		//Convert to sterling pounds
    document.getElementById('sterling').innerHTML = '£ ' + parseFloat(lbs.replace(/\./g,'').replace(/\£/g,'').slice(0,4));
	}

	else{
    error.innerText = "Invalid Input";
	}
}