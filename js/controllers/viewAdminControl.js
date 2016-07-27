angular.module("sistemaRedhot").controller("viewAdminControl", function($scope, $routeParams, adminAPI, admin){
	console.log($routeParams.id);
	    $scope.adminView = admin.data;
		
	
});