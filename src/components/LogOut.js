
function LogOut(props){
    const {isAuth, setAuth} = props;

    const onLogOut = () => {
            setAuth(false)
            
    }
    return(
        <>
        <button onClick={onLogOut}>Log Out</button>
        </>
    )
}

export default LogOut