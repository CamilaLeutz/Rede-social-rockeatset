import { ThumbsUp, Trash } from "@phosphor-icons/react"
import imagemPerfil from "../assets/imagem-perfil.svg"

import styles from "./Comment.module.css"

export function Comment({ content }) {
    return (
        <div className={styles.comment}>
            <img src={imagemPerfil} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Camila Leutz</strong>
                            <time title="06 de Novembro ás 05:49" dateTime="2023-06-11 05:49:00">Publicado há 1h atrás.</time>
                        </div>
                        <button title="Deletar comentário">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>{content}</p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp />
                        Aplaudir <span>20</span>
                    </button>
                </footer>

            </div>

        </div>
    )
}