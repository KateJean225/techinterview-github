/**
 * Created by katej on 5/5/2017.
 */
angular.module('UserCtrl', [])
    .controller('UserCtrl', function($scope, $http){

        // Watch for changes to repo
        $scope.$watch('repo', function() {
            $http.get("https://api.github.com/repos/" + $scope.search + "/" + $scope.repo + "/events")
                .then(function (response) {
                    $scope.eventinfo = response.data;
                });

            // Additional request to fetch languages
            $http.get("https://api.github.com/repos/" + $scope.search + "/" + $scope.repo + "/languages")
                .then(function (response) {
                    $scope.languages = response.data;
                });

        }); // end watch function


    });