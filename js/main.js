 $(document).ready(function() {

     var num1 = 0;
     var num2 = 0;
     var opp = "";
     var result = 0;
     var isOperatorChosen = false;
     var isCalculated = false;

     function Start() {
        num1 = "";
        num2 = "";
        opp = "";
        isOperatorChosen = false;
        isCalculated = false;

     $("#first-number, #second-number, #operator, #result").empty();
      }


      $(".num").on("click", function() {

        // Check if we've already run a calculation, if so... we'll just.
        if (isCalculated) {
          return false;
        }

        // If operator is chosen, we should be writing the secondNumber, otherwise, the firstNumber
        if (isOperatorChosen) {
          num2 += $(this).val();
          $("#second-number").html(num2);

        }
        else {
          num1 += $(this).val();
          $("#first-number").text(num1);
        }

      });
      $(".operator").on("click", function() {
        if (!num1 || isCalculated) {
          return false;
        }

        isOperatorChosen = true;
        opp = $(this).val();
        $("#operator").text($(this).text());

      });
      $(".equal").on("click", function() {
        if (isCalculated) {
          return false;
        }
    
      isCalculated = true;
        num1 = parseInt(num1);
        num2 = parseInt(num2);

        if (opp === "plus") {
            result = num1 + num2;
        }

        else if (opp === "minus") {
            result = num1 - num2;
        }

        else if (opp === "times") {
            result = num1 * num2;
            
        }

        else if (opp === "divide") {
          result = num1 / num2;
        }

        else if (opp === "power") {
          result = Math.pow(num1, num2);
        }

        $("#result").text(result);

      });
      $(".clear").on("click", function() {
        Start();
      });
      Start();
    });
