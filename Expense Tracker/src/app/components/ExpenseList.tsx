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
    <h1>Expense Tracker</h1>
    <button onClick={()=>setIsOpen(true)}>Add Expense</button>
        <ExpenseModal isOpen={isOpen} isClose={isClosed} expenseObj={expense}onChangeHandler={onChangeHandler } onSubmithandle={onSubmitHandler}/>




        <table className="mx-auto w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 bg-white shadow-md rounded-md">
           <thead className="bg-indigo-700 text-white">
             <tr>
               <th className="py-2 px-4">Amount</th>
               <th className="py-2 px-4">Note</th>
               
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

