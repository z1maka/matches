import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'
import 'firebase/auth'
import 'firebase/storage'


const config = {
    apiKey: "AIzaSyBmF4-7H0XMJmzL1QlY6snCzh5gDwLZ-dE",
    authDomain: "second-project-zvx556pi.firebaseapp.com",
    databaseURL: "https://second-project-zvx556pi.firebaseio.com",
    projectId: "second-project-zvx556pi",
    storageBucket: "second-project-zvx556pi.appspot.com",
    messagingSenderId: "98248067559"
};

firebase.initializeApp(config);

const firebaseDB = firebase.database();
const firebaseMathes = firebaseDB.ref('matches');
const firebasePromotions = firebaseDB.ref('promotions');
const firebaseTeams = firebaseDB.ref('teams');
const firebasePlayers = firebaseDB.ref('players');

export {
    firebase,
    firebaseMathes,
    firebasePromotions,
    firebaseTeams,
    firebaseDB,
    firebasePlayers
}

