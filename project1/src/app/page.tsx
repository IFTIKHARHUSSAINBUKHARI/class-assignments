import Image from "next/image";
import Link from "next/link";
import styles from "../../styles/home.module.css";

export default function Home() {
  return (
    <div className={styles.container}><br /><br />
      <h1 className={styles.title}>Home</h1><br /><br />
      <h2><Link href={"/contact"}>Go to Contact page</Link></h2><br />
      <h2><Link href={"/about"}>Go to About page</Link></h2><br />
      <h2><Link href={"/services"}>Go to Services</Link></h2><br />  
      <h2><Link href={"/class1a"}>Go to Quarter 1</Link></h2><br />
      <h2><Link href={"/class2a"}>Go to Quarter 2</Link></h2><br />
    </div>
  );
}
