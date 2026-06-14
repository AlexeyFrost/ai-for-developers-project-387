import { Anchor, Container, Group } from '@mantine/core';
import { Link, useLocation } from 'react-router-dom';

export function AppHeader() {
  const location = useLocation();
  const isBookActive = location.pathname.startsWith('/book');
  const isAdminActive = location.pathname === '/admin';

  return (
    <header className="app-header">
      <Container size="lg" className="app-header__inner">
        <Anchor component={Link} to="/" className="app-header__logo" underline="never">
          <Group gap={6} align="center" wrap="nowrap">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Calendar
          </Group>
        </Anchor>
        <Group gap="xs">
          <Anchor
            component={Link}
            to="/book"
            underline="never"
            className={isBookActive ? 'app-header__link app-header__link--active' : 'app-header__link'}
          >
            Записаться
          </Anchor>
          <Anchor
            component={Link}
            to="/admin"
            underline="never"
            className={isAdminActive ? 'app-header__link app-header__link--active' : 'app-header__link'}
          >
            Админка
          </Anchor>
        </Group>
      </Container>
    </header>
  );
}
