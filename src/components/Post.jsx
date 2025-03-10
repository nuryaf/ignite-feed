import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export function Post() {
    const avatarImage = 'https://github.com/nuryaf.png'

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}>
                    <Avatar src={avatarImage} />
                    <div className={styles.authorInfo}>
                        <strong>Nurya Fernandes</strong>
                        <span>Frontend developer</span>
                    </div>
                </div>
                <time title="05 de março às 11:26" dateTime="2025-03-05 11:26:00">Publicado há 1h</time>
            </header>
            <div className={styles.content}>
                <p>Fala galeraa 👋</p>
                <p>
                    Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no NLW Return, evento da Rocketseat. 
                    O nome do projeto é DoctorCare
                </p>
                <p><a href="#">jane.design/doctorcare</a></p>
                <p>
                    <a href="#">#novoprojeto</a>{' '}
                    <a href="#">#nlw</a>{' '}
                    <a href="#">#rocketseat</a>{' '}
                </p>
            </div>

            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>
                <textarea placeholder='Deixe um comentário' />
                <footer>
                    <button type='submit'>Publicar</button>
                </footer>
            </form>

            <div className={styles.commentList}>
                <Comment />
                <Comment />
                <Comment />
            </div>
        </article>
    )
}