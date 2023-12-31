/* eslint-disable no-undef */
import { format, formatDistanceToNow } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";

import imagemPerfil from "../assets/imagem-perfil.svg"

import { Comment } from "./Comment";

import styles from "./Post.module.css"
import { useState } from "react";


export function Post({ author, publishedAt, content }) {
    const [comments, setComments] = useState([
        "Post muito bacana heim?"
    ])
    const [newCommentText, setNewCommentText] = useState("") //estado que cuida da textarea ela zerando depois de digitada (todo o estado que for iniciado precisa ser com algo, se não, com um []vazio)

    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'ás' HH:mm'h'", {
        locale: ptBR,
    });

    const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true,
    })

    function handleNewComment() {
        event.preventDefault()
        setComments([...comments, newCommentText])
        setNewCommentText('')
    }


    function handleNewCommentChange() {
        setNewCommentText(event.target.value)

    }

    function handleNewCommentInvalid() {
        event.target.setCustomValidity("Esse campo é obrigatório!")
    }

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <img className={styles.cover} src={imagemPerfil} />
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>Web Developer</span>
                    </div>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateFormatted}
                </time>
            </header>
            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === "paragraph") {
                        return <p>{line.content}</p>
                    } else if (line.type === "link") {
                        return <p><a href="#">{line.content}</a></p>
                    }
                })}
            </div>

            <form onSubmit={handleNewComment} className={styles.comentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    name="comment"
                    placeholder="Deixe um comentário"
                    value={newCommentText}
                    onChange={handleNewCommentChange}
                    onInvalid={handleNewCommentInvalid}
                    required
                />

                <footer>
                    <button type="submit">Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment content={comment} />
                })}
            </div>

        </article>
    )
}
