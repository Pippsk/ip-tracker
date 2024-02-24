// "use client";

import Image from "next/image";
import styles from "./page.module.css";
import arrow from "../../public/icon-arrow.svg";
import Map from "@/components/Map";

const getIpData = async () => {
  const res = await fetch(
    "https://geo.ipify.org/api/v2/country,city?apiKey=at_IVPlc0WzdRsypuVMtGzWc5o7ErWn1&ipAddress=8.8.8.8"
  );

  if (!res.ok) {
    throw new Error("failed to fetch ip data");
  }

  return await res.json();
};

export default async function Home() {
  const ip = await getIpData();
  console.log(ip);
  return (
    <main className={styles.main}>
      <section className={styles.topSection}>
        <h1>IP Address Tracker</h1>

        <div className={styles.inputContainer}>
          <input
            type="text"
            name="ip"
            id="ip"
            placeholder="Search  IP address..."
          />
          <button type="submit">
            <Image src={arrow} alt="arrow-icon" />
          </button>
        </div>
      </section>

      <section className={styles.detailsSection}>
        <div>
          <p>Ip Address</p>
          <h3>8.8.8.8</h3>
        </div>

        <hr />

        <div>
          <p>Location</p>
          <h3>{ip.location.city}</h3>
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

      <section className={styles.mapSection}>
        <Map />
      </section>
    </main>
  );
}
