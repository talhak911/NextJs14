type blogType = {
    
    title:String,
    date:string
    desc:string  
}
type createBlogProps =
{
    onClickAddhandler:(obj:blogType)=>void,
    isOpen:boolean,
    isClose:()=>void
}
type onChangeEventTypes ={
    target: { value: string, name:string } 
}