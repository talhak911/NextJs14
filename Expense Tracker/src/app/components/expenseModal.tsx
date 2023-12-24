export default function ExpenseModal(props:expenseProps)
{
  
    return(
<>
{props.isOpen ===true ? <div className="float min-h-screen  py-6 flex flex-col justify-center sm:py-12">
      <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-700 to-purple-500 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="text-white relative px-4 py-10 bg-indigo-400 shadow-lg sm:rounded-3xl sm:p-20">
              <div className="text-center pb-6">
                  <h1 className="text-3xl">Expense Add or update!</h1>
                  <p className="text-gray-300">
                      Add expense or update.
                  </p>
                  <button onClick={props.isClose}>Close</button>
              </div>
              <form >
                  <div className="flex justify-between mb-4">
                      <div className="w-1/2 pr-2">
                          <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                             Amount
                          </label>
                          <input
                              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              value={props.expenseObj.amount}
                    
                              name="amount"
                              onChange={props.onChangeHandler}
                          
                          />
                      </div>
                      <div className="w-1/2 pr-2">
                          <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                             Note
                          </label>
                          <input
                              className="shadow mb-4 appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              type="text"
                              value={props.expenseObj.note}
                              onChange={props.onChangeHandler}
                              name="note"
                        //      onChange={onChangeHandler}
                          />
        
                    </div>
                  <div className="flex justify-between">

                      <button
                          // onClick={onClickHandler}
                          type="button"
                          className="shadow bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                          onClick={props.onSubmithandle}
                      >
                          Add
                      </button>
                  </div>
                  
</div>
              </form>
          </div>
      </div>
  </div> : <></>       }
</>    
    )
}