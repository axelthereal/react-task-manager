interface Task {
  id: number | string;
  title: string;
  description: string;
  state: string;
  urgent: boolean;
}

export { type Task };
