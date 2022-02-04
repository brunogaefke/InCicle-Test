import './styles.css';
import { ReactComponent as PlusIcon } from 'assets/img/plus.svg';

type Props = {
    text: string;
}

const ButtonIcon = ({ text }: Props) => {
    return (
        <div className="btn-container">
            <button className="btn">
                <h6>{text}</h6>
            </button>

            <div className="btn-icon-container">
                <PlusIcon />
            </div>
        </div>
    );
};

export default ButtonIcon;
