import Link from 'next/link';
import css from '@/components/Header/Header.module.css';

const Header = () => {
  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/" className={css.navLink}>
          TravelTrucks
        </Link>
      </div>

      <nav>
        <ul className={css.navigation}>
          <li>
            <Link href="/" className={css.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/catalog" className={css.navLink}>
              Catalog
            </Link>
          </li>
        </ul>
      </nav>
      <div className={css.rightSpacer} />
    </header>
  );
};

export default Header;
