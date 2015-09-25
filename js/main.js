/*global document, $, alert, prompt, console */
(function () {
    'use strict';

    $(document).ready(function () {

                //1 User inputs city
                // 1.1 if user inputs New York, New York City or NYC
                // 1.1.1 Then Display nyc.jpg
                // 1.2 if user inputs San Francisco, SF or Bay Area
                // 1.2.1 Then Display sf.jpg
                // 1.3 if user inputs Los Angeles, LA or LAX
                // 1.3.1 Then Display la.jpg
                // 1.4 if user inputs Austin or ATX
                // 1.4.1 Then Display austin.jpg
                // 1.5 if user inputs Sydney, SYD
                // 1.5.1 Then Display sydney.jpg
                // 1.6 any else alert user that city does not have an image


        function changeBackground() {

            var city = $('#city-type').val();

            if ((city === 'NYC') || (city === 'New York') || (city === 'New York City')) {

                $('body').css('backgroundImage', 'url(../images/nyc.jpg)');

            } else if ((city === 'Bay Area') || (city === 'San Francisco') || (city === 'San Fran')) {

                $('body').css('backgroundImage', 'url(../images/sf.jpg)');
        

            } else {

                alert('We don\'t have any images of ' + city);
            }
        }

        $("#submit-btn").click(function (event) {
            event.preventDefault();
        });

        $('#submit-btn').click(changeBackground);





    });

}());