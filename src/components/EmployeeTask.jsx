import { employeeTask } from "../fakeData/fakeIndicator";
import "../styles/indicator.css";

export const EmployeeTask = () => {
  return (
    <div className="employee_task">
      <div className="employee_task_title">
        Mas'ul xodimlar topshiriqlarni o'z vaqtida bajarish ko'rsatgichi
      </div>
      <div className="employee_task_deadline">
        <ol className="employee_task_deadline_items">
          {employeeTask.map((deadline, index) => {
            return (
              <li key={index} className="employee_task_deadline_item">
                <span>{deadline.id}. </span>
                <div className="employee_task_deadline_item_proc">
                  <span className="employee_task_deadline_item_proc_user">
                    {deadline.employeeName} {deadline.employeeLastName}
                  </span>
                  <p className={"line" + deadline.deadline }>
                    <span className={"line_font line_font" + deadline.deadline }></span> </p>
                </div>
                <span>{deadline.deadline}%</span>
              </li>
            );
          })}
        </ol>
      </div>
    </div>
  );
};
