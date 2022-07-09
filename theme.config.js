const YEAR = new Date().getFullYear()

export default {
  projectLink: 'https://briannoriega.com',
  titleSuffix: ' | Brian Noriega',
  footer: (
    <footer>
      <small>
        <time>{YEAR}</time> © BrianNoriega.com.
        <a href="/feed.xml">RSS</a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 8rem;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
