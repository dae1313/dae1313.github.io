let count = 1;

/* Add courses to the select box by clicking the add button*/
function addCourses(event){
    event.preventDefault();

    const addSelectfield = document.getElementById("select-courses");
    const textBox = document.getElementById("text-course");

    if (textBox.value.trim() !== '') {
        const choices = document.createElement("option");
        choices.textContent = textBox.value;
        addSelectfield.appendChild(choices);
        textBox.value = '';

        selectedCourses = Array.from(addSelectfield.options);
    }
    
}

/*remvoe courses by select the options in the selectbox and click the remove button*/
function removeCourses(event){
    event.preventDefault();
    const textBox = document.getElementById("select-courses");
    const textValue = textBox.value;

    if(textValue !== ""){
        for(var i = 0; i < textBox.options.length; i++) {
            if(textBox.options[i].value == textValue) {
                textBox.remove(i);
                break;
            }
        }
    }
    
}

let userName, mascot, imageFile, imageCaption, personalBackground, professionalBackground, academicBackground, webDevelopment, platformBackground, funnyThing, anything, isCheck, selectedCourses;

document.getElementById("byo-form").addEventListener("submit", function(event) {
    event.preventDefault();

    userName = document.getElementById("name-byo").value;
    mascot = document.getElementById("mascot").value;
    imageFile = document.getElementById("image-file");
    imageCaption = document.getElementById("image-caption").value;
    personalBackground = document.getElementById("personal-background").value;
    professionalBackground = document.getElementById("professional-background").value;
    academicBackground = document.getElementById("academic-background").value;
    webDevelopment = document.getElementById("web-background").value;
    platformBackground = document.getElementById("platform-background").value
    funnyThing = document.getElementById("funny-thing-text").value;
    anything = document.getElementById("anything-text").value;
    isCheck = document.getElementById("checkmark").checked;

    const courseList = selectedCourses.map(function(option) {
        return `<li>${option.textContent}</li>`;
      }).join('');

    /* prevent the form from submitting w/o the necessary information  */
    if(!userName || !mascot || !imageFile.files.length || !imageCaption || !personalBackground 
        || !professionalBackground || !academicBackground || !webDevelopment || !platformBackground || !funnyThing || !anything || !isCheck ||!courseList ) {
            alert("Check and ensure that all the required fields are filled");
            event.preventDefault();
        } else {
            console.log("Form submitted successfully!");
            generatePage();
        }

        
});

/*generate the page*/
function generatePage(){
    const pageContent = document.getElementById("byo-content");
    
    const imageSrc = imageFile.files.length > 0 ? URL.createObjectURL(imageFile.files[0]) : '';

    const courseList = selectedCourses.map(function(option) {
        return `<li>${option.textContent}</li>`;
        }).join('');

    const newPage = `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> ${userName}'s ${mascot} || ITIS 3135 Introduction</title>
        <style>
            body {
                background-color: darkslategrey;
                justify-content: center;
                align-items: center;
            }

            nav > a, nav{
                color: pink;
                text-align: center;
                font-size: 20px;
                padding: 20px;
                font-family: Tahoma;
            }
            
            .bottominfo {
                padding-top: 100px;
            }

            h1, h2 {
                color: rgb(252, 198, 62);
                text-align: center;
                font-family: Impact;
                padding-top: 10px;
                padding-bottom: 10px;
            }

            h2 {
                font-size: 40px;
            }

            hr{
                height: 5px;
                background-color: lightgoldenrodyellow;
                border-color: lightgoldenrodyellow;
            }

            .info {
                color:lightblue;
                font-family: verdana;
                font-size: 20px;
                margin-left: 150px;
                border: 2px solid lightgoldenrodyellow;
                width: 70%;
                max-width: 1000px;
                height: 400%;
                max-height: 2400px;
                background-color: rgb(174, 250, 250);
                padding: 20px 15px 100px 25px;
                word-wrap: break-word;
            }

            .info ul {
                list-style-type: square;
                flex-direction: column;
                align-items: center;
            }

            .images-id {
                display: block;
                margin-left: auto;
                margin-right: auto;
                width: auto; 
                height: auto;
            }

            figcaption {
                text-align: center;
                font-style: italic;
                color:lightgray;
                font-family: verdana;
                font-size: 15px;
                margin-top: 20px;
                margin-bottom: 50px;
            }

            .background-info {
                margin-bottom: 20px;
                color: #8f0000;
            }

            .enterprise {
                text-align: center;
                color:lightblue;
                padding-top: 5%;
                font-size: 20px;
            }
            
            .valid {
                display: flex;
                justify-content: center;
                align-items: center;
            }
            
            .company {
                color: pink;
            }

            #reset-button {
                width: 40%;
                font-family: verdana;
                margin: 1em auto;
                height: 3em;
                display: block;
                cursor: pointer;
                margin-top: 60px;
            }
            
        </style>
    </head>
    <body>
        <div data-include="components/header.html"></div>
        <script src="scripts/HTMLInclude.js"></script></body>
        <main>
            <hr>
            <h2>Introduction</h2>
            <figure>
                <img src = ${imageSrc} class="images-id">
                <figcaption>${imageCaption}</figcaption>
            </figure>
            <div class="info">
            <ul>
                <li class="background-info"><strong>Personal Background:</strong> ${personalBackground}</li>
                <li class="background-info"><strong>Professional Background:</strong> ${professionalBackground}</li>
                <li class="background-info"><strong>Academic Background:</strong> ${academicBackground}</li>
                <li class="background-info"><strong>Primary Computer Platform:</strong> ${platformBackground}</li>
                <li class="background-info"><strong>Courses I'm Taking & Why:</strong>
                    <ul>
                    ${courseList}
                    </ul>
                </li>
                <li class="background-info"><strong>Funny/Interesting Item to Remember me by:</strong> ${funnyThing}</li>
                <li class="background-info"><strong>I'd also like to Share:</strong> ${anything}</li>
            </ul>
            </div>
            <a href="byo_intro.html" >
            <input type="button" value="Start Over" id="reset-button">
            </a>
            </main>
        <div data-include="components/footer.html" id="footer-content"></div>
        <script src="scripts/HTMLInclude.js"></script>
        </body>
    </html>
        ` ;

    pageContent.innerHTML = newPage;

}




