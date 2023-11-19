import { Bank, CreditCard, CurrencyDollar, Money } from 'phosphor-react'
import {
  ChoosePaymantButtonContainer,
  ChoosePaymantLabel,
  HeaderContainer,
  PaymantContainer,
  RadioInput,
  Subtitle,
  Title,
  TitleContainer,
} from './style'
import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

export function Paymant() {
  const { register } = useFormContext()

  const [isButtonClicked, setIsButtonClicked] = useState({
    crediCard: false,
    debitCard: false,
    money: false,
  })

  return (
    <PaymantContainer>
      <HeaderContainer>
        <CurrencyDollar
          width={'1.375rem'}
          height={'1.375rem'}
          color="#8047F8"
        />

        <TitleContainer>
          <Title>Pagamento</Title>
          <Subtitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </Subtitle>
        </TitleContainer>
      </HeaderContainer>

      <ChoosePaymantButtonContainer>
        <ChoosePaymantLabel
          aria-selected
          className={isButtonClicked.crediCard === true ? 'clicked' : ''}
          onClick={() =>
            setIsButtonClicked({
              crediCard: true,
              debitCard: false,
              money: false,
            })
          }
        >
          <CreditCard color="#8047F8" width={'1rem'} height={'1rem'} />
          <RadioInput
            type="radio"
            // name="chosePaymant"
            value={'creditCard'}
            {...register('paymantButtonClicked')}
          />
          Catão de Crédito
        </ChoosePaymantLabel>

        <ChoosePaymantLabel
          className={isButtonClicked.debitCard === true ? 'clicked' : ''}
          onClick={() =>
            setIsButtonClicked({
              crediCard: false,
              debitCard: true,
              money: false,
            })
          }
        >
          <Bank color="#8047F8" width={'1rem'} height={'1rem'} />
          <RadioInput
            type="radio"
            // name="chosePaymant"
            value={'debitCard'}
            {...register('paymantButtonClicked')}
          />
          Catão de Débito
        </ChoosePaymantLabel>

        <ChoosePaymantLabel
          className={isButtonClicked.money === true ? 'clicked' : ''}
          onClick={() =>
            setIsButtonClicked({
              crediCard: false,
              debitCard: false,
              money: true,
            })
          }
        >
          <RadioInput
            type="radio"
            // name="chosePaymant"
            value={'money'}
            {...register('paymantButtonClicked')}
          />
          <Money color="#8047F8" width={'1rem'} height={'1rem'} />
          Dinheiro
        </ChoosePaymantLabel>
      </ChoosePaymantButtonContainer>
    </PaymantContainer>
  )
}
