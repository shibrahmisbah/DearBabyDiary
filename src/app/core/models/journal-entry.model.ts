export interface JournalEntry {
  id: string;
  title: string;
  date: string; // ISO string like "2025-09-09"
  content?: string;
}