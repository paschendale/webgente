$(document).ready(function(){
	$("#cpf").mask("000.000.000-00");
	$("#usuario").mask("000.000.000-00", {reverse: true});
	$("#celular").mask("(00) 00000-0009");
	$("#celular").blur(function(event){
		if($(this).val().length==15){
			$("#celular").mask("(00) 00000-0000");
		}else{
			$("#celular").mask("(00) 0000-0000");
		}
	});

	//Validação de campos
$("#formulario").validate({
		rules:{
			nome: {
				maxlength:100,
				minlength:5
			},

			email: {
				required: true,
				email: true
			},

			cpf: {
				required: true,
				cpfBR:true
			} ,
			senha: {
				required: true,
				maxlength:20,
				minlength:4
			}
} 
	})	

})