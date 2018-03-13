console.log("hello")

$(function() {
   $(window).scroll(function () {
      if ($(this).scrollTop() > $(".section1").offset().top-120) {
         $(".navbar").addClass("navChangeColor");
         $(".navbar-toggler").addClass("custom-toggler");
         $("#bootstrap-overrides .navbar-dark .navbar-nav .nav-link").addClass("navLinkChangeColor");
      }
      if ($(this).scrollTop() < $(".section1").offset().top-120) {
         $(".navbar").removeClass("navChangeColor");
         $(".navbar-toggler").removeClass("custom-toggler");
         $("#bootstrap-overrides .navbar-dark .navbar-nav .nav-link").removeClass("navLinkChangeColor");
      }
   });
});

var start = moment().startOf('isoweek');
var end = moment(start).add(12, 'days');
var startDate = start.utc().format();
var endDate = end.utc().format();

$.ajax({
    url: "https://www.googleapis.com/calendar/v3/calendars/p56apfhnjpnrqifht5hv8d0d3k@group.calendar.google.com/events",
    dataType: 'json',
    data: {
        'singleEvents': true,
        'orderBy': 'startTime',
        'timeMax': endDate,
        'timeMin': startDate,
        'key': 'AIzaSyAjlGe4WBEWtJY_B1o4beKYLp5t0zTjxT8'
    },
}).done(function(data) {
  for (var i = 0; i< data.items.length; i++) {
    console.log(data.items[i]);
    var calEvent = data.items[i];


    var wrapper = $('<div />', {
      class: 'container eCalEvent'
      })
    var title = $('<h5 />', {
      text: calEvent.summary
      })
    var eventStart = moment(calEvent.start.dateTime);
    var eventEnd = moment(calEvent.end.dateTime);
    var date = $('<p />', {
      text: eventStart.format("MMMM Do h:mm a") + " - " + eventEnd.format("h:mm a") + " | " + (calEvent.location || "Location TBD")
    })

    wrapper.append(title);
    wrapper.append(date);

    if(calEvent.description) {
      console.log("theres a description");
      var description = $('<p />', {
        text: calEvent.description
      })
      wrapper.append(description);
    }


    $("#eCal").append(wrapper);
  }
});
