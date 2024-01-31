import { db } from '@/firebase/config.js';
import { Internship } from '@/models/internship';
import { collection, getDocs, query, where } from 'firebase/firestore';

// Get all featured documents
export const getFeatured = async () => {
  const internshipRef = collection(db, 'internships');
  const q = query(internshipRef, where('featured', '==', true));

  const snapshot = await getDocs(q);
  const featuredInternships = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));

  return featuredInternships as Internship[];
};
