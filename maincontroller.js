app.controller("MainController", function($scope){	

	//First Example
	$scope.understand = "Now, I understand how the scope works!!";

	//Second Example
	$scope.inputValue = "";

	//Third Example
	$scope.selectedPerson = 0;
	$scope.selectedGenre = null;
	$scope.people = [
		{
			id:0,
			name:'Vasty',
			stuff:[
				'Biper',
				'Princesa Sofia',
				'Dora La Exploradora',
				'Princesas Disney'
			],
			live:true
		},
		{
			id:1,
			name:'Essien',
			stuff:[
				'Teenage Muntant Ninja Turtles',
				'Superman',
				'Batman',
				'Iron Man'
			],
			live:true
		},
		{
			id:2,
			name:'Gris',
			stuff:[
				'Jacy Velasquez',
				'Lilly Goodman',
				'Marcela Gandara',
				'Jesus Adrian Romero'
			],
			live:true
		},
		{
			id:3,
			name:'Alex',
			stuff:[
				'Programming',
				'PHP',
				'Python',
				'AngularJs'
			],
			live:true
		},

	];

	//Four Example

	$scope.newPerson = null;
	$scope.addNew = function(){
		if ($scope.newPerson != null && $scope.newPerson != ""){
			$scope.people.push({
				id:$scope.people.length,
				name:$scope.newPerson,
				live:true,
				stuff:[]
			});
		}
	}
});