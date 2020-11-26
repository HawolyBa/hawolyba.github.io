import React, { Fragment } from "react";

const Footer = () => {
  return (
    <Fragment>
      <section className="blog">
        <div className="content">
          <a className="btn" href="http://hawolyba.github.io/blog">
            <h5>Rendez-vous prochainement sur le blog</h5>
          </a>
        </div>
      </section>
      <footer>
        <p>@2017 Hawoly Ba</p>
      </footer>
    </Fragment>
  );
};

export default Footer;
