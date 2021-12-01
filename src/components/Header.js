import Button from "./Button"

const Header = ({ title, onShowTask, showAdd }) => {
    return(
        <header className='header'>
            <h1>{title}</h1>
            <Button color={showAdd ? 'blue' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={() => onShowTask()}/>
        </header>
    )   
}


export default Header