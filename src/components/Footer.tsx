/* 
* Footer Component
* 
* This component renders the footer section of the application, including a link to the developer, myself, GitHub profile.
*
* - The footer contains a GitHub logo, a link to the developer's GitHub profile, and Copyright information. 
* - `aria-label` attributes are provided for screen readers. 
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
