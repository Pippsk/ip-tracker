import styles from "./Details.module.css";

const Details = () => {
  return (
    <section className={styles.detailsSection}>
      <div>
        <p>Ip Address</p>
        <h3>192.212.174.101</h3>
      </div>

      <hr />

      <div>
        <p>Location</p>
        <h3> 10001</h3>
      </div>
      <hr />
      <div>
        <p>Time Zone</p>
        <h3>-05:00</h3>
      </div>
      <hr />
      <div>
        <p>ISP</p>
        <h3>Google</h3>
      </div>
    </section>
  );
};

export default Details;
