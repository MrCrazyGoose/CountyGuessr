counties = ["Allegany County", "Carroll County", "Harford County", "St. Mary's County", "Anne Arundel County", "Cecil County", 
"Howard County", "Somerset County", "Baltimore City", "Charles County", "Kent County", "Talbot County", "Baltimore County", 
"Dorchester County", "Montgomery County", "Washington County", "Calvert County", "Frederick County", "Prince George's County", 
"Wicomico County", "Caroline County", "Garrett County", "Queen Anne's County", "Worcester County"];
let answered = 0;
let correct = 0;
button = document.getElementsByTagName("button");
let county;
let accuracy = 0;
let countyCompare;

function question() {
    let arrayEle = Math.floor(Math.random() * (counties.length - 1));
    county = counties[arrayEle];
    document.querySelector("#instructions").innerHTML = "Click on " + county + "!";
    counties.splice(arrayEle, 1);
    console.log(county);
}

question();

function buttonClick(clickedID) {
    // function changeColor(animateClass) {
    //     $(function() {
    //         $("#" + clickedID)
    //           .on("animationbegin", function(){
    //           $(this).addClass(animateClass);
    //         })
    //           .on("animationend", function(){
    //           $(this).removeClass(animateClass);
    //         });
    //         });
    // }
    if (answered < 25) {
        // document.getElementByID(clickedID).addEventListener("click", function() {
        countyCompare = String(county).replace("County", "").replaceAll(" ", "").replace("'", "").replace(".", "").toLowerCase();
        console.log("activated");
        answered = answered + 1;
        console.log(county);
        console.log("match?" + clickedID);
        console.log("match?" + countyCompare);
        if (clickedID == countyCompare) {
            // changeColor("animateCorrect");
            alert("Correct! You guessed " + county);
            // changeColor("animateReset");
            console.log("??" + county);
            correct = correct + 1;
            console.log(correct);
            question();
        }
        else if (clickedID != countyCompare) {
            // changeColor("animateCorrect")
            // $(clickedID).addClass("colorTrans")
            document.getElementById(countyCompare).style.backgroundColor = "lime";
            alert("Incorrect! Instead of clicking on " + county + ", you clicked on " + clickedID + " county :( Excuse the miscapitalization and stuff.");
            setTimeout(function() {
                document.getElementById(countyCompare).style.backgroundColor = "white";
            }, 1000);
            // changeColor("animateReset");
            // $(clickedID).removeClass("colorTrans");
            question();
            console.log(clickedID);
        };
        console.log(answered)
    }
    else {
        accuracy = (correct/24)*100;
        alert("Game over! Your answered " + correct + " questions correctly with an accuracy of around " + Math.round(accuracy) + "%. Refresh to play again!");
        return(accuracy);
    };
        
};