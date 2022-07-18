const app = require('express')();
const fs = require('fs');

app.get("/", async (req,res) => {

    fs.readFile("simple.txt", (err, data) => {
        if(err) reject(err);
        console.log(data.toString());
    })

    // **.then()
    // myReadFile("simple.txt")
    // .then(data => {
    //     console.log(`data = ${data}`)
    // })
    // .catch(err => console.log(err)); 

    // ** async await
    // const dataResult = await myReadFile("simple.txt");
    // console.log(dataResult.toString());

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

