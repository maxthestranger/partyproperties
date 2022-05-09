import logo from '../assets/images/logo.svg';

export default function Footer() {
  return (
    <section className="footer bg-secondary">
      <div className="container py-19 py-sm-23 py-lg-25">
        <div className="row align-items-center">
          <div className="col-12 col-md-6 col-lg-5 mb-14 mb-md-0">
            <div className="d-flex align-items-center justify-content-center justify-content-md-start">
              <a href="/" className="footer-brand">
                <img src={logo} alt="logo" className="pb_logo" />
              </a>
              <div className="brand-icons-list ml-10 ml-sm-20">
                <a
                  href="https://facebook.com/partyproperties"
                  className="brand-icon brand-icon-circle brand-icon-facebook"
                >
                  <i className="fa fa-facebook-f"></i>{' '}
                </a>
                <a
                  href="/"
                  className="brand-icon brand-icon-circle brand-icon-twitter"
                >
                  <i className="fa fa-twitter"></i>{' '}
                </a>
                <a
                  href="https://twitter.com/partyproperties"
                  className="brand-icon brand-icon-circle brand-icon-pinterest"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-12 col-lg-2 text-center d-none d-lg-block">
            <a href="/" className="footer-icon">
              <i className="material-icons">arrow_upward</i>
            </a>
          </div>
          <div className="col-12 col-md-6 col-lg-5 text-center text-md-right">
            <ul className="footer-menu">
              <li>
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="/">Terms &amp; Conditions</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
