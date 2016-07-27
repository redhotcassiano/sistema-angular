angular.module("sistemaRedhot").controller("addAdminCtrl", function($scope, $http, adminAPI, $location){
						
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

			$scope.adicinarContato = function(admin){
				adminAPI.saveAdmin(admin).success(function(data){
						delete $scope.admin;
						$scope.formAdmin.$setPristine();
						//$scope.admins.push(angular.copy(admin));
						//carregarAdmins();
						$location.path("/admin");
				});
				
			};

	});