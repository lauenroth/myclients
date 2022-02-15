import Link from 'next/link';
import styled from 'styled-components';

const MainNavigation = () => (
  <NavigationWrapper>
    <div>
      <ul>
        <li>
          <Link href="/">Dashboard</Link>
        </li>
        <li>
          <Link href="/clients">Clients</Link>
        </li>
        <li>
          <Link href="/invoices">Invoices</Link>
        </li>
        <li>
          <Link href="/time-tracking">Time tracking</Link>
        </li>
      </ul>
      <div className="user">
        <img src="https://secure.gravatar.com/avatar/4122646bc7f445073c086827b991bb8f?s=64" alt="Avatar" />
      </div>
    </div>
  </NavigationWrapper>
);

const NavigationWrapper = styled.nav`
  background-color: var(--color-primary);
  color: var(--color-primary-text);
  height: 64px;

  > div {
    align-items: center;
    display: flex;
    height: 64px;
    justify-content: space-between;
    margin: 0 auto;
    max-width: var(--max-width);
  }

  a {
    color: var(--color-primary-text);
    text-decoration: none;
  }

  ul {
    align-items: center;
    display: flex;
    gap: 20px;
    height: 100%;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  li a {
    border-radius: 0.375rem;
    padding: 0.5rem;

    &:hover {
      background-color: var(--color-primary-hover);
    }
  }

  .user {
    height: 32px;

    img {
      border-radius: 50%;
      height: 32px;
      width: 32px;
    }
  }
`;

export { MainNavigation };
