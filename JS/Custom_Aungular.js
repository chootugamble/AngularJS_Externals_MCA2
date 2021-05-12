var myApp = angular.module("app", []);  

myApp.controller("MyController",
   function ($scope) {
        $scope.sortTypeVAR = 'arr_Input1';
        $scope.ShowXX = true;
        $scope.ARRAY_VAR = [];
        $scope.c = 0;

        $scope.ShowForm = function (){
            $scope.ShowXX = true;
        };

        $scope.ShowTable = function (){
            $scope.ShowXX = false;
        };

        $scope.insertFUN = function () {
            $scope.check();
            if($scope.flag)
            {
                $scope.c++;
                $scope.ARRAY_VAR.push({
                    arr_Input1: $scope.in_Input1,
                    arr_Input2: $scope.in_Input2,
                    arr_Input3: $scope.in_Input3,
                    arr_Input4: $scope.in_Input4
                });
                $scope.EmptyTextBox();
            }
            else{
                alert("Please Enter All Data!!");
            }
        };

        $scope.sortingFUN = function(sortTypex){

            if($scope.sortTypeVAR == sortTypex)
            {
                $scope.sortTypeVAR = "-" + sortTypex;
            }
            else
            {
                $scope.sortTypeVAR = sortTypex;
            }
        }

        $scope.check = function(){
            $scope.flag = true;
            if(($scope.in_Input1 == null || $scope.in_Input2 == null || $scope.in_Input3 == null || $scope.in_Input4 == null))
                $scope.flag = false;
        };

        $scope.EmptyTextBox = function () {
            $scope.in_Input1 = null;
            $scope.in_Input2 = null;
            $scope.in_Input3 = null;
            $scope.in_Input4 = null;
        };

        $scope.deleteFUN = function (val) {
            var index = $scope.ARRAY_VAR.indexOf(val);
            $scope.ARRAY_VAR.splice(index, 1);
        };
    }
);