import { Routes, Route } from 'react-router-dom';
import Login from './Page/Login/login';
import Homepage from './Page/Homepage/homepage';

// import Homepage from './page/Homepage/home';
// import FormContract from './page/Form/formcontract';
// import UpdateContract from './page/Form/updatecontract';
// import ViewContract from './page/Form/viewcontract';
// import Viewsit from './page/Viewsit/viewsit';
// import FormBorrow from './page/Form/formborrow';
// import UpdateBorrow from './page/Form/updateborrow';
// import Review from './page/Review/review';
// import Borrow from './page/Borrow/borrow';
// import UpdateBorrowUser from './page/Form/updateborrowUser';
// import FormReview from './page/Form/formreview';
// import UpdateReview from './page/Form/updatereview';
// import ViewPdf from './components/ViewPdf';
// import History from './page/Review/history';
// import UpdateReviewUser from './page/Form/updatereviewUser';
// import UpdateReviewEditUser from './page/Form/updatereviewEdituser';
// import FormContractRenew from './page/Form/formcontractrenew';
// import { useEffect } from 'react';
// import { clearCredentials, selectAuth } from './store/AccoutReducer';
// import { useDispatch, useSelector } from 'react-redux';
// import axiosInstance from './utils/axiosConfig';
// import swal from 'sweetalert2';

// function PrivateRoute() {
//   const { token } = useSelector(selectAuth);
//   return token ? <Outlet /> : <Navigate to="/" />;
// }

export default function App() {
  // const { token } = useSelector(selectAuth);
  // const dispatch = useDispatch();
  // const location = useLocation();

  // useEffect(() => {
  //   const checkToken = async () => {
  //     if (token) {
  //       try {
  //         await axiosInstance.get('/getprofile');
  //       } catch (error) {
  //         console.error('Session expired:', error);
  //         await swal.fire({
  //           title: '',
  //           text: 'User-Password หมดอายุ กรุณา Login ใหม่อีกครั้ง',
  //           icon: 'error',
  //           confirmButtonText: 'Close',
  //         });

  //         dispatch(clearCredentials());
  //         <Navigate to="/" />;
  //       }
  //     }
  //   };

  //   // ตรวจสอบว่าไม่ใช่หน้า Login ("/") ก่อนเรียก checkToken()
  //   if (location.pathname !== '/') {
  //     checkToken();
  //   }
  // }, [token, dispatch, location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/homepage" element={<Homepage />} />
      {/* <Route element={<PrivateRoute />}>
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/borrow" element={<Borrow />} />
        <Route path="/review" element={<Review />} />
        <Route path="/from-borrow" element={<FormBorrow />} />
        <Route path="/from-review" element={<FormReview />} />
        <Route path="/from-renewcontract" element={<FormContractRenew />} />
        <Route path="/viewsit" element={<Viewsit />} />
        <Route path="/from-contract" element={<FormContract />} />
        <Route path="/update-contract/:id" element={<UpdateContract />} />
        <Route path="/updateuser-contract/:id" element={<UpdateBorrowUser />} />
        <Route path="/update-borrow/:id" element={<UpdateBorrow />} />
        <Route path="/update-review/:id" element={<UpdateReview />} />
        <Route
          path="/updatereview-edituser/:id"
          element={<UpdateReviewEditUser />}
        />
        <Route path="/updatereview-user/:id" element={<UpdateReviewUser />} />
        <Route path="/view-contract/:id" element={<ViewContract />} />
        <Route path="/history" element={<History />} />
      </Route> */}
    </Routes>
  );
}
