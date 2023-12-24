"use client"
import { useState } from "react";
import * as yup from "yup"
import DisplayContact from "./expenseModal";
import ExpenseModal from "./expenseModal";

export default function ExpenseTracker() {

    const [isOpen,setIsOpen]=useState(false)
    // to close the modal
    const isClosed= ()=>{
        setIsOpen(false)
    }
    const [expense, setExpense] = useState<expenseType>({
        amount: 0,
        date: "",
        note: '',
        category: '',
                
    });
    const [expenses, setExpenses] = useState<expenseType[]>([]);
    const [errors, setErrors] = useState<string[]>([])
    const onChangeHandler = (e: onChangeEventTypes) => {

        setExpense({ ...expense, [e.target.name]: e.target.value });
    };
   const onSubmitHandler =()=>{
    setExpense({
        amount: 0,
        date: "",
        note: '',
        category: '',
                
    })
    setExpenses([...expenses,expense])
   }

    return (
    <>
    <h1 className="text-5xl text-center m-5">Expense Tracker</h1>
    <button onClick={()=>setIsOpen(true)} className="px-5 py-2.5 text-sm font-medium text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 m-5 ">Add Expense +</button>
        <ExpenseModal isOpen={isOpen} isClose={isClosed} expenseObj={expense}onChangeHandler={onChangeHandler } onSubmithandle={onSubmitHandler}/>




        <table className="mx-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white shadow-md rounded-md">
           <thead className="bg-indigo-700 text-white">
             <tr>
               <th className="py-2 px-4 text-center">Amount</th>
               <th className="py-2 px-4 text-center">Note</th>
               
             </tr>
           </thead>
           <tbody>
            {expenses.map((item, index) => (
              <tr key={index}>
                <td className="py-2 px-4 text-center">{item.amount}</td>
                <td className="py-2 px-4 text-center">{item.note}</td>
             
              </tr>
            ))}
          </tbody>
        </table>

    </>

     

    );
};

