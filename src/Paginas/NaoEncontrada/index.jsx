import BotaoPrincipal from 'componentes/BotaoPrincipal'
import styles from './NaoEncontrada.module.css'
import erro404 from 'assets/erro_404.png'
import { useNavigate } from 'react-router-dom'

export default function NaoEncontrada() {
    const navegar = useNavigate()

    return (
        <>

            <div className={styles.conteudoContainer}>
                <span className={styles.texto404}>404</span>

                <h1 className={styles.titulo}>
                    Página não encontrada.
                </h1>

                <p className={styles.paragrafo}>
                    Aguarde alguns instantes e recarregue a página, ou volte para o início.
                </p>

                <div
                    className={styles.botaoContainer}
                    onClick={() => navegar(-1)}
                >
                    <BotaoPrincipal tamanho="lg">
                        Voltar
                    </BotaoPrincipal>
                </div>

                <img
                    className={styles.imagemCachorro}
                    src={erro404}
                    alt="Imagem de um cachorro com roupa de gente"
                />
            </div>
            <div className={styles.espacoEmBranco}></div>
        </>
    )
}