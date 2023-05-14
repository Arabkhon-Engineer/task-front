import "../styles/indicator.css";

export const Sektor = () => {
  return (
    <div className="task_sector">
      <h3 className="task_sector_title">
        Korxonaning topshiriqlarini o'z vaqtida bajarilish ko'rsatgichi
      </h3>
      <div className="task_sector_items">
        <div className="task_sector_item">
          <p>Logistika</p>
          <div className="indicator_items">
            <div className="indicator_item1">60%</div>
            <div className="indicator_item2">20%</div>
            <div className="indicator_item3">10%</div>
            <div className="indicator_item4">10%</div>
          </div>
        </div>
        <div className="task_sector_item">
          <p>Marketing</p>
          <div className="indicator_items">
            <div className="indicator_item1 ">60%</div>
            <div className="indicator_item2">20%</div>
            <div className="indicator_item3">10%</div>
            <div className="indicator_item4">10%</div>
          </div>
        </div>
        <div className="task_sector_item">
          <p>Savdo</p>
          <div className="indicator_items">
            <div className="indicator_item1">60%</div>
            <div className="indicator_item2">20%</div>
            <div className="indicator_item3">10%</div>
            <div className="indicator_item4">10%</div>
          </div>
        </div>
        <div className="task_sector_item">
          <p>Ishlab chiqarish</p>
          <div className="indicator_items">
            <div className="indicator_item1">60%</div>
            <div className="indicator_item2">20%</div>
            <div className="indicator_item3">10%</div>
            <div className="indicator_item4">10%</div>
          </div>
        </div>
      </div>
    </div>
  );
};
