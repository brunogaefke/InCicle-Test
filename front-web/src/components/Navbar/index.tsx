import './styles.css'
import { ReactComponent as IncicleIcon } from 'assets/img/incicle.svg'

const Navbar = () => {
    return (
        <header>
            <div className="nav-content">
                <IncicleIcon />
            </div>
        </header>
    )
}

export default Navbar