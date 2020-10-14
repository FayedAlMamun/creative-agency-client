import React from 'react';
import Sidebar from '../../Sidebar/Sidebar';

const AdminServiceList = () => {
    return (
        <div className="container-fluid row" >
        <Sidebar></Sidebar>
        <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
            <h5 className="text-brand">Services List</h5>
            <AppointmentDataTable appointments={appointments} />
        </div>
    </div>
    );
};

export default AdminServiceList;