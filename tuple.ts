//tuple

const player: {
  name: string;
  power: string;
  kills: number;
  combos: string[];
  exams: [number, string]; // tuple
} = {
  name: 'Georgey',
  power: 'Sharingun',
  kills: 3,
  combos: ['Lions Barnage', 'Dragon Fire Jutsu'],
  exams: [10, 'Genin'],
};

// player.exams[1] = 9 //error!
// player.exams = [10, 'Genin', 'Dragon'] // error!

console.log(player.combos);

let powers: string[] = [' Ko', 'Yo'];
console.log(powers.length);
