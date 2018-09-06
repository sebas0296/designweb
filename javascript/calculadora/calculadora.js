function suma(){
	var numero1 = parseFloat(document.getElementById('numero1').value);//pasefloat transforma lo que tiene adentro del parentesisen decimales
	var numero2 = parseFloat(document.getElementById('numero2').value);
	var resultado = numero1 + numero2;

	document.getElementById('resultado').value = resultado;
	//queremos ingresar al id con el nombre resultado y con value vamos a acceder a su valor
}