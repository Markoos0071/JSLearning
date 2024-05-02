//object literals

//Array of objects example
const blogs =[
    {title: 'Help', author: 'Me', likes: 0},
    {title: 'Please', author: 'I Beg', likes: 2}
]

let user = {
    //Properties (key value pairs)
    name: 'crystal',
    age: '30',
    email: 'email@emai.email',
    location: 'earth',
    blogs: [
        {title: 'Help', author: 'Me', likes: 0},
        {title: 'Please', author: 'I Beg', likes: 2}
    ],

    //Methods
    login() {
        console.log('Hey');
    },
    logout(){
        console.log('bye');
    },
    //Arrow functions do not work when using the this keyword in methods
    logBlogs(){
        //console.log(this.blogs);
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes);
        })
    }
};

// console.log(user);
// console.log(user.name);

// user.name = 'john';
// console.log(user.name);
// console.log(user['age']);
// user['age'] = '10';
// console.log(user['age']);

// const key = 'location'
// console.log(user[key]);

// console.log(typeof user)

// user.login();
// user.logout();
//user.logBlogs();

//Math object
//Math.sum, max, etc...

const area = 7.7;
// console.log(Math.round(area));
// console.log(Math.floor(area));
// console.log(Math.ceil(area));
// console.log(Math.trunc(area));

//random numbers using Math
// const random = Math.random();
// console.log(Math.round(random * 100))


//Primitive types get stored seperately on the stack
//So if you change score one after setting score two to score one
//Score two stays the same even though score one changed
let scoreOne = 50;
let scoreTwo = scoreOne;

//Reference types get stored on the heap with a pointer to that stack
//So if you change the age from userOne after setting userTwo to userOne
//userTwo will also update as they reference the same object.
userOne = {name: 'Name', age: 30};
userTwo = userOne;