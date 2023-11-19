import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import {
  BuyContainer,
  AmountContainer,
  CoffeeCharacteristics,
  CoffeeContainer,
  CoffeeDescription,
  CoffeeImg,
  CoffeeName,
  Coin,
  Value,
  Amount,
  ShoppingCartContainer,
  CoffeeCharacteristicsContainer,
} from './style'

import { v4 as uuidv4 } from 'uuid'
import { useContext, useEffect, useState } from 'react'
import { CoffeesContext } from '../../../../../../context/Coffes'
import { toast } from 'react-toastify'

interface CoffeeProps {
  coffeImg: string
  coffeCharacteristics: string[]
  coffeeName: string
  coffeDescription: string
  value: number
  amount: number
}

export function Coffe({
  coffeImg,
  coffeCharacteristics,
  coffeeName,
  coffeDescription,
  value,
}: CoffeeProps) {
  const { setCoffeesCart, coffees, setCoffees } = useContext(CoffeesContext)
  const [amountOfCoffees, setAmountOfCoffees] = useState(0)

  function additionAmount() {
    setAmountOfCoffees(amountOfCoffees + 1)
  }

  function decreaseAmount() {
    if (!(amountOfCoffees === 0)) {
      setAmountOfCoffees(amountOfCoffees - 1)
    }
  }

  function addCoffeeToCart() {
    const copyCoffes = [...coffees]

    const coffeAmountUpdated = copyCoffes.map((coffeeObject) => {
      if (coffeeObject.coffeeName === coffeeName && amountOfCoffees > 0) {
        notifyCoffeeAddToCart()
        return {
          ...coffeeObject,
          amount: coffeeObject.amount + amountOfCoffees,
        }
      } else {
        return coffeeObject
      }
    })

    setCoffees(coffeAmountUpdated)
    setAmountOfCoffees(0)
  }

  useEffect(() => {
    const coffeesFilteredByAmount = coffees.filter(
      (coffeeObject) => coffeeObject.amount > 0,
    )

    setCoffeesCart(coffeesFilteredByAmount)
  }, [coffees, setCoffeesCart])

  const notifyCoffeeAddToCart = () =>
    toast.success(`O ${coffeeName}, foi adicionado ao carrinho !!`, {
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
    <CoffeeContainer>
      <CoffeeImg src={coffeImg} alt="" />
      {coffeCharacteristics.length === 1 ? (
        <CoffeeCharacteristics>{coffeCharacteristics[0]}</CoffeeCharacteristics>
      ) : (
        <CoffeeCharacteristicsContainer>
          {coffeCharacteristics.map((coffeCharacteristic) => (
            <CoffeeCharacteristics key={uuidv4()}>
              {coffeCharacteristic}
            </CoffeeCharacteristics>
          ))}
        </CoffeeCharacteristicsContainer>
      )}
      <CoffeeName>{coffeeName}</CoffeeName>
      <CoffeeDescription>{coffeDescription}</CoffeeDescription>
      <BuyContainer>
        <Coin>
          R$ <Value>{(value / 100).toFixed(2)}</Value>
        </Coin>
        <AmountContainer>
          <Minus
            width={'0.875rem'}
            height={'0.875rem'}
            color="#8047F8"
            cursor="pointer"
            onClick={decreaseAmount}
          />
          <Amount>{amountOfCoffees}</Amount>
          <Plus
            width={'0.875rem'}
            height={'0.875rem'}
            color="#8047F8"
            cursor={'pointer'}
            onClick={additionAmount}
          />
        </AmountContainer>
        <ShoppingCartContainer onClick={addCoffeeToCart}>
          <ShoppingCart weight="fill" width={'1.375rem'} height={'1.375rem'} />
        </ShoppingCartContainer>
      </BuyContainer>
    </CoffeeContainer>
  )
}
