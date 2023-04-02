const fs = require ("fs")

// fs.writeFile("test.txt", "HeroVired", (err)=>{
//     console.log(err)
// })

// fs.writeFileSync("sample.txt", "heroviredsync")

// fs.appendFile("test.txt", "I m learning FSD", (err)=>{
//     console.log(err)
// })


// reading folder
let folderPath = __dirname;
fs.readdir(folderPath, "utf-8", (err, data) => {
    console.log(data);
    // output of reading folder
    let arrayoffiles = data;
    for (let index = 0; index < arrayoffiles.length; index++) {
        let isfile = fs.lstatSync(arrayoffiles[index]).isFile();
        if (isfile) {
            let data = fs.readFileSync(arrayoffiles[index], "utf-8");
            console.log(data,"------------file reading----------");
        }
        let isfolder = fs.lstatSync(arrayoffiles[index]).isDirectory();
        if (isfolder) {
            //
            let direcotrypath_of_this_file = path.dirname(isfolder);
            console.log(direcotrypath_of_this_file);
        }
        
    }
    let filename = data[2];
    let direcotrypath_of_this_file = path.extname(filename);
    console.log(direcotrypath_of_this_file);

})

// whether it is directorty ;
// if it is direcotry then go inside the directory and check if files are there or not;


let filepath = __filename
console.log(filepath);
let diroffile = path.dirname(filepath);
console.log(diroffile);







