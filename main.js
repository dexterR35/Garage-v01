

/*
//1 O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale

compare1 = function (a, b) {
    if (a == b) {
        return true;
    } else {
        return false;
    }
}
console.log(compare1(2, 3));
console.log(compare1(3, 3));



//2 O functie care compara 2 calori si retuneaza -1 daca primul e mai mic ca al doilea si 0 daca sunt egale si 1 daca primul e mai mare ca al doilea

compare2 = function (a, b) {
    if (a < b) {
        return -1;
    } else if (a == b) {
        return 0;
    } else if (a > b) {
        return 1;
    }
}
console.log(compare2(2, 3));
console.log(compare2(3, 3));
console.log(compare2(5, 3));


//3 O functie care primeste 2 valori si returneaza maximul dintre cele doua


maxim = function (a, b) {
    if (a > b) {
        return "5 si 3 .maxim = 5";
    }
}
console.log(maxim(5, 3));


//O functie care primeste 2 calori si retuneaza minimul dintre cele 2

minim = function (a, b) {
    if (a > b) {
        return "5 si 3.minim = 3";
    }
}
console.log(minim(5, 3));


// O functie care intoarce suma primelor N numere naturale pozitive

suma = function (N) {
    var suma = 0;
    if (N > 0) {
        for (var i = 1; i <= N; i++) {
            suma += i;

        }
    }
    return suma;
}
console.log(suma(10));


// O functine care verifica daca n este numar prim  (restul impartirii la 1 si la n == 0);

primFunction = function(N) {
    var prim = 0;
    for(var i=0;i<=N; i++){
        if(N % i == 0) {
            prim += 1;
        }
    }
        if (prim == 2) {
            return "este numar prim";

        }else{
            return "nu este numar prim";
        }
}
console.log(primFunction(2));
console.log(primFunction(4));

*/


const reset = document.getElementsByClassName('myForm');

var trueORfalse = function() {
  /*Tema 1
  O functie care compara 2 valori si returneaza true daca sunt egale si false daca nu sunt egale.*/
  let output = document.getElementsByClassName("output")[0];
  let getNumber = document.getElementsByClassName("number");

  if (getNumber[0].value == getNumber[1].value) {
    output.style.color = "green";
    output.innerHTML = true;
  } else {
    output.style.color = "red";
    output.innerHTML = false;
  }
  setTimeout(function() {
    reset[0].reset();
    output.innerHTML = "";
  }, 3000);
};

var greaterORless = function() {
  /*Tema 2
  O functie care compara 2 valori si returneaza -1 daca primul e mai
  mic ca al doilea, 0 daca sunt egale si 1 daca primul e mai mare ca
  al doilea.*/
  let output = document.getElementsByClassName("output")[1];
  let getNumber = document.getElementsByClassName("number");

  if (getNumber[2].value < getNumber[3].value) {
    output.style.color = "red";
    output.innerHTML = -1;
  } else if (getNumber[2].value == getNumber[3].value) {
    output.style.color = "black";
    output.innerHTML = 0;
  } else {
    output.style.color = "green";
    output.innerHTML = 1;
  }
  setTimeout(function() {
    reset[1].reset();
    output.innerHTML = "";
  }, 3000);
};

var maxNumber = function() {
  /*Tema 3
  O functie care primeste 2 valori si returneaza maximul dintre cele
  2.*/
  let output = document.getElementsByClassName("output")[2];
  let getNumber = document.getElementsByClassName("number");

  output.innerHTML = Math.max(getNumber[4].value, getNumber[5].value);
  setTimeout(function() {
    reset[2].reset();
    output.innerHTML = "";
  }, 3000);
};

var minNumber = function() {
  /*Tema 4
  O functie care primeste 2 valori si returneaza minimul dintre cele
  2.*/
  let output = document.getElementsByClassName("output")[3];
  let getNumber = document.getElementsByClassName("number");

  output.innerHTML = Math.min(getNumber[6].value, getNumber[7].value);
  setTimeout(function() {
    reset[3].reset();
    output.innerHTML = "";
  }, 3000);
};

var primNumbersPositive = function() {
  /*Tema 5
  O functie care intoarce suma primelor N numere naturale pozitive.*/
  let output = document.getElementsByClassName("output")[4];
  let getNumber = document.getElementsByClassName("number");

  let sum = 0;
  for (let i = 1; i <= getNumber[8].value; i++) {
    output.innerHTML = sum += i;
  }
  setTimeout(function() {
    reset[4].reset();
    output.innerHTML = "";
  }, 3000);
};

var nPrimNumbers = function() {
  /*Tema 6
  O functie care verifica daca N este numar prim (restul impartirii la
  1 si la N ==0).*/
  let output = document.getElementsByClassName("output")[5];
  let getNumber = document.getElementsByClassName("number");

  let prim = 0;
  for (var i = 2; i <= getNumber[9].value / 2; i++) {
    if (getNumber[9].value % i == 0) {
      prim = 1;
      break;
    }
  }
  if (prim == 0) {
    output.innerHTML = getNumber[9].value + " " + "este prim.";
  } else {
    output.innerHTML = getNumber[9].value + " " + "nu este prim.";
  }
  setTimeout(function() {
    reset[5].reset();
    output.innerHTML = "";
  }, 3000);
};

