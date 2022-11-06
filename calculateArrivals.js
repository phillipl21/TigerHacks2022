const date = new Date();
const day = date.getDay();
const hours = date.getHours();
const minutes = date.getMinutes();

function calculateHearnes() {
  let element = document.getElementById("arrivals-1");
  if (hours < 20 || hours > 4) {
    if (minutes < 20) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":20 - Hearnes";
    } else if (minutes < 30) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
    } else if (minutes < 50) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":50 - Hearnes";
    } else {
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Student Center";
    }
  } else if (hours === 4 && minutes > 50) {
    element.innerHTML += "<br>5:00 - Student Center";
  } else if (hours <= 4) {
    element.innerHTML += "<br>4:50 - Student Center";
  }

  let minutes1 = minutes + 30;
  let hours1 = hours + Math.floor(minutes1 / 60);
  if (hours1 < 20 || hours1 > 4) {
    if (minutes1 < 20) {
      element.innerHTML += "<br>" + (hours1 % 12).toString() + ":20 - Hearnes";
    } else if (minutes1 < 30) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
    } else if (minutes1 < 50) {
      element.innerHTML += "<br>" + (hours1 % 12).toString() + ":50 - Hearnes";
    } else {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":00 - Student Center";
    }
  }
}

function calculateTrowbridge() {
  let element = document.getElementById("arrivals-2");
  if (hours < 20 || hours > 5) {
    if (minutes < 5) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":05 - Trowbridge";
    } else if (minutes < 10) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":10 - University Hospital";
    } else if (minutes < 15) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":15 - Student Center";
    } else if (minutes < 35) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Trowbridge";
    } else if (minutes < 40) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":50 - University Hospital";
    } else if (minutes < 45) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":00 - Student Center";
    } else {
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":05 - Trowbridge";
    }
  } else if (hours <= 5) {
    element.innerHTML += "<br>6:05 - Towbridge";
  }
  let minutes1 = minutes + (minutes < 30 && minutes > 15 ? 10 : 5);
  let hours1 = hours + Math.floor(minutes1 / 60);
  if (hours < 20 || hours > 5) {
    if (minutes1 < 5) {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":05 - Trowbridge";
    } else if (minutes1 < 10) {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":10 - University Hospital";
    } else if (minutes1 < 15) {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":15 - Student Center";
    } else if (minutes1 < 35) {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":35 - Trowbridge";
    } else if (minutes1 < 40) {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":40 - University Hospital";
    } else if (minutes1 < 45) {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":45 - Student Center";
    } else {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":05 - Trowbridge";
    }
  }
}

function calculateReactor() {
  let element = document.getElementById("arrivals-1");
  if (hours < 20 || hours > 4) {
    if (minutes < 20) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":20 - Hearnes";
    } else if (minutes < 30) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
    } else if (minutes < 50) {
      element.innerHTML += "<br>" + (hours % 12).toString() + ":50 - Hearnes";
    } else {
      element.innerHTML +=
        "<br>" + ((hours + 1) % 12).toString() + ":00 - Student Center";
    }
  } else if (hours === 4 && minutes > 50) {
    element.innerHTML += "<br>5:00 - Student Center";
  } else if (hours <= 4) {
    element.innerHTML += "<br>4:50 - Student Center";
  }

  let minutes1 = minutes + 30;
  let hours1 = hours + Math.floor(minutes1 / 60);
  if (hours1 < 20 || hours1 > 4) {
    if (minutes1 < 20) {
      element.innerHTML += "<br>" + (hours1 % 12).toString() + ":20 - Hearnes";
    } else if (minutes1 < 30) {
      element.innerHTML +=
        "<br>" + (hours % 12).toString() + ":30 - Student Center";
    } else if (minutes1 < 50) {
      element.innerHTML += "<br>" + (hours1 % 12).toString() + ":50 - Hearnes";
    } else {
      element.innerHTML +=
        "<br>" + (hours1 % 12).toString() + ":00 - Student Center";
    }
  }
}

export function calculateArrivals() {
  calculateHearnes();
  calculateTrowbridge();
  calculateReactor();
}
