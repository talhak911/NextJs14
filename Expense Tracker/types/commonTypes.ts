type expenseType = {
    amount: number,
    date: string,
    note: string,
    category: string,
    
}
type expenseProps ={
    isOpen:boolean,
    isClose:()=>void,
    onChangeHandler:(e:onChangeEventTypes)=>void,
    onSubmithandle:()=>void
    expenseObj:expenseType
}
type onChangeEventTypes ={
    target: { value: string, name:string } 
}