/* 
 * Footer Component
 * 
 * This component renders the footer section of the application, including:
 * - A GitHub logo.
 * - A link to the developer's GitHub profile.
 * - Copyright information.
 * 
 * Accessibility:
 * - `aria-label` attributes are added for improved screen reader accessibility.
 * 
 * TypeScript Integration:
 * - The `gitHubLogo` import is typed as a string, representing the file path of the SVG image.
 * - This is handled by a type declaration file located in `src/declarations/*.d.ts`, which ensures TypeScript understands how to process non-code assets like SVG files.
 */

import gitHubLogo from "../assets/GitHubLogo.svg"

const Footer = () => {
return (
  <div className="footer" aria-label="GitHub logo">
    <div className="footer-content">
      <img src={gitHubLogo} alt="GitHub Logo" className="footer-logo" />
      <a href="https://github.com/joheri1/project-happy-thoughts-vite/blob/main/README.md" aria-label="Link to Johanna's GitHub account" target="_blank" rel="noopener noreferrer">
        Joheri1
      </a>
    </div>
    <div className="footer-copyright">
      <h4>© 2024 Copyright - Developed by Johanna Eriksson</h4>
    </div>
  </div>
)
}

export default Footer
