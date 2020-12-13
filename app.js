var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input")
var Output = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/ferb-latin.json"


function getTranslateURL(text) {
    
    return serverURL + "?" + "text=" + text;
}

function errorHandler(error){
    console.log("error occurred", error);
    alert("something wrong with server");
}

btnTranslate.addEventListener("click", clickHandler);


function clickHandler() {

   // Output.innerHTML = " "  + txtInput.value;
 
   var inputText = txtInput.value;

   //calling server for processing
 
    fetch(getTranslateURL(inputText))
        .then(Response => Response.json())
        .then(json => {
            var TranslateText = json.contents.translated;
            Output.innerHTML = TranslateText;
            
        })
        .catch(errorHandler)
};



