import { useSelector, useDispatch } from "react-redux";
import { set } from "../reducers/notificationReducer";

const Notification = () => {
  const notification = useSelector((state) => state.notification);
  const dispatch = useDispatch();

  const clearNotificationAfter = () => {
    clearInterval(window.t);

    window.t = setTimeout(() => {
      dispatch(set(null));
    }, 5000);
  };

  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };

  clearNotificationAfter();

  return notification ? <div style={style}>{notification}</div> : null;
};

export default Notification;
