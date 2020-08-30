//welcome message: get the date first, convert it to string, concatenate to welcome message
"use strict";
  //this function is to get user-keyin in three input boxes
  //for the fast50 worksheet 3 main settings: 'digits', 'time limit', and 'operator'
  function setParam(param) {
    let input, text;
    //read user-keyin value
    input = document.getElementById(param).value;
    console.log(param);
    if (param == "dg") {
      console.log(document);
      console.log(input);
      //check whether user-keyin is not a number or a number which is not in valid range
      if (isNaN(input) || input < 1 || input > 5) {
        text = "Input not valid";
      } else { //if user-keyin is a number and in valid range, save to the 'sheet' object
        text = "Input OK";
        this.digits = input;
      }
      console.log(text);
      document.getElementById("msg-dg").innerHTML = text;
    }
    //implement similar logic for the other two input boxes
    else if (param == "tl") {
      //check whether user-keyin is not a valid number
      if (isNaN(input) || (input != 1 && input != 2)) {
        text = "Input not valid";
      } else { //if user-keyin is a valid number, save to the 'sheet' object
        text = "Input OK";
        this.timeLimit = input;
      }
      console.log(text);
      document.getElementById("msg-tl").innerHTML = text;
    }
    else if (param == "op") {
      //check whether user-keyin is not a valid operator
      if (input != "+" && input != "-" && input != "*" && input != "/") {
        text = "Input not valid";
      } else { //if user-keyin is a valid operator
        text = "Input OK";
        this.operator = input;
      }
      console.log(text);
      document.getElementById("msg-op").innerHTML = text;

    }
  }

  //this function is to generate a fast50 worksheet
  function generate() {
    //print out 3 main settings in the "developer" debugging console
    //note that this is not to display for website "users"
    //hint: use console.log(...)
    console.log(this.digits);
    console.log(this.operator);
    console.log(this.cases);
    //generate two arrays of numbers for the number of 'cases' defined in 'sheet' object
    //2 other settings are: 'digits' and 'operator'
    //you may use arrays and for-loop to generate all 'cases' using random number generator
    //use local array variables to store these two arrays
    let arrA = new Array(this.cases);
    let arrB = new Array(this.cases);
    let max = Math.pow(10, this.digits);
    console.log(max)
    for(let i = 0; i < this.cases; i++){
      arrA[i] = Math.floor(Math.random() * max);
      arrB[i] = Math.floor(Math.random() * max);
    }
 
    
    //after two arrays of numbers are generated
    //based on the 'operator' to decide two input operands
    //the reason why we did not directly use numbers generated early as input operands
    //is that we consider (1) 'subtraction' always yields non-negative results
    //(2) 'division' always yields integer quotients
    //Thus some logic needs implemented to make sure input operands would satisfy the two constraints
    //use local array variables to store these two input operands
    //also compute the answers as well
    let ans = new Array(this.cases);
    let temp = 0;
    for(let i = 0; i < this.cases; i++){
      if (this.operator == "-"){
         if (arrA[i] < arrB[i]){
           temp = arrA[i];
           arrA[i] = arrB[i];
           arrB[i] = temp;
         }
        ans[i] = arrA[i] - arrB[i];
      }
      else if (this.operator == "/"){
        if (arrA[i] < arrB[i]){
           temp = arrA[i];
           arrA[i] = arrB[i];
           arrB[i] = temp;
         }
        arrB[i] = Math.floor(arrB[i] / 3) + 1;
        temp = Math.floor(arrA[i] / arrB[i]);
        arrA[i] = temp * arrB[i];
        ans[i] = temp;
      }
      else if (this.operator == "+"){
        ans[i] = arrA[i] + arrB[i];
      }
      else{
        ans[i] = arrA[i] * arrB[i];
      }

    }
    
    //after input operands and answers are generated and computed
    //store them to 'sheet' object 
    this.in_a = arrA;
    this.in_b = arrB;
    this.ans = ans;
    console.log(this.in_a);
    console.log(this.in_b);
    console.log(this.ans);
    
    
    //display the problems
    //to display input operands and operator, we need to get the locations in the document
    //and then write cases one by one in a for-loop
    //the following 'prbCollection' has been written for you, it is an array of objects
    //which you can use for-loop to write all cases out
    let prbCollection = document.getElementsByTagName("prb");
    console.log(prbCollection);
    for (let i = 0; i < prbCollection.length; i++){
      prbCollection[i].innerHTML = this.in_a[i] + " " + this.operator + " " + this.in_b[i] + " = ";
    }

    //clear the score
    console.log(document.getElementById("score"));
    document.getElementById("score").innerHTML = "";

    //clear previous user's answers; note this code snippet is functionally wrong
    //we need to fix it but it actually did clear the previous user's answers
    let inputCollection = document.getElementsByTagName("input"); //there are 53 "input"
    console.log(inputCollection);
    for (let i = 0; i < inputCollection.length; i++) {
      inputCollection[i+3].style.background = "#f0f0f0";
      inputCollection[i+3].value = "";
    }
  }

  //this function is to grade a fast50 worksheet after user submit it
  function grade() {
    console.log("digits = "+this.digits);
    console.log("timeLimit = "+this.timeLimit);
    console.log("operator = "+this.operator);

    //read all the answers, the result would be an array of objects
    let ansList = document.forms["frm1"];
    console.log("I am printing ansList");
    console.log(ansList);

    //read all the input boxes, note that it includes not just all the answers but 
    //also the three setting boxes at the top of document
    //the result would be a Collection which is an array of objects
    let inputCollection = document.getElementsByTagName("input"); //there are 53 "input"
    let studentAns = new Array(this.cases);
    let score = 0;
    
    

    //use a for-loop to compare all answers against our pre-computed reference answers
    //if not matching, need to highlight answer box with background color = #ff8080
    //also need to count the score
    for (let i = 0; i < ansList.length; i++) {
      studentAns[i] = Number(ansList.ans[i].value);
      //implement the comparison logic here
      if(studentAns[i] == this.ans[i]){
        score++;
      }else{
        inputCollection[i+3].value = studentAns[i]+ "-->" + this.ans[i];
        inputCollection[i+3].style.background = "#ff8080";
      }
      
    }
    console.log(studentAns);

    //finally display the final scores, if students score more than 40, tell them good job
    //otherwise tell them to keep working
    if (score > 40) {
      document.getElementById("score").innerHTML = "Good Job! Your score: "+score+"/"+this.cases;
    }
    else {
      document.getElementById("score").innerHTML = "Keep working! Your score: "+score+"/"+this.cases;
    }
  }

