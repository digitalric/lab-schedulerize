angular.module('app', ['schedulerize'])
 
.controller('SamplePage', function($scope, $locale) {
    $scope.data = {};
    
    $scope.onSelect = function(record) {
        console.log(record);    
    }
    
    $scope.AddData = function(){
        $scope.data = {
            Verticals: [
                {
                    Title: "SYD A",
                    Events: [
                        {
                            Id: "event1",
                            PatientName: "SMITH, John",
                            Type: "OPU",
                            Start: "2016-03-30T09:00",
                            End: "2016-03-30T09:15",
                            Content: "%(PatientName)s | %(Type)s",
                            Class: "OPU"    
                        },
                        {
                            Id: "event2",
                            Title: "do something again",
                            Start: "2016-03-30T15:00",
                            End: "2016-03-30T16:30",
                            Content: "%(Title)s",
                            Class: "BigEvent"  
                        }
                    ]
                },
                {
                    Title: "SYD B",
                    Events: [
                        {
                            Id: "event3",
                            PatientName: "SMITH, John",
                            Type: "OPU",
                            Start: "2016-03-30T09:00",
                            End: "2016-03-30T09:45",
                            Content: "%(PatientName)s | %(Type)s",
                            Class: "OPU"    
                        },
                        {
                            Id: "event4",
                            Title: "do something again",
                            Start: "2016-03-30T09:45",
                            End: "2016-03-30T10:00",
                            Content: "%(Title)s",
                            Class: "BigEvent"  
                        }
                    ]
                },
                {
                    Title: "SYD C",
                    Events: [
                        {
                            Id: "event5",
                            Title: "do something 3",
                            Start: "2016-03-30T10:00",
                            End: "2016-03-30T11:00",
                            Content: "%(Title)s"      
                        }
                    ]
                },
                {
                    Title: "SYD D",
                    Events: [
                        {
                            Id: "event6",
                            Title: "do something 4",
                            Start: "2016-03-30T10:30",
                            End: "2016-03-30T10:45",
                            Content: "%(Title)s",
                            Class: "blue"      
                        },
                        {
                            Id: "event7",
                            Title: "do something 4a",
                            Start: "2016-03-30T10:45",
                            End: "2016-03-30T11:00",
                            Content: "%(Title)s",
                            Class: "blue"      
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
