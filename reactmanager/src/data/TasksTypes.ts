interface Task {
  id: number | string;
  title: string;
  description: string;
  state: string;
  urgent: boolean;
}

const taskObject: Task = {
  id: "",
  title: "",
  description: "",
  state: "",
  urgent: false,
};

export { type Task, taskObject };
