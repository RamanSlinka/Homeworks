import React, {ChangeEvent} from "react";
// @ts-ignore
import s from './Greeting.module.css'

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void
    addUser: () => void
    error: string
    totalUsers: number
    onEnter: (e: any) => void
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, onEnter, totalUsers} // деструктуризация пропсов
) => {

    const inputClass = error ? s.errorInput : s.input


    return (
        <div className={s.other}>
            <div>
                <input value={name}
                       placeholder={'Enter your name please'}
                       onChange={setNameCallback}
                       className={inputClass}
                       onKeyDown={onEnter}
                       onBlur={setNameCallback}
                />
                <div className={s.error}>{error}</div>
            </div>
            <span>{error}</span>
            <button onClick={addUser} className={s.button} disabled={!name}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
