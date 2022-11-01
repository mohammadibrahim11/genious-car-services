import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Context/AuthProvider";

const Checkout = () => {
  const { title,_id,price } = useLoaderData();
  const {user} = useContext(AuthContext);
  console.log(title);

  const handlePlaceOrder=(event)=>{
  event.preventDefault();
  const form = event.target;
  const name = `${form.firstName.value} ${form.lastName.value}`;
 const phone = form.name.value;
 const email = user?.email || 'unregistered';

 const order={

     serviceId: _id ,
    serviceName:title,
    servicePrice:price,
    clientName:name,
    clientPhone:phone,
    email:email,

 }
//  if(phone.length > 10){
//     alert("phone should be 10 charecters")
//  }
  
 fetch(`http://localhost:5000/orders`,{
    method:'POST',
    headers:{
        'content-type':'application/json'
    },
    body:JSON.stringify(order)
 })
 .then(res => res.json())
 .then(data => {console.log(data)
if(data.acknowledged){
    alert('order places')
    form.reset();
}})
 .catch(error => console.error(error));

  }


  return (
    <section className="p-6 dark:dark:bg-gray-800 dark:dark:text-gray-50">
      <form onSubmit={handlePlaceOrder}
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm dark:dark:bg-gray-900">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-medium">checkout</p>
            <p className="text-xs">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci
              fuga autem eum!
            </p>
          </div>
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-3">
              <label for="firstName" className="text-sm">
                First name
              </label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                placeholder="First name"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 dark:dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastName" className="text-sm">
                Last name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last name"
                name="lastName"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 dark:dark:text-gray-900"
              />
            </div>

            <div className="col-span-full">
              <label for="address" className="text-sm">
               Phone
              </label>
              <input
                id="address"
                type="text"
                placeholder="enter your phone"
                name="phone"
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 dark:dark:text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Email"
                name="email"
                defaultValue={user?.email} 
                readOnly
                className="w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 dark:dark:border-gray-700 dark:dark:text-gray-900"
              />
            </div>
          </div>
        
        </fieldset>
        <button className="btn btn-primary">place your order</button>
      </form>
    </section>
  );
};

export default Checkout;
