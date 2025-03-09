import { Header } from './components/Header';
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';


export function App() {
  return (
      <div>
        <Header />

        <div className={styles.wrapper}>
            <Sidebar />
          <main>
            <Post 
              author='Nurya Fernandes'
              content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Possimus enim quis assumenda mollitia, cumque doloribus ipsam quos dolorem id nisi dolorum officiis distinctio. Quia, quae autem? Ipsam fugiat ea consequatur?'
            />
            <Post 
              author='John Doe'
              content='Lorem ipsum dolor'
            />
          </main>
        </div>
      </div>
  )
}
