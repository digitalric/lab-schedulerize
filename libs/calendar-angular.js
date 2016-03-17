angular.module('schedulerize', [])
    .directive('schedulerize', function() {
        return {
            restrict: 'E',
            scope: { data: "=" },
            link: function(scope, element, attrs) {
                $(element).schedulerize();
                
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