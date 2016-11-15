export function CompareToDirective($parse) {
	//so $parse is injected correctly 
	'ngInject'
	//return an object that defines our directive
	return {
		require: 'ngModel',
		link: function(scope, elm, attrs, ngModel) {
			var mainModel = $parse(attrs.compareTo);
			var secondModel = $parse(attrs.ngModel);

			//watch for changes in the orig password field and confirm password
			scope.$watch(attrs.ngModel, function(newValue){
				ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
			});

			scope.$watch(attrs.compareTo, function(newValue){
				ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
			});
		}
	}
}