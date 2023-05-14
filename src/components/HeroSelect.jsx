export const HeroSelect = () => {
  return (
    <div className="heroSelect">
      <div className="container">
        <div className="heroSelectMain">
          <select name="time" id="">
            <option value="Yearly">Yearly</option>
            <option value="monthly">monthly</option>
            <option value="weakly">Weakly</option>
            <option value="daily">daily</option>
          </select>
        </div>
      </div>
    </div>
  );
};
