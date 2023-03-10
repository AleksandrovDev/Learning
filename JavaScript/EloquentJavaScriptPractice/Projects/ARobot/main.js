import { VillageState } from './Village.js';
import { runRobot, randomRobot, routeRobot, lazyRobot, improvedGoalOrientedRobot, goalOrientedRobot } from './Robot.js';
import { compareRobots } from './CompareRobots.js'

// runRobot(VillageState.random(), goalOrientedRobot, []);

compareRobots(improvedGoalOrientedRobot, [], lazyRobot, []);