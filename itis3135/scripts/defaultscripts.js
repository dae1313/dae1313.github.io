/*display the date and time */
function displayDate(){
    const date = new Date();
    const dayName = date.toLocaleString('default', {weekday: 'long'});
    const day = date.getDate();
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();
    const time = date.toLocaleString("en-US",{hour: "2-digit", minute: "2-digit"});
    const format = "Today is " + time + " on " + dayName + ", " + day + " " + month + ", " + year;
    document.getElementById("time").innerHTML = format;

}
displayDate();

/*ask for user name and how they feel */
function getFeeling(){
    var name = document.getElementById("name").value;
    var mood = document.getElementById("mood").value;

    var format = "The Ngo Enterprises welcomes you, " + name + "! " +
                "We're glad you are doing " + mood + ".";

    alert(format);
}

/*Have the user type in the number from 1 to 10 and it will display the polygon name */
function getPolygonNumber(){
    var userNumberInput = parseFloat(document.getElementById("polyNumber").value);
    
    if(!isNaN(userNumberInput)){
        var positiveNum = Math.abs(userNumberInput);
        var roundNum = Math.round(positiveNum);

        if(roundNum >= 1 && roundNum <= 10){
            var polygonName = getPolygon(roundNum);
            alert("A polygon with " + roundNum + " sides is called a " + polygonName + ".");
        } else {
            alert("Invalid input. Please enter a number between 1 to 10.");
        }
    }
        

    function getPolygon(sides){
        switch(sides) {
            case 1:
                return "monogon";
            case 2:
                return "bigon";
            case 3:
                return "triangle";
            case 4:
                return "quadrilateral";
            case 5:
                return "pentagon";
            case 6:
                return "hexagon";
            case 7:
                return "heptagon";
            case 8:
                return "octagon";
            case 9: 
                return "nonagon";
            case 10:
                return "decagon";     
        }
    }
}

/*when the user click the "Facts about Nightowl" it will given random facts about owls*/
function getFacts(){
    var facts = ['A baby owl is called an owlet',
                'Owls have three eyelids',
                'A group of owls is called a parliament',
                'Owls can rotate their heads 270 degrees',
                'Female owls are slightly heavier than males',
                'Owls have a lifespan of 10 to 30 years, depending on its species',
                'Owls have binocular vision'
                ];
    
    var randomIndex = Math.floor(Math.random() * facts.length);
    alert(facts[randomIndex]);
}

/*let the user mixed primary colors together and it give the result */
function getMixedColors(){
    const color1 = prompt("Choose two colors from the list to mix: {red, yellow, blue},\nFirst Color:");
    const color2 = prompt("Choose two colors from the list to mix: {red, yellow, blue},\nSecord Color:");

    const choice1 = color1.toLowerCase();
    const choice2 = color2.toLowerCase();

    if (choice1 == "red" & choice2 == "yellow"){
        alert("Orange");
    } else if (choice1 == "red" && choice2 == "blue"){
        alert("Magenta");
    } else if (choice1 == "red" && choice2 == "red"){
        alert("Red");
    } else if (choice1 == "blue" && choice2 == "yellow"){
        alert("Green")
    } else if (choice1 == "blue" && choice2 == "blue") {
        alert("Blue");
    } else if (choice1 == "blue" && choice2 == "red"){
        alert("Magenta");
    } else if (choice1 == "yellow" && choice2 == "yellow"){
        alert("Yellow");
    } else if (choice1 == "yellow" && choice2 == "red"){
        alert("Orange");
    } else if (choice1 == "yellow" && choice2 == "blue"){
        alert("Green");
    } else {
        alert("Try Again. Pick two colors from the list.");
    }
    
}

/*the user have to guest the lucky number if can't find the lucky number it will alert them "guess again" */
function getLuckNumber() {
    var userInput = prompt("Guess the lucky number: ");
    var number = 13;
    
    if(userInput == number) {
        alert("Correct!!!!");
    } else {
        alert("Sorry, Guess Again.");
    }
}

/*have the user interact the animal */
function interactAnimal(){
    const userNumber = prompt("What should Timmy do? Pick a number from 1 to 5: \n1. Sleep\n2. Bath\n3. Eat\n4. Fly\n5. Talk");

    const value = userNumber;

    if(value == 1){
        alert("Zzzzzzzzzzzz");
    } else if (value == 2){
        alert("AHHHHHH!!! I hate bath!!!")
    } else if (value == 3){
        const userFood = prompt("What should Timmy eat? Pick a number from 1 to 4: \n1. mice\n2. frogs\n3. squirrels\n4. insects");

        switch(userFood) {
            case '1': 
                const miceFood = prompt("How many mice are you going to feed Timmy? ");
                if(miceFood >= 1){
                    alert("Thank you for feeding Timmy " + miceFood + " mice");
                } else {
                    alert("Invalid. Try again.");
                }
                break;
            case '2':
                const frogFood = prompt("How many frogs are you going to feed Timmy? ");
                if(frogFood >= 1){
                alert("Thank you for feeding Timmy " + frogFood + " frogs");
                } else {
                    alert("Invalid. Try again.");
                }
                break;
            case '3':
                const squirrelFood = prompt("How many squirrels are you going to feed Timmy? ");
                if(squirrelFood >= 1){
                alert("Thank you for feeding Timmy " + squirrelFood + " squirrels");
                } else {
                    alert("Invalid. Try again.");
                }
                break;
            case '4': 
                const insectFood = prompt("How many insects are you going to feed Timmy? ");
                if(insectFood >= 1){
                alert("Thank you for feeding Timmy " + insectFood + " insects");
                } else {
                    alert("Ivalid. Try again.");
                }
                break;
            default:
                alert("Try again.");
        }      
    }  else if (value == 4) {
        const userFly = prompt("Should Timmy fly today? {yes or no}");
        const userLowercase = userFly.toLowerCase();

        if(userLowercase == 'yes'){
            alert("Timmy is flying!!!! Yeahhhhh");
        } else {
            alert("Perhaps another time");
        }
    } else if (value == 5) {
        const userTalk = prompt("What do you want to say to Timmy?");

        const responds = ['Timmy: What??!!!',
                'Timmy: I like books',
                'Timmy: No',
                'Timmy: You should stop....',
                'Timmy: Yes.....no.....I dont know',
                'Timmy: Who??',
                'Timmy: That sounds interesting.'
                ];
    
        var randomIndex = Math.floor(Math.random() * responds.length);
        alert(responds[randomIndex]);
    } else {
        alert("Invalid input. Please enter a number from 1 to 4. ");
    }
}