import { MapPin, ShoppingCart } from 'phosphor-react'
import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/Logo.svg'
import { CoffeesContext } from '../../context/Coffes'

import {
  ButtonContainer,
  CounterCart,
  DivContainer,
  HeaderContainer,
  IconContainer,
} from './styles'

export const Header = () => {
  const { coffeesCart } = useContext(CoffeesContext)

  return (
    <HeaderContainer>
      <NavLink to="/" title="CoffeeMenu">
        <img src={logo} alt="" />
      </NavLink>

      <DivContainer>
        <ButtonContainer>
          <MapPin weight="fill" width={'1.375rem'} height={'1.375rem'} />
          São paulo, SP
        </ButtonContainer>
        <NavLink to="/cart" title="Cart">
          <IconContainer>
            {coffeesCart.length > 0 ? (
              <>
                <CounterCart>{coffeesCart.length}</CounterCart>
                <ShoppingCart
                  weight="fill"
                  width={'1.375rem'}
                  height={'1.375rem'}
                />
              </>
            ) : (
              <ShoppingCart
                weight="fill"
                width={'1.375rem'}
                height={'1.375rem'}
              />
            )}
          </IconContainer>
        </NavLink>
      </DivContainer>
    </HeaderContainer>
  )
}
