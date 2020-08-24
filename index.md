<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <link rel="stylesheet" type="text/css" href="css/styleA.css" />
  <script src="js/welcome.js"></script>
  <script src="js/generate.js"></script>
  <!--
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>  
  <script src="https://code.jquery.com/jquery-1.10.2.js"></script>  
  <link href="http://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css" rel="stylesheet">  
  <script src="http://code.jquery.com/ui/1.10.4/jquery-ui.js"></script> 
  <script>  
    $(document).ready(function(){  
      $("button").click(function(){  
        $("p").html("Hello <b>Javatpoint.com</b>");  
      });  
    });  
  </script>  
    -->  
  <title>Fast 50 by Ryan Kan</title>
</head>

<body>
  <h2>Fast 50 by Ryan Kan: input selections.</h2>

  <pIn>Please input a number between <pIn class="s0">1</pIn> and <pIn class="s0">5</pIn> for number of digits:</pIn><br>
  <input id="dg">
  <button type="button" onclick="setParam.call(sheet,'dg')">Submit</button>
  <p id="msg-dg"></p>

  <pIn>Please input either <pIn class="s0">1</pIn> or <pIn class="s0">2</pIn> minutes for time limit:</pIn><br>
  <input id="tl">
  <button type="button" onclick="setParam.call(sheet,'tl')">Submit</button>
  <p id="msg-tl"></p>

  <pIn>Please input one of four operators <pIn class="s0"><b>+ - * / </b></pIn> for operation:</pIn><br>
  <input id="op">
  <button type="button" onclick="setParam.call(sheet,'op')">Submit</button>
  <p id="msg-op"></p>

  <script>
    var sheet = {
      cases: 50, 
      digits: 1,
      timeLimit: 1,
      operator: "+",
      in_a: [],
      in_b: [],
      ans: []
    };
  </script>
  <button type="button" onclick="generate.call(sheet)">Click here to generate a new worksheet</button><br><br>
  <p1 id="score"></p1>
  <form id="frm1">  
  <div class="row">
    <div class="column">
      <prb id="prob0"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob1"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob2"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob3"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob4"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob5"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob6"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob7"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob8"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob9"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob10"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob11"></prb><input type="text" id="ans" name="ans"/><br>
    </div>
    <div class="column">
      <prb id="prob12"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob13"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob14"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob15"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob16"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob17"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob18"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob19"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob20"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob21"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob22"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob23"></prb><input type="text" id="ans" name="ans"/><br>
    </div>
    <div class="column">
      <prb id="prob24"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob25"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob26"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob27"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob28"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob29"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob30"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob31"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob32"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob33"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob34"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob35"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob36"></prb><input type="text" id="ans" name="ans"/><br>
    </div>
    <div class="column">
      <prb id="prob37"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob38"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob39"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob40"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob41"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob42"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob43"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob44"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob45"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob46"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob47"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob48"></prb><input type="text" id="ans" name="ans"/><br>
      <prb id="prob49"></prb><input type="text" id="ans" name="ans"/><br>
    </div>
  </div>
  </form>  
  <button onclick="grade.call(sheet)">Submit Your Answers</button>

</body>

</html>
