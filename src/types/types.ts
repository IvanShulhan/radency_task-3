export interface Note {
  id: string;
  name: string;
  created: string;
  category: string;
  content: string;
  dates: string;
  isArchived: boolean;
}

export interface UpdateNoteData {
  name: string;
  category: string;
  content: string;
  isArchived?: boolean;
}

export interface StatisticObject {
  [key: string]: {
    active: number;
    archived: number;
  }
}