angular.module('goalCtrl', [])
	.controller('GoalController', function ($scope) {
		init();
		function init() {

			console.log("goal controller init");

			/**
			 * Possible prompts to display to the user.
			 */
			var prompts = 
				[
					"What do you want to get done today?",
					"Got a goal for today?",
					"Any itches that need scratching?",
					"What's a project that needs to get tackled today?",
					"Don't procrastinate! Do that big thing today."
				];
			$scope.prompt = prompts[Math.random() * prompts.length];
		}
	})