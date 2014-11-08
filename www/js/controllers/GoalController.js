angular.module('goalCtrl', [])
	.controller('GoalController', function ($scope) {
		init();
		function init() {

			/**
			 * Possible prompts to display to the user.
			 */
			var prompts = 
				[
					"What do you want to get done today?",
					"Got a goal for today?",
					"Got goals?",
					"What are you hoping to complete today?",
					"What's your goal for the day?",
					"Choose a goal. Complete a goal.",
					"Any big itches that you need to scratch today?",
				];
			$scope.prompt = prompts[Math.floor(Math.random() * prompts.length)];
		}
	})