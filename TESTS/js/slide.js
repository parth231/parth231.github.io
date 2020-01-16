
      var funs = document.getElementById('load');
      function myfun(){
            funs.style.display = 'none';
      }                 
      function openNav(){
            document.getElementById("mySidenav").style.width = "100%";
            document.getElementById("main").style.visibility = "hidden";
            document.getElementById("main").style.transitionDelay = "0s";
      }
      function closeNav(){
            document.getElementById("mySidenav").style.width = "0";
            document.getElementById("main").style.visibility = "visible";
            document.getElementById("main").style.transitionDelay = "0.9s";
      }
      