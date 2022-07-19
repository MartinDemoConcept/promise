const app = require('express')();
const fs = require('fs');
const promisify = require('util').promisify;

app.get("/", async (req,res) => {

    // fs.readFile("simple.txt", (err, data) => {
    //     if(err) reject(err);
    //     console.log(data.toString());
    // })

    // **.then()
    myReadFile("simple.txt")
    .then(data => {
        console.log(`new Promise (.then): = ${data}`)
    })
    .catch(err => console.log(err)); 

    // ** async await
    const dataResult = await myReadFile("simple.txt");
    console.log("new Promise (await):" + dataResult.toString());

    // ** using promisify.then
    const readFileAsync = promisify(fs.readFile);
    readFileAsync("simple.txt").then(data => {
        console.log("promisify (.then):" + data.toString())
    })

    // ** using async await promisify
    const data = await readFileAsync("simple.txt");
    console.log("promisify (await):" + data.toString())


    console.log("say hi to server")
})

app.listen(9090, () => {console.log('running at port 9090')});

function myReadFile(filePath){
    return new Promise((resolve, reject) => {
        fs.readFile(filePath, (err, data) => {
            if(err) reject(err);
            resolve(data);
        })
    })
}