var primNumbers = function() {
  /*Tema 7
  O functie care intoarce suma primelor N numere prime.*/
  let output = document.getElementsByClassName("output")[6];
  let getNumber = document.getElementsByClassName("number");

  let sum = 0,
    counter = 0,
    n = 2;
  while (counter < getNumber[10].value) {
    prim = 1;
    for (var i = 2; i <= n / 2; i++) {
      if (n % i == 0) {
        prim = 0;
        break;
      }
    }
    if (prim == 1) {
      counter++;
      sum += n;
    }
    n++;
  }
  output.innerHTML = sum;
  setTimeout(function() {
    reset[6].reset();
    output.innerHTML = "";
  }, 3000);
};

var reverseString = function() {
  /*Tema 8
  O functie care primeste un parametru de tip string si intoarce inversul acestuia (abc => cba).*/
  let output = document.getElementsByClassName("output")[7];
  let getNumber = document.getElementsByClassName("number");

  var v = "";
  var s = getNumber[11].value;
  for (var i = s.length - 1; i >= 0; i--) {
    v += s[i];
  }
  output.innerHTML = v;
  setTimeout(function() {
    reset[7].reset();
    output.innerHTML = "";
  }, 3000);
};

var oddPositiveNumbers = function() {
  /*Tema 9
  O functie care intoarce produsul primelor N numere impare pozitive.*/
  let output = document.getElementsByClassName("output")[8];
  let getNumber = document.getElementsByClassName("number");

  var sum = 0,
    cifra = 1;
  for (var counter = 0; counter < getNumber[12].value; counter++) {
    sum += cifra;
    cifra += 2;
  }
  output.innerHTML = sum;
  setTimeout(function() {
    reset[8].reset();
    output.innerHTML = "";
  }, 3000);
};

var xInArray = document.getElementById("xInArray").onclick = function() {
  /*Tema 10
  O functie care primeste 2 parametri(arr - array de nr intregi si x - numar) si verifica daca x exista in
  array.*/
  var checkXInArray = function(arr, x) {
    let output = document.getElementsByClassName("output")[9];
    let getNumber = document.getElementsByClassName("number");

    arr = getNumber[13].value;
    x = getNumber[14].value;
    var array = arr.split(" ");
    for (var i = 0; i < array.length; i++) {
      if (x == array[i]) {
        output.innerHTML = x + ' apartine vectorului.';
        return 0;
      }
    }
    output.innerHTML = x + ' nu apartine vectorului.';
  };
  checkXInArray();
  setTimeout(function() {
    reset[9].reset();
    output.innerHTML = "";
  }, 3000);
};

var maxOfArray = function(arr) {
  /*Tema 11
  O functie care intoarce maximul dintr-un array primit ca parametru.*/
  let output = document.getElementsByClassName("output")[10];
  let getNumber = document.getElementsByClassName("number");

  arr = getNumber[15].value.split(" ");
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  output.innerHTML = Number(max);
  setTimeout(function() {
    reset[10].reset();
    output.innerHTML = "";
  }, 3000);
};

var sumMaxMinArray = function(arr) {
  /*Tema 12
  O functie care intoarce suma dintre max si min, dintr-un array primit ca parametru.*/
  let output = document.getElementsByClassName("output")[11];
  let getNumber = document.getElementsByClassName("number");

  arr = getNumber[16].value.split(" ");
  var sum = 0,
    min = arr[0],
    max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  sum = Number(max) + Number(min);
  output.innerHTML = sum;
  setTimeout(function() {
    reset[11].reset();
    output.innerHTML = "";
  }, 3000);
};

var doubleInArray = function(arr) {
  /*Tema 13
  O functie care verifica daca exista duplicate intr-un array primit ca parametru.*/
  let output = document.getElementsByClassName("output")[12];
  let getNumber = document.getElementsByClassName("number");

  arr = getNumber[17].value.split(" ");
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j] && i != j) {
        output.innerHTML = 'Double';
        break;
      } else {
        output.innerHTML = 'Not Double';
      }
    }
  }
  setTimeout(function() {
    reset[12].reset();
    output.innerHTML = "";
  }, 3000);
};

var produsOfArray = function(arr) {
  /*Tema 14
  O functie care intoarce produsul numerelor pozitive intr-un array primit ca parametru.*/
  let output = document.getElementsByClassName("output")[13];
  let getNumber = document.getElementsByClassName("number");

  arr = getNumber[18].value.split(" ");
  var sum = 1;
  for (var i = 0; i < arr.length; i++) {
    sum *= Number(arr[i]);
  }
  output.innerHTML = sum;
  setTimeout(function() {
    reset[13].reset();
    output.innerHTML = "";
  }, 3000);
};


var palindrom = function(palindromString) {
  /*Tema 15
  O functie care verifica daca un string primit ca parametru este palindrom (inversul == originalul, ex: abcba == abcba, abca != acba.*/
  let output = document.getElementsByClassName("output")[14];
  let getNumber = document.getElementsByClassName("number");

  palindromString = getNumber[19].value;
  var str = palindromString.length;
  for (var i = 0; i < str / 2; i++) {
    if (palindromString[i] !== palindromString[str - 1 - i]) {
      return [output.innerHTML = 'Not Palindrome'];
    }
  }
  output.innerHTML = 'Palindrome';
  setTimeout(function() {
    reset[14].reset();
    output.innerHTML = "";
  }, 3000);
};
