// File: pages/api/update-plan.js

import { getFirestore } from 'firebase-admin/firestore';
import { initializeApp, applicationDefault } from 'firebase-admin/app';

const app = initializeApp({
  credential: applicationDefault(),
});

const db = getFirestore(app);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end('Method Not Allowed');

  const { userId, newPlan } = req.body;

  if (!userId || !newPlan) {
    return res.status(400).json({ error: 'Missing userId or newPlan' });
  }

  try {
    const userRef = db.collection('users').doc(userId);
    await userRef.update({ plan: newPlan });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error updating plan:', error);
    res.status(500).json({ error: 'Failed to update plan' });
  }
}
