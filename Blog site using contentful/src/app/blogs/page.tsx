export default function Blogs() {
  fetch('https://dummyjson.com/auth/me', {
  method: 'GET',
  headers: {
    'Authorization': 'Bearer /* YOUR_TOKEN_HERE */', 
  }, 
})
.then(res => res.json())
.then(console.log);
    return (
     <><h1>blogs</h1></>
    );
  }
  