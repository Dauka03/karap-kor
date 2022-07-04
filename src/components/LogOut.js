
function LogOut(props){
    const {isAuth, setAuth} = props;
    console.log(isAuth);

    const onLogOut = () => {
            setAuth(false)
            console.log(isAuth);
    }
    return(
        <>
        <button onClick={onLogOut}>Log Out</button>
        </>
    )
}

export default LogOut