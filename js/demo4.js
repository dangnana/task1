//定义模块
angular.module("myApp",[])
.controller("demo4Con",["$scope",function($scope){
	var datas=[
		{
			Firstname:"dang",
			Lastname:"nana",
			Gender:"Female",
			Salary:18088,
			Ysalary:123356,
			Birthday:"1470524904525"
		},
		{
			Firstname:"merry",
			Lastname:"lili",
			Gender:"Male",
			Salary:16000,
			Ysalary:180080,
			Birthday:"1470477704525"
		},
		{
			Firstname:"kitty",
			Lastname:"zhangsan",
			Gender:"Male",
			Salary:15505,
			Ysalary:149650,
			Birthday:"1380556916345"
		},
		{
			Firstname:"jack",
			Lastname:"lisi",
			Gender:"Female",
			Salary:17532,
			Ysalary:197532,
			Birthday:"1470477904525"
		},
		{
			Firstname:"wang",
			Lastname:"rose",
			Gender:"Female",
			Salary:18357,
			Ysalary:146890,
			Birthday:"1470535903926"
		}
	]
	$scope.datas=datas;
	$scope.sortColumn="Firstname";
	$scope.reverse=false;
	$scope.setSort=function(column){
		$scope.reverse=$scope.sortColumn==column?!$scope.reverse:false;
		$scope.sortColumn=column;
	}
	$scope.addClass=function(column){
		if($scope.sortColumn==column){
			return $scope.reverse?"allow-up":"allow-down"
		}
	}
	/*$scope.one="Firstname";
	$scope.one="Salary";
	$scope.bool=0;
	$scope.datas=datas;
	$scope.searchtext1="";
	$scope.searchtext2="";
	$scope.dis=true;
	$scope.one=function(){
		chage("one","Firstname")
	}
	$scope.two=function(){
		chage("two","Lastname")
	}
	$scope.three=function(){
		chage("three","Gender")
	}
	$scope.four=function(){
		chage("four","Salary")
	}
	$scope.five=function(){
		chage("five","Ysalary")
	}
	$scope.six=function(){
		chage("six","Birthday")
	}
	function chage(value,str){
		if($scope.value==str){
			$scope.value="-"+str;
			$scope.a=false;
			$scope.c=false;
			$scope.d=false;
			$scope.e=false;
			$scope.f=false;
			$scope.g=false;
		}else{
			$scope.value=str;
			$scope.a="";
			$scope.c="";
			$scope.d="";
			$scope.e="";
			$scope.f="";
			$scope.g="";

		}
	}*/
}])