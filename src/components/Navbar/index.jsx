import Button from "../Button";
import { Navbar } from "./css";
import { ArrowRight } from 'react-bootstrap-icons';
const NavbarComponent = () => {
  return (
    <Navbar>
      <button className="btn btn-sm py-2 px-3">
        ล็อกอินเข้าสู่ระบบ / สมัครสมาชิก
      </button>
      <div className="logo">
        <img src="assets/logo.png" />
      </div>
      <div>
        <button className="btn btn-sm py-2 px-3 mx-2">Wish List</button>
        <button className="btn btn-sm py-2 px-3 mx-2">ตะกร้า</button>
      </div>
    </Navbar>
  );
};

export default NavbarComponent;
