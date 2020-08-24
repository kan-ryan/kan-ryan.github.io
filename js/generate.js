//welcome message: get the date first, convert it to string, concatenate to welcome message
"use strict";
  function setParam(param) {
    var input, text;
    console.log(param);
    if (param == "dg") {
      input = document.getElementById("dg").value;
      console.log(input);
      if (isNaN(input) || input < 1 || input > 5) {
        text = "Input not valid";
      } else {
        text = "Input OK";
        this.digits = input;
      }
      console.log(text);
      document.getElementById("msg-dg").innerHTML = text;
    }
    else if (param == "tl") {
      input = document.getElementById("tl").value;
      console.log(input);
      if (isNaN(input) || input < 1 || input > 2) {
        text = "Input not valid";
      } else {
        text = "Input OK";
        this.timeLimit = input;
      }
      console.log(text);
      document.getElementById("msg-tl").innerHTML = text;
    }
    else if (param == "op") {
      input = document.getElementById("op").value;
      console.log(input);
      if (input == "+" || input == "-" || input == "*" || input == "/") {
        text = "Input OK";
        this.operator = input;
      } else {
        text = "Input not valid";
      }
      console.log(text);
      document.getElementById("msg-op").innerHTML = text;
    }
  }

  function generate() {
    console.log("digits = "+this.digits);
    console.log("timeLimit = "+this.timeLimit);
    console.log("operator = "+this.operator);
    let scale = Math.pow(10,this.digits);
    let a = new Array(this.cases);
    let b = new Array(this.cases);
    let c = new Array(this.cases);
    let temp0 = new Array(this.cases);
    let temp1 = new Array(this.cases);
    for (let i = 0; i < this.cases; i++) {
      temp0[i] = Math.floor((Math.random() * scale));
      temp1[i] = Math.floor((Math.random() * scale));
      //output to console for debug
      console.log("temp0["+i+"] = "+temp0[i]);
      console.log("temp1["+i+"] = "+temp1[i]);
    }
    for (let i = 0; i < this.cases; i++) {
      if(this.operator == "-") {
        a[i] = (temp0[i] > temp1[i]) ? temp0[i] : temp1[i];
        b[i] = (temp0[i] > temp1[i]) ? temp1[i] : temp0[i];
        c[i] = a[i] - b[i];
      }
      else if(this.operator == "+") {
        a[i] = temp0[i];
        b[i] = temp1[i];
        c[i] = a[i] + b[i];
      }
      else if(this.operator == "*") {
        a[i] = temp0[i];
        b[i] = temp1[i];
        c[i] = a[i] * b[i];
      }
      else if(this.operator == "/") {
        a[i] = (temp0[i] > temp1[i]) ? temp0[i] : temp1[i];
        b[i] = Math.floor(((temp0[i] > temp1[i]) ? temp1[i] : temp0[i])/3)+1; //make b smaller
        a[i] = Math.floor((a[i]/b[i]))*b[i];
        c[i] = Math.floor(a[i]/b[i]);
      }
      //output to console for debug
      console.log("a["+i+"] = "+a[i]);
      console.log("b["+i+"] = "+b[i]);
      console.log("c["+i+"] = "+c[i]);
    }
    this.in_a = a;
    this.in_b = b;
    this.ans = c;
    console.log("in a = "+this.in_a);
    console.log("in b = "+this.in_b);
    console.log("ans = "+this.ans);
    //display the problems
    let prbCollection = document.getElementsByTagName("prb");
    console.log(prbCollection);
    for (let i = 0; i < prbCollection.length; i++) {
      prbCollection[i].innerHTML = a[i] + " " + this.operator+ " " + b[i] + " = ";
    }
    console.log(document.getElementById("score"));
    document.getElementById("score").innerHTML = "";
    //clear previous input
    let inputCollection = document.getElementsByTagName("input"); //there are 53 "input"
    console.log(inputCollection);
    for (let i = 0; i < inputCollection.length; i++) {
      inputCollection[i+3].style.background = "#f0f0f0";
      inputCollection[i+3].value = "";
    }
  }
  function grade() {
    console.log("digits = "+this.digits);
    console.log("timeLimit = "+this.timeLimit);
    console.log("operator = "+this.operator);
    let inputCollection = document.getElementsByTagName("input"); //there are 53 "input"
    let ansList = document.forms["frm1"];
    console.log(ansList);
    let studentAns = new Array(this.cases);
    let score = 0;
    for (let i = 0; i < ansList.length; i++) {
      studentAns[i] = Number(ansList.ans[i].value);
      if(studentAns[i] == this.ans[i]) {
        score++;
      }
      else { //we ignore the first 3 input tag
        inputCollection[i+3].style.background = "#ff8080";
        inputCollection[i+3].style.color = "black";
        inputCollection[i+3].value = inputCollection[i+3].value + " -->" + this.ans[i];
      }
    }
    console.log(studentAns);
    if (score > 40) {
      document.getElementById("score").innerHTML = "Good Job! Your score: "+score+"/"+this.cases;
    }
    else {
      document.getElementById("score").innerHTML = "Keep working! Your score: "+score+"/"+this.cases;
    }
  }

