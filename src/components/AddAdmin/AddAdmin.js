import React from 'react';

const AddAdmin = () => {
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h5 className="text-brand mt-4">Add Admin</h5>
                <div className='mt-5' style={{ backgroundColor: "#F4FDFB", height: '100vh' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className='bg-light' style={{ borderRadius: '15px' }}>

                            <label style={{ fontWeight: 700 }} htmlFor="exampleInputEmail1">Service Title</label><br />
                            <input onBlur={handleBlur} type="text" className="inp-title" name="title" placeholder="Enter title" />
                            <button className="btn btn-primary">submit</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );

};

export default AddAdmin;