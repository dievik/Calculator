const eredmeny = document.getElementById("eredmeny");

function muveletek(value) {
  eredmeny.innerHTML += value;
}

function eredmeny(value) {
  eredmeny.value=="" ? "" : eredmeny.innerHTML = eval(eredmeny.value);
}

function torol(value) {
  eredmeny.innerHTML = value;
}
      
function visszavon(value) {
  eredmeny.innerHTML = eredmeny.value.slice(0, -1);
}
