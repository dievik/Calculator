const eredmeny = document.getElementById("eredmeny");

function muveletek(value) {
  eredmeny.innerHTML += value;
}

function billentyuzet(event) {
  switch (event.keyCode) {
    case 8:
      eredmeny.innerHTML = eredmeny.value.slice(0, -1);
    break;
    case 13:
      eredmeny.value=="" ? "" : eredmeny.innerHTML = eval(eredmeny.value);
    break;
    case 46:
      eredmeny.innerHTML = "";
    break;
    case 48:
    case 49:
    case 50:
    case 51:
    case 52:
    case 53:
    case 54:
    case 55:
    case 56:
    case 57:
    case 96:
    case 97:
    case 98:
    case 99:
    case 100:
    case 101:
    case 102:
    case 103:
    case 104:
    case 105:
    case 106:
    case 107:
    case 109:
    case 110:
    case 111:
    case 190:
      eredmeny.innerHTML += event.key;
    break;
    default:
      eredmeny.value;
    break;
  }
}

function kiszamol(value) {
  eredmeny.value=="" ? "" : eredmeny.innerHTML = eval(eredmeny.value);
}

function torol(value) {
  eredmeny.innerHTML = value;
}
      
function visszavon(value) {
  eredmeny.innerHTML = eredmeny.value.slice(0, -1);
}
