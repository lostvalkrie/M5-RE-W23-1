import styles from './AtomComponent.module.sass';

const AtomComponent = () => {
  return (
    <section className={styles.atomSection}>
      <header className={styles.atomHeader}>
        <h2 className={styles.atomH2}>Like a Naming Agency, But Better </h2>
        <p className={styles.atomGreyColor}>
          With Atom's managed contests, leverage our team's naming expertise and
          our pool of 300K+ naming experts. Our hybrid-solution partners you
          with a trained Atom branding consultant who will guide your
          crowdsourcing process step-by-step to get the best results possible.
        </p>
      </header>
      <div>
        <ul className={styles.atomList}>
          <li className={styles.atomListItem}>
            <i
              className={`far fa-handshake ${styles.atomIcon}`}
              aria-hidden="true"
            ></i>
            <div className={styles.atomListDiv}>
              <h3 className={styles.atomListH3}>Consultant Led</h3>
              <p className={styles.atomGreyColor}>
                Work one-on-one with an Atom branding consultant
              </p>
            </div>
          </li>

          <li className={styles.atomListItem}>
            <i
              className={`fas fa-users ${styles.atomIcon}`}
              aria-hidden="true"
            ></i>
            <div className={styles.atomListDiv}>
              <h3 className={styles.atomListH3}>Crowd Powered</h3>
              <p className={styles.atomGreyColor}>
                Work with our top rated Creatives and receive a hudge breadth of
                ideas
              </p>
            </div>
          </li>

          <li className={styles.atomListItem}>
            <i
              className={`fas fa-chart-pie ${styles.atomIcon}`}
              aria-hidden="true"
            ></i>
            <div className={styles.atomListDiv}>
              <h3 className={styles.atomListH3}>Trademark Reports</h3>
              <p className={styles.atomGreyColor}>
                Comprehensive trademark screening on your shortlisted names
              </p>
            </div>
          </li>

          <li className={styles.atomListItem}>
            <i
              className={`fas fa-bullhorn ${styles.atomIcon}`}
              aria-hidden="true"
            ></i>
            <div className={styles.atomListDiv}>
              <h3 className={styles.atomListH3}>Audience Testing</h3>
              <p className={styles.atomGreyColor}>
                Get rapid feedback from real people on your shortlist of
                business names
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div>
        <a href="#" className={styles.atomLearnMore}>
          Learn More
        </a>
      </div>
    </section>
  );
};

export default AtomComponent;
