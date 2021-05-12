var myApp = angular.module("app", []);  

myApp.controller("MyController",
   function ($scope) {
        $scope.Student_Result_Arr = [
            {st_ID: "1", st_FNAME: "Rohan", st_LNAME: "Patel", st_MATH: 50, st_SCIENCE: 50, st_ENGLISH: 50, st_TOTAL: 150, st_GRACING: "No Gracing Required"},
            {st_ID: "2", st_FNAME: "Meet", st_LNAME: "Savak", st_MATH: 100, st_SCIENCE: 90, st_ENGLISH: 80, st_TOTAL: 270, st_GRACING: "No Gracing Required"},
            {st_ID: "3", st_FNAME: "Vinit", st_LNAME: "Patel", st_MATH: 60, st_SCIENCE: 30, st_ENGLISH: 70, st_TOTAL: 160, st_GRACING: "No Gracing Required"},
            {st_ID: "4", st_FNAME: "Jhanvi", st_LNAME: "Thakar", st_MATH: 70, st_SCIENCE: 10, st_ENGLISH: 30, st_TOTAL: 110, st_GRACING: "40"},
        ];
        $scope.c = 0;

        $scope.ShowBool = false;

        $scope.ShowInsert = function (){
            $scope.ShowBool = true;
        };

        $scope.ShowTable = function (){
            $scope.ShowBool = false;
        };


        $scope.insertStudent = function () {
            $scope.check();
            if($scope.flag)
            {
                $scope.c++;
                TotalMarks = $scope.in_MATH + $scope.in_SCIENCE + $scope.in_ENGLISH;

                if(TotalMarks < 150)
                    GraceMarks = 150 - TotalMarks;
                else
                    GraceMarks = "No Gracing Required"

                $scope.Student_Result_Arr.push({
                    st_ID: $scope.in_ID,
                    st_FNAME: $scope.in_FNAME,
                    st_LNAME: $scope.in_LNAME,
                    st_MATH: $scope.in_MATH,
                    st_SCIENCE: $scope.in_SCIENCE,
                    st_ENGLISH: $scope.in_ENGLISH,
                    st_TOTAL: TotalMarks,
                    st_GRACING: GraceMarks
                });
                $scope.EmptyTextBox();
                $scope.ShowTable();
            }
            else{
                alert("Please Enter All Data!!");
            }
        };

        $scope.sortTypeVAR = 'st_ID';
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
            if(($scope.in_ID == null || $scope.in_FNAME == null || $scope.in_LNAME == null || $scope.in_MATH == null || $scope.in_SCIENCE == null || $scope.in_ENGLISH == null))
                $scope.flag = false;
        };

        $scope.deleteFUN = function (val) {
            var index = $scope.Student_Result_Arr.indexOf(val);
            $scope.Student_Result_Arr.splice(index, 1);
        };

        $scope.EmptyTextBox = function () {
            $scope.in_ID = null;
            $scope.in_FNAME = null;
            $scope.in_LNAME = null;
            $scope.in_MATH = null;
            $scope.in_SCIENCE = null;
            $scope.in_ENGLISH = null;
        };

    }
);