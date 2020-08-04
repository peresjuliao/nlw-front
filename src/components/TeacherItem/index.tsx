import React from 'react';

import './styles.css';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img src="https://avatars1.githubusercontent.com/u/1526112?s=460&u=11b18862377741828bb1caeeac23b4160620906c&v=4" alt="Peres Julião"/>
                <div>
                    <strong>Peres Julião</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
            Estusiasta das melhores tecnologias de matemática avançada.
            <br/><br/>
            A Matemática desenvolvida ao longo da história da humanidade sempre teve duas faces: uma atrelada à interpretação do real e outra ligada ao próprio desenvolvimento do espírito humano.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 50,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp"/>
                    Entrar em contato
                </button>
            </footer>
        </article>
    )
}

export default TeacherItem;