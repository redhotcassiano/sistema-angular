angular.module("sistemaRedhot").config(function($routeProvider){
	//Rota da tabela Usuários;
	$routeProvider.when("/admin",{
		templateUrl: "views/admin.html",
		controller: "sistemaControl",
		resolve: {
			admins : function(adminAPI){
				return adminAPI.getAdmins();
			}
		}
	});

	//Rota dos Detalhes do Usúario;
	$routeProvider.when("/view_admin/:id",{
		templateUrl: "views/view_admin.html",
		controller: "viewAdminControl",
		resolve: {
			admin : function(adminAPI, $route){				
				return adminAPI.getAdmin($route.current.params.id);
			}
		}
		
	});

	//Rota Alterar Usúario;
	$routeProvider.when("/update_admin/:id",{
		templateUrl: "views/update_admin.html",
		controller: "viewAdminControl",
		resolve: {
			admin : function(adminAPI, $route){				
				return adminAPI.getAdmin($route.current.params.id);
			}
		}
		
	});

	//Rota do Formulario Adicionar Usuários;
	$routeProvider.when("/novo_admin",{
		templateUrl: "views/novo_admin.html",
		controller: "addAdminCtrl"
	});

	$routeProvider.otherwise({redirectTo: "/admin"});
});