      document.getElementById("check").addEventListener("click", function() {

          checkletter();
      });
      document.getElementById("hint").addEventListener("click", function(event) {
          event.preventDefault()
          solveword();
      });

      document.getElementById("newgame").addEventListener("click", function() {

          location.reload();


      });

