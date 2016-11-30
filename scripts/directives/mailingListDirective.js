app.directive('mailingList', function(){
  return{
    restrict: 'E',
    require: 'mailingList',
    templateUrl: 'templates/mailinglist.html',
    controller: function($scope, $cookies){

      var exist = $cookies.getObject('contacts');
      if(exist){
        $scope.contacts = $cookies.getObject('contacts');
      }
      else{
        $cookies.putObject('contacts', []);
        $scope.contacts = [];
      }



      $(function(){
        $("#addnew").hide();
      })
      //removes a contact from list
      $scope.remove = function(cnt){
        var index = $scope.contacts.indexOf(cnt); //find where is contact in $scope.contacts array
        $scope.contacts.splice(index, 1);
        $cookies.putObject('contacts', $scope.contacts);
      }


      $scope.add = function(){
        $("#addnew").toggle(200); //toggles the input line
      }

      //adds a new contact to the list
      $scope.save = function(newcnt){
        $scope.contacts.push(newcnt);
        $cookies.putObject('contacts', $scope.contacts);
        $scope.new = {}; //clears the 'new' object declared in the html
        $("#addnew").hide();
      }
    }
  };
})
