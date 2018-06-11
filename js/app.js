function getData(url, callbackFunc) {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      callbackFunc(this);
    }
  };
  xhttp.open("GET", url, true);
  xhttp.send();
}

function successAjax(xhttp) {
  // Innen lesz elérhető a JSON file tartalma, tehát az adatok amikkel dolgoznod kell
  var userDatas = JSON.parse(xhttp.responseText);
  var ship = userDatas[2].data;
  arSzerintiRendezes(ship);
  szereploTorles(ship);
  nullErtekekModositasa(ship);
  szereplok(ship);

  function arSzerintiRendezes(tomb) {
    var i = tomb.length - 1;
    var tmp;
    var swap = false;
    do {
      swap = false;
      for (var j = 0; j < i; j++) {

        if (tomb[j].cost_in_credits > tomb[j + 1].cost_in_credits) {
          tmp = tomb[j];
          tomb[j] = tomb[j + 1];
          tomb[j + 1] = tmp;
          swap = true;
        }
      }
      i--;
    } while (i >= 0 && swap)
    return tomb;
  }

  console.log(arSzerintiRendezes(ship));


  function szereploTorles(tomb) {
    for (var i = 0; i < tomb.length; i++) {

      //  if (tomb[i].consumables === null) {
      if (!tomb[i].consumables) {
        tomb.splice(i, 1);
      }
    }
    return tomb;
  }

  console.log(szereploTorles(ship));


  function nullErtekekModositasa(tomb) {

    for (var i = 0; i < tomb.length; i++) {
      for (var j in tomb) {
        // if (!tomb[i]) {
        if (tomb[i][j] === null) {
          tomb[i][j] = 'unknown';
        }
      }
    }
    return tomb;
  }

  console.log(nullErtekekModositasa(ship));


  function szereplok(tomb) {
    for (var i = 0; i < tomb.length; i++) {

      var character = document.querySelector('.shapceship-list');

      var divecske = document.createElement('div');
      divecske.setAttribute("id", tomb[i].id);

      divecske.setAttribute("class", 'hajo');
      character.appendChild(divecske);

      var kep = document.createElement('img');
      var model = document.createElement('p');
      var consumables = document.createElement('p');
      var denomination = document.createElement('p');
      var cargo_capacity = document.createElement('p');
      var passengers = document.createElement('p');
      var max_atmosphering_speed = document.createElement('p');
      var crew = document.createElement('p');
      var lengthiness = document.createElement('p');
      var cost_in_credits = document.createElement('p');
      var manufacturer = document.createElement('p');


      kep.setAttribute("src", "/img/" + tomb[i].image);
      kep.classList.add('hajokep');
      divecske.appendChild(kep);

      model.innerHTML = "Model: " + tomb[i].model;
      divecske.appendChild(model);

      consumables.innerHTML = "Consumables: " + tomb[i].consumables;
      divecske.appendChild(consumables);

      denomination.innerHTML = "Denomination: " + tomb[i].denomination;
      cargo_capacity.appendChild(denomination);

      cargo_capacity.innerHTML = "Cargo capacity: " + tomb[i].cargo_capacity;
      divecske.appendChild(cargo_capacity);

      passengers.innerHTML = "Passengers: " + tomb[i].passengers;
      divecske.appendChild(passengers);

      max_atmosphering_speed.innerHTML = "Max atmosphering speed: " + tomb[i].max_atmosphering_speed;
      divecske.appendChild(max_atmosphering_speed);

      crew.innerHTML = "Crew: " + tomb[i].crew;
      divecske.appendChild(crew);

      lengthiness.innerHTML = "Lengthiness : " + tomb[i].lengthiness;
      divecske.appendChild(lengthiness);

      cost_in_credits.innerHTML = "Cost_in_credits: " + tomb[i].cost_in_credits;
      divecske.appendChild(cost_in_credits);

      manufacturer.innerHTML = "Manufacturer: " + tomb[i].manufacturer;
      divecske.appendChild(manufacturer);
    }
  }

  var infocharacter = document.querySelector('.shapceship-list');
  var infodiv = document.createElement('div');
  infodiv.setAttribute("class", 'informacio');
  infocharacter.appendChild(infodiv);
  var informaciok = document.createElement('p');

  informaciok.innerHTML = "Egy fős (crew = 1) legénységgel rendelkező hajók darabszáma." + darabszam(ship) + "<br>" + " A legnagyobb cargo_capacity-vel rendelkező hajó neve (model): " + legnagyobbCargoCapacity(ship) + "<br>" + "Az összes hajó utasainak (passengers) összesített száma: " + osszesUtasszam(ship);
  // osszesUtasszam(ship);
  //leghosszabbHajoKepe(ship);
  infodiv.appendChild(informaciok);

  console.log(darabszam(ship));
  console.log(legnagyobbCargoCapacity(ship));

  function EventListener() {
    var gomb = document.querySelector('#search-button');
    gomb.addEventListener('click', kereses);

  }
  EventListener();



  function kereses() {
    // console.log(ship);
    var charactermodel = document.querySelector('#search-text').value;
    var szoveg = '';
    var talalat = 0;

    var jobbcharacter = document.querySelector('.one-spaceship');

    var jobbdivecske = document.createElement('div');

    jobbcharacter.appendChild(jobbdivecske);

    var jobbkep = document.createElement('img');
    var jobbmodel = document.createElement('p');
    var jobbconsumables = document.createElement('p');
    var jobbdenomination = document.createElement('p');
    var jobbcargo_capacity = document.createElement('p');
    var jobbpassengers = document.createElement('p');
    var jobbmax_atmosphering_speed = document.createElement('p');
    var jobbcrew = document.createElement('p');
    var jobblengthiness = document.createElement('p');
    var jobbcost_in_credits = document.createElement('p');
    var jobbmanufacturer = document.createElement('p');

    jobbkep.setAttribute("src", "/img/" + ship[i].image);
    jobbkep.classList.add('jobbhajokep');
    jobbdivecske.appendChild(jobbkep);

    jobbmodel.innerHTML = "Model: " + ship[i].model;
    jobbdivecske.appendChild(jobbmodel);

    jobbconsumables.innerHTML = "Consumables: " + ship[i].consumables;
    jobbdivecske.appendChild(jobbconsumables);

    jobbdenomination.innerHTML = "Denomination: " + ship[i].denomination;
    jobbcargo_capacity.appendChild(jobbdenomination);

    jobbcargo_capacity.innerHTML = "Cargo capacity: " + ship[i].cargo_capacity;
    jobbdivecske.appendChild(jobbcargo_capacity);

    jobbpassengers.innerHTML = "Passengers: " + ship[i].passengers;
    jobbdivecske.appendChild(jobbpassengers);

    jobbmax_atmosphering_speed.innerHTML = "Max atmosphering speed: " + ship[i].max_atmosphering_speed;
    jobbdivecske.appendChild(jobbmax_atmosphering_speed);

    jobbcrew.innerHTML = "Crew: " + ship[i].crew;
    jobbdivecske.appendChild(jobbcrew);

    jobblengthiness.innerHTML = "Lengthiness : " + ship[i].lengthiness;
    jobbdivecske.appendChild(jobblengthiness);

    jobbcost_in_credits.innerHTML = "Cost_in_credits: " + ship[i].cost_in_credits;
    jobbdivecske.appendChild(jobbcost_in_credits);

    jobbmanufacturer.innerHTML = "Manufacturer: " + ship[i].manufacturer;
    jobbdivecske.appendChild(jobbmanufacturer);

    for (var i = 0; i < ship.length; i++) {

      if (ship[i].model.toLowerCase().indexOf(charactermodel.toLowerCase()) != -1) {
        talalat = 1;

        var charactermodel = document.querySelector('#search-text').value;
        var szoveg = '';
        var talalat = 0;

        var jobbcharacter = document.querySelector('.one-spaceship');

        var jobbdivecske = document.createElement('div');

        var jobbkep = document.createElement('img');
        var jobbmodel = document.createElement('p');
        var jobbconsumables = document.createElement('p');
        var jobbdenomination = document.createElement('p');
        var jobbcargo_capacity = document.createElement('p');
        var jobbpassengers = document.createElement('p');
        var jobbmax_atmosphering_speed = document.createElement('p');
        var jobbcrew = document.createElement('p');
        var jobblengthiness = document.createElement('p');
        var jobbcost_in_credits = document.createElement('p');
        var jobbmanufacturer = document.createElement('p');

        jobbkep.setAttribute("src", "/img/" + ship[i].image);
        jobbkep.classList.add('jobbhajokep');
        jobbdivecske.appendChild(jobbkep);

        jobbmodel.innerHTML = "Model: " + ship[i].model;
        jobbdivecske.appendChild(jobbmodel);

        jobbconsumables.innerHTML = "Consumables: " + ship[i].consumables;
        jobbdivecske.appendChild(jobbconsumables);

        jobbdenomination.innerHTML = "Denomination: " + ship[i].denomination;
        jobbcargo_capacity.appendChild(jobbdenomination);

        jobbcargo_capacity.innerHTML = "Cargo capacity: " + ship[i].cargo_capacity;
        jobbdivecske.appendChild(jobbcargo_capacity);

        jobbpassengers.innerHTML = "Passengers: " + ship[i].passengers;
        jobbdivecske.appendChild(jobbpassengers);

        jobbmax_atmosphering_speed.innerHTML = "Max atmosphering speed: " + ship[i].max_atmosphering_speed;
        jobbdivecske.appendChild(jobbmax_atmosphering_speed);

        jobbcrew.innerHTML = "Crew: " + ship[i].crew;
        jobbdivecske.appendChild(jobbcrew);

        jobblengthiness.innerHTML = "Lengthiness : " + ship[i].lengthiness;
        jobbdivecske.appendChild(jobblengthiness);

        jobbcost_in_credits.innerHTML = "Cost_in_credits: " + ship[i].cost_in_credits;
        jobbdivecske.appendChild(jobbcost_in_credits);

        jobbmanufacturer.innerHTML = "Manufacturer: " + ship[i].manufacturer;
        jobbdivecske.appendChild(jobbmanufacturer);
      }
    }
    if (talalat == 0) {
      szoveg = "nincs találat";
    }
  }


  function darabszam(tomb) {
    var darab = 0;
    for (var i = 0; i < tomb.length; i++) {
      if (tomb[i].crew == 1) {
        darab += 1;
      }
    }
    return darab;
  }

  function legnagyobbCargoCapacity(tomb) {
    var legnagyobb = tomb[0].cargo_capacity;
    var index = 0;
    for (var i = 0; i < tomb.length; i++) {
      if (tomb[i].cargo_capacity > legnagyobb) {
        legnagyobb = tomb[i].cargo_capacity;
        index = i;
      }
      var nev = tomb[index].model;
    }
    return nev;
  }


  function osszesUtasszam(tomb) {
    var osszesen = 0;
    for (var i = 0; i < tomb.length; i++) {
      osszesen = osszesen + tomb[i].passengers;
    }
    return osszesen;
  }

  function leghosszabbHajoKepe(tomb) {
    var leghosszabb = tomb[0];
    var index;
    for (var i = 0; i < tomb.length; i++) {
      if (tomb[i].lengthiness > leghosszabb) {
        leghosszabb = tomb[i].lengthiness;
        index = i;
      }
      var kep = "src=" + tomb[index].image;
    }
    return kep;
  }

}
getData('/json/spaceships.json', successAjax);