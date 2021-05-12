import * as React from "react"

// styles
const pageStyles = {
  color: "#232129",
  padding: 96,
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320,
}
const headingAccentStyles = {
  color: "#663399",
}
const listStyles = {
  marginBottom: 96,
  paddingLeft: 0,
}
const listItemStyles = {
  fontWeight: 300,
  fontSize: 24,
  maxWidth: 560,
  marginBottom: 30,
}

const linkStyle = {
  color: "#8954A8",
  fontWeight: "bold",
  fontSize: 16,
  verticalAlign: "5%",
}

const descriptionStyle = {
  color: "#232129",
  fontSize: 14,
  marginTop: 10,
  marginBottom: 0,
  lineHeight: 1.25,
}

const badgeStyle = {
  color: "#fff",
  backgroundColor: "#088413",
  border: "1px solid #088413",
  fontSize: 11,
  fontWeight: "bold",
  letterSpacing: 1,
  borderRadius: 4,
  padding: "4px 6px",
  display: "inline-block",
  position: "relative",
  top: -2,
  marginLeft: 10,
  lineHeight: 1,
}

// data
const links = [
  {
    text: "Github",
    url: "https://www.github.com/noriega3/",
    description:
      "The public repository of brian noriega",
    color: "#E95800",
  },
  {
    text: "LinkedIn",
    url: "https://www.linkedin.com/in/noriega3/",
    description:
      "",
    color: "#1099A8",
  },
  {
    text: "Resume",
    url: "https://docs.google.com/document/d/e/2PACX-1vTmF1M_ngkBopYlVSAKhiQOIqurp4f6hz_RgFWU2W_n_pOSzHDsjMDbnL0lVpUAVFuL4uwGO0wAlVX2/pub",
    description:
      "",
    color: "#BC027F",
  }
]

// markup
const IndexPage = () => {
  return (
    <main style={pageStyles}>
      <title>Temp Home Page</title>
      <h1 style={headingStyles}>
        Hello
        <br />
        <span style={headingAccentStyles}>— this is the WIP site of Brian Noriega</span>
      </h1>
      <ul style={listStyles}>
        {links.map(link => (
          <li key={link.url} style={{ ...listItemStyles, color: link.color }}>
            <span>
              <a
                style={linkStyle}
                href={`${link.url}`}
                rel="noopener"
              >
                {link.text}
              </a>
              {link.badge && (
                <span style={badgeStyle} aria-label="New Badge">
                  NEW!
                </span>
              )}
              <p style={descriptionStyle}>{link.description}</p>
            </span>
          </li>
        ))}
      </ul>
    </main>
  )
}

export default IndexPage
