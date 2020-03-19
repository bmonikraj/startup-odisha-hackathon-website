import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBHyLDvuhal_6nGnCiC2TYL_3C8OtvXhEM",
  authDomain: "startupodishahackathon2020.firebaseapp.com",
  databaseURL: "https://startupodishahackathon2020.firebaseio.com",
  projectId: "startupodishahackathon2020",
  storageBucket: "startupodishahackathon2020.appspot.com",
  messagingSenderId: "898513540529",
  appId: "1:898513540529:web:83d0b439da6f9384119990",
  measurementId: "G-PFPTWMBBSK"
};

firebase.initializeApp(firebaseConfig);

export default firebase;