/**
 * Created by katej on 5/5/2017.
 */
angular.module('PublicEventsCtrl', [])
    .controller('PublicEventsCtrl', function($scope, $http){
        // Make new GET request on refresh button click
        $('#myButton').on('click', function () {
            var $btn = $(this).button('loading');
            // business logic...
            refreshPublicEvents();
            $btn.button('reset')
        });

        // GET request to public events
        function refreshPublicEvents() {
            $http.get("https://api.github.com/events")
                .then(function(response){ $scope.publicevents = response.data; console.log(response.data);})
                .catch(function (err) {
                    console.log(err)
                });
        }
    });