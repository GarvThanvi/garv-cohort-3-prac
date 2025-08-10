import { RecoilRoot, useRecoilValue } from "recoil";
import "./App.css";
import { notificationAtom } from "./atoms";

function App() {
  return (
    <RecoilRoot>
      <div>
        <NotificationCount></NotificationCount>
      </div>
    </RecoilRoot>
  );
}

function NotificationCount() {
  const notification = useRecoilValue(notificationAtom);
  return (
    <>
      <button>{notification.networks}</button>
      <button>{notification.jobs}</button>
      <button>{notification.messaging}</button>
      <button>{notification.notifications}</button>
    </>
  );
}

export default App;
