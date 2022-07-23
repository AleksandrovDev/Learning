import { runRobot } from './Robot.js';
import { VillageState } from './Village.js';

export function compareRobots(firstRobot, firstMemory, secondRobot, secondMemory) {
  let firstRobotTotalSteps = 0;
  let secondRobotTotalSteps = 0;
  for (let i = 0; i < 100; i++) {
    const village = VillageState.random();
    firstRobotTotalSteps += calculateSteps(village, firstRobot, firstMemory);
    secondRobotTotalSteps += calculateSteps(village, secondRobot, secondMemory);
  }
  
  const averageStepsFirstRobot = firstRobotTotalSteps / 100;
  const averageStepsSecondRobot = secondRobotTotalSteps / 100;
  
  
  console.log(`First robot did work with average ${averageStepsFirstRobot}`);
  console.log(`Second robot did work with average ${averageStepsSecondRobot}`);
}

function calculateSteps(state, robot, memory) {
  for (let s = 0; ; s++) {
    if (state.parcels.length == 0) {
      return s;
    }
    
    let action = robot(state, memory);
    state = state.move(action.direction);
    memory = action.memory;
  }
}
