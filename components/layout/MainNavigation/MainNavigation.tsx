import Link from 'next/link';
import styled from 'styled-components';

const MainNavigation = () => (
  <NavigationWrapper>
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
        <Link href="/settings">Settings</Link>
      </li>
    </ul>
  </NavigationWrapper>
);

const NavigationWrapper = styled.nav`
  background-color: rgba(31, 41, 55, 1);
  color: rgba(209, 213, 219, 1);
  display: flex;
  height: 64px;

  a {
    color: rgba(209, 213, 219, 1);
    text-decoration: none;
  }

  ul {
    align-items: center;
    display: flex;
    gap: 20px;
    height: 100%;
    list-style: none;
    margin: 0 auto;
    max-width: 800px;
  }

  li a {
    border-radius: 0.375rem;
    padding: 0.5rem;

    &:hover {
      background-color: rgba(55, 65, 81, 1);
    }
  }
`;

export { MainNavigation };
