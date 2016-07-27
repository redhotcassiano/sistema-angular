angular.module("sistemaRedhot").controller("sistemaControl", function($scope, $http, admins, adminAPI, $location){
			$scope.titulo = "Home";
			$scope.admins = admins.data;			

			$scope.estados = [
				{uf: "AL", nome:"ALAGOAS", regiao:"NORDESTE"},
				{uf: "BA", nome:"BAHIA", regiao:"NORDESTE"},
				{uf: "GO", nome:"GOIAS", regiao:"CENTROESTE"},
				{uf: "MG", nome:"MINAS GERAIS", regiao:"SULDESTE"},
				{uf: "ES", nome:"ESPIRITO SANTO", regiao:"SULDESTE"},
				{uf: "RJ", nome:"RIO DE JANEIRO", regiao:"SULDESTE"},
				{uf: "AC", nome:"ACRE", regiao:"NORTE"},
				{uf: "AM", nome:"AMAZONAS", regiao:"NORTE"},
				{uf: "RS", nome:"RIO GRANDE DO SUL", regiao:"sul"},
				{uf: "RN", nome:"RIO GRANDE DO NORTE", regiao:"NORTE"},
				{uf: "CE", nome:"CEARA", regiao:"NORDESTE"},
				{uf: "PR", nome:"PARANA", regiao:"sul"},
				{uf: "SE", nome:"SERGIPE", regiao:"NORDESTE"},
				{uf: "PE", nome:"PERNAMBUCO", regiao:"NORDESTE"},
				{uf: "PA", nome:"PARANA", regiao:"NORTE"},
				{uf: "TO", nome:"TOCANTIS", regiao:"NORTE"},
				{uf: "SP", nome:"SÃO PAULO", regiao:"SULDESTE"},
			];


			$scope.apagarAdmin = function(admins){
				adminAPI.deleteAdmin(admins).success(function(data){				
						console.log(admins);
						//$scope.admins.push(angular.copy(admin));
						//carregarAdmins();
						$location.path("/");
				});				
			};

			$scope.isAdminSelecionado = function(admins){
				return admins.some(function(admin){
					return admin.selecionado;
				});				
			};

			$scope.odenarPor = function(campo){
				$scope.criterioDeOrdenacao = campo;
				$scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
			};

			//carregarAdmins();




	});