import styles from "./Details.module.css";

const Details = () => {
  return (
    <section className={styles.detailsSection}>
      <div>
        <p>Ip Address</p>
        <h3>9.9.9.9</h3>
      </div>

      <hr />

      <div>
        <p>Location</p>
        <h3>New York</h3>
      </div>
      <hr />
      <div>
        <p>Time Zone</p>
        <h3>timezone</h3>
      </div>
      <hr />
      <div>
        <p>ISP</p>
        <h3>isp</h3>
      </div>
    </section>
  );
};

export default Details;
