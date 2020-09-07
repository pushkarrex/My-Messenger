import React,{forwardRef} from 'react'
import classes from './Message.module.css'


const Message = forwardRef((props,ref) =>{
    
    const isLogin= (props.userName===props.message.userName)
    return (
        <div  ref ={ref} className ={!isLogin?classes.message:classes.message__user}>
           {isLogin?`${props.message.msg}`:`${props.message.userName?props.message.userName:"Anonymous-user"} : ${props.message.msg}` } 
           
           
        </div>
    )
})

export default Message
