export interface JournalEntry {
  id: number;
  date: string;
  title: string;
  description: string;
}

export const MOCK_JOURNAL_ENTRIES: JournalEntry[] = [
  {
    id: 1,
    date: '2026-06-22',
    title: 'First Kick',
    description: 'Felt the baby kick for the first time today!'
  },
  {
    id: 2,
    date: '2026-06-23',
    title: 'Doctor Appointment',
    description: 'I heard my babys heartbeat for the first time today.'
  },
  {
    id: 3,
    date: '2026-06-25',
    title: 'Baby Shopping',
    description: 'Went to Osh Kosh for adorable baby clothes.'
  },
  {
    id: 4,
    date: '2026-05-20',
    title: 'Morning Sickness',
    description: 'Had nausea but felt better after lunch.'
  }
];