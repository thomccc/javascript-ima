// the js way
// chapter 6 adding a character experience *tested in jsbin

const aurora = {
  name: "Aurora",
  health: 150,
  strength: 25,
  xp: 0,

  describe() {
    return `${this.name} has ${this.health} health points, ${this.strength} as strength and ${this.xp} XP points`;
  }
};

aurora.health -= 20;

aurora.strength += 10;

aurora.xp += 15;

console.log(aurora.describe());



// chapter 7 Musketeers
const musketeers = ["Athos", "Porthos", "Aramis"];
for (let i = 0; i < musketeers.length; i++) {
  console.log(musketeers[i]);
}
musketeers.push("D'Artagnan");
musketeers.forEach(movie => {
  console.log(musketeers);
});

musketeers.splice(1, 1);
for (const musketeer of musketeers) {
  console.log(musketeers);
}

// chapter 7 Sum of values
const values = [3, 11, 7, 2, 9, 10];

let sum = 0;

values.forEach(value => {
  sum += value;
});

console.log(sum);

