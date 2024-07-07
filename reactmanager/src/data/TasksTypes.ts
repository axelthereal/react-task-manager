interface Task {
  id: number | string;
  title: string;
  description: string;
  state: string;
  urgent: boolean | null;
}

const taskObject: Task = {
  id: "",
  title: "",
  description: "",
  state: "",
  urgent: null,
};

export { type Task, taskObject };
