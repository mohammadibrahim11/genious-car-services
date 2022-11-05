import React, {  useEffect, useState } from 'react';
// import { AuthContext } from '../../Context/AuthProvider';


const Order = ({order,handleDelete,handleUpdate}) => {
    const {serviceName,email,servicePrice,clientName,_id,serviceId,status}= order;
    console.log(order);

    const [orderService,setOrderService] = useState({});


    useEffect(()=>{
      fetch(`http://localhost:5000/services/${serviceId}`)
      .then(res =>res.json())
      .then(data => setOrderService(data))
      
    },[serviceId]);


    return (
      <div className="overflow-x-auto">
      <table className="table w-full">
 
        <tbody>
          <tr>
            <th><button className='btn btn-ghost' onClick={()=>handleDelete(_id)}>x</button></th>
            <td>{serviceName}</td>
            <td>{email}</td>
            <td>{servicePrice}</td>
            <td>{clientName}</td>
      <td><button className='btn btn-primary' onClick={()=>handleUpdate(_id)}>{status ? status : 'pending'}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
};

export default Order;