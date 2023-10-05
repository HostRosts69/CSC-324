// Chapter 6
/// Groups:
// has:
    /// add, delete, and has methods
    /// static method from 
class Group {
    constructor(list) {
        this.values = list;
    }

    has(value){
        return (-1 !== this.values.indexOf(value));
    }

    add(value){
        if (Array.isArray(value)){
            for(const element of value){
                if (-1 == this.values.indexOf(element)){
                    this.values.push(element);
                } else {
                    console.log(`Group already has ${element} in the index ${this.values.indexOf(value)}. \nPlease choose a number that is not any of these numbers: \n ${this.values}\n Warning other elements before the break has already been added!`);
                }
            }
        }else{
            if (-1 == this.values.indexOf(value)){
                this.values.push(value);
            } else {
                console.log(`Group already has ${value} in the index ${this.values.indexOf(value)}. \nPlease choose a number that is not any of these numbers: \n ${this.values}`);
            }
        } 
    }

    delete(value){
        if (Array.isArray(value)){
            for(const element of value){
                if (-1 !== this.values.indexOf(element)){
                    this.values.splice(this.values.indexOf(element), 1);
                } else {
                    console.log(`Group does not have ${element} in it. \nPlease choose a number that is one of these numbers: \n ${this.values}`);
                }
            }
        }else{
            if (-1 !== this.values.indexOf(value)){
                this.values.splice(this.values.indexOf(value), 1);
            } else {
                console.log(`Group does not have ${value} in it. \nPlease choose a number that is one of these numbers: \n ${this.values}`);
            }
        }
        
        
    }

    get(index){
        return this.values[index]
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
  console.log(group.has(10));
  // → false

  group.add(30);
  console.log(group);

  group.add([6,9,24,68,7]);
  group.delete([24,68]);
  // How does the delete work like this?
    // why is 7 not deleted
  group.delete(6,9,7);
  console.log(group);

/// Iterable Group:
class GroupIterator{
    constructor(group) {
        this.hold = "";
        this.groups = group;
        this.num = 0;
      }

      next() {
        if (this.num != this.groups.values.length){
            let value = this.groups.get(this.num)
            this.num += 1
            return {value, done: false};
        }else{
            return {done: true};
        }
      }
}

Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
  }


for (let value of Group.from(["a", "b", "c"])) {
  console.log(value);
}
// → a
// → b
// → c


////////////////////////////////////////////////////
////////////// Trying any number of arguments /////////////////
///////////////////////////////////////////////////
class GroupAnySize {
    constructor(list) {
        this.values = list;
    }

    has(value){
        return (-1 !== this.values.indexOf(value));
    }

    add(value){
        let array = Array.from(arguments);
        for(const element of array){
            if (-1 == this.values.indexOf(element)){
                this.values.push(element);
            } else {
                console.log(`Group already has ${element} in the index ${this.values.indexOf(value)}. \nPlease choose a number that is not any of these numbers: \n ${this.values}\n Warning other elements before the break has already been added!`);
            }
        }
    }

    delete(){
        let array = Array.from(arguments);
        
        for(const element of array){
            if (-1 !== this.values.indexOf(element)){
                this.values.splice(this.values.indexOf(element), 1);
            } else {
                console.log(`Group does not ${arguments} have ${element} in it. \nPlease choose a number that is one of these numbers: \n ${this.values}`);
            }
        }
    }

    get(index){
        return this.values[index];
    }

    static from(){
        let array = Array.from(arguments)
        return new GroupAnySize(array);
    }
  }

let groupAnySize = GroupAnySize.from(20, 65, 39, 35, 60);
console.log(groupAnySize)
groupAnySize.add(24,35)
console.log(groupAnySize)
groupAnySize.delete(65,49,35)