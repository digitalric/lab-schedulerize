angular.module('app', ['schedulerize'])
 
.controller('SamplePage', function($scope, $locale) {
    $scope.data = {};
    
    $scope.AddData = function(){
        $scope.data = {
            verticals: [
                {
                    title: "SYD A",
                    events: [
                        {
                            id: "event1",
                            patientName: "SMITH, John",
                            type: "OPU",
                            start: "2016-03-17T09:00",
                            end: "2016-03-17T09:15",
                            content: "%(patientName)s | %(type)s",
                            class: "OPU"    
                        },
                        {
                            id: "event2",
                            title: "do something again",
                            start: "2016-03-17T15:00",
                            end: "2016-03-17T16:30",
                            content: "%(title)s",
                            class: "BigEvent"  
                        }
                    ]
                },
                {
                    title: "SYD B",
                    events: [
                        {
                            id: "event3",
                            patientName: "SMITH, John",
                            type: "OPU",
                            start: "2016-03-17T09:00",
                            end: "2016-03-17T09:45",
                            content: "%(patientName)s | %(type)s",
                            class: "OPU"    
                        },
                        {
                            id: "event4",
                            title: "do something again",
                            start: "2016-03-17T09:45",
                            end: "2016-03-17T10:00",
                            content: "%(title)s",
                            class: "BigEvent"  
                        }
                    ]
                },
                {
                    title: "SYD C",
                    events: [
                        {
                            id: "event5",
                            title: "do something 3",
                            start: "2016-03-17T10:00",
                            end: "2016-03-17T11:00",
                            content: "%(title)s"      
                        }
                    ]
                },
                {
                    title: "SYD D",
                    events: [
                        {
                            id: "event6",
                            title: "do something 4",
                            start: "2016-03-17T10:30",
                            end: "2016-03-17T10:45",
                            content: "%(title)s",
                            class: "blue"      
                        },
                        {
                            id: "event7",
                            title: "do something 4a",
                            start: "2016-03-17T10:45",
                            end: "2016-03-17T11:00",
                            content: "%(title)s",
                            class: "blue"      
                        }

                    ]
                }
            ]                
        };
    }  
});

// angular.module('components', [])
//     .directive('schedulerize', function() {
//         return {
//             restrict: 'E',
//             scope: { data: "=" },
//             link: function(scope, element, attrs) {
//                 $(element).schedulerize();
                
//                 scope.$watch('data', function(newValue, oldValue) {
//                    if (newValue != oldValue){
//                        $(element).schedulerize("option", {data: newValue});
//                    } 
//                 });
//             },
//             template: '<div></div>',
//             replace: true
//         };
//     });
