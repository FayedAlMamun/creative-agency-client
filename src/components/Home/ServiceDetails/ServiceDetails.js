import React from 'react';

const ServiceDetails = ({info}) => {
    return (
        <div  className="mt-5 pt-5 col-12 col-md-4">
            <div style={{height:'200px'}} className="text-center">
                
                    <img height='30px' src={require(`../../../images/icons/${info.img}`)} alt=""/>
                    <h3 className='mt-3'>{info.title}</h3>
                    <p className="text-secondary mt-3">{info.description}</p>
            
            </div>
        </div>
    );
};

export default ServiceDetails;