```javascript
async function sendMessage(){

    let msg = document.getElementById("message").value;

    if(msg === ""){
        document.getElementById("response").innerHTML = "Please type something.";
        return;
    }

    document.getElementById("response").innerHTML = "AI is thinking...";

    try {

        // Yahan baad mein real AI API connect karenge
        let reply = "Your question was: " + msg + 
        "<br><br>AI connection setup pending.";

        document.getElementById("response").innerHTML = reply;

    } catch(error){

        document.getElementById("response").innerHTML =
        "Something went wrong.";

    }

}
```
