// Chapter 6
/// Groups:
// has:
    /// add, delete, and has methods
    /// static method from 
class Group {
    constructor(list) {
        this.group = list
    }

    has(value){
        return (-1 !== this.group.indexOf(value));
    }

    add(value){
        if (-1 == this.group.indexOf(value)){
            this.group.push(value);
        } else {
            console.log(`Group already has ${value} in the index ${this.group.indexOf(value)}. \nPlease choose a number that is not any of these numbers: \n ${this.group}`);
        }
            
    }

    delete(value){
        if (-1 !== this.group.indexOf(value)){
            this.group.splice(this.group.indexOf(value), 1);
        } else {
            console.log(`Group does not have ${value} in it. \nPlease choose a number that is one of these numbers: \n ${this.group}`);
        }
       
    }

    static from(list){
        return new Group(list);
    }
  }
  
  let group = Group.from([10, 20]);
  console.log(group.has(10));
  // → true
  console.log(group.has(30));
  // → false
  group.add(10);
  console.log(group);
  group.delete(10);

  console.log(group);
  console.log(group.has(10));
  // → false

