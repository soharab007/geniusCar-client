import React from "react";
import person from "../../../assets/images/about_us/person.jpg";
import parts from "../../../assets/images/about_us/parts.jpg";

const About = () => {
  return (
    <div className="hero my-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="w-1/2 relative">
          <img
            src={person}
            alt=""
            className="w-4/5 h-full rounded-lg shadow-2xl"
          />
          <img
            src={parts}
            alt=""
            className=" absolute w-3/5 right-5 top-1/2 border-8 rounded-lg shadow-2xl"
          />
        </div>
        <div className="w-1/2 ">
          <p className="  text-2xl font-bold text-orange-600">About Us</p>
          <h1 className="my-5 text-5xl font-bold">
            We Are Qualified <br /> % Experience of <br /> In This Field{" "}
          </h1>
          <p className="py-6">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quidem
            ratione commodi quisquam! Animi ex officia voluptatem quas officiis
            id reprehenderit, explicabo est incidunt consequuntur consectetur?
          </p>
          <p className="py-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione
            doloribus quis dolore laudantium magnam nostrum.
          </p>
          <button className="btn btn-primary">Get More Info</button>
        </div>
      </div>
    </div>
  );
};

export default About;
