import "../styles/navbar.css";
import {BiSearch} from '../../node_modules/react-icons/bi';

export const Navbar = () => {
  return (
    <nav>
      <header className="container">
        <div className="nav_main">
          <h2 className="nav_main_title">Barcha ko'rsatgichlar</h2>
          <div className="search">
            <BiSearch className="search_icon" />
            <input
              type="text"
              placeholder="Search for Teacher, stack, eco ..."
            />
          </div>
          <div className="table">
            <div className="table_box box-1">bugun</div>
            <div className="table_box box-2">14.05.2023</div>
            <div className="table_box box-3">oraliq</div>
            <div className="table_box box-4">01.05.2023</div>
            <div className="table_box box-5">30.05.2023</div>
          </div>
        </div>
      </header>
    </nav>
  );
};
