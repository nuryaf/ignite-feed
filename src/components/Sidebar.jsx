import { PencilLine } from 'phosphor-react';

import styles from './Sidebar.module.css';
import { Avatar } from './Avatar';

export function Sidebar() {
    const avatarImage = 'https://github.com/nuryaf.png';
    const coverImage = 'https://i.pinimg.com/1200x/ae/5d/c9/ae5dc944a75e580875a47aa3e80e93bc.jpg'

    return (
        <aside className={styles.sidebar}>
            <img 
                className={styles.cover}
                src={coverImage} 
            />
            <div className={styles.profile}>
                <Avatar src={avatarImage} />
                <strong>Nurya Fernandes</strong>
                <span>Frontend developer</span>
            </div>

            <footer>
                <a href="#">
                    <PencilLine size={20} />
                    Editar seu perfil
                </a>
            </footer>
        </aside>
    )
}