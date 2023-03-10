/*
The standard JavaScript environment provides another data structure calledSet. 
Like an instance ofMap, a set holds a collection of values. 
UnlikeMap, itdoes not associate other values with those—it just tracks which values are partof the set. 
A value can be part of a set only once—adding it again doesn’t haveany effect.
Write a class calledGroup(sinceSetis already taken). LikeSet, it hasadd,delete, andhasmethods. 
Its constructor creates an empty group,addaddsa value to the group (but only if it isn’t already a member),
deleteremovesits argument from the group (if it was a member), 
andhasreturns a Booleanvalue indicating whether its argument is a member of the group.Use the===operator, 
or something equivalent such asindexOf, to determinewhether two values are the same.Give the class a 
staticfrommethod that takes an iterable object as argumentand creates a group that contains all the values 
produced by iterating over it.
*/

export class Group {
  constructor() {
    this.group = [];
  }
  
  static from(iterableObject) {
    this.group = new Group();
    for (const el of iterableObject) {
      this.group.add(el);
    }
    return this.group.group;
  }
  
  add(element) {
    if (this.group.includes(element)) {
      return;
    }
    this.group.push(element);
  }
  
  delete(element) {
    if (this.group.includes(element)) {
      const index = this.group.indexOf(element);
      this.group.splice(index, 1);
    }
  }
  
  has(element) {
    return this.group.includes(element);
  }
}

// let group = Group.from([10, 20]);
// console.log(group);
// console.log(group.has(10));
// // → true
// console.log(group.has(30));
// // → false
// group.add(10);
// console.log(group);
// group.delete(10);
// console.log(group);
// console.log(group.has(10));
// // → false