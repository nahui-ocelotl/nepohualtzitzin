function checkAll1() {

  var inputs = document.querySelectorAll('.check1');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }

  this.onclick = uncheckAll1;
}

function uncheckAll1() {
  var inputs = document.querySelectorAll('.check1');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  this.onclick = checkAll1; //function reference to original function
}

var el = document.getElementById("checkall1"); //let for ES6 aficionados 
el.onclick = checkAll1; //again, function reference, no ()

//-----------------------------------------------------------------------

function checkAll2() {

  var inputs = document.querySelectorAll('.check2');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }

  this.onclick = uncheckAll2;
}

function uncheckAll2() {
  var inputs = document.querySelectorAll('.check2');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  this.onclick = checkAll2; //function reference to original function
}

var el = document.getElementById("checkall2"); //let for ES6 aficionados 
el.onclick = checkAll2; //again, function reference, no ()

//-----------------------------------------------------------------------

function checkAll3() {

  var inputs = document.querySelectorAll('.check3');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }

  this.onclick = uncheckAll3;
}

function uncheckAll3() {
  var inputs = document.querySelectorAll('.check3');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  this.onclick = checkAll3; //function reference to original function
}

var el = document.getElementById("checkall3"); //let for ES6 aficionados 
el.onclick = checkAll3; //again, function reference, no ()

//-----------------------------------------------------------------------

function checkAll4() {

  var inputs = document.querySelectorAll('.check4');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = true;
  }

  this.onclick = uncheckAll4;
}

function uncheckAll4() {
  var inputs = document.querySelectorAll('.check4');
  for (var i = 0; i < inputs.length; i++) {
    inputs[i].checked = false;
  }

  this.onclick = checkAll4; //function reference to original function
}

var el = document.getElementById("checkall4"); //let for ES6 aficionados 
el.onclick = checkAll4; //again, function reference, no ()

//-----------------------------------------------------------------------