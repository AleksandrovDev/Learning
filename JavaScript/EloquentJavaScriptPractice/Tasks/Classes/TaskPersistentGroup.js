class PGroup {
  group = [];

  add(element) {
    const updatedArray = [...this.group];
    if (!this.has(element)) {
      updatedArray.push(element);
    }

    const updatedGroup = new PGroup();
    updatedGroup.group = updatedArray;

    return updatedGroup;
  }

  has(element) {
    return this.group.includes(element);
  }

  delete(element) {
    let updatedArray = [...this.group];
    if (this.has(element)) {
      updatedArray = updatedArray.filter((el) => el !== element);
    }

    const updatedGroup = new PGroup();
    updatedGroup.group = updatedArray;

    return updatedGroup;
  }
}

PGroup.empty = new PGroup();

let a = PGroup.empty.add('a');
let ab = a.add('b');
let b = ab.delete('a');

console.log(b.has('b'));
// → true
console.log(a.has('b'));
// → false
console.log(b.has('a'));
// → false
