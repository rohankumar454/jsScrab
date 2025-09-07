🐻‍❄️🐻‍❄️🐻‍❄️ MINI PROJECTS 🐻‍❄️🐻‍❄️🐻‍❄️
//-------------touchAndChange-------------------//
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1{
            text-align: center;
            font-size: 4rem;
            background-color: orange;

        }
        .boxes{
            display: flex;
            gap: 20px;
            justify-content: center;
            align-items: center;
            

        }
        .box1,.box2,.box3{
            width: 150px;
            height: 150px;
            background-color: rgb(71, 66, 66);
        }

    </style>
</head>
<body>
    <h1>touch&change</h1>
    <div class="boxes">
        <div id="red" class="box1 box" style="background-color: red;"></div>
        <div id="green" class="box2 box" style="background-color: green;"></div>
        <div id = "blue" class="box3 box" style="background-color: blue;"></div>
    </div>
</body>
<script>
    let box = document.querySelectorAll(".box")
    box.forEach(function(box){
        box.addEventListener('click', function(box){
            if(box.target.id === "red"){
                document.body.style.backgroundColor = "#F87C63"
            }else if(box.target.id == "green"){
                document.body.style.backgroundColor = "#92F6BC"
            }else{
                document.body.style.backgroundColor = "#6896F3"
            }
        })
    })
</script>
</html>









//----------bmi calculator--------------//
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <style>
    #submit{
      width: 345px;
      height: 50px;
      background-color: greenyellow;
      border: none;
    }
    #resultNum{
      color: white;
      font-size: 50px;
    }
    .result{
      background-color: rgb(65, 105, 111);
      width: 345px;
      text-align: center;
    }
    #height{
      height: 30px;
      background-color: rgb(255, 205, 205);
    }
    #weight{
      height: 30px;
      background-color: rgb(231, 188, 188);
    }
    h2{
      color:rgb(246, 246, 246);
      background-color: rgb(35, 82, 63);
      width: 345px;
    }
    h1{
      font-size: 4rem;
    }
  </style>
</head>
<body style="background-color: rgb(40, 39, 39); text-align: ce;">
  <h1 style="color: bisque;">BMI CALCULATOR</h1>
  <h2>BMI STANDARD :: 18.5 TO 24.9</h2>
  <input id="weight" type="number", placeholder="Weight(kg)">
  <input id="height" type="number", placeholder="Height(m)">
 
  <div class="result" id="result">
    <p id="resultNum">00</p>
  </div>

  <input id="submit" type="submit">


</body>
<script>
  
  let submit = document.querySelector("#submit")
  submit.addEventListener("click", function(){
    let weight = parseFloat(document.querySelector("#weight").value)
  let height = parseFloat(document.querySelector("#height").value)
    let bmi = weight/(height*height)
    document.querySelector("#resultNum").innerHTML = bmi.toFixed(2)
  })
</script>
</html>






//------------digital clock----------------//
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        h1 {
            text-align: center;
            font-size: 4rem;
            color: rgb(143, 239, 95);
            margin-top: 150px;
        }

        .display {
            background-color: bisque;
            text-align: center;
            font-size: 2.5rem;
            margin-top: -40px;

        }

        body {
            background-color: rgb(46, 45, 45);
        }

        
    </style>
</head>

<body>
    <div class="main">
        <h1>digital<span id="sp" style="color: rgb(136, 190, 253);">Clock</span></h1>
        <div class="display">
            <h2 id="digit">00:00:00</h2>
        </div>
    </div>

</body>
<script>

    setInterval(function(){
        let date = new Date()
        document.getElementById('digit').innerHTML = date.toLocaleTimeString()
    }, 1000)

</script>

</html>






//----------------------------events in js-------------------//

