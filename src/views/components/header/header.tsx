import { FC, memo } from 'react';

import { selectors } from '../../../store';
import { useTypedSelector, useAuth } from '../../hooks';
import { CartIcon } from '../cart-icon';
import { CartDropdown } from '../cart-dropdown';
import { ReactComponent as Logo } from '../../../assets/images/crown.svg';
import { useGetCartHidden } from '../../../graphql/queries';

import {
  Container,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from './header.styles';

const { selectUser } = selectors.user;

export const Header: FC = memo(() => {
  const { data } = useGetCartHidden();
  const user = useTypedSelector(selectUser);
  const { logout } = useAuth();

  return (
    <Container>
      <LogoContainer to="/">
        <Logo />
      </LogoContainer>

      <OptionsContainer>
        <OptionLink to="/shop">shop</OptionLink>
        <OptionLink to="/contact">contact</OptionLink>
        {user ? (
          <OptionLink as="div" onClick={logout}>
            Sign out
          </OptionLink>
        ) : (
          <OptionLink to="/auth">Sign in</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {data && !data.cartHidden && <CartDropdown />}
    </Container>
  );
});
