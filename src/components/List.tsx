import { Sub } from "../types"


interface Props{
    //children: string se puede tipar para que se acepte el children
    subs: Array<Sub>
}




const List = ({ subs }: Props) => {

    const renderList = (): JSX.Element[] => { //Componente con la logica y le indico que es una funcion de JSX que MAP[]
        return subs.map(sub => {
            return (
                <li key={sub.nick}>
                    <img src={sub.avatar} alt={sub.nick} />
                    <h4>{sub.nick} (<small>{sub.subMonths}</small>)</h4>
                    <p>{sub.description?.substring(0, 100)}</p>
                </li>
            )
        })
    }

    return (
        <ul>
        {renderList()}
        </ul>
    )
}

export default List