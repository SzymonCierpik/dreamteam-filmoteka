import { initializeApp } from 'firebase/app';

import { getAnalytics } from 'firebase/analytics';

import {
  getAuth,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  AuthErrorCodes,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  setDoc,
  updateDoc,
  arrayUnion,
  arrayRemove,
  getDoc,
} from 'firebase/firestore';

import {
  emailInput,
  userNameInput,
  passInput,
  singupForm,
  singupError,
  emailField,
  passField,
  cPassField,
  userNameField,
} from './sign-up';

import { loginForm, eInput, pInput, loginError, eField, pField } from './login';

import { toggleIsHidden, logoutMenu } from './auth-menu';

import {
  getGuestLibrary,
  guestLibrary,
  addToQueueForGuest,
  addToWatchedForGuest,
} from './guest-library';

import { movieModal } from './modal-movie';

export const logoutBtn = document.querySelector(
  '.auth-menu-logout__logout-button'
);

const firebaseConfig = {
  apiKey: 'AIzaSyDWPLJhw8gzRksSLpE290fp-GQpT7FpHaY',
  authDomain: 'moviedreamteam-filmoteka.firebaseapp.com',
  projectId: 'moviedreamteam-filmoteka',
  storageBucket: 'moviedreamteam-filmoteka.appspot.com',
  messagingSenderId: '18944533513',
  appId: '1:18944533513:web:be1f6bf81a57a82ccc84d8',
  measurementId: 'G-LPXTQ4NYCN',
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

let userId;
export let userName;
export let isLoggedIn;

const LoginEmailPassword = async () => {
  const loginEmail = eInput.value;
  const loginPassword = pInput.value;
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
  } catch (error) {
    loginError.style.display = 'block';
    if (error.code == AuthErrorCodes.INVALID_PASSWORD) {
      loginError.innerHTML =
        '<i class="error error-icon fas fa-exclamation-circle"></i>Wrong pasword. Try again';
    } else {
      loginError.innerHTML = `<i class="error error-icon fas fa-exclamation-circle"></i>${error.message}`;
    }
    console.log(error);
  }
};

loginForm.addEventListener('submit', e => {
  e.preventDefault();
  if (
    !eField.classList.contains('error') &&
    !pField.classList.contains('error')
  ) {
    LoginEmailPassword();
  }
});

const createAccount = async () => {
  const loginEmail = emailInput.value;
  const loginPassword = passInput.value;
  const userName = userNameInput.value;
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      loginEmail,
      loginPassword
    );
    await updateProfile(auth.currentUser, {
      displayName: userName,
    });
    const docRef = doc(db, 'users', `${userCredential.user.uid}`);
    await setDoc(docRef, {
      watched: [],
      queue: [],
    });
  } catch (error) {
    singupError.style.display = 'block';
    singupError.innerHTML = `<i class="bx bx-error-circle singup-error-icon"></i>${error.message}`;
    console.log(error);
  }
};

singupForm.addEventListener('submit', e => {
  e.preventDefault();
  createAccount();
  if (
    !emailField.classList.contains('invalid') &&
    !passField.classList.contains('invalid') &&
    !cPassField.classList.contains('invalid') &&
    !userNameField.classList.contains('invalid')
  ) {
    createAccount();
  }
});

const monitorAuthState = async () => {
  onAuthStateChanged(auth, user => {
    if (user) {
      userId = user.uid;
      userName = user.displayName;
      isLoggedIn = true;
      singupForm.reset();
      loginForm.reset();
    } else {
      isLoggedIn = false;
      getGuestLibrary();
      if (guestLibrary === null) {
        localStorage.setItem(
          'guest',
          JSON.stringify({
            watched: [],
            queue: [],
          })
        );
      }
    }
  });
};

monitorAuthState();

const logoutUser = async () => {
  await signOut(auth);
};

logoutBtn.addEventListener('click', () => {
  logoutUser();
  logoutMenu.classList.toggle('menu-is-hidden');
  setTimeout(toggleIsHidden, 300);
});

const addToWatchedForUser = async movieId => {
  await updateDoc(doc(db, 'users', `${userId}`), {
    watched: arrayUnion(`${movieId}`),
  });
};

const addToQueueForUser = async movieId => {
  await updateDoc(doc(db, 'users', `${userId}`), {
    queue: arrayUnion(`${movieId}`),
  });
};

export const getUserLibrary = async () => {
  const docSnap = await getDoc(doc(db, 'users', `${userId}`));
  if (docSnap.exists()) {
    const docData = docSnap.data();
    return docData;
  } else {
    // docSnap.data() will be undefined in this case
    console.log('No such document!');
  }
};

function addToWatched(movieId) {
  if (isLoggedIn) {
    addToWatchedForUser(movieId);
  } else {
    addToWatchedForGuest(movieId);
  }
}

function addToQueue(movieId) {
  if (isLoggedIn) {
    addToQueueForUser(movieId);
  } else {
    addToQueueForGuest(movieId);
  }
}

export function addLisenersToButtons() {
  const addToWatchedBtn = movieModal.querySelector('#watched');
  const addToQueueBtn = movieModal.querySelector('#queue');

  addToWatchedBtn.addEventListener('click', e => {
    let movieId = e.currentTarget.dataset.id;
    addToWatched(movieId);
  });

  addToQueueBtn.addEventListener('click', e => {
    let movieId = e.currentTarget.dataset.id;
    addToQueue(movieId);
  });
}
