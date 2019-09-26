
// function
function tryMe () {
    var lname = document.getElementById('lname').value;
    var fname = document.getElementById('fname').value;
    
    // fun
    var name =fname.concat(lname);
    console.log(name);
    var cap = name.toUpperCase()
    console.log(cap)
   
    // display result
    document.getElementById("message").innerHTML = "Hello " + fname + " " + lname;
};
