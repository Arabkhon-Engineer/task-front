import { companyIndicator } from "../fakeData/fakeIndicator";
import "../styles/indicator.css";

console.log(companyIndicator);

export const EmployeeInditor = () => {
  return (
    <div className="employee_indicator">
        <div className="employee_indicator_title">
            Topshiriqlarni o'z vaqtida bajarish ko'rsatgichi
        </div>
        <div className="employee_indicator_items">
          <div className="employee_indicator_left">
            <div className="box">box</div>
          </div>
          <div className="employee_indicator_right">
            {
              companyIndicator.map((work)=>{
                return <li className="employee_indicator_right_items" key={work?.id}><p></p><span>{work?.indicator}% - {work?.condition}</span></li>
               
              })
            }
          </div>
        </div>
    </div>
  )
}
