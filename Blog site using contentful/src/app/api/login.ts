export async function loginRes(user:string,pass:string){
    
    try{
        const apiRes = await fetch('https://dummyjson.com/auth/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              
              username: user,
            password: pass,
            expiresInMins: 60, // optional
            })
          })
        const data = await apiRes.json();
             
        return data
    }
        catch (error){
        console.error(error)
        }
    
    
    }
    