angular.module('app', ['schedulerize'])
 
.controller('SamplePage', function($scope, $locale) {
        $scope.settings = { timeRange: {
                    start: 7, //09 00 or 9am
                    end: 17, //18 00 or 6pm
                    block: 30
                } 
        };
        $scope.data = {
            verticals: [
                {
                    title: "MON 15",
                    events: [
                        {
                            id: "event1",
                            title: "Exception 1",
                            start: "2016-03-17T09:00",
                            startTime: "09:00",
                            end: "2016-03-17T11:00",
                            endTime: "11:00",
                            content: "%(title)s <br/> %(startTime)s - %(endTime)s",
                            class: "exception"    
                        },
                        {
                            id: "event2",
                            title: "Exception 1",
                            start: "2016-03-17T13:00",
                            startTime: "13:00",
                            end: "2016-03-17T16:30",
                            endTime: "16:30",
                            content: "%(title)s <br/> %(startTime)s - %(endTime)s",
                            class: "exception"    

                        }
                    ]
                },
                {
                    title: "TUE 16",
                    events: [
                        {
                            id: "event3",
                            title: "Availability 1",
                            start: "2016-03-17T09:00",
                            startTime: "09:00",
                            end: "2016-03-17T11:00",
                            endTime: "11:00",
                            content: "%(title)s <br/> %(startTime)s - %(endTime)s",
                            class: "availability"    
                        },
                        {
                            id: "event4",
                            title: "Availability 1",
                            start: "2016-03-17T13:00",
                            startTime: "13:00",
                            end: "2016-03-17T14:00",
                            endTime: "14:00",
                            content: "%(title)s <br/> %(startTime)s - %(endTime)s",
                            class: "availability"    

                        }
                    ]
                },
                {
                    title: "WED 17",
                    events: [
                        {
                            id: "event5",
                            title: "Availability 1",
                            start: "2016-03-17T13:00",
                            startTime: "13:00",
                            end: "2016-03-17T14:00",
                            endTime: "14:00",
                            content: "%(title)s <br/> %(startTime)s - %(endTime)s",
                            class: "availability"    

                        }
                    ]
                },
                {
                    title: "THU 18",
                    events: [
                        {
                            id: "event6",
                            title: "Availability 1",
                            start: "2016-03-17T13:00",
                            startTime: "13:00",
                            end: "2016-03-17T14:00",
                            endTime: "14:00",
                            content: "%(title)s <br/> %(startTime)s - %(endTime)s",
                            class: "availability"    

                        }
                    ]
                },
                {
                    title: "FRI 19",
                    events: [
                        {
                            id: "event7",
                            title: "Exception 1",
                            start: "2016-03-17T13:00",
                            startTime: "13:00",
                            end: "2016-03-17T14:00",
                            endTime: "14:00",
                            content: "%(title)s <br/> %(startTime)s - %(endTime)s",
                            class: "exception"    

                        }
                    ]
                },
                {
                    title: "SAT 20"
                },
                {
                    title: "SUN 21"
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
