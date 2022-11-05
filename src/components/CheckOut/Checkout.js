import React from "react";
// { useContext } from "react";
// import { useLoaderData } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthProvider";

const Checkout = () => {
  //   const { title,_id,price } = useLoaderData();
  //   const {user} = useContext(AuthContext);
  //   console.log(title);

  //   const handlePlaceOrder=(event)=>{
  //   event.preventDefault();
  //   const form = event.target;
  //   const name = `${form.firstName.value} ${form.lastName.value}`;
  //  const phone = form.phone.value;
  //  const email = user?.email || 'unregistered';

  //  const order={

  //      serviceId: _id ,
  //     serviceName:title,
  //     servicePrice:price,
  //     clientName:name,
  //     clientPhone:phone,
  //     email:email,

  //  }
  //  if(phone.length > 10){
  //     alert("phone should be 10 charecters")
  //  }

  //  fetch(`http://localhost:5000/orders`,{
  //     method:'POST',
  //     headers:{
  //         'content-type':'application/json'
  //     },
  //     body:JSON.stringify(order)
  //  })
  //  .then(res => res.json())
  //  .then(data => {console.log(data)
  // if(data.acknowledged){
  //     alert('order places')
  //     form.reset();
  // }})
  //  .catch(error => console.error(error));

  //   }

  return (
  <div className="bg-white">

    <div className="bg-white">
    <h2 className="text-4xl mt-5 font-bold text-center">Checkout</h2>
    </div>
    <form className="bg-gray-100 rounded  container w-1/2 mx-auto pt-5 mt-8 mb-8 ">
     
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-4  w-11/12 mx-auto '>
                    <input name="firstName" type="text" placeholder="First Name" className=" p-2 border rounded  bg-white w-full " />
                    <input name="lastName" type="text" placeholder="Last Name" className="p-2 border rounded  bg-white w-full " />
                    <input name="phone" type="text" placeholder="Your Phone" className=" bg-white  w-full  p-2 border rounded" required />
                    <input name="email" type="text" placeholder="Your email" className=" p-2 bg-white w-full  border rounded" readOnly />

                 
      
                </div>

             
             <div className="w-11/12 mx-auto my-4 grid grid-cols-1">
             <textarea name="message" className="p-2 border rounded  bg-white textarea-bordered w-full h-24 " placeholder="your message" id="" required ></textarea>
          

        
   
                <input className="mx-auto btn btn-primary my-4 " type="submit" value="place your order" />
             </div>
           
              
    </form>
  </div>
    
  );
};

export default Checkout;
