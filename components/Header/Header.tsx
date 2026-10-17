'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import css from '@/components/Header/Header.module.css';

const Header = () => {
  const pathname = usePathname();

  return (
    <header className={css.header}>
      <div className={css.logo}>
        <Link href="/" className={css.navLink}>
          Travel<span className={css.logoSpan}>Trucks</span>
        </Link>
      </div>

      <nav>
        <ul className={css.navigation}>
          <li>
            <Link
              href="/"
              className={`${css.navLink} ${pathname === '/' ? css.active : ''}`}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/catalog"
              className={`${css.navLink} ${pathname === '/catalog' ? css.active : ''}`}
            >
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
