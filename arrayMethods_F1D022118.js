const civilWarTeams = [
  {
    team: "Team Captain America",
    members: [
      { id: 1, name: "Steve Rogers", alias: "Captain America", power: 90, role: "Leader" },
      { id: 2, name: "Bucky Barnes", alias: "Winter Soldier", power: 85, role: "Assassin" },
      { id: 3, name: "Sam Wilson", alias: "Falcon", power: 75, role: "Air Support" },
      { id: 4, name: "Clint Barton", alias: "Hawkeye", power: 70, role: "Marksman" },
      { id: 5, name: "Scott Lang", alias: "Ant-Man", power: 80, role: "Size Shifter" },
      { id: 6, name: "Sharon Carter", alias: "Agent 13", power: 65, role: "Spy" },
      { id: 7, name: "Wanda Maximoff", alias: "Scarlet Witch", power: 95, role: "Magic" },
      { id: 8, name: "Peggy’s Legacy", alias: "Carter’s Support", power: 60, role: "Intel" },
      { id: 9, name: "Maria Hill", alias: "Hill", power: 68, role: "Tactical" },
      { id: 10, name: "Mockingbird", alias: "Bobbi Morse", power: 72, role: "Combat" },
      { id: 11, name: "Moon Knight", alias: "Marc Spector", power: 88, role: "Stealth" },
      { id: 12, name: "Quake", alias: "Daisy Johnson", power: 92, role: "Earthquake Control" },
      { id: 13, name: "White Tiger", alias: "Ava Ayala", power: 77, role: "Martial Artist" },
      { id: 14, name: "Luke Cage", alias: "Power Man", power: 89, role: "Tank" },
      { id: 15, name: "Danny Rand", alias: "Iron Fist", power: 87, role: "Martial Artist" },
    ],
  },
  {
    team: "Team Iron Man",
    members: [
      { id: 16, name: "Tony Stark", alias: "Iron Man", power: 93, role: "Leader" },
      { id: 17, name: "Natasha Romanoff", alias: "Black Widow", power: 85, role: "Spy" },
      { id: 18, name: "James Rhodes", alias: "War Machine", power: 88, role: "Heavy Weapon" },
      { id: 19, name: "Peter Parker", alias: "Spider-Man", power: 90, role: "Agile Fighter" },
      { id: 20, name: "T’Challa", alias: "Black Panther", power: 91, role: "King/Fighter" },
      { id: 21, name: "Vision", alias: "Vision", power: 96, role: "Synthetic Being" },
      { id: 22, name: "Happy Hogan", alias: "Happy", power: 60, role: "Support" },
      { id: 23, name: "Pepper Potts", alias: "Rescue", power: 82, role: "Rescue" },
      { id: 24, name: "Nick Fury", alias: "Director Fury", power: 84, role: "Strategist" },
      { id: 25, name: "Okoye", alias: "General Okoye", power: 86, role: "General" },
      { id: 26, name: "Shuri", alias: "Princess of Wakanda", power: 78, role: "Inventor" },
      { id: 27, name: "Doctor Strange", alias: "Sorcerer Supreme", power: 97, role: "Magic" },
      { id: 28, name: "Carol Danvers", alias: "Captain Marvel", power: 99, role: "Cosmic Power" },
      { id: 29, name: "Samurai Steel", alias: "Unknown Ally", power: 73, role: "Swordsman" },
      { id: 30, name: "Mantis", alias: "Mantis", power: 76, role: "Empath" },
    ],
  },
];

const allMembers = [...civilWarTeams[0].members, ...civilWarTeams[1].members];

// 1. map()
function demoMap() {
  const aliasesUpper = allMembers.map(m => m.alias.toUpperCase());
  console.log("map():", aliasesUpper);
}

// 2. filter()
function demoFilter() {
  const strongHeroes = allMembers.filter(m => m.power > 95);
  console.log("filter():", strongHeroes);
}

// 3. reduce()
function demoReduce() {
  const totalPower = allMembers.reduce((acc, m) => acc + m.power, 0);
  console.log("reduce():", totalPower);
}

// 4. find()
function demoFind() {
  const findSteve = allMembers.find(m => m.name.startsWith("Steve"));
  console.log("find():", findSteve);
}

// 5. some()
function demoSome() {
  const hasMagic = allMembers.some(m => m.role === "Magic");
  console.log("some():", hasMagic);
}

// 6. every()
function demoEvery() {
  const allAbove50 = allMembers.every(m => m.power > 50);
  console.log("every():", allAbove50);
}

console.log("Run map():");
demoMap();
console.log("\nRun filter():");
demoFilter();
console.log("\nRun reduce():");
demoReduce();
console.log("\nRun find():");
demoFind();
console.log("\nRun some():");
demoSome();
console.log("\nRun every():");
demoEvery();