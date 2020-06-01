import React,{useState,useEffect} from 'react';
import './App.css';
import {BrowserRouter as Router,Switch,Link} from 'react-router-dom'



function App() {
  
  const [post,setPost] = useState("");
  useEffect(()=>{
    fetch(" https://jsonplaceholder.typicode.com/posts")
    .then(res=>res.json())
    .then(json=>setPost(json));
    
  },[])
  return (
    <Router>
    <div className="App">
    <h1>All posts titles</h1>
      <div className="allPosts">
      <Switch>
      <ul>
        {Object.keys(post).map((item,i)=>(
          <li className="asd" key={i}>
            <Link to={"/post/"+post[item].id}>
            <span className="zxc" > {post[item].title}</span>
            </Link>
            
          </li>
          
        ))}
        </ul>
        </Switch>
      </div>
    </div>
    </Router>
  );
}


export default App;
