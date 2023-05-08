import styles from "./Banner.module.css";
import circuloColorido from 'assets/circulo_colorido.png'
import minhaFoto from 'assets/sobre_mim_foto.png'

export default function Banner() {
    return (
        <div className={styles.banner}>
            <div className={styles.apresentacao}>
                <h1 className={styles.titulo}>
                    Blog React
                </h1>
                <p>Olá, meu nome é Fabiano da Silva Santos, sou formado em Análise e Desenvolvimento de Sistemas e programador Javascript e PHP atuando no desenvolvimento web.</p>
            </div>
            <div className={styles.imagens}>
                <img
                    src={circuloColorido}
                    alt=''
                    className={styles.circuloColorido}
                    aria-hidden={true}
                />
                <img
                    className={styles.minhaFoto}
                    src={minhaFoto}
                    alt='Foto do Fabiano'
                />
            </div>
        </div>
    )
}