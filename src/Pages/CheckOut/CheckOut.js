import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider/AuthProvider";

const CheckOut = () => {
  const { _id, title, price } = useLoaderData();
  const { user } = useContext(AuthContext);

  const handlePlaceOrder = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = ` ${form.firstName.value} ${form.lastName.value}`;
    const phone = form.phone.value;
    const email = user?.email || "Unregistered";
    const message = form.message.value;

    const order = {
      service: _id,
      serviceName: title,
      price,
      customer: name,
      phone,
      email,
      message,
    };

    fetch("https://genius-car-server-orpin-three.vercel.app/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization: `Bearer ${localStorage.getItem("genius-token")}`,
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.acknowledged) {
          alert("Order place successfully");
          form.reset();
        }
      })
      .catch((err) => console.error(err));
  };
  return (
    <div>
      <form onSubmit={handlePlaceOrder}>
        <h2 className="text-4xl">You are about to order: {title}</h2>
        <h4 className="text-2xl">Price: {price}</h4>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <input
            name="firstName"
            type="text"
            placeholder="First Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="lastName"
            type="text"
            placeholder="Last Name"
            className="input input-ghost w-full input-bordered"
          />
          <input
            name="phone"
            type="text"
            placeholder="Your Phone"
            className="input input-ghost w-full input-bordered"
            required
          />
          <input
            name="password"
            type="text"
            placeholder="Your Email"
            className="input input-ghost w-full input-bordered"
            defaultValue={user?.email}
            readOnly
          />
        </div>
        <textarea
          name="message"
          className="textarea textarea-bordered h-24 w-full my-5"
          placeholder="Your Message"
          required
        ></textarea>
        <input className="btn mb-5" type="submit" value="Place your order" />
      </form>
    </div>
  );
};

export default CheckOut;
