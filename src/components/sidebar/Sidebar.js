import "./Sidebar.css";
import logo from "../../assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import io from "socket.io-client";
import { useDispatch, useSelector } from "react-redux";
const socket = io.connect("http://localhost:3001");

export default function Sidebar({ sidebarOpen, closeSidebar }) {
  const { EmployeeReducer } = useSelector((state) => state);
  const [path, setPath] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/home/videocall") {
      setPath(true);
    }
  });
  useEffect(() => {

    setTimeout(() => {
      socket.emit("persistIdEmployee", {
        me: socket.id,
        name: EmployeeReducer.connectedEmployee.userName,
        id: EmployeeReducer.connectedEmployee._id,
      });
      dispatch({
        type: "SOCKET",
        payload: socket,
      });
    }, 1000)
  }, []);
  return (
    <>
      {!path ? (
        <div className={sidebarOpen ? "sidebar-responsive" : ""} id="sidebar">
          <div className="sidebar__title">
            <div className="sidebar__img">
              <img src={logo} className="mr-1 " alt="logo" />
              <h2>OnTime</h2>
            </div>
            <i
              className="fa fa-times"
              id="sidebarIcon"
              onClick={() => closeSidebar()}
            ></i>
          </div>

          <div className="sidebar__menu">
            <div className="sidebar__link active_menu_link">
              <i className="fa fa-home"></i>
              <Link to={"/home/dashboard"}>Dashboard</Link>
            </div>

            <h3 className="text_pad">Project Management</h3>
            {EmployeeReducer.connectedEmployee.isManager ? (
              <div className="sidebar__link">
                <i className="fa fa-user"></i>
                <Link to={"/home/employees"}>Employee Management</Link>
              </div>
            ) : null}

            <div className="sidebar__link">
              <i className="fa fa-wrench"></i>
              <a href="#">Time Tracking</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-building-o"></i>
              <a href="#">Project Management</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-archive"></i>
              <Link to={"/home/projectPlanning"}>Project Planning</Link>
            </div>

            <div className="sidebar__link">
              <i className="fa fa-calendar"></i>
              <Link to="/Calendar">Calendar</Link>
            </div>
            <h3 className="text_pad">CHAT</h3>
            <div className="sidebar__link">
              <i className="fa fa-book"></i>
              <Link to={"/home/chat"}>Messages</Link>
            </div>
            <h3 className="text_pad">LEAVE</h3>
            <div className="sidebar__link">
              <i className="fa fa-question"></i>
              <a href="#">Requests</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-sign-out"></i>
              <a href="#">Leave Policy</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-calendar"></i>
              <a href="#">Special Days</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-files-o"></i>
              <a href="#">Apply for leave</a>
            </div>
            <h3 className="text_pad">PAYROLL</h3>
            <div className="sidebar__link">
              <i className="fa fa-money"></i>
              <a href="#">Payroll</a>
            </div>
            <div className="sidebar__link">
              <i className="fa fa-briefcase"></i>
              <a href="#">Paygrade</a>
            </div>
            <div className="sidebar__logout">
              <i className="fa fa-power-off"></i>
              <a href="#">Log out</a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
