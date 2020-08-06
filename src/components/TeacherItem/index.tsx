import React from 'react';


import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
    return (
        <article className="teacher-item">
        <header>
            <img src="https://avatars1.githubusercontent.com/u/53359991?s=460&u=80a1383021ed84d874553ee1c4d7666f6c77950b&v=4" alt="Eleazar Nascimento"/>
             <div>
                 <strong>Eleazar Nascimento</strong>
                 <span>Física</span>
             </div>
        </header>

        <p>
            Entusiasta das melhores tecnologias de física avançada. 
            <br/> <br/>
            Apaixonado por calculo e mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já ouviram uma das minhas teorias.
        </p>

        <footer>
            <p>
                Preço/Hora
                <strong>R$ 85,00</strong>
            </p>
            <button type="button">
                <img src={whatsappIcon} alt="WhatsApp"/>
                Entrar em contato
            </button>
        </footer>
    </article>
    );
}

export default TeacherItem;