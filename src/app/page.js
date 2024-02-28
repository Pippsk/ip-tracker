import Image from "next/image";
import styles from "./page.module.css";
import arrow from "../../public/icon-arrow.svg";
import Map from "@/components/MapIndex";

const getIpData = async (ip) => {
  const res = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=at_IVPlc0WzdRsypuVMtGzWc5o7ErWn1&ipAddress=${ip}`
  );

  if (!res.ok) {
    throw new Error("failed to fetch ip data");
  }

  const ipData = res.json();

  return ipData;
};

export default async function Home({ searchParams }) {
  const ip = searchParams.ip;
  const ipData = await getIpData(ip);
  const ipCode = ipData.ip;
  const location = ipData.location;
  return (
    <main className={styles.main}>
      <section className={styles.topSection}>
        <h1>IP Address Tracker</h1>

        <form>
          <div className={styles.inputContainer}>
            <input type="text" name="ip" placeholder="Search  IP address..." />
            <button type="submit">
              <Image src={arrow} alt="arrow-icon" />
            </button>
          </div>
        </form>
      </section>

      <section className={styles.detailsSection}>
        <div>
          <p>Ip Address</p>
          <h3>{ipCode}</h3>
        </div>

        <hr />

        <div>
          <p>Location</p>
          <h3>
            {location.region}, {location.city}
          </h3>
        </div>
        <hr />
        <div>
          <p>Time Zone</p>
          <h3>{location.timezone}</h3>
        </div>
        <hr />
        <div>
          <p>ISP</p>
          <h3>{ipData.isp}</h3>
        </div>
      </section>

      <section className={styles.mapSection}>
        <Map location={location} />
      </section>
    </main>
  );
}
