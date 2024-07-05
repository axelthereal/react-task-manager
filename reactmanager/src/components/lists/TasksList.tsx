import TaskItem from "./TaskItem";
import { Task } from "../../data/TasksTypes";

interface TasksListProps {
  tasks: Task[];
}

const TasksList = ({ tasks }: TasksListProps) => {
  return (
    <>
      <div className="list-group mt-3">
        {tasks.map((task) => (
          <TaskItem task={task} />
        ))}
      </div>
    </>
  );
};

export default TasksList;
