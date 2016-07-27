angular.module("sistemaRedhot").filter("ellipsis", function(){
	//pega o input e passa o parametro;
	return function(input, size){
		if(input.length <= size) return input; //Verifica se a string é do mesmo tamanho que o parametro para nao retorna os ...;
		var output = input.substring(0,(size || 10)) + "...";

		console.log(output);
		return output;
	};
	
});