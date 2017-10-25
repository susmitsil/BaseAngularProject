
angular.module('CotrustAdminUIApp')
  .factory('Auth', ['$http', '$location', '$rootScope', '$sessionStorage','$cookieStore', '$alert',
    function($http, $location, $rootScope, $sessionStorage, $cookieStore, $alert) {
      console.log('Auth Initialized');

      $cookieStore.remove('user');

      return {
        login: function(user) {
          return $http.post($rootScope.config.auth.login, user)
            .success(function(data) {
              $sessionStorage.currentUser = data;
              $rootScope.currentUser=$sessionStorage.currentUser;			  
              $location.path('/');

              $alert({
                title: 'Cheers!',
                content: 'You have successfully logged in.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function() {
              $alert({
                title: 'Error!',
                content: 'Invalid username or password.',
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },
        signup: function(user) {
          return $http.post($rootScope.config.auth.signup, user)
            .success(function() {
              $location.path('/login');

              $alert({
                title: 'Congratulations!',
                content: 'Your account has been created.',
                placement: 'top-right',
                type: 'success',
                duration: 3
              });
            })
            .error(function(response) {
              $alert({
                title: 'Error!',
                content: response.data,
                placement: 'top-right',
                type: 'danger',
                duration: 3
              });
            });
        },
        logout: function() {
          //'/api/logout'
          return $http.get($rootScope.config.auth.logout).success(function() {
            $sessionStorage.currentUser = null;
            $rootScope.currentUser=null;

            $cookieStore.remove('user');
            $alert({
              content: 'You have been logged out.',
              placement: 'top-right',
              type: 'info',
              duration: 3
            });
          });
        }
      };
    }]);