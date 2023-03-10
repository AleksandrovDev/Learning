/*
Make theGroupclass from the previous exercise iterable. 
Refer to the sectionabout the iterator interface earlier in the chapter 
if you aren’t clear on the exact form of the interface anymore.
If you used an array to represent the group’s members, 
don’t just return theiterator created by calling theSymbol.iteratormethod on the array.  
Thatwould work, but it defeats the purpose of this exercise.
It is okay if your iterator behaves strangely when the group is modified duringiteration.
*/

import { Group } from './TaskGroups.js';

class GroupIterator {
    constructor(group) {
      this.group = group;
      this.indexOfElement = 0;
    }
    
    next() {
      console.log(this.indexOfElement);
      console.log(this.group.group.length);
      if (this.indexOfElement > this.group.length) {
        return { done: true }
      } else {
        const element =  {
          value: this.group[this.indexOfElement],
          done: false,
        }
        this.indexOfElement++;
        return element;
      }
    }
}

Group.prototype[Symbol.iterator] = function() {
  return new GroupIterator(this);
}


const groupForIteration = Group.from('dasdasd');
 

console.log(groupForIteration);

for (const el of groupForIteration) {
  console.log(el);
}