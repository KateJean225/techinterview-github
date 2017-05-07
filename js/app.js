angular.module('myApp', ['ui.router', 'PublicEventsCtrl', 'UserCtrl'])
    .controller('DashboardCtrl', function($scope, $http, $state){

        $scope.$state = $state;

        // Set search model to 'mbostock' and the fetch function to contact the
        // remote API and ensure the view is initialized. Load results when the search box changes.
        $scope.$watch('search', function() {
            initialFetch();
        });

        // Auto-set to known Github user to initialize view
        $scope.search = "mbostock";

        // Make calls to the API for Users and Repo List -- all other API calls are based off
        // user login ($scope.search) and a specific repository ($scope.repo)
        function initialFetch(){
            $http.get("https://api.github.com/events")
                .then(function(response){ $scope.publicevents = response.data; console.log(response.data);})
                .catch(function (err) {
                    console.log(err)
                });

            $http.get("https://api.github.com/users/" + $scope.search)
                .then(function(response){ $scope.userinfo = response.data; })
                .catch(function (err) {
                    console.log(err)
                });

            $http.get("https://api.github.com/users/" + $scope.search + "/repos")
                .then(
                    function(response){
                        $scope.repolist = response.data;

                        // NOTE: select first repo
                        if ($scope.repolist && $scope.repolist.length > 0) {
                            $scope.repo = $scope.repolist[0].name;
                        }
                    },
                    $http.get("https://api.github.com/repos/" + $scope.search + "/" + $scope.repo + "/events")
                        .then(function (response) { $scope.eventinfo = response.data; })
                );
        }


        // Function select which ensures that the entire
        // text is selected when the user clicks in the text input.
        $scope.select = function(){
            this.setSelectionRange(0, this.value.length);
        }

        initialFetch();
    });