"use client"
import { useState } from "react";
import * as yup from "yup"
export default function InputField(props:inputType) {
  function onClickHandler(){
    

  }
  const [contactInfo, setContactInfo] = useState<inputType>({
    firstname: '',
    lastname: '',
    gender: '',
    fname: '',
    country: '',
    address: '',
    phone: 0,
    email: '',
    subject: '',
    message: '',
  });

  const onChangeHandler = (e:onChangeEventTypes) => {
    setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
  };


  return (
    <>
      <div className="min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
            <div className="text-center pb-6">
              <h1 className="text-3xl">Contact Us!</h1>
              <p className="text-gray-300">
                Fill up the form below to send us a message.
              </p>
            </div>
            <form >
              <div className="flex justify-between mb-4">
                <div className="w-1/2 pr-2">
                  <label htmlFor="firstname" className="block text-sm font-medium text-gray-700">
                    First Name
                  </label>
                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="First Name"
                    name="firstname"
                    onChange={onChangeHandler}
                  />
                </div>
                <div className="w-1/2 pl-2">
                  <label htmlFor="lastname" className="block text-sm font-medium text-gray-700">
                    Last Name
                  </label>
                  <input
                    className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Last Name"
                    name="lastname"
                    onChange={onChangeHandler}
                  />
                </div>
              </div>

            
<label htmlFor="gender" className="block text-sm font-medium text-gray-700">
  Gender
</label>
<input
  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Gender"
  name="gender"
  onChange={onChangeHandler}
/>

<label htmlFor="fname" className="block text-sm font-medium text-gray-700">
  Father Name
</label>
<input
  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Father Name"
  name="fname"
  onChange={onChangeHandler}
/>

<label htmlFor="country" className="block text-sm font-medium text-gray-700">
  Country
</label>
<input
  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Country"
  name="country"
  onChange={onChangeHandler}
/>

<label htmlFor="address" className="block text-sm font-medium text-gray-700">
  Address
</label>
<input
  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Address"
  name="address"
  onChange={onChangeHandler}
/>

<label htmlFor="phone" className="block text-sm font-medium text-gray-700">
  Phone Number
</label>
<input
  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Phone Number"
  name="phone"
  onChange={onChangeHandler}
/>

<label htmlFor="email" className="block text-sm font-medium text-gray-700">
  Email
</label>
<input
  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="email"
  placeholder="Email"
  name="email"
  onChange={onChangeHandler}
/>

<label htmlFor="subject" className="block text-sm font-medium text-gray-700">
  Subject
</label>
<input
  className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  type="text"
  placeholder="Subject"
  name="subject"
  onChange={onChangeHandler}
/>

<label htmlFor="message" className="block text-sm font-medium text-gray-700">
  Your Message
</label>
<textarea
  className="shadow mb-4 min-h-0 appearance-none border rounded h-64 w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
  placeholder="Type your message here..."
  name="message"
></textarea>


              <div className="flex justify-between">
                <button
                  onClick={onClickHandler}
                  type="submit"
                  className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

