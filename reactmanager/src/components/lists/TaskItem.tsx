import { Task } from "../../data/TasksTypes";

interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps) => {
  return (
    <>
      <h1>{task.title}</h1>
    </>
  );
};

export default TaskItem;
