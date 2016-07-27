angular.module("sistemaRedhot").filter("name", function(){
	return function (input){
		var listaDeNomes = input.split(" ");

		//aula 9 - Javascript;
		var listaDeNomesFormatadas = listaDeNomes.map(function(nome){

			if(/(da|de)/.test(nome)) return nome;

			return nome.charAt(0).toUpperCase() + nome.substring(1).toLowerCase();
		});

		//console.log(listaDeNomesFormatadas);
		return listaDeNomesFormatadas.join(" ");

	};
});