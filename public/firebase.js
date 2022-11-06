import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
import { getDatabase, ref, child, get, set } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-database.js";
import { latitude, longitude} from './index.js';
//import { resolve } from Promise;

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAKEII6bITlZn5VRtp7uJU5v-Vv86fJ0oA",
  authDomain: "tigo-45525.firebaseapp.com",
  databaseURL: "https://tigo-45525-default-rtdb.firebaseio.com",
  projectId: "tigo-45525",
  storageBucket: "tigo-45525.appspot.com",
  messagingSenderId: "1026292477497",
  appId: "1:1026292477497:web:b294bfce7e4e41f81627e8",
  measurementId: "G-9PSM9X7HPM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase();
const dbRef = ref(database);

async function readDatabase() {
  var x = await get(child(dbRef, `reports/`)).then((snapshot) => {
    if (snapshot.exists()) {
      //console.log(snapshot.val());
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  return x;
}

export function writeUserData(lat, long, title) {
  set(ref(database, 'reports/' + title), {

    lat: lat,
    long: long,
  });
}
// writeUserData(38.935157, -92.326559, "the great wall of china");
// writeUserData(38.938937, -92.322879, "ashwin prayaga");
export async function createReports() {
  var reports = [];
  var x = await readDatabase(dbRef);
  // build the index
  for (var i in x) {
    var rep = []
    rep.push(i);
    rep.push(x[i].lat);
    rep.push(x[i].long);
    reports.push(rep);
  }
  return reports;
}

document.getElementById("sbmt").addEventListener("click", submitreport);

function submitreport() {
  const reportsidebar = document.getElementById("reportsidebar");
  reportsidebar.classList.remove("animatein");
  reportsidebar.classList.add("animateout");
  const select = document.getElementById("select1");
  const txtarea = document.getElementById("textarea");
  writeUserData(parseFloat(localStorage.getItem("lat")), parseFloat(localStorage.getItem("long")), select.options[select.selectedIndex].value + ": " + txtarea.value);
  reportsidebar.style.display = "none";
}