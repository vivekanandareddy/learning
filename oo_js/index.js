function Person(name,age)
{
    this.name = name;
    this.age = age;
}

let p1 = new Person('vivek',27);

console.log(p1.age);
console.log(p1.name);
console.log(p1);
console.log(p1.__proto__);

//Object Literal syntax
/*const circle = {
    radius:1,
    location:{
        x:1,y:1
    },
    draw:function(){
        console.log('draw');
    }
};

circle.draw();


//factory function
function createCircle(radius){
    return {
        radius,
        draw:function()
        {
            console.log('diameter'+radius*2);
        }
    };
}

const circle1 = createCircle(5);
circle1.draw();



//constructor function
function Circle(radius)
{
    this.radius = radius;
    this.draw = function(){
        console.log('draw ' + radius);
    }
}

const c1 = new Circle(4); // new -> creates an empty object
// c1.call({},4)
c1.radius;


let num = 10;
function increase(num){
num++;
}

increase(num);
console.log(num); // prints 10


let num = {value:10};

function increase(num){
num.value++;
}

increase(num);
console.log(num); // prints 11


function Circle(radius)
{
    this.radius = radius;
    this.draw = function(){
        console.log('draw ' + radius);
    }
}

const c1 = new Circle(4);
//c1.location = {x:1};
//c1['location'] ={x:1}; bracket notaion


//Enumerating prop
for ( let key in c1){
    
    if(typeof c1[key] !== 'function')
    {
        console.log(key,c1[key])
    }
}

const keys = Object.keys(c1);
console.log(keys);

if( 'radius' in c1)
{
    console.log('circle has radius');
}
*/

//Private properties and methods
//changing this to let makes private memebers of that object