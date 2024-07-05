import { Task } from "../../data/TasksTypes";
import AvatarCard from "../cards/AvatarCard";
import UrgentBtn from "../buttons/UrgentBtn";
interface TaskProps {
  task: Task;
}

const TaskItem = ({ task }: TaskProps) => {
  const description = task.description.slice(0, 41).trimEnd();

  return (
    <>
      <div
        className="taskitem list-group-item border-1 rounded-3 list-group-item-action cursor-p d-flex align-items-stretch gap-3 py-3"
        aria-current="true"
      >
        <AvatarCard title={task.title} />
        <div className="d-flex gap-2 w-100 justify-content-between">
          <div>
            <h6 className="mb-0">{task.title}</h6>
            <p className="mb-0 opacity-75">{description}...</p>
          </div>

          {task.urgent && <UrgentBtn />}
        </div>
      </div>
    </>
  );
};

export default TaskItem;
