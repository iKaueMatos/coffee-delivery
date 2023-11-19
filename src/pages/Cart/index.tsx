import { useContext } from 'react'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm, FormProvider } from 'react-hook-form'
import { z, ZodType } from 'zod'

import { CoffeCard } from './components/CoffeCard'
import { Addres } from './components/Addres'
import { Paymant } from './components/Paymant'
import { AddresPaymantContainer, ContentContainer, Title } from './styles'
import { useNavigate } from 'react-router-dom'
import { CoffeesContext } from '../../context/Coffes'

export function Cart() {
  const { setOrderConfirmed, setCoffeesCart, coffees, setCoffees } =
    useContext(CoffeesContext)

  type FormData = {
    cep: number
    street: string
    number: number
    complement?: string
    neighborhood: string
    city: string
    state: string
    paymantButtonClicked: string
  }

  const schemaValidadtion: ZodType<FormData> = z.object({
    cep: z.number().min(11111111).max(99999999),
    street: z.string().min(3).max(50),
    number: z.number().min(1).max(9999),
    complement: z.optional(z.string().max(100)),
    neighborhood: z.string().min(3).max(40),
    city: z.string().min(3).max(40),
    state: z.string().min(1).max(2),
    paymantButtonClicked: z.string(),
  })

  const confirmedOrderedPaymantForm = useForm<FormData>({
    resolver: zodResolver(schemaValidadtion),
  })

  const navigate = useNavigate()

  function dataConfirmedOrderedPaymant(data: FormData) {
    const copyCoffees = [...coffees]

    const coffeAmountReset = copyCoffees.map((coffeeObject) => {
      if (coffeeObject.amount > 0) {
        return {
          ...coffeeObject,
          amount: (coffeeObject.amount = 0),
        }
      } else {
        return coffeeObject
      }
    })

    setCoffees(coffeAmountReset)

    setCoffeesCart([])
    setOrderConfirmed(data)

    navigate('/Cart/ConfirmedOrder')
  }

  return (
    <FormProvider {...confirmedOrderedPaymantForm}>
      <form
        onSubmit={confirmedOrderedPaymantForm.handleSubmit(
          dataConfirmedOrderedPaymant,
        )}
      >
        <ContentContainer>
          <div>
            <Title>Complete o seu pedido</Title>
            <AddresPaymantContainer>
              <Addres />
              <Paymant />
            </AddresPaymantContainer>
          </div>

          <div>
            <Title>Cafés selecionados</Title>
            <CoffeCard />
          </div>
        </ContentContainer>
      </form>
    </FormProvider>
  )
}
