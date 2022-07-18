const posts = [
    {title: 'Post 1', body: 'This is post one'},
    {title: 'Post 2', body: 'This is post two'}
]

function getPosts(){
    console.log('start to getPosts')
    setTimeout(() => {
        let output = '';
        posts.forEach((post,index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000)
}

function createPost(post){
    let createPostTime = Date.now();
    console.log(`createPost: time: ${createPostTime}`)
    return new Promise((resolve, reject) => {
        let beforeSetTimeoutTime = Date.now();
        console.log(`before setTimeout time: ${beforeSetTimeoutTime}, time diff: ${beforeSetTimeoutTime - createPostTime}`)
        setTimeout(() => {
            let beforeResolveTime = Date.now();
            posts.push(post);

            const error = false;

            if(!error){
                console.log(`before resolve time: ${beforeResolveTime}, time diff: ${beforeResolveTime - createPostTime}`)
                
                resolve("I am your father"); // passing params to result of .then/ result of await

                let finishCreatePostTime = Date.now();
                console.log(`finsih createPost: time: ${finishCreatePostTime}`)
                console.log(`time diff: ${finishCreatePostTime - createPostTime}`)
            }else{
                reject("Error: Something went wrong");
            }
        }, 2000)
    });

}

// ** Promise.then
// console.log(`a: time: ${Date.now()}`);
// createPost({title: "Post 3", body: 'This is post three'})
//     .then(getPosts)
//     .catch(error => alert(error));
// console.log(`b: time: ${Date.now()}`);

// ** Async await
async function init(){
    let secretMessage = await createPost({title: "Post 3", body: 'This is post three'});
    console.log(secretMessage);

    getPosts();
}
console.log(`a: time: ${Date.now()}`);
init();
console.log(`b: time: ${Date.now()}`);

// ** Promise.all
// const promise1 = Promise.resolve('Hello World');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) => setTimeout(resolve, 2000, 'Goodbye'));
// const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());
// Promise.all([promise1, promise2, promise3, promise4]).then((values) => {console.log(values)});

// ** fetching api
// async function fetchUsers(){
//     const res = await fetch('https://jsonplaceholder.typicode.com/users');
//     const data = await res.json();
//     console.log(data);
// }
// fetchUsers();


function myPromise(){
    return new Promise((resolve, reject) => {
        resolve("This is my first promise")
    })
}

// using .then()
// myPromise().then((msg) => {
//     console.log(`using .then(), ${msg}`);
// })

// using async await
async function runMyPromise(){
    const msg = await myPromise();
    console.log(`using async await, ${msg}`);
}
runMyPromise();

