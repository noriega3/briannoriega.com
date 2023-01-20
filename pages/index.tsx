import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Brian Noriega
        </h1>

        <p className={styles.description}>
          I am an experienced software engineer with over a decade of experience. I possess a diverse skillset, including management, design, development, and testing, which I have honed through various projects and technologies.
        </p> <p className={styles.description}>
          Currently, I work as a Technical Manager and Senior Software Engineer at Aetna, leading and contributing to innovative software solutions. </p>
        <p className={styles.code}> Note: A work in progress as of Jan 2023</p>
        <div className={styles.grid}>
          <a href="https://blog.briannoriega.com" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Curious to see my personal and professional journey?</p>
          </a>

          <a href="https://www.github.com/noriega3"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}>
            <h2>GitHub &rarr;</h2>
            <p>Want to check out my public projects?</p>
          </a>

          <a
            href="https://www.linkedin.com/in/noriega3/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>LinkedIn &rarr;</h2>
            <p>Maybe you just want to connect professionally?</p>
          </a>

          <a
            href="https://docs.google.com/document/d/e/2PACX-1vRhOEmNZ5utzqu6c8M-HBB0HQ-DFB7v9ssWEHskqnIRwmNLergbEHfN4pAagaRpwe-KwoRXe2Ccf7Wp/pub"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.card}
          >
            <h2>Resume &rarr;</h2>
            <p>Or do you want the facts? Find it here.</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
      </footer>
    </div>
  )
}
