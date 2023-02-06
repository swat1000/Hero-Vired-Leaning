class demo{
     x;
    demomethod(){
        console.log("Hello World");
        console.log(this.x);
    }
}
let a1 = new demo ();
a1.x = "Swatantra"
a1.demomethod();