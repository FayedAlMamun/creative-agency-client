import React from 'react';

const review=[
    {
        name:'Nash Patrik',
        work:'CEO,Monpol',
        des:' lrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem lorem',
        img:'customer-1.png'
    },
    {
        name:'Marriam Brrom',
        work:'CEO,Monpol',
        des:' lrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem lorem',
        img:'customer-2.png'
    },
    {
        name:'Bria Malone',
        work:'CEO,Monpol',
        des:' lrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem loremlrem lorem lorem lorem',
        img:'customer-3.png'
    },
]
const Review = () => {
    return (
        <div className='mt-5 pt-5'>
            <h3 className="text-center">Client Feedback</h3>
        <div className="d-flex justify-content-center">
        <div className="row w-75 mt-5">
           {
                review.map(review=>{
                    return [
                        <div className="col-12 border mt-1 col-md-4 ">
                            <div className="d-flex">
                                <img height='40px' src={require(`../../../images/${review.img}`)} alt=""/>
                                <div className='ml-3'>
                                    <h5>{review.name}</h5>
                                    <h6>{review.work}</h6>
                                </div>
                                
                            </div>
                            <p className="text-secondary">
                                    {review.des}
                                </p>
                        </div>
                    ]
                })
            }
           </div>
        </div>
        </div>
    );
};

export default Review;