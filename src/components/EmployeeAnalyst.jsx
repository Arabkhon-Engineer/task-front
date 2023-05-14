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
                    <tr>
                        <th style={{display: "flex"}}>
                            <thead className="employee_analyst_table_item1">Ismi</thead>
                            <thead className="employee_analyst_table_item2">Jami</thead>
                            <thead className="employee_analyst_table_item3">O'z vaqtida bajarilishi</thead>
                            <thead className="employee_analyst_table_item4">Bajarilgan</thead>
                            <thead className="employee_analyst_table_item5">Jarayonda</thead>
                            <thead className="employee_analyst_table_item6">Bajarilmagan</thead>
                        </th>
                    </tr>
                    {
                        employeeTask.map((task)=> {
                            return(
                                <tr key={task.id}>
                                        <td>{task.employeeLastName}</td>
                                        <td>{task.total}</td>
                                        <td>{task.deadline}</td>
                                        <td>{task.done}</td>
                                        <td>{task.process}</td>
                                        <td>{task.notDone}</td>
                                </tr>
                            )
                        })
                    }                     
                </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
