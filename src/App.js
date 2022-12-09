import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header/header';
import Home from './components/home/home';
import "./styles/header.scss";
import "./styles/home.scss";
import "./styles/founder.scss";
import "./styles/menu.scss";
import "./styles/app.scss";
import "./styles/MenuCard.scss";
import "./styles/footer.scss";
import "./styles/contact.scss";
import "./styles/cart.scss";
import "./styles/shipping.scss";
import "./styles/confrimOrder.scss";
import "./styles/paymentSuccess.scss";
import "./styles/login.scss";
import "./styles/app.scss";
import "./styles/profile.scss";
import "./styles/tableClass.scss";
import "./styles/orderDetails.scss";
import "./styles/dashboard.scss";
import "./styles/about.scss";

import Footer from './components/home/Footer';
import Contact from './components/home/Contact';
import Cart from './components/home/Cart';
import Shipping from './components/home/Shipping';
import ConfirmOrder from './components/home/ConfirmOrder';
import PaymentSucess from './components/home/PaymentSucess';
import Login from './components/home/Login';
import Profile from './components/home/Profile';
import MyOrders from './components/home/MyOrders';
import OrderDetails from './components/home/OrderDetails';
import Dashboard from './components/home/Dashboard';
import Users from './components/home/Users';
import Orders from './components/home/Orders';
import About from './components/home/About';
import NotFound from './components/home/Notfound';


function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shipping' element={<Shipping />} />
        <Route path='/confirmOrder' element={<ConfirmOrder />} />
        <Route path='/paymentSuccess' element={<PaymentSucess />} />
        <Route path='/login' element={<Login />} />
        <Route path='/me' element={<Profile />} />
        <Route path='/myOrders' element={<MyOrders />} />
        <Route path='/order:id' element={<OrderDetails />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
        <Route path='/admin/users' element={<Users />} />
        <Route path='/admin/orders' element={<Orders />} />
        <Route path='/about' element={<About />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
