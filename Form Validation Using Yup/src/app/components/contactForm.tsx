"use client"
import { useState } from "react";
import * as yup from "yup"
import DisplayContact from "./DisplayContact";

export default function Form() {
    const contactSchema = yup.object().shape({
        firstname: yup.string().required(),
        lastname: yup.string().required(),
        gender: yup.string().required(),
        fname: yup.string().required(),
        country: yup.string().required(),
        address: yup.string().required().min(5),
        phone: yup.number().required(),
        email: yup.string().email().required(),
        subject: yup.string().required(),
        message: yup.string().required().min(10, "Your message should be at least 10 digits long"),
    })

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
    const [contactList, setContactList] = useState<inputType[]>([])
    const [errors, setErrors] = useState<string[]>([])
    const onChangeHandler = (e: onChangeEventTypes) => {

        setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
    };
    const onClickHandler = async () => {
        try {
            const result = await contactSchema.validate(contactInfo)
            if (!result) {
                return

            }
            let newcontactList: inputType[] = [...contactList, contactInfo]
            setContactList(newcontactList)
            setErrors([])
            setContactInfo({
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
            })
        }
        catch (err:any) {
            setErrors(err.errors)
        }

    }

    return (
        <div className="float">
            <div className="float min-h-screen bg-gray-800 py-6 flex flex-col justify-center sm:py-12">
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
                                        value={contactInfo.firstname}
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
                                        value={contactInfo.lastname}
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
                                value={contactInfo.gender}
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
                                value={contactInfo.fname}
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
                                value={contactInfo.country}
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
                                value={contactInfo.address}
                                placeholder="Address"
                                name="address"
                                onChange={onChangeHandler}
                            />

                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                                Phone Number
                            </label>
                            <input
                                value={contactInfo.phone}
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
                                value={contactInfo.email}
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
                                value={contactInfo.subject}
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
                                value={contactInfo.message}
                                onChange={onChangeHandler}
                            ></textarea>

                            <div>
                                {errors.map((item) => {
                                    return (
                                        <div style={{ color: "red" }}>
                                            <h1>{item}</h1>
                                        </div>
                                    )
                                })}
                            </div>
                            <div className="flex justify-between">

                                <button
                                    onClick={onClickHandler}
                                    type="button"
                                    className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            <DisplayContact data={contactList} />
        </div>
    );
};

