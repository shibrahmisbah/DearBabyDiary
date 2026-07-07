/**
import { Service } from '@angular/core';

@Service()
export class Journal {}

*/

import { Injectable } from '@angular/core';

import {
  collection,
  addDoc,
  getDocs,
  updateDoc,
  deleteDoc,
  doc
} from 'firebase/firestore';

import { db } from '../core/firebase/firestore';
import { JournalEntry } from '../core/models/journal-entry.model';

@Injectable({
  providedIn: 'root'
})
export class JournalService {

    async addEntry(entry: JournalEntry) {

  await addDoc(
    collection(db, 'journalEntries'),
    entry
  );

}

async getEntries() {

  const snapshot = await getDocs(
    collection(db, 'journalEntries')
  );

  return snapshot.docs.map(doc => ({

    id: doc.id,

    ...doc.data()

  }));

}

async updateEntry(entry: JournalEntry) {

  const docRef = doc(
    db,
    'journalEntries',
    entry.id!
  );

  await updateDoc(docRef, {

    title: entry.title,

    description: entry.description,

    date: entry.date,

    lastModified: entry.lastModified

  });

}

async deleteEntry(id: string) {

  await deleteDoc(
    doc(db, 'journalEntries', id)
  );

}





}

