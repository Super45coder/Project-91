function send(){
    console.log("Send");
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question = "<h4>" + number1 + " X " + number2 + "</h4>";
    answer_input = "<br/>Answer = <input type='text' id='input_checkbox'>";
    check_button = "<br/><br/><button class='btn btn-info' onclick='check()'>Check</button>";
    row = question + answer_input + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
function check(){
    your_answer = document.getElementById("input_checkbox").value;
    if (actual_answer == your_answer)
    {
        console.log("Correct");
        document.getElementById('input_checkbox').style.display = "none";
        document.getElementById('input_checkbox').innerHTML = "Correct";
    }
    else{
        console.log("Wrong");
        document.getElementById('input_checkbox').style.display = "none";
        document.getElementById('input_checkbox').innerHTML = "Wrong! Try Again";
    }
}