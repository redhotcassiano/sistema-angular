angular.module("sistemaRedhot").factory("adminAPI", function( $http){
	var _getAdmins = function(){

		return $http.get("http://localhost/sistema_angular/ci/index.php/welcome/get_data");
	};

	var _getAdmin = function(id){

		return $http.get("http://localhost/sistema_angular/ci/index.php/welcome/view_data/"+id);
	};

	var _saveAdmin = function(admin){

		return $http.post("http://localhost/sistema_angular/ci/index.php/welcome/savedata", admin);
	};

	var _deleteAdmin = function(admin){

		return $http.post("http://localhost/sistema_angular/ci/index.php/welcome/delete_data/"+admin);
	}


	return {
		getAdmins : _getAdmins,
		saveAdmin : _saveAdmin,
		deleteAdmin : _deleteAdmin,
		getAdmin: _getAdmin
	}; 
});