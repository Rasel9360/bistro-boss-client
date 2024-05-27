import { createBrowserRouter } from 'react-router-dom';
import Root from '../MainLayout/Root';
import Home from '../Pages/Home/Home';
import Menu from '../Pages/Menu/Menu';
import Order from '../Pages/Order/Order';
import Login from '../Pages/Login/Login';
import Register from '../Pages/Register/Register';
import PrivateRoute from './PrivateRoute';
import Dashboard from '../MainLayout/Dashboard';
import Cart from '../Pages/Dashboard/Cart/Cart';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import AllUsers from '../Pages/Dashboard/AllUsers/AllUsers';
import AddItems from '../Pages/Dashboard/AddItems/AddItems';
import AdminRoute from './AdminRoute';
import ManageItems from '../Pages/Dashboard/ManageItems/ManageItems';
import UpdateItem from '../Pages/Dashboard/UpdateItem/UpdateItem';
import AdminHome from '../Pages/Dashboard/AdminHome/AdminHome';
import Payment from '../Pages/Dashboard/Payment/Payment';
import PaymentHistory from '../Pages/Dashboard/PaymentHistory/PaymentHistory';

const Route = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/menu',
        element: <PrivateRoute><Menu></Menu></PrivateRoute>
      },
      {
        path: '/order/:category',
        element: <Order></Order>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>
      }
    ]
  },
  {
    path: "dashboard",
    element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
    children: [
      // User related route
      {
        path: 'cart',
        element: <Cart></Cart>
      },
      {
        path: 'payment',
        element: <Payment></Payment>
      },
      {
        path: 'paymentHistory',
        element: <PaymentHistory></PaymentHistory>
      },
      // Admin related route
      {
        path: 'allUsers',
        element: <AdminRoute><AllUsers></AllUsers></AdminRoute>
      },
      {
        path: 'addItems',
        element: <AdminRoute><AddItems></AddItems></AdminRoute>
      },
      {
        path: 'manageItems',
        element: <AdminRoute><ManageItems></ManageItems></AdminRoute>
      },
      {
        path: 'updateItems/:id',
        element: <AdminRoute><UpdateItem></UpdateItem></AdminRoute>,
        loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
      },
      {
        path: 'adminHome',
        element: <AdminRoute><AdminHome></AdminHome></AdminRoute>
      }
    ]
  }
]);

export default Route;