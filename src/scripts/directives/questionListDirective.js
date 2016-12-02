app.directive('mailingList', function(){
  return{
    restrict: 'E',
    templateUrl: 'templates/mailinglist.html',
    link : function(scope, element, attrs, mailingListController){
      // console.log(scope);
    },
    controller: ['$scope', '$cookies', '$uibModal', '$document',  function($scope, $cookies, $uibModal, $document){
      console.log($scope);


        var exist = $cookies.getObject('contacts');
        if(exist){
          $scope.contacts = $cookies.getObject('contacts');
        }
        else{
          $cookies.putObject('contacts', []);
          $scope.contacts = [];
        }


        $(function(){
          $("#addnew").show();
        })
        //removes a question from list
        $scope.remove = function(cnt){
          var index = $scope.contacts.indexOf(cnt); //find where is contact in $scope.contacts array
          $scope.contacts.splice(index, 1);
          refresh();
        }


        $scope.add = function(){
          $("#addnew").toggle(200); //toggles the input line
        }

        //adds a new question to the list
        $scope.save = function(newcnt){
          console.log(" $scope.new " , $scope.new);
          console.log(" newcnt " , newcnt);
          console.log("Whole Scope" , $scope);
          $scope.contacts.push(newcnt);
          refresh();
        }


        $scope.openModal = function (parentSelector) {
          var self = this;
          var parentElem = parentSelector ?
            angular.element($document[0].querySelector('.modal-demo ' + parentSelector)) : undefined;
          var modalInstance = $uibModal.open({
            animation: true,
            ariaLabelledBy: 'modal-title',
            ariaDescribedBy: 'modal-body',
            templateUrl: 'myModalContent.html',
            controller: function($scope, $uibModalInstance){
              $scope.deleteAll = function () {
                self.contacts.splice(0, self.contacts.length);
                $uibModalInstance.close();
                $cookies.putObject('contacts', self.contacts);
              };
              $scope.cancel = function () {
                $uibModalInstance.close('cancel');
              };

            },
            size: 'sm',
            appendTo: parentElem,
          });
        }

        function refresh(){
          $cookies.putObject('contacts', $scope.contacts);
          $scope.contacts = $cookies.getObject('contacts'); //TODO: Find a better way to break the bind
        }


    }]
  };
})
