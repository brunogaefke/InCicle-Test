import { useState } from 'react';
import './styles.css'

const ReminderCard = () => {
    const [show, setShow] = useState<boolean>(true);
    const dismiss = () => {
        setShow(false);
    }
    return (show) ? (
        <div className='home-info-reminder'>
            <h1>Endormarketing</h1>
            <p>Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.</p>
            <input type="button" value="DISPENSAR" onClick={dismiss} />
        </div>
    ) : (<><div className='fake-div'></div></>)
}

export default ReminderCard