type blogType = {
    
    title:string,
    date:string
    desc:string  
    id:string
}
type createBlogProps =
{
    blogObect:blogType
    onClickAddhandler:(obj:blogType)=>void,
    isOpen:boolean,
    isClose:()=>void
    onClickUpdatehandler:(obj:blogType)=>void,
}
type onChangeEventTypes ={
    target: { value: string, name:string } 
}