import { useContext, useEffect, useState } from 'react'
import { CoffeSelected } from './CoffeSelected'
import {
  CoffeCardContainer,
  CoffeesSelectedContainer,
  ConfirmedOrderButton,
  Cost,
  CostsContent,
  PaymantPrice,
  TotalCost,
  TotalCostContainer,
  NoCoffeeCart,
} from './style'
import { CoffeesContext } from '../../../../context/Coffes'
import { useFormContext } from 'react-hook-form'
import { X } from 'phosphor-react'

export function CoffeCard() {
  const { coffeesCart } = useContext(CoffeesContext)

  const [totalPrice, setTotalPrice] = useState(0)

  useEffect(() => {
    let totalPriceOfCoffees = 0

    coffeesCart.forEach((coffee) => {
      totalPriceOfCoffees =
        (coffee.value / 100) * coffee.amount + totalPriceOfCoffees
    })

    setTotalPrice(totalPriceOfCoffees)
  }, [coffeesCart])

  const { watch } = useFormContext()

  const watchFields = watch([
    'cep',
    'street',
    'number',
    'neighborhood',
    'city',
    'state',
    'paymantButtonClicked',
  ])

  const isFieldsEmpty = Object.values(watchFields).some(
    (value) => value === '' || value === null,
  )

  return (
    <CoffeCardContainer>
      <CoffeesSelectedContainer>
        {coffeesCart.length > 0 ? (
          coffeesCart.map((coffee) => (
            <CoffeSelected
              key={coffee.coffeeName}
              coffeeImg={coffee.coffeImg}
              coffeeName={coffee.coffeeName}
              amount={coffee.amount}
              value={coffee.value}
            />
          ))
        ) : (
          <NoCoffeeCart>
            <X size={70} weight="bold" color="#848484" />
            Sem Cafés Adicionados
          </NoCoffeeCart>
        )}
      </CoffeesSelectedContainer>

      <PaymantPrice>
        <CostsContent>
          <Cost>Total de itens</Cost>
          <Cost>
            R$ <span>{totalPrice.toFixed(2)}</span>
          </Cost>
        </CostsContent>
        <CostsContent>
          <Cost>Entrega</Cost>
          <Cost>R$ 3,50</Cost>
        </CostsContent>
      </PaymantPrice>

      <TotalCostContainer>
        <TotalCost>Total</TotalCost>
        <TotalCost>
          R$ <span>{(totalPrice + 3.5).toFixed(2)}</span>
        </TotalCost>
      </TotalCostContainer>

      {/* <NavLink to="/cart/confirmedOrder" title="ConfirmedOrder"> */}
      <ConfirmedOrderButton
        disabled={isFieldsEmpty || coffeesCart.length === 0}
        type="submit"
      >
        Confirmar Pedido
      </ConfirmedOrderButton>
      {/* </NavLink> */}
    </CoffeCardContainer>
  )
}
