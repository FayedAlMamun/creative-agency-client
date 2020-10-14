import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import'./AddServices.css'
const AddServices = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        const newInfo = { ...info };
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
    const handleSubmit = () => {
        const formData = new FormData()
        console.log(info);
        formData.append('file', file);
        formData.append('title', info.title);
        formData.append('description', info.description);

        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <section className="container-fluid row">
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0 }}>
                <h5 className="text-brand mt-4">Add Services</h5>
                <div className='mt-5' style={{ backgroundColor: "#F4FDFB", height: '100vh' }}>
                    <div className="p-5">
                        <form onSubmit={handleSubmit} className='bg-light' style={{borderRadius:'15px'}}>
                            <div className="d-flex">
                            <div className="form-group pl-4 pt-4">
                                <label style={{fontWeight:700}} htmlFor="exampleInputEmail1">Service Title</label><br />
                                <input onBlur={handleBlur} type="text" className="inp-title" name="title" placeholder="Enter title" />
                            </div>
                            <div className="form-group pl-4 pt-4">
                                <label style={{fontWeight:700}} htmlFor="exampleInputPassword1">Icon</label><br />
                                <input onChange={handleFileChange} type="file" className="inp-file" id="exampleInputPassword1" placeholder="Picture" />
                            </div>
                            </div>
                            <div className="form-group pl-4">
                                <label style={{fontWeight:700}} htmlFor="exampleInputPassword1">Description</label><br />
                                <input onBlur={handleBlur} type="text" className="inp-des" name="description" placeholder="Enter Designation" />
                            </div>
                           
                            
                        </form>
                        <div className="d-flex justify-content-end">
                        <button type="submit" className="btn-submit btn-primary">Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AddServices;