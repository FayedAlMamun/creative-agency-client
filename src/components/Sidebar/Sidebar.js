
import { faCartPlus, faCommentDots, faConciergeBell, faShoppingCart, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { userInfo } from '../../App';
import logo from '../../images/logos/logo.png';
import './Sidebar.css';
const Sidebar = (props) => {
    const [loggedInUser, setLoggedInUser] = useContext(userInfo);
    const [admins, setAddmins] = useState([])
    useEffect(() => {
        fetch('https://creative-agency-server-chi.vercel.app/admins')
            .then(res => res.json()
                .then(data => setAddmins(data)))
    }, [])
    const findAdmin = admins.find(admin => loggedInUser.email === admin.email)
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{ height: "100vh" }}>
            <ul className="list-unstyled">
                <li>
                <Link to="/"><img className='mb-3' height='50px' src={logo} alt="" /></Link>
                </li>
                {
                    !findAdmin ?
                        <div>
                            <li>
                                <Link to="/customerOrder/691316a2d1fe180a7fe86998" className={props.PlaceOrder ? props.PlaceOrder : 'text-dark'}>
                                    <FontAwesomeIcon icon={faShoppingCart} /> <span>Order</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/customerServicesList" className={props.customerService ? props.customerService : 'text-dark'}>
                                    <FontAwesomeIcon icon={faConciergeBell} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/review" className={props.review ? props.review : 'text-dark'}>
                                    <FontAwesomeIcon icon={faCommentDots} /> <span>Review</span>
                                </Link>
                            </li>
                        </div> :
                        <div>
                            <li>
                                <Link to="/adminServicesList" className={props.adminService ? props.adminService : 'text-dark'}>
                                    <FontAwesomeIcon icon={faConciergeBell} /> <span>Service List</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/Addservices" className={props.addService ? props.addService : 'text-dark'}>
                                    <FontAwesomeIcon icon={faCartPlus} /> <span>Add service</span>
                                </Link>
                            </li>
                            <li>
                                <Link to="/makeAdmin" className={props.addAdmin ? props.addAdmin : 'text-dark'}>
                                    <FontAwesomeIcon icon={faUserPlus} /> <span>Make Admin</span>
                                </Link>
                            </li>
                        </div>

                }
            </ul>

        </div>
    );
};

export default Sidebar;
