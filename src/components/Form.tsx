import { useState } from "react"
import { Sub } from "../types"


interface FormState {
    inputValues: Sub
}



const Form = () => {

    const [inputValues, setInputValues] = useState<FormState["inputValues"]>({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: ''
    })


    const handleSubmit = () => { }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setInputValues({
            ...inputValues,
            [event.target.name]: event.target.value
        })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" placeholder="Nick" name="nick" />
                <input onChange={handleChange}  value={inputValues.subMonths} type="text" placeholder="Months" name="subMonths"/>
                <input onChange={handleChange}  value={inputValues.avatar} type="number" placeholder="avatar" name="avatar" />
                <textarea onChange={handleChange}  value={inputValues.description}  placeholder="description" name="description" />
                <button>Save new Sub!</button>
            </form>
        </div>
    )

}

export default Form