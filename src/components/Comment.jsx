import { ThumbsUp, Trash } from 'phosphor-react';

import styles from './Comment.module.css'
import { Avatar } from './Avatar';

export function Comment() {
    const avatarImage = 'https://github.com/nuryaf.png';

    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src={avatarImage} />

            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Nurya Fernandes</strong>
                            <time title="05 de março às 11:26" dateTime="2025-03-05 11:26:00">Cerca de 1h atrás</time>
                        </div>
                        <button title='Excluir comentário'>
                            <Trash size={24} />
                        </button>
                    </header>

                    <p>Muito bom Devon, parabéns!! 👏👏</p>
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