var lsgwoerter = [
    ["R", "A", "D", "I", "O"],
      ["T","E","A","M","S","P","E","A","K"],
      ["W","E","B","D","E","S","I","G","N"],
      ["E","D","U","C","A","T","I","O","N"],
      ["C","H","O","C","O","L","A","T","E"],
      ["G","E","R","M","A","N","Y"]
    ]

    var tastatur = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    var random = Math.floor((Math.random()*(lsgwoerter.length-1))); 
    
    var lsgwort = lsgwoerter[random]; /
    var ratewort = new Array(lsgwort.length);
    var fehler = 0;
    
    
    for (var i = 0; i < ratewort.length; i++){
        ratewort[i] = "_ ";
    }
    
    // prints the guessfield
    function printRatewort(){
        for (var i = 0; i < ratewort.length; i++){
        var ratefeld = document.getElementById("ratefeld");
        var buchstabe = document.createTextNode(ratewort[i]);
        ratefeld.appendChild(buchstabe);
        }
    }
    
        //deletes the guessfield and replaces it with the new one
        var ratefeld = document.getElementById("ratefeld");
        ratefeld.innerHTML=""; 
        printRatewort();
    
    function init(){
        printRatewort();
    }
    
    window.onload = init;