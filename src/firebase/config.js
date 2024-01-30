import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY, 
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN, 
  projectId: import.meta.env.VITE_FB_PROJECT_ID, 
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET, 
  messagingSenderId: import.meta.env.VITE_FB_MESSAGE_SENDER_ID, 
  appId: import.meta.env.VITE_FB_APP_ID, 
  measurementId: import.meta.env.VITE_FB_MEASUREMENT_ID, 
};

// Initialize Firebase
const app = getApps().length > 0 ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
