//console.log('test');
let obj1={

}
let obj2=obj1;
let obj3=obj1;
obj1.name='Billy';
obj1.age=21;
obj1.gender='male'

let arr = [];
arr.push(obj1,obj2,obj3);
console.table(arr);