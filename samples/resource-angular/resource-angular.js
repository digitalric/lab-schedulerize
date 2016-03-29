angular.module('app', ['schedulerize'])
 
.controller('SamplePage', function($scope, $locale) {
        $scope.settings = { TimeRange: {
                    Start: 7, //09 00 or 9am
                    End: 17, //18 00 or 6pm
                    Block: 30
                } 
        };
        $scope.data = {
            Verticals: [
                {
                    Title: "MON 15",
                    Events: [
                        {
                            Id: "event1",
                            Title: "Exception 1",
                            Start: "2016-03-30T09:00",
                            StartTime: "09:00",
                            End: "2016-03-30T11:00",
                            EndTime: "11:00",
                            Content: "%(Title)s <br/> %(StartTime)s - %(EndTime)s",
                            Class: "exception"    
                        },
                        {
                            Id: "event2",
                            Title: "Exception 1",
                            Start: "2016-03-30T13:00",
                            StartTime: "13:00",
                            End: "2016-03-30T16:30",
                            EndTime: "16:30",
                            Content: "%(Title)s <br/> %(StartTime)s - %(EndTime)s",
                            Class: "exception"    

                        }
                    ]
                },
                {
                    Title: "TUE 16",
                    Events: [
                        {
                            Id: "event3",
                            Title: "Availability 1",
                            Start: "2016-03-30T09:00",
                            StartTime: "09:00",
                            End: "2016-03-30T11:00",
                            EndTime: "11:00",
                            Content: "%(Title)s <br/> %(StartTime)s - %(EndTime)s",
                            Class: "availability"    
                        },
                        {
                            Id: "event4",
                            Title: "Availability 1",
                            Start: "2016-03-30T13:00",
                            StartTime: "13:00",
                            End: "2016-03-30T14:00",
                            EndTime: "14:00",
                            Content: "%(Title)s <br/> %(StartTime)s - %(EndTime)s",
                            Class: "availability"    

                        }
                    ]
                },
                {
                    Title: "WED 17",
                    Events: [
                        {
                            Id: "event5",
                            Title: "Availability 1",
                            Start: "2016-03-30T13:00",
                            StartTime: "13:00",
                            End: "2016-03-30T14:00",
                            EndTime: "14:00",
                            Content: "%(Title)s <br/> %(StartTime)s - %(EndTime)s",
                            Class: "availability"    

                        }
                    ]
                },
                {
                    Title: "THU 18",
                    Events: [
                        {
                            Id: "event6",
                            Title: "Availability 1",
                            Start: "2016-03-30T13:00",
                            StartTime: "13:00",
                            End: "2016-03-30T14:00",
                            EndTime: "14:00",
                            Content: "%(Title)s <br/> %(StartTime)s - %(EndTime)s",
                            Class: "availability"    

                        }
                    ]
                },
                {
                    Title: "FRI 19",
                    Events: [
                        {
                            Id: "event7",
                            Title: "Exception 1",
                            Start: "2016-03-30T13:00",
                            StartTime: "13:00",
                            End: "2016-03-30T14:00",
                            EndTime: "14:00",
                            Content: "%(Title)s <br/> %(StartTime)s - %(EndTime)s",
                            Class: "exception"    

                        }
                    ]
                },
                {
                    Title: "SAT 20"
                },
                {
                    Title: "SUN 21"
                }
                
            ]                
        };
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
