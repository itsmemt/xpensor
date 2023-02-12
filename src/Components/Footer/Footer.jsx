import './Footer.css';
const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <div className="footer">ⓒ Copyright {year} Made with Attention</div>
  )
}

export default Footer;