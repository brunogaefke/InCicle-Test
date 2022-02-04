import ButtonIcon from 'components/ButtonIcon'
import './styles.css'

const Home = () => {
    return (
        <>
            <div className="home-content-container">
                <div className="first-container">
                    <div className='home-title-container'>
                        <div className='container-title'>
                            <h1>Endomarketing</h1>
                        </div>
                        <div className='container-buttons'>
                            <select className="filter-input" placeholder='TIPO' >
                                <option value="">TIPO</option>
                                <option value="Comunicado">Comunicado</option>
                                <option value="Evento">Evento</option>
                                <option value="Publicação">Publicação</option>
                            </select>
                            <ButtonIcon text="CRIAR" />
                        </div>
                    </div>
                    <div className='home-catalog-container'>
                        <h1>Catalogo</h1>
                    </div>
                </div>
                <div className="home-infos-container">
                    <div className='home-info-reminder'>
                        <h1>Endormarketing</h1>
                        <p>Endomarketing está relacionado às ações de treinamento ou qualificação dos colaboradores da empresa visando um melhor serviço para o cliente. Marketing interno, devido ao nome, é usualmente confundido com Endomarketing mesmo sendo conceitos diferentes.</p>
                        <input type="button" value="DISPENSAR" />
                    </div>
                    <div className='home-info-box'>
                        <h6>Quadros de Gestão à Vista</h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home