'use client';
import { useState } from "react";

export default function useStateForms() {
    
    const useChangeState = ({Status}) => {
        let [StateChange,setStateChange] = useState({Status})
        setStateChange(!StateChange.Status)
        return(StateChange.Status)
    };

    return({
        useChangeState: useChangeState,
    })
}
