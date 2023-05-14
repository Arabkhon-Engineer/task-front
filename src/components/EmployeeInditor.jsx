import { companyIndicator, companyIndicatorTotal } from "../fakeData/fakeIndicator";
import "../styles/indicator.css";


export const EmployeeInditor = () => {
  return (
    <div className="employee_indicator">
        <div className="employee_indicator_title">
            Topshiriqlarni o'z vaqtida bajarish ko'rsatgichi
        </div>
        <div className="employee_indicator_items">
          <div className="employee_indicator_left">
            <div className="employee_indicator_left_circle">
            <p className="employee_indicator_left_circle_p" title="bu foizga faqat ijoby yechilganlar kiritilgan">{companyIndicatorTotal}%</p>
            </div>
          </div>
          <div className="employee_indicator_right">
            <div className="employee_indicator_right_items">
            {
              companyIndicator.map((work)=>{
                return <li className="employee_indicator_right_item" key={work?.id}>
                  <p className={"employee_indicator_right_item_p symbol" + work.indicator}></p>
                  <span>{work?.indicator}% </span>
                <p className="employee_indicator_right_item_condition">{work?.condition}</p>
                </li>
                
              })
            }
            </div>
          </div>
        </div>
    </div>
  )
}
