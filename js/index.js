
// function
function tryMe () {
    var lname = document.getElementById('lname').value;
    var fname = document.getElementById('fname').value;

    var lname= lname.charAt(0).toUpperCase()+lname.slice(1);
    var fname = fname.charAt(0).toUpperCase() + fname.slice(1);
    
    // fun
    var name =fname+lname;
    console.log(name);
    var cap = name.toUpperCase()
    console.log(cap)
   
    // display result
    if(cap == "DAVIDREKE"){
        document.getElementById("message").innerHTML = "Hello " + fname + " " + lname +"! You are both good looking, a master of ping-pong and clever coder";
    } 
    else if(cap == "DANMARSHALL"){
        document.getElementById("message").innerHTML = "Hello " + fname + " " + lname + "! You are not as good looking as David Reke, but you area  very good coding teacher :P";
    }
    else if (cap == "GARRETLISTO") {
        document.getElementById("message").innerHTML = "Hello " + fname + " " + lname + "! You are good at ping pong, but not as good as David Reke";
    }
    else if (cap == "AUSTiNMORALeS") {
        document.getElementById("message").innerHTML = "Hello " + fname + " " + lname + "! You are a chicken sandwich making super-star";
    }
    else if (cap == "ROBERT KEMBER"){
        document.getElementById("message").innerHTML = "Hello " + fname + " " + lname + "! I hear you like Zelda.";
    }
    else{
    document.getElementById("message").innerHTML = "Hello " + fname + " " + lname;}
};
