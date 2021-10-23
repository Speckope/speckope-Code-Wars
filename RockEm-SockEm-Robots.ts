/* Rules
    A robot with the most speed attacks first. If they are tied, the first robot passed in attacks first.
    Robots alternate turns attacking. Tactics are used in order.
    A fight is over when a robot has 0 or less health or both robots have run out of tactics.
    A robot who has no tactics left does no more damage, but the other robot may use the rest of his tactics.
    If both robots run out of tactics, whoever has the most health wins. Return the message "{Name} has won the fight."
    If both robots run out of tactics and are tied for health, the fight is a draw. Return "The fight was a draw." 
*/

//  Example objects
const robot1 = {
  name: 'Rocky',
  health: 100,
  speed: 20,
  tactics: ['punch', 'punch', 'laser', 'missile'],
};
const robot2 = {
  name: 'Missile Bob',
  health: 100,
  speed: 21,
  tactics: ['missile', 'missile', 'missile'],
};
const tactics = {
  punch: 20,
  laser: 30,
  missile: 35,
};

//  fight(robot1, robot2, tactics) -> "Missile Bob has won the fight."

// Decide who wins
type Robot = {
  name: string;
  health: number;
  speed: number;
  tactics: string[];
};

type Tactics = {
  [tacName: string]: number;
};

function fight(robot1: Robot, robot2: Robot, tactics: Tactics) {
  let fasterRobot: Robot;
  let slowerRobot: Robot;
  // Define which robot attacks first
  if (robot1.speed !== robot2.speed) {
    fasterRobot = robot1.speed > robot2.speed ? robot1 : robot2;
    slowerRobot = robot1.speed < robot2.speed ? robot1 : robot2;
  } else {
    fasterRobot = robot1;
    slowerRobot = robot2;
  }

  // Start exchanging blows. Fight while robots have tactics
  while (fasterRobot.tactics.length || slowerRobot.tactics.length) {
    if (fasterRobot.tactics.length) {
      slowerRobot.health -= tactics[fasterRobot.tactics[0]];
      fasterRobot.tactics.shift();
    }
    if (slowerRobot.health <= 0)
      return `${fasterRobot.name} has won the fight.`;

    if (slowerRobot.tactics.length) {
      fasterRobot.health -= tactics[slowerRobot.tactics[0]];
      slowerRobot.tactics.shift();
    }
    if (fasterRobot.health <= 0)
      return `${slowerRobot.name} has won the fight.`;

    console.log(fasterRobot.name + ' ' + fasterRobot.health);
    console.log(slowerRobot.name + ' ' + slowerRobot.health);
  }
  // Game over conditions:
  // No tactics left && some robot has more health - Robot with more health wins

  if (fasterRobot.health === slowerRobot.health) return 'The fight was a draw.';

  if (fasterRobot.health > slowerRobot.health) {
    return `${fasterRobot.name} has won the fight.`;
  } else if (fasterRobot.health < slowerRobot.health) {
    return `${slowerRobot.name} has won the fight.`;
  }
}

// best solution
function fight2(r1, r2, tactic) {
  if (r1.speed < r2.speed) [r1, r2] = [r2, r1];
  while (r1.tactics.length || r2.tactics.length) {
    if (r1.tactics.length) r2.health -= tactic[r1.tactics.shift()];
    if (r2.health <= 0) break;
    if (r2.tactics.length) r1.health -= tactic[r2.tactics.shift()];
    if (r2.health <= 0) break;
  }
  if (r1.health == r2.health) return 'The fight was a draw.';
  return `${r1.health > r2.health ? r1.name : r2.name} has won the fight.`;
}
