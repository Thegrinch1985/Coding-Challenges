let output = 'output this ';

console.log(`This is the variable called output : ${output}`);

console.log(output.includes('p'));

const person = { name: 'Howie', course :'Front End Dev',}

console.log(person);

let map1 = new Map();

map1.set(1, 'test');
map1.set(2, 'test2');
map1.set(3, 'test3');

console.log(map1.get(1));


let map = new Set();

map.add( 'test');
map.add('test2');
map.add('test3');

console.log(map);

const arr = [3,6,4];

console.log(arr);

arr.push(5);
console.log(arr);

function addTwo(num){
return num +2;
}

console.log(addTwo(9));

function callFunc (func, param){
    console.log(func(param));
}

callFunc(addTwo, 15);


for(let i = 0; i < 4; i++){
    console.log(i);
    if(i ===1){
        break;
    }
}

for( key in person){

    console.log(key, person[key])
}


