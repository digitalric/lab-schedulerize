(function ( $ ) {
    $.widget("lab.schedulerize", {
        options : {
            Settings: {
                TimeRange: {
                    Start: 9, //09 00 or 9am
                    End: 18, //18 00 or 6pm
                    Block: 10
                },
            },
            Data: {
                Verticals: []
            }
        },
        
        _generateEvent: function(event, container, timeOfTheDay) {
            var widget = this;
            
            //prepare a cell for that item at that time
            var eventContent = $("<div>", {"class": "schedulerize-event"});
            var hideCell = true;
            
            if (event) {
                
                var eventStart = moment(event._Start);
                var eventEnd = moment(event._End);
                
                //if this block is the start of an event
                if (timeOfTheDay.isSame(eventStart)) {
                    //append custom class and Id
                    eventContent
                        .addClass(event.Class)
                        .prop({"id": event.Id});
                    //add the text
                    eventContent.html(sprintf(event.Content, event));
                    
                    //get duration in minutes
                    var eventDurationInMins = eventEnd.diff(eventStart, "minutes");
                    //count number of rows to span across based on block
                    var rowCount = eventDurationInMins / this.options.Settings.TimeRange.Block;
                    
                    //when it needs more than 1 row
                    if (rowCount > 1) {
                        container.prop({"rowspan": rowCount});
                        eventContent.addClass("schedulerize-continuation");
                    }
                    
                    hideCell = false;   
                }
            }                
            else {
                //generate a blank cell
                eventContent.addClass("schedulerize-blank schedulerize-free");
                hideCell = false;
            }
            
            if (hideCell) { //hide the cell if it is part of a longer event
                container.css({"display" : "none"});
            }
            
            eventContent.on('click', function() {
                widget._trigger("select", null, event);
            })
            return eventContent;        
        },
        
        _refresh: function () {
            var widget = this;
            var self = widget.element;
            var options = widget.options;
            
            //clear before start
            self.empty();
            
            //start of the day at midnight
            var startOfDay = moment().startOf('day');

            //massage the data for easier comparison
            $.each(options.Data.Verticals, function(verticalIndex, verticalObject) {
                $.each(verticalObject.Events, function (eventIndex, eventObject) {
                    var localStart = moment(eventObject.Start);
                    var localEnd = moment(eventObject.End);
                    //set the date part to be same as we always use today to loop and generate the schedule
                    eventObject._Start = moment(startOfDay).hour(localStart.hour()).minute(localStart.minute());
                    eventObject._End = moment(startOfDay).hour(localEnd.hour()).minute(localEnd.minute());    
                });
            });
            
            
            var tableContainer = $("<table>");
 
            /****** generate columns (vertical) *****/

            //prepare container
            var columnHeaderList = $("<tr>", {"class": "schedulerize-column-header-list"});
            //first column which is a blank
            columnHeaderList.append($("<th>", {"class": "schedulerize-column-header schedulerize-blank"}));
                
            //add rest of the column headers
            $.each(options.Data.Verticals, function(index, value){
                columnHeaderList.append(
                    $("<th>", {"class": "schedulerize-column-header"})
                        .append($("<div>", {"class": "schedulerize-column-header-text", text: value.Title})));
            });
            
            tableContainer.append($("<thead>").append(columnHeaderList));


            /****** generate time range and events *****/

            //compute start of the schedule
            var startOfSchedule = moment(startOfDay).add(options.Settings.TimeRange.Start, "hours");
            //compute end of the schedule, i.e. 1 hour after set end time
            var endOfSchedule = moment(startOfDay).add(options.Settings.TimeRange.End + 1, "hours");
            //initialization for the loop
            var scheduleRun = moment(startOfSchedule);
            
            var tableBodyContainer = $("<tbody>");
            
            //loop through in X minutes block increment
            while (scheduleRun.hour() < endOfSchedule.hour()) {

                //generate a row for each block
                var timeRow = $("<tr>", {"class" : "schedulerize-time-row"});
                //prepare a header for the row 
                var timeHeader = $("<td>", {"class" : "schedulerize-time-header"});

                if (scheduleRun.minute() == 0) { //display the hour at start of each
                    timeRow.addClass("schedulerize-first");
                    timeHeader.append($("<div>", {"class" : "schedulerize-time-text", text:scheduleRun.format("hA")}));
                }
                
                //add the header to row
                timeRow.append(timeHeader);

                //loop through the verticals to generate event items
                $.each(options.Data.Verticals, function(index, value) {
                    //prepare event container 
                    var eventContainer = $("<td>", {"id": scheduleRun.valueOf(), "class": "schedulerize-event-container"});
                    
                    //check if there is any event that starts at that block or the block falls inside a bigger range
                    var event = _.find(value.Events, function (e) {
                        return scheduleRun.isSame(moment(e._Start)) || (scheduleRun.isAfter(moment(e._Start)) && scheduleRun.isBefore(moment(e._End)));
                    });
                    
                    //create a cell for that item at that time
                    var eventContent = widget._generateEvent(event, eventContainer, scheduleRun);
                    
                    //add the cell 
                    timeRow.append(eventContainer.append(eventContent));
                });
            
                tableBodyContainer.append(timeRow);
                //go to next block
                scheduleRun.add(options.Settings.TimeRange.Block, "minutes");
            }
            
            tableContainer.append(tableBodyContainer);
            
            self
                .append(tableContainer)
                .addClass("schedulerize table");
        },
        
        _create: function() {
            this._refresh();
        },
        
        _destroy: function () {
            this.element.empty();    
        },
        
        _setOption: function(key, value ) {
            this._super(key, value);
            
            this._refresh();
        }
    });
}(jQuery));