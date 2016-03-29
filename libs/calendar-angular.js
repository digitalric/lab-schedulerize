angular.module('schedulerize', [])
    .directive('schedulerize', function() {
        return {
            restrict: 'E',
            scope: { 
                data: "=", 
                settings: "=",
                onSelect: "&" 
            },
            link: function(scope, element, attrs) {
                $(element).schedulerize({Data: scope.data, Settings: scope.settings});
                
                $(element).on('schedulerizeselect', function (event, record) {
                    if (scope.onSelect && typeof scope.onSelect === "function") {
                        scope.onSelect({record: record});
                    }
                });
                
                scope.$watch('data', function(newValue, oldValue) {
                   if (newValue != oldValue){
                       $(element).schedulerize("option", {Data: newValue});
                   } 
                });
            },
            template: '<div></div>',
            replace: true
        };
    });