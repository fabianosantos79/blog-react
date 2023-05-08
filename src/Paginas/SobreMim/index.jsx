import styles from './SobreMim.module.css'

import PostModelo from 'componentes/PostModelo'
import fotoCapa from 'assets/sobre_mim_capa.png'
import fotoSobreMim from 'assets/minha_foto.jpg'

function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo='Sobre Mim'
        >

            <h3 className={styles.subtitulo}>
                Olá eu sou o Fabiano
            </h3>

            <img
                src={fotoSobreMim}
                alt='Foto do Fabiano SSantos'
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Meu nome é Fabiano da Silva Santos, sou graduado em Análise e Desenvolvimento de Sistemas desde 2012, tenho conhecimentos avançados em Javascript e PHP atuando no desenvolvimento web.
            </p>

            <p className={styles.paragrafo}>
                Em RPA, desenvolvo robôs utilizando as plataformas UiPath e Automation Anywhere, criando automações para interagir com páginas web, formulários, aplicativos desktop, planilhas Excel e arquivos internos ou na nuvem.
            </p>

            <p className={styles.paragrafo}>
                Também sou web designer, construo interfaces digitais com práticas de UX/UI utilizando Figma e softwares de edição de imagens e vetores, atuo em todas as fases do projeto seguindo metodologias ágeis e padrões de projeto.
            </p>
        </PostModelo>

    )
}

export default SobreMim