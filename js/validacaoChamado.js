function validacao(){
	if(nome.value.length <3){
		alert("Campo nome invalido.");
		nome.focus();
		return false;
	}
	if(email.value.length<6 || 
		email.value.indexOf("@")<=0 ||
		email.value.lastIndexOf(".")<=email.value.indexOf("@") ||
		(email.value.lastIndexOf(".")+1)==
		email.value.lenght){
		alert("Campo email invalido.");
		email.focus();
		return false;
	}
	if(senha.value.length < 7 ||
		senha.value.length > 20){
		alert("Sua senha precisa ter entre 6 e 20 digitos.");
		return false;
	}
	if(P1.checked==false &&
		P2.checked==false &&
		P3.checked==false){
		alert("Escolha um tipo de problema.");
		return false;
	}
	if(P4.checked==false &&
		P5.checked==false &&
		P6.checked==false){
		alert("Selecione um tecnico para atende-lo");
		return false;
	}
	if(msg.value==""){
		alert("Você não digitou nada no campo DETALHES.\nPor favor, descreva o(s) problema(s) encontrado(s) de forma detalhada");
		return false;
	}
	alert("Enviando dados... Aguarde");
	frm1.submit();
}