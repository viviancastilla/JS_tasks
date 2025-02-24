const input = document.querySelector('#myInput');
const displayText = document.querySelector('#displayText');


function showLiveText(event){
    document.getElementById("liveOutput").textContent = "You typed: " + event.target.value;
}
//live text//
document.getElementById("liveOutput").addEventListener("input", showLiveText);

