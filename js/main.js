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
                // changes background to NYC
                $('body').css('backgroundImage', 'url(../images/nyc.jpg)');

            } else if ((city === 'bay area') || (city === 'san francisco') || (city === 'sf')) {
                // changes background to San Fran
                $('body').css('backgroundImage', 'url(../images/sf.jpg)');

            } else if ((city === 'LA') || (city === 'LAX') || (city === 'Los Angeles')) {
                // changes background to LA
                $('body').css('backgroundImage', 'url(../images/la.jpg)');

            } else if ((city === 'Austin') || (city === 'ATX')) {

                // changes background to Austin
                $('body').css('backgroundImage', 'url(../images/austin.jpg)');

            } else if ((city === 'SYD') || (city === 'Sydney')) {

                // changes background to Sydney
                $('body').css('backgroundImage', 'url(../images/sydney.jpg)');
                
            } else {

                // alerts users that that city is not available
                alert('We don\'t have any images of ' + city);
            }
        }
        
        // stops the submit button from firing off a submit request
        $('#submit-btn').click(function (event) {
            event.preventDefault();
        });

        // click event to make the background change happen
        $('#submit-btn').click(changeBackground);

    });

}());