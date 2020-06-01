function consultaCep(){
	$(".barra-progresso").show();
	var cep = document.getElementById("cep").value;
	var url = "http://viacep.com.br/ws/" + cep + "/json/";

	console.log(url);

	$.ajax({
		url: url,
		type: "GET",
		success: function(response){
			console.log(response);
			$("#logradouro").html(response.logradouro);
			$("#uf").html(response.uf);
			$("#localidade").html(response.localidade);
			$("#bairro").html(response.bairro);
			$("#titulo_cep").html("CEP " + response.cep);
			$(".cep").show()
			$(".barra-progresso").hide();



			//*******ALTERNATIVA 01*******
			//$("#logradouro").html(response.logradouro);


			//*******ALTERNATIVA 02********
			//document.getElementById("logradouro").innerHTML = response.logradouro;
			//document.getElementById("bairro").innerHTML = response.bairro;			
			//document.getElementById("localidade").innerHTML = response.localidade;
			//document.getElementById("ibge").innerHTML = response.ibge;
			
		}
	})
}

$(function(){
	$(".cep").hide();
	$(".barra-progresso").hide();
});

