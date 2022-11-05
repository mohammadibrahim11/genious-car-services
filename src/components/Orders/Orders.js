import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Order from "../Order/Order";

const Orders = () => {
  const { user } = useContext(AuthContext);

  const [orders, setOrders] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user?.email}`,{
      headers:{
        authorization:`Bearer ${localStorage.getItem('genius-token')}`
      }
    })
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [user?.email]);

  const handleDelete = (_id) => {
    const proceed = window.confirm("are you sure you want to delete");
    if (proceed) {
      fetch(`http://localhost:5000/orders/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successfully");
            const remaining = orders.filter((odr) => odr._id !== _id);
            setOrders(remaining);
            setLoading(false);
          }
        });
    }
  };

  const handleUpdate = (_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if(data.modifiedCount > 0){
          const remaining = orders.filter(odr => odr._id !== _id)
          const changing = orders.find (odr => odr._id === _id);
          changing.status= 'approved'
          const newOrders = [...remaining, changing];
          setOrders(newOrders)
        }
      });
  };

  return (
    // <div className="overflow-x-auto w-full">
    <table className="table w-full">
      <thead>
        <tr>
          <th>
            <label>
              <input type="checkbox" className="checkbox" />
            </label>
          </th>
          <th>Name</th>
          <th>Job</th>
          <th>Favorite Color</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order) => (
          <Order
            key={order._id}
            order={order}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
          ></Order>
        ))}
      </tbody>
    </table>
    // {/* </div> */}
  );
};

export default Orders;
