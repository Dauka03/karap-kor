import axios from "axios";
import { useState } from "react";

function SignIn(props){
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const {isAuth, setAuth} = props;


    const onAuthUser = () => {
        try {
            axios.post("http://localhost:5000/auth/login",{
                username,
                password
             })
        .then((response) => {
          if(response.data){
            setAuth(true);
            alert(username+" Welcome")
            console.log(isAuth);
            
          }
          else{
            alert(username+ " You are already autorized" )
          }
          
          console.log(isAuth);
          console.log(response);
        });
        } catch (e) {
            console.log("User is not autorized");
        }
      }
      

    return(
        <>
         <div>
      <input
        value={username}
        onChange={(event) => {
          setUserName(event.target.value);
        }}
        placeholder="username"
      />
      <input
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        placeholder="password"
      />
      <button onClick={onAuthUser}>Sign in</button>
      </div>
        </>
    )
}

export default SignIn