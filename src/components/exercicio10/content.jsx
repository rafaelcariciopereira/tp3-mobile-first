import styles from './Content.module.css';

function Content() {
  return (
    <main className={styles.content}>
      <h2 className={styles.subtitle}>Conteúdo Principal</h2>
      <p className={styles.paragraph}>
        Este é o conteúdo do meu projeto, estilizado com CSS Modules.
      </p>
    </main>
  );
}

export default Content;
