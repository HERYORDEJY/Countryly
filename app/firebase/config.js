import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBIZrSVsDOuWy3LncA390M3TqaYnJIxb6w',
  authDomain: 'your-auth-domain-b1234.firebaseapp.com',
  databaseURL: 'https://mtahir-a4874.firebaseio.com',
  projectId: 'mtahir-a4874',
  storageBucket: 'mtahir-a4874.appspot.com',
  messagingSenderId: '921013779690',
  appId: '1:921013779690:android:cdd04b4c7f00a10218ab93',
};

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }

// export { firebase };
/*
service firebase.storage {
  match /b/{bucket}/o {
    match /{allPaths=**} {
      allow read, write: if request.auth != null;
    }
  }
}
*/
// ========================

const app = Firebase.initializeApp(firebaseConfig);
export const firebase = app.database();
