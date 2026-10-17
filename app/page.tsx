import Link from 'next/link';
import css from './Home.module.css';

export default function Home() {
  return (
    <section>
      <div className={css.hero}>
        <h1 className={css.heroTitle}>Campers of your dreams</h1>
        <p className={css.heroDesc}>
          You can find everything you want in our catalog
        </p>
        <Link href="/catalog" className={css.link}>
          View now
        </Link>
      </div>
    </section>
  );
}
