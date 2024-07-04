import { Task } from './task.model';

export interface Project {
  id: number;
  name: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: 'Not Started' | 'In Progress' | 'Completed';
  tasks: Task[]; // Projeye ait görevler
}
