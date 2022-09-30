import { ThumbsUp, Trash } from 'phosphor-react';
import styles from './Comment.module.css';

export function Comment() {
  return (
    <div className={styles.comment}>
      <img src="https://avatars.githubusercontent.com/u/25598587?v=4" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Lucas Gatinho</strong>
              <time title="11 de maio às 08:13"dateTime="2022-05-11 08:13:30">Publicado há 1h</time>
            </div>
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>
          <p>Muito bom Diego, parabéns</p>
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