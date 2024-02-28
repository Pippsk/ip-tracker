import styles from "./SearchIp.module.css";
import Image from "next/image";
import getIpData from "@/lib/actions";
import arrow from "../../public/icon-arrow.svg";

const SearchIp = async () => {
  const { ipCode } = await getIpData();
  return (
    <form action={getIpData}>
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
    </form>
  );
};

export default SearchIp;
