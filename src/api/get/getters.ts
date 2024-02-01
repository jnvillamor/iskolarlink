import { db } from '@/firebase/config.js';
import { Internship } from '@/models/internship';
import { collection, getDocs, query, where } from 'firebase/firestore';

const INTERNSHIP_COLLECTION = collection(db, 'internships');

// Get all internship documents
export const getInternships = async () => {
  const q = query(INTERNSHIP_COLLECTION);

  const snapshot = await getDocs(q);
  const internships = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return internships as Internship[];
};

// Get all featured documents
export const getFeatured = async () => {
  const q = query(INTERNSHIP_COLLECTION, where('featured', '==', true));

  const snapshot = await getDocs(q);
  const featuredInternships = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return featuredInternships as Internship[];
};
