import { useContext } from 'react'
import { Coffe } from './components/coffee'
import { Container, HeaderMenu, Menu } from './style'
import { CoffeesContext } from '../../../../context/Coffes'

export function CoffeMenu() {
  const { coffees } = useContext(CoffeesContext)

  return (
    <Container>
      <HeaderMenu>Nossos Cafés</HeaderMenu>
      <Menu>
        {coffees.map((coffee) => (
          <Coffe
            key={coffee.coffeeName}
            coffeImg={coffee.coffeImg}
            coffeCharacteristics={coffee.coffeCharacteristics}
            coffeeName={coffee.coffeeName}
            coffeDescription={coffee.coffeDescription}
            amount={coffee.amount}
            value={coffee.value}
          />
        ))}
      </Menu>
    </Container>
  )
}
