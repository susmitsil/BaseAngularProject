angular.module('CotrustAdminUIApp').
  filter('fromNow', function() {
    return function(date) {
      return moment(date).fromNow();
    }
});