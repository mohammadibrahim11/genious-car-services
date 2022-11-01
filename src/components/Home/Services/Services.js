import React, { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
    const [Services,setServices] = useState([]);

    useEffect( ()=>{
        fetch('service.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>
            <div className='text-center w-1/2 mx-auto '>
                <h1 className='text-xl font-bold text-orange-400 py-3 mt-5'>Service</h1>
                <h3 className='text-5xl font-bold '>Our Service Area</h3>
                <p className='py-3'>the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
            </div>
            <div className='grid grid-cols-3 gap-4 mt-12'>

             {
                Services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
             }

            </div>

            <div className='mt-10 mb-10 text-center'>
            <button className="btn btn-warning ">More Services</button>
            </div>
        </div>
    );
};

export default Services;