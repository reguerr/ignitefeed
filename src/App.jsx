import { Header } from './components/Header'
import { Post } from './components/Post';
import { Sidebar } from './components/Sidebar';

import styles from './App.module.css';
import './global.css';

const post = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/reguerr.png',
      name: 'Renata Guerra',
      role: 'CTO @Alegrim'
    },
    content: [
      { type: '', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return' },
      { type: 'link', content: 'diego.design/doctorcare' },  
    ],
    publishedAt: new Date('2022-05-03 20:00:00'),
  },
  {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/reguerr.png',
      name: 'Renata Guerra',
      role: 'CTO @ Alegrim'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return' },
      { type: 'link', content: 'diego.design/doctorcare' },  
    ],
    publishedAt: new Date('2022-05-10 20:00:00'),
  },
];

export function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {post.map(post => {
            return (
              <Post
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          })}
        </main>
      </div>
    </div>
    
  )
}
