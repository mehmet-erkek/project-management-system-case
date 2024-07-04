export interface Task {
    id: number;
    title: string;
    description: string;
    assignee: string;
    dueDate: Date;
    status: 'To Do' | 'In Progress' | 'Done';
    projectId: number; // Projeye ait görevleri ilişkilendirmek için kullanılır
  }
  