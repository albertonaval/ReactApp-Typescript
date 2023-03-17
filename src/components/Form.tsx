
import { Sub } from "../types"
import useNewSubForm from "../hooks/useNewSubForm"



interface FormProps {
    onNewSub: (newSub: Sub) => void
}

const Form = ({onNewSub}: FormProps) => {

    // const [inputValues, setInputValues] = useState<FormState["inputValues"]>(INITIAL_STATE)

    const [inputValues, dispatch] = useNewSubForm()


    const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
        event.preventDefault()
        onNewSub(inputValues)
        dispatch({type: "clear"})
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target
        dispatch({
            type: "change_values",
            payload: {
                inputName: name,
                inputValue:value
            }
        })
    }


    const handleClear = () => {
        dispatch({type: "clear"})
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} value={inputValues.nick} type="text" placeholder="Nick" name="nick" />
                <input onChange={handleChange}  value={inputValues.subMonths} type="number" placeholder="Months" name="subMonths"/>
                <input onChange={handleChange}  value={inputValues.avatar} type="text" placeholder="avatar" name="avatar" />
                <textarea onChange={handleChange} value={inputValues.description} placeholder="description" name="description" />
                <button onClick={handleClear} type="button">Clear the form!</button>
                <button type="submit">Save new Sub!</button>
            </form>
        </div>
    )

}

export default Form