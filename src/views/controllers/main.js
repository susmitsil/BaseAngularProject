
angular.module('CotrustAdminUIApp')
  .controller('MainCtrl', ['$scope', 'SearchInvoiceFactory','$sessionStorage','$rootScope', function($scope, SearchInvoiceFactory,$sessionStorage,$rootScope) {
    $scope.headingTitle = 'Top 12 Invoices';

    
    $scope.data=[];

    
  }]);