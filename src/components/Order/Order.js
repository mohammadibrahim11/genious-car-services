import React from 'react';

const Order = ({order}) => {
    const {serviceName,email,servicePrice,clientName}= order;
    console.log(order);
    return (
        <div>
                  <tr>
        <th>
          {/* <label>
            <input type="checkbox" className="checkbox" />
          </label> */}
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="/tailwind-css-component-profile-2@56w.png" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">{serviceName}</div>
              <div className="text-sm opacity-50">{servicePrice}</div>
            </div>
          </div>
        </td>
        <td>
        {clientName}
          <br/>
          <span className="badge badge-ghost badge-sm">{email}</span>
        </td>
   
    
      </tr>
     
        </div>
    );
};

export default Order;