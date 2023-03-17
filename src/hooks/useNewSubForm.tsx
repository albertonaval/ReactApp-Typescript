import { useReducer } from "react"
import { Sub } from "../types"

interface FormState {
    inputValues: Sub
}

const formReducer = (state: FormState["inputValues"], action: FormReducerAction) => {
    switch (action.type) {
        case "change_values":
            const {inputName, inputValue} = action.payload
            return {
                ...state,
                [inputName]: inputValue
            }
        case "clear":
            return INITIAL_STATE
    }
}
//Todo reducer lleva un estado y una acción

const INITIAL_STATE = {
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
}

type FormReducerAction = {
    type: "change_values",
    payload: {
        inputName: string,
        inputValue: string
    }
} | {
    type: "clear",
}


const useNewSubForm = () => {
    return useReducer(formReducer, INITIAL_STATE)
}

export default useNewSubForm