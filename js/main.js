const elDesertCamel = document.querySelector(".desert__camel");
const elDesert = document.querySelector(".desert");
const elDesertLake = document.querySelector(".desert__lake");
const elDesertFemaleCamel = document.querySelector(".desert__camel--female");
const elDesertHunterFirst = document.querySelector('.desert__hunter--first');
const elDesertCarFirst = document.querySelector('.desert__car--first');
const elDesertHunterSecond = document.querySelector('.desert__hunter--second');
const elDesertCarSecond = document.querySelector('.desert__car--second');
const elDesertHeading = document.querySelector('.desert__heading')

let male = 1;

const go = setInterval(() => {
  setTimeout(() => {
    male++;
    elDesertCamel.style.marginLeft = String(male + "%");
  }, 500);

  setTimeout(() => {
    clearTimeout(go);
  }, 9000);

  setTimeout(() => {
    elDesertLake.style.display = "none";
  }, 16500);

  setTimeout(() => {
    elDesertCamel.style.transform = "rotateY(180deg)";
  }, 17000);

  setTimeout(() => {
      elDesertCamel.style.display = 'none'
  }, 27000);
}, 200);

let female = 1;

const come = setInterval(() => {
  setTimeout(() => {
    female++;
    elDesertFemaleCamel.style.marginRight = female + "%";
  }, 500);

  setTimeout(() => {
    clearTimeout(come);
  }, 5000);

  setTimeout(() => {
    female++;
    elDesertFemaleCamel.style.marginRight = female + "%";
  }, 17000);

  setTimeout(() => {
      elDesertFemaleCamel.style.display = 'none'
      elDesertHeading.style.display = 'block'
  }, 27500);
}, 200);

let secondHunter = 1

const hunterjonSecond = setInterval(() => {

    setTimeout(() => {
        elDesertHunterSecond.style.display = 'none'
    }, 0);

    setTimeout(() => {
    elDesertHunterSecond.style.display = 'none'
    }, 15500);

setTimeout(() => {
    secondHunter++
    elDesertHunterSecond.style.marginRight = secondHunter + '%'
    elDesertCarSecond.style.marginRight = secondHunter + '%'
}, 16000);

setTimeout(() => {
    clearInterval(hunterjonSecond)
}, 6000);

setTimeout(() => {
    elDesertHunterSecond.style.display = 'block'
}, 25500);

}, 200);

let hunter = 1

const hunterjon = setInterval(() => {
    setTimeout(() => {
      elDesertHunterFirst.style.display = 'none'
    }, 16500);

    setTimeout(() => {
        hunter++;
        elDesertHunterFirst.style.marginLeft = String(hunter + "%");
        elDesertCarFirst.style.marginLeft = hunter + '%'
      }, 17000);


      setTimeout(() => {
        elDesertHunterFirst.style.display = 'block'
    }, 25000);

      setTimeout(() => {
          clearTimeout(hunterjon)
      }, 6500);

}, 200);

