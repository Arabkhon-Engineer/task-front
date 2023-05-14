import { useState } from "react";
import { Doughnut } from "react-chartjs-2";

const App = () => {
  const [data, setData] = useState([
    {
      value: 30,
      label: "Red",
    },
    {
      value: 20,
      label: "Green",
    },
    {
      value: 10,
      label: "Blue",
    },
  ]);

  const options = {
    title: {
      display: true,
      text: "My Donut Chart",
    },
    tooltips: {
      enabled: true,
    },
  };

  return (
    <div>
      <Doughnut
        data={data}
        options={options}
      />
    </div>
  );
};

export default App;