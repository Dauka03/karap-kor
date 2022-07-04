import SignUp from "../components/SignUp"
import SignIn from "../components/SignIn"
import LogOut from "../components/LogOut";
import { useState } from "react";
function Reg(props){
    const {isAuth, setAuth} = props
    return(
        <>  
            {!isAuth?
            <div>
                <SignUp/>
                <SignIn isAuth={isAuth} setAuth={setAuth}/>
            </div>
            :
            <LogOut isAuth={isAuth} setAuth={setAuth}/>
            }
        </>
    )
}
export default Reg