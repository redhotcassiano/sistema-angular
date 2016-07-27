angular.module("sistemaRedhot").directive("uiPhone", function(){
	return {
		require: "ngModel",
		link: function(scope, element, attrs, ctrl){

			var _formatePhone = function(phone){
				phone = phone.replace(/[^0-9+]/g, "");

				if(phone.length > 2){
					phone = "(" + phone.substring(0,2) + ")" + phone.substring(2);
				}

				if(phone.length > 8){
					phone = phone.substring(0,8) + "-" + phone.substring(8, 12);
				}

				return phone;
			};

			element.bind("keyup", function(){
				ctrl.$setViewValue(_formatePhone(ctrl.$viewValue));
				ctrl.$render();
				//console.log(ctrl.$viewValue);
			});
		}

	};
});

	
