import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../Context/AuthProvider";
import Order from "../Order/Order";

const Orders = () => {
  const { user } = useContext(AuthContext);

  // setorders declare for update order after deleting and updating any order from order page 
  const [orders, setOrders] = useState([]);

// setLoading declare for refressh your page 
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/orders?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setOrders(data);
        console.log(data);
      });
  }, [user?.email]);



  // delete korte hole age method bolte hobe.
  // use window.confirm
  // orders er modhe  id dite hobe je id ta delete korte chai 

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
//  delete korar por je order thakbe tader ke filter kore baki order gulu dekhave.
            const remaining = orders.filter((odr) => odr._id !== _id);
            setOrders(remaining);}
            
          // }
        });
    }
  };


  // fetch
  // method
  // headers
  // body
  // 

  const handleUpdate = (_id) => {
    fetch(`http://localhost:5000/orders/${_id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ status: "Approved" }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
    //  jeta  change kortecina seita bade bakigula ke filter korbo
          const remaining = orders.filter((odr) => odr._id !== _id);

          const changing = orders.find((odr) => odr._id === _id);

          changing.status = "approved";

          // neworders hobe age ja ase sob and new je update korci oita soho 

          const newOrders = [...remaining, changing];
          setOrders(newOrders);
        }
      });
  };

  return (
    <div>
      <h1 className="text-4xl">you have {orders.length} orders</h1>

      <div>
        <div className="overflow-x-auto w-full">
          <table>
            <tbody>
      

              {
                orders.map(order => <Order key={order._id} order={order} handleDelete={handleDelete}
                  handleUpdate={handleUpdate}></Order>)
              }
            </tbody>
          </table>
        </div>
      </div> 
    </div>
    // <div className="overflow-x-auto w-full">

    // {/* </div> */}
  );
};

export default Orders;
