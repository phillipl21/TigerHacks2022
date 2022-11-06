const date = new Date();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();

function calculateHearnes() {
  let element = document.getElementById("arrivals-1");
  if (hours < 20 || hours > 4) {
    if (minutes < 20) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":20 - Hearnes";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
    } else if (minutes < 30) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
      element.innerHTML += "<br>" + (hours % 12).toString() + ":50 - Hearnes";
    } else if (minutes < 50) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":50 - Hearnes";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Student Center";
    } else {
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Student Center";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":20 - Hearnes";
    }
  } else if (hours === 4 && minutes > 50) {
    element.innerHTML += "<br>5:00 - Student Center";
    element.innerHTML += "<br>5:20 - Hearnes";
  } else if (hours <= 4) {
    element.innerHTML += "<br>4:50 - Hearnes";
    element.innerHTML += "<br>5:00 - Student Center";
  }
}

function calculateTrowbridge() {
  let element = document.getElementById("arrivals-2");
  if (hours < 20 || hours > 5) {
    if (minutes < 5) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":05 - Trowbridge";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":10 - University Hospital";
    } else if (minutes < 10) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":10 - University Hospital";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":15 - Student Center";
    } else if (minutes < 15) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":15 - Student Center";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":35 - Trowbridge";
    } else if (minutes < 35) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":35 - Trowbridge";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":40 - University Hospital";
    } else if (minutes < 40) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":40 - University Hospital";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":45- Student Center";
    } else if (minutes < 45) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":45- Student Center";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":05 - Trowbridge";
    } else {
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":05 - Trowbridge";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":10 - University Hospital";
    }
  } else if (hours <= 5) {
    element.innerHTML += "<br>6:05 - Towbridge<br>6:10 - University Hospital";
  }
}

function calculateReactor() {
  let element = document.getElementById("arrivals-3");
  if (hours < 20 || hours > 5) {
    if (minutes < 20) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":20 - 6th & Stewart";
      element.innerHTML += "<br>" + (hours % 12).toString() + ":30 - Reactor";
    } else if (minutes < 30) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":30 - Reactor";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":50 - 6th & Stewart";
    } else if (minutes < 50) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":50 - 6th & Stewart";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Reactor";
    } else {
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Reactor";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":20 - 6th & Stewart";
    }
  } else if (hours <= 5) {
    element.innerHTML += "<br>6:00 - Reactor";
    element.innerHTML += "<br>6:20 - 6th & Stewart";
  }
}
function calculateCampus() {
  let element = document.getElementById("arrivals-4");
  if ((hours === 0 && minutes < 15) || hours > 19) {
    if (minutes < 5) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":05 - Hearnes";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":10 - Trowbridge";
    } else if (minutes < 10) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":10 - Trowbridge";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":15 - Hitt & Cherry";
    } else if (minutes < 15) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":15 - Hitt & Cherry";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":20 - 6th & Stewart";
    } else if (minutes < 20) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":20 - 6th & Stewart";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
    } else if (minutes < 30) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
      element.innerHTML += "<br>" + (hours % 12).toString() + ":35 - Hearnes";
    } else if (minutes < 35) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":35 - Hearnes";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":40 - Trowbridge";
    } else if (minutes < 40) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":40 - Trowbridge";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":45 - Hitt & Cherry";
    } else if (minutes < 45) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":45 - Hitt & Cherry";
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":50 - 6th & Stewart";
    } else if (minutes < 50) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":50 - 6th & Stewart";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Trowbridge";
    } else {
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Trowbridge";
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":05 - Hearnes";
    }
  } else if (hours <= 19) {
    element.innerHTML += "<br>8:00 - Trowbridge";
    element.innerHTML += "<br>8:05 - Hearnes";
  }
}

export function calculateArrivals() {
  calculateHearnes();
  calculateTrowbridge();
  calculateReactor();
  calculateCampus();
}
