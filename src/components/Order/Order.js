import React, {  useEffect, useState } from 'react';
// import { AuthContext } from '../../Context/AuthProvider';


const Order = ({order,handleDelete,handleUpdate}) => {
    const {title,email,price,name,_id,contact,status,service}= order;
    console.log(order);

    const [orderService,setOrderService] = useState({});

// ekhane services er img load deya hoise.service er id diye oi service ke khuje ber korte hobe
    useEffect(()=>{
      fetch(`http://localhost:5000/services/${service}`)
      .then(res =>res.json())
      .then(data => setOrderService(data))
      
    },[service]);


    return (
      <div className="overflow-x-auto">
      <table className="table w-full">
 
        <tbody>
          <tr>
            <th><button className='btn btn-ghost' onClick={()=>handleDelete(_id)}>x</button></th>
            {
              orderService?.img &&
              <img className='h-12 w-12 border rounded' src={orderService?.img} alt="" srcset="" />
              
            }
            <td>{title}</td>
            <td>{email}</td>
            <td>{price}</td>
            <td>{name}</td>
            <td>{contact}</td>
      <td><button className='btn btn-primary' onClick={()=>handleUpdate(_id)}>{status ? status : 'pending'}</button></td>
          </tr>
        </tbody>
      </table>
    </div>
    );
};

export default Order;