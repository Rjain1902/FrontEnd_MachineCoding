import { FaCheck } from "react-icons/fa6";
import { IoIosWarning } from "react-icons/io";
import { FiInfo } from "react-icons/fi";
import { BiSolidErrorAlt } from "react-icons/bi";
import { IoCloseCircleSharp } from "react-icons/io5";
import './notification.css'

const Notification = ({ type = "info", message, onClose }) => {
    const iconStyles={marginRight:'10px'}
  const icons = {
    success: <FaCheck  style={iconStyles}/>,
    warning: <IoIosWarning style={iconStyles} />,
    info: <FiInfo style={iconStyles} />,
    error: <BiSolidErrorAlt style={iconStyles} />,
  };

  return (
    <>
      <div className={`notification ${type}`} style={{gap:'10px'}}>
        {icons[type]}
        {message}
        <IoCloseCircleSharp color="white" onClick={()=>{onClose()}} className="closeBtn" />
      </div>
    </>
  );
};

export default Notification;
