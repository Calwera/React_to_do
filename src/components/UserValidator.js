import React, { useState } from "react";

import Modal from "./Modal/Modal";
import UserForm from './UserForm'

const UserValidator = (props) => {
    
    const [isValidated, setIsValidated] = useState(true)
   

        const saveUserDataHandler = (enteredUser) => {
            console.log(enteredUser.userage ==='') 
            if (enteredUser.userage === '') 
            {
                
                setIsValidated(false)
                props.onAddUser([])
            }
           else {

            setIsValidated(true)
            const userData = {
                ...enteredUser,
                id: Math.random().toString(),
            };
            
            props.onAddUser(userData);
           }
        };
        
        
        return <div>{isValidated && <Modal />}
         {isValidated  && <UserForm onSaveUserData={saveUserDataHandler} />};
        </div>
    
    };

export default UserValidator;