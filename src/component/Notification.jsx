const Notification=({notification})=>{
    if(notification.message===null&&notification.errormessage===null){
        return null
    }
    else if(notification.message){
        return(
            <p className='notification'>{notification.message}</p>
        )
    }
    else{
        return(
            <p className='error'>{notification.errormessage}</p>
        )
    }
}

export default Notification