import { db } from '@/firebase/config.js';
import { Internship } from '@/models/internship';
import { FirebaseError } from 'firebase/app';
import { collection, getDocs, orderBy, query, where } from 'firebase/firestore';

const INTERNSHIP_COLLECTION = collection(db, 'internships');

// Get all internship documents
export const getInternships = async () => {
  const q = query(INTERNSHIP_COLLECTION, orderBy('featured', 'desc'), orderBy('title'));
  try {

    const snapshot = await getDocs(q);
    const internships = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    return {
      'status': 'success',
      'data': internships,
    }
  } catch (error) {
    const e = error as FirebaseError;
    console.error('Error getting documents: ', e.message);
    return { 
      'status': 'error',
      'message': 'Error getting documents: ' + e.message,
    }
  }

};

// Get all featured documents
export const getFeatured = async () => {
  const q = query(INTERNSHIP_COLLECTION, where('featured', '==', true));

  const snapshot = await getDocs(q);
  const featuredInternships = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return featuredInternships as Internship[];
};
