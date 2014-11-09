angular.module('goalCtrl', [])
	.controller('GoalController', function ($scope, $animate) {
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
					"Tell me all of your goals!",
					"What are you hoping to complete today?",
					"What's your goal for the day?",
					"Choose a goal. Complete a goal.",
					"Any itches that you want to scratch today?",
				];

			// select random prompt to display
			$scope.prompt = prompts[Math.floor(Math.random() * prompts.length)];
		}
	})