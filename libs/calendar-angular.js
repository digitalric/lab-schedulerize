angular.module('schedulerize', [])
    .directive('schedulerize', function() {
        return {
            restrict: 'E',
            scope: { data: "=", settings: "=" },
            link: function(scope, element, attrs) {
                $(element).schedulerize({data: scope.data, settings: scope.settings});
                
                scope.$watch('data', function(newValue, oldValue) {
                   if (newValue != oldValue){
                       $(element).schedulerize("option", {data: newValue});
                   } 
                });
            },
            template: '<div></div>',
            replace: true
        };
    });