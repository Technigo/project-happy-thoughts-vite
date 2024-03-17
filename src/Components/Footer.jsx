import gitIcon from './icons8-github.svg'
export const Footer = () => {
  return (
    <div className="footer">
      <section className="copyright">©VittoriaMatteoli</section>
      <section className="links">
        <a href="https://github.com/vittoriamatteoli">
          {' '}
          <img src={gitIcon} alt="gitHub-icon" />
        </a>
      </section>
    </div>
  )
}
