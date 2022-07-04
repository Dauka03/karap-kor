function OnLoadingUserData(Component){
    return function LoadingPersonData({isLoading, ...props}){
        if(!isLoading)
        return <Component {...props}/>
        else return(
            <div>
                <h1>Wait, data is loading</h1>
            </div>
        )
    }
}

export default OnLoadingUserData