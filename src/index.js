function modalOpener(modal) {
    let x = document.getElementById(modal);
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  function modalCloser(first_modal, second_modal) {
    let x = document.getElementById(first_modal);
    let y = document.getElementById(second_modal);
    if (x.style.display === "block") {
      x.style.display = "none";
      y.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none"
    }
  }

  function severalModals(first_modal, second_modal,third_modal,pic){
    let x = document.getElementById(first_modal);
    let y = document.getElementById(second_modal);
    let z = document.getElementById(third_modal);
    let p = document.getElementById(pic);
    if (x.style.display === "block" ) {
      x.style.display = "none";
      y.style.display = "block";
      z.style.display = "block";
      p.style.display = "block";
    } else {
      x.style.display = "block";
      y.style.display = "none"
      z.style.display = "none";
      p.style.display = "none";
    }
  }

  function fourthStage(first_modal, second_modal,third_modal,fourth_modal, fifth_modal){
    let a = document.getElementById(first_modal);
    let b = document.getElementById(second_modal);
    let c = document.getElementById(third_modal);
    let d = document.getElementById(fourth_modal);
    let e = document.getElementById(fifth_modal);
    if (a.style.display === "block" ) {
      a.style.display = "none";
      b.style.display = "block";
      c.style.display = "block";
      d.style.display = "block";
      e.style.display = "block";
    } else {
      a.style.display = "block";
      b.style.display = "none"
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
    }
  }
  
function five(first_modal, second_modal,third_modal,fourth_modal, fifth_modal,sixth_modal){
    let a = document.getElementById(first_modal);
    let b = document.getElementById(second_modal);
    let c = document.getElementById(third_modal);
    let d = document.getElementById(fourth_modal);
    let e = document.getElementById(fifth_modal);
    let f = document.getElementById(sixth_modal);
    if (a.style.display === "block" ) {
      a.style.display = "none";
      
      b.style.display = "block";
      c.style.display = "block";
      d.style.display = "block";
      e.style.display = "block";
      f.style.display = "block";
    } else {
      a.style.display = "block";
      b.style.display = "none"
      c.style.display = "none";
      d.style.display = "none";
      e.style.display = "none";
      f.style.display = "none";
    }
}
function show(first){
    document.getElementById(first).style.display = 'block';
}
function one_sec(first)
{   
    setTimeout(function() {
        document.getElementById(first).style.display = 'block';
    }, 1000);
}

function two_sec(first)
{   
    setTimeout(function() {
        document.getElementById(first).style.display = 'block';
    }, 2000);
}

function three_sec(first)
{   
    setTimeout(function() {
        document.getElementById(first).style.display = 'block';
    }, 3000);
}

function four_sec(first,second)
{   
    setTimeout(function() {
        
        document.getElementById(first).style.display = 'block';
        document.getElementById(second).style.display = 'none';
       
    }, 4000);
}