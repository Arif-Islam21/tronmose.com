import { useState, useEffect } from "react";
import axios from "axios";
import { HashRouter, Route, Routes } from "react-router-dom";

//all css
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

//all component
import Login from "./component/auth/login";
import PhoneLogin from "./component/auth/phone_login";
import EmailRegister from "./component/auth/email_register";
import PhoneRegister from "./component/auth/phone_register";
import Check from "./component/extra/check";
import CustomSnackbarProvider from "./component/extra/SnackbarProvider";
import PrivateRoute from "./component/auth/PrivateRoute";


// all protected routes
import Home from "./component/home";
import Me from "./component/me";
import Task from "./component/task";
import TaskCompleted from "./component/taskCompleted";
import Team from "./component/team";
import TeamDetails from "./component/teamDetails";
import Vip from "./component/vip";
import Recharge from "./component/recharge";
import RechargeMethod from "./component/rechargeMethod";
import RechargeTrx from "./component/rechargeTrx";
import RechargeBnb from "./component/rechargeBnb";
import RechargeBep20 from "./component/rechargeBep20";
import Withdraw from "./component/withdraw";
import WithdrawTrx from "./component/withdrawTrx";
import Account from "./component/account";
import WithdrawRecord from "./component/withdrawRecord";
import CompanyProfile from "./component/companyProfile";
import Financial from "./component/financial";
import Notice from "./component/notice";
import NoticeContent from "./component/noticeContent";
import Basic from "./component/basic";
import ChangePassword from "./component/changePassword";
import AuthRoute from "./component/auth/AuthRoute";

function App() {
  // axios.defaults.baseURL = "http://127.0.0.1:8000/"; // local
  axios.defaults.baseURL = "https://admin333.xyz/"; // live
  const token = localStorage.getItem("token");
  axios.defaults.headers.common["Authorization"] = token
    ? `Bearer ${token}`
    : "";

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000); // Example: Loader will be shown for 2 seconds
  }, []);

  return (
    <div>
      <CustomSnackbarProvider>
        <HashRouter>
          <Routes>
            <Route
              path="/"
              element={
                <AuthRoute>
                  <Login />
                </AuthRoute>
              }
            />
            <Route
              path="/phone-login"
              element={
                <AuthRoute>
                  <PhoneLogin />
                </AuthRoute>
              }
            />
            <Route
              path="/register"
              element={
                <AuthRoute>
                  <EmailRegister />
                </AuthRoute>
              }
            />
            <Route
              path="/phone-register"
              element={
                <AuthRoute>
                  <PhoneRegister />
                </AuthRoute>
              }
            />
            <Route path="/check" element={<Check />} />

            {/* all protected routes */}
            <Route path="/home" element={<Home />} />
            <Route
              path="/me"
              element={
                <PrivateRoute>
                  <Me />
                </PrivateRoute>
              }
            />
            <Route
              path="/task"
              element={
                <PrivateRoute>
                  <Task />
                </PrivateRoute>
              }
            />
            <Route
              path="/task-completed"
              element={
                <PrivateRoute>
                  <TaskCompleted />
                </PrivateRoute>
              }
            />
            <Route
              path="/team"
              element={
                <PrivateRoute>
                  <Team />
                </PrivateRoute>
              }
            />
            <Route
              path="/team-details"
              element={
                <PrivateRoute>
                  <TeamDetails />
                </PrivateRoute>
              }
            />
            <Route
              path="/vip"
              element={
                <PrivateRoute>
                  <Vip />
                </PrivateRoute>
              }
            />
            <Route
              path="/recharge"
              element={
                <PrivateRoute>
                  <Recharge />
                </PrivateRoute>
              }
            />
            <Route
              path="/recharge-trx"
              element={
                <PrivateRoute>
                  <RechargeTrx />
                </PrivateRoute>
              }
            />

            <Route
              path="/recharge-bnb"
              element={
                <PrivateRoute>
                  <RechargeBnb />
                </PrivateRoute>
              }
            />

            <Route
              path="/recharge-bep20"
              element={
                <PrivateRoute>
                  <RechargeBep20 />
                </PrivateRoute>
              }
            />

            <Route
              path="/recharge-method"
              element={
                <PrivateRoute>
                  <RechargeMethod />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdraw"
              element={
                <PrivateRoute>
                  <Withdraw />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdraw-trx"
              element={
                <PrivateRoute>
                  <WithdrawTrx />
                </PrivateRoute>
              }
            />
            <Route
              path="/account"
              element={
                <PrivateRoute>
                  <Account />
                </PrivateRoute>
              }
            />
            <Route
              path="/withdraws"
              element={
                <PrivateRoute>
                  <WithdrawRecord />
                </PrivateRoute>
              }
            />
            <Route
              path="/company-profile"
              element={
                <PrivateRoute>
                  <CompanyProfile />
                </PrivateRoute>
              }
            />
            <Route
              path="/financial"
              element={
                <PrivateRoute>
                  <Financial />
                </PrivateRoute>
              }
            />
            <Route
              path="/notice"
              element={
                <PrivateRoute>
                  <Notice />
                </PrivateRoute>
              }
            />
            <Route
              path="/notice-content"
              element={
                <PrivateRoute>
                  <NoticeContent />
                </PrivateRoute>
              }
            />
            <Route
              path="/basic"
              element={
                <PrivateRoute>
                  <Basic />
                </PrivateRoute>
              }
            />
            <Route
              path="/change-password"
              element={
                <PrivateRoute>
                  <ChangePassword />
                </PrivateRoute>
              }
            />
          </Routes>
        </HashRouter>
      </CustomSnackbarProvider>
    </div>
  );
}

export default App;
