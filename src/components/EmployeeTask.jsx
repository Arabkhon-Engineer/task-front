import { employeeTask } from "../fakeData/fakeIndicator";
import "../styles/indicator.css";

export const EmployeeTask = () => {
  return (
    <div className="employee_task">
      <div className="employee_task_title">
        <h4>
          Mas'ul xodimlar topshiriqlarni o'z vaqtida bajarish ko'rsatgichi
        </h4>
      </div>
      <div className="employee_task_deadline">
        <ol className="employee_task_deadline_items">
          {employeeTask.map((deadline, index) => {
            return (
              <li key={index} className="employee_task_deadline_item">
                <span>{deadline.id}. </span>
                <p>{deadline.employeeName} {deadline.employeeLastName} </p>
                <span>{deadline.deadline}%</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
