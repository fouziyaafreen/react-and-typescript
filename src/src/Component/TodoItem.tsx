import classes from './TodoItem.module.css'

const TodoItem: React.FC<{text:string; deleteitemHandler:()=>void }>=(props)=>{

    return <li className={classes.item} onClick={props.deleteitemHandler}>{props.text}</li>
}

export default TodoItem;