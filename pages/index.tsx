import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>
          Brian Noriega
        </h1>

        <p className={styles.description}>
          I have been in the software engineering world for over ten years, and provide technical direction to marketing teams. I have a focus on React.js and
          Next.js, but also support legacy websites built in WordPress and PHP as a Senior Software Engineer and Manager at Aetna, a CVS Health Company.
        </p>
        <p className={styles.code}> Note: A work in progress as of Dec 2022</p>
        <div className={styles.grid}>
          <a href="https://blog.briannoriega.com" className={styles.card}>
            <h2>Blog &rarr;</h2>
            <p>Curious to see my personal and professional journey?</p>
          </a>

          <a href="https://www.github.com/noriega3" 
            target="_blank"
            rel="noopener noreferrer"
          className={styles.card}>
            <h2>Github &rarr;</h2>
            <p>Want to check out my public projects or what I have starred?</p>
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
          Powered by{' '}
          <span className={styles.logo}>
love
          </span>
      </footer>
    </div>
  )
}
