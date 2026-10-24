
<script>
function initLoc() {
  // Sandton location - change to your exact address
  const center = { lat: -26.107, lng: 28.053 };

  const map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 14,
    styles: [
      { elementType: "geometry", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
      { elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
      { featureType: "road", elementType: "geometry", stylers: [{ color: "#38414e" }] },
      { featureType: "water", elementType: "geometry", stylers: [{ color: "#17263c" }] }
    ]
  });

  // Yellow pin
  new google.maps.Marker({
    position: { lat: -26.105, lng: 28.050 },
    map: map,
    title: "Clinic",
    icon: "http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
  });

  // Green pin
  new google.maps.Marker({
    position: { lat: -26.109, lng: 28.055 },
    map: map,
    title: "You",
    icon: "http://maps.google.com/mapfiles/ms/icons/green-dot.png"
  });
}


<script>
const form = document.querySelector('.register-form');

form.addEventListener('submit', function(e) {
  e.preventDefault(); // stop page refresh

  // Get all values
  const userData = {
    citizen: form.children[0].value,
    idNumber: form.children[1].value,
    fullNames: form.children[2].value,
    email: form.children[3].value,
    password: form.children[4].value,
    homeAddress: form.children[6].value,
    jobType: form.children[7].value,
    disability: form.children[8].value,
    city: form.children[9].value,
    date: new Date().toLocaleString()
  };

  // Save to browser storage
  let users = JSON.parse(localStorage.getItem('sheCareUsers')) || [];
  users.push(userData);
  localStorage.setItem('sheCareUsers', JSON.stringify(users));

  alert('Registration saved! Welcome ' + userData.fullNames);
  form.reset();

  // To see all saved users, open console (F12) and type:
  console.log(users);
});

// To VIEW all registered users later:
function viewAllUsers() {
  console.log(JSON.parse(localStorage.getItem('sheCareUsers')));
}



<script type="module">
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyD7-8wsiRZdO21N-Q1Ownlyt54hlSVX-ao",
  authDomain: "javascript-f6b0d.firebaseapp.com",
  projectId: "javascript-f6b0d",
  storageBucket: "javascript-f6b0d.firebasestorage.app",
  messagingSenderId: "986424458897",
  appId: "1:986424458897:web:2c9a68fbf424bff4020930"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function loadApplicants(){
  const tableBody = document.getElementById('tableBody');
  const count = document.getElementById('totalCount');
  
  try {
    const q = query(collection(db, "registrations"));
    const snapshot = await getDocs(q);
    
    count.innerText = `Total Applicants: ${snapshot.size}`;
    tableBody.innerHTML = "";

    snapshot.forEach(doc => {
      const d = doc.data();
      tableBody.innerHTML += `
        <tr>
          <td>${d.fullNames || ''}</td>
          <td>${d.email || ''}</td>
          <td>${d.saId || ''}</td>
          <td>${d.saCitizen || ''}</td>
          <td>${d.city || ''}</td>
          <td>${d.studyType || ''}</td>
          <td>${d.disability || ''}</td>
          <td>${d.address || ''}</td>
        </tr>
      `;
    });

    if(snapshot.empty){
      tableBody.innerHTML = "<tr><td colspan='8' style='text-align:center'>No applicants yet</td></tr>";
    }

  } catch(err){
    alert("Error loading: " + err.message);
  }
}

loadApplicants();


Nanny Table:
- name, phone, location (Polokwane, Sandton), 
- experience, skills, photo, ID document,
- availability, rate, bio
- status: verified / pending



</script>


<!-- Replaced AN_API_KEY with a free key from Google Cloud Console -->
<script async defer src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&callback=initMap"></script>
