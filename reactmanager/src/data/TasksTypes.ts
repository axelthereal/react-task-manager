enum TaskState {
  Pending,
  Done,
}
interface Task {
  id: number | string;
  title: string;
  description: string;
  state: TaskState.Pending | TaskState.Done;
  urgent: boolean;
}

export { type Task, TaskState };
