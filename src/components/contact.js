import insta1 from '../assets/images/insta1.png';
import insta2 from '../assets/images/insta2.png';
import insta3 from '../assets/images/insta3.png';
import insta4 from '../assets/images/insta4.png';

export default function Contact() {
  return (
    <section className="section" id="contacts">
      <div className="section-content container">
        <div className="mb-17">
          <small className="fs-1 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted">
            Party Property
          </small>
          <h1 className="mb-0">Contact &amp; Location</h1>
        </div>
      </div>
      <div className="section-content container py-19 py-lg-20">
        <div className="row vertical-divider-light">
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0">
              <div className="card-body py-17 px-10 text-center">
                <div className="card-icon mb-6">
                  <i className="material-icons">location_on</i>
                </div>
                <div className="fs-1 lh-1 my-5 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted">
                  By appointment only
                </div>
                <p className="mb-0 text-body">
                  Diani 57, 8004
                  <br />
                  Mombasa, Kenya
                </p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0">
              <div className="card-body py-17 px-10 text-center">
                <div className="card-icon mb-6">
                  <i className="material-icons">phone</i>
                </div>
                <div className="fs-1 lh-1 my-5 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted">
                  Mobile phone
                </div>
                <p className="mb-0 text-body">+254 714 485 999</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0">
              <div className="card-body py-17 px-10 text-center">
                <div className="card-icon mb-6">
                  <i className="material-icons">access_time</i>
                </div>
                <div className="fs-1 lh-1 my-5 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted">
                  Working hours
                </div>
                <p className="mb-0 text-body">08:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6 col-lg-3">
            <div className="card border-0">
              <div className="card-body py-17 px-10 text-center">
                <div className="card-icon mb-6">
                  <i className="material-icons">alternate_email</i>
                </div>
                <div className="fs-1 lh-1 my-5 font-family-secondary text-uppercase font-weight-bold letter-spacing-caption text-muted">
                  Email
                </div>
                <p className="mb-0 text-body">partyproperties@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="section-content container">
        <a
          href="/"
          className="btn btn-light bg-white border-0 position-absolute-center"
        >
          @party.properties
        </a>
        <div className="row">
          <div className="col-6 col-lg-3 mb-14 mb-lg-0">
            <a href="/">
              <img src={insta1} alt="pic1" className="w-100" />
            </a>
          </div>
          <div className="col-6 col-lg-3 mb-14 mb-lg-0">
            <a href="/">
              <img src={insta2} alt="pic2" className="w-100" />
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/">
              <img src={insta3} alt="pic3" className="w-100" />
            </a>
          </div>
          <div className="col-6 col-lg-3">
            <a href="/">
              <img src={insta4} alt="pic3" className="w-100" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
