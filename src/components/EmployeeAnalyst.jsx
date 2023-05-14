import { employeeTask } from "../fakeData/fakeIndicator";

export const EmployeeAnalyst = () => {
  return (
    <div className="employee_analyst ">
      <div className="employee_analyst_main">
        <div className="employee_analyst_title">
          Mas'ul xodimlar topshiriqlarni o'z vaqtida bajarish tahlili
        </div>
        <div className="employee_analyst_table">
          <div className="employee_analyst_table_head">
            <div className="employee_analyst_table_items">
              <table>
                <tr className="tremployee_analyst_table_item_box">
                  <th className="employee_analyst_table_item item1">Ismi</th>
                  <th className="employee_analyst_table_item item2">Jami</th>
                  <th className="employee_analyst_table_item item3">
                    O'z vaqtida bajarilishi
                  </th>
                  <th className="employee_analyst_table_item item4">
                    Bajarilgan
                  </th>
                  <th className="employee_analyst_table_item item5">
                    Jarayonda
                  </th>
                  <th className="employee_analyst_table_item item6">
                    Bajarilmagan
                  </th>
                </tr>
                {employeeTask.map((task) => (
                    <tr key={task.id} className="task_collection">
                      <td>{task.employeeLastName}</td>
                      <td>{task.total}</td>
                      <td>{task.deadline}%</td>
                      <td>{task.done}</td>
                      <td>{task.process}</td>
                      <td>{task.notDone}</td>
                    </tr>
                ))}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
