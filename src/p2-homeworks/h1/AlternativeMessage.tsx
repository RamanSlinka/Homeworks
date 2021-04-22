import React from 'react'
import s from "./AlternativeMessage.module.css";


type AlternativeMessagePropsType = {
    avatar: string
    name: string
    message: string
    time: string
}

function AlternativeMessage(props: AlternativeMessagePropsType) {
    return (
        <div className={s.message}>
            <img src={props.avatar} alt="avatar" className={s.avatar}/>
            <div className={s.inputArea}>
                <h3 className={s.name}>{props.name}</h3>
                <p>{props.message}</p>
                <span className={s.time}>{props.time}</span>
            </div>

        </div>
    )
}

export default AlternativeMessage
