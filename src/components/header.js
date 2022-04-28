export default function Header() {
  return (
    <section className="header header-fixed-xl">
      <div className="header-top-line bg-primary">
        <div className="container">
          <div className="row">
            <nav className="navbar navbar-expand navbar-dark navbar-short justify-content-between w-100">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link text-white" href="booking.html">
                    <span className="text-uppercase">party@properties.com</span>
                  </a>
                </li>
              </ul>
              <span className="navbar-text text-uppercase d-flex align-items-center">
                <span className="text-white-70 mr-1">Call us today:</span>{' '}
                <span className="text-white mr-1">123-456-7890</span>{' '}
                <i className="material-icons fs-1">phone</i>
              </span>
            </nav>
          </div>
        </div>
      </div>
      <div className="header-main bg-white">
        <div className="container">
          <div className="row">
            <nav
              className="navbar navbar-expand-lg navbar-light w-100"
              id="header-navbar"
            >
              <a className="navbar-brand font-weight-bold" href="index.html">
                PROFI
              </a>{' '}
              <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ml-auto">
                  <li className="nav-item">
                    <a
                      className="nav-link text-uppercase"
                      data-toggle="smooth-scroll"
                      href="#about"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-uppercase"
                      data-toggle="smooth-scroll"
                      href="#services"
                    >
                      Services
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-uppercase"
                      data-toggle="smooth-scroll"
                      href="#testimonials"
                    >
                      Testimonials
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-uppercase"
                      data-toggle="smooth-scroll"
                      href="#faq"
                    >
                      FAQ
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-uppercase"
                      data-toggle="smooth-scroll"
                      href="#vouchers"
                    >
                      Vouchers
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-uppercase"
                      data-toggle="smooth-scroll"
                      href="#contacts"
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
                <div className="navbar-spacer"></div>
                <a
                  className="btn btn-outline-primary text-nowrap"
                  href="booking.html"
                  data-toggle="none"
                  target="_self"
                >
                  Book now
                </a>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </section>
  );
}
