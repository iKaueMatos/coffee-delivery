import { useContext, useEffect } from 'react'
import {
  Amount,
  AmountNumber,
  AmountRemoveContainer,
  CoffeImage,
  CoffeImageInfoContaine,
  CoffeInfoContainer,
  CoffeName,
  CoffeSelectedContainer,
  Line,
  Price,
  RemoveCoffe,
  RemoveText,
} from './style'
import { Minus, Plus, Trash } from 'phosphor-react'
import { CoffeesContext } from '../../../../../context/Coffes'
import { toast } from 'react-toastify'
interface CoffeSelectedProps {
  coffeeImg: string
  coffeeName: string
  amount: number
  value: number
}

export function CoffeSelected({
  coffeeImg,
  coffeeName,
  amount,
  value,
}: CoffeSelectedProps) {
  const { setCoffeesCart, coffees, setCoffees } = useContext(CoffeesContext)

  function removeCoffeeCart() {
    const copyCoffees = [...coffees]
    notifyCoffeeRemoveCart()

    const coffeeUpdated = copyCoffees.map((coffeeObject) => {
      if (coffeeObject.coffeeName === coffeeName) {
        return { ...coffeeObject, amount: 0 }
      } else {
        return coffeeObject
      }
    })

    setCoffees(coffeeUpdated)
  }

  function addAmount() {
    const copyCoffees = [...coffees]

    const coffeeUpdated = copyCoffees.map((coffeeObject) => {
      if (coffeeObject.coffeeName === coffeeName) {
        return { ...coffeeObject, amount: coffeeObject.amount + 1 }
      } else {
        return coffeeObject
      }
    })

    setCoffees(coffeeUpdated)
  }

  function decreaseAmount() {
    if (!(amount === 1)) {
      const copyCoffees = [...coffees]

      const coffeeUpdated = copyCoffees.map((coffeeObject) => {
        if (coffeeObject.coffeeName === coffeeName) {
          return { ...coffeeObject, amount: coffeeObject.amount - 1 }
        } else {
          return coffeeObject
        }
      })

      setCoffees(coffeeUpdated)
    }
  }

  useEffect(() => {
    const coffeesFilteredByAmount = coffees.filter(
      (coffeeObject) => coffeeObject.amount > 0,
    )

    setCoffeesCart(coffeesFilteredByAmount)
  }, [coffees, setCoffeesCart])

  const notifyCoffeeRemoveCart = () =>
    toast.error(`O ${coffeeName}, foi removido do carrinho !!`, {
      position: 'top-center',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: false,
      progress: undefined,
      theme: 'light',
    })

  return (
    <>
      <CoffeSelectedContainer>
        <CoffeImageInfoContaine>
          <CoffeImage src={coffeeImg} />
          <CoffeInfoContainer>
            <CoffeName>{coffeeName}</CoffeName>

            <AmountRemoveContainer>
              <Amount>
                <Minus
                  width={'0.875rem'}
                  height={'0.875rem'}
                  color="#8047F8"
                  cursor={'pointer'}
                  onClick={decreaseAmount}
                />
                <AmountNumber>{amount}</AmountNumber>
                <Plus
                  width={'0.875rem'}
                  height={'0.875rem'}
                  color="#8047F8"
                  cursor={'pointer'}
                  onClick={addAmount}
                />
              </Amount>
              <RemoveCoffe onClick={removeCoffeeCart}>
                <Trash color="#8047F8" width={'1rem'} height={'1rem'} />
                <RemoveText>Remover</RemoveText>
              </RemoveCoffe>
            </AmountRemoveContainer>
          </CoffeInfoContainer>
        </CoffeImageInfoContaine>

        <Price>
          R$ <span>{(value / 100).toFixed(2)}</span>
        </Price>
      </CoffeSelectedContainer>
      <Line />
    </>
  )
}
