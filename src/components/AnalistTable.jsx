import { Sektor } from "./Sektor";
import "../styles/indicator.css";
import { EmployeeInditor } from "./EmployeeInditor";
import { EmployeeTask } from "./EmployeeTask";
import { EmployeeAnalyst } from "./EmployeeAnalyst";

const AnalistTable = () => {
  return (
    <div className="analys">
      <div className="container">
        <div className="analyst_title_items">
          <p className="analyst_title_left">
            Korxona asosida bajarilish ko'rsatgichi...
          </p>
          <p className="analyst_title_right">
            Bo'limlar asosida bajarilish ko'rsatgichi...
          </p>
        </div>
        <div className="sector_box">
          <EmployeeInditor />
          <Sektor />
        </div>
        <div className="sector_box">
          <EmployeeTask />
          <EmployeeAnalyst />
        </div>
      </div>
    </div>
  );
};

export default AnalistTable;
