import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  BoldP,
  BoldStreetText,
  DolarPinContainer,
  InfoContainer,
  MapPinContainer,
  NormalP,
  OrderInfoContainer,
  OrdersInfosContainer,
  TimerPinContainer,
} from './styles'
import { useContext } from 'react'
import { CoffeesContext } from '../../../../context/Coffes'

export function InfoOrder() {
  const { orderConfirmed } = useContext(CoffeesContext)

  return (
    <InfoContainer>
      <OrdersInfosContainer>
        <OrderInfoContainer>
          <MapPinContainer>
            <MapPin size={'1rem'} color="white" weight="fill" />
          </MapPinContainer>
          <div>
            <NormalP>
              Entrega em
              <BoldStreetText>
                Rua {orderConfirmed.street}, {orderConfirmed.number}
              </BoldStreetText>
            </NormalP>

            <NormalP>
              {orderConfirmed.neighborhood} - {orderConfirmed.city}.{' '}
              {orderConfirmed.state}
            </NormalP>
          </div>
        </OrderInfoContainer>

        <OrderInfoContainer>
          <TimerPinContainer>
            <Timer size={'1rem'} color="white" weight="fill" />
          </TimerPinContainer>
          <div>
            <NormalP>Previsão de Entrega</NormalP>
            <BoldP>20 min - 30 min</BoldP>
          </div>
        </OrderInfoContainer>

        <OrderInfoContainer>
          <DolarPinContainer>
            <CurrencyDollar size={'1rem'} color="white" weight="fill" />
          </DolarPinContainer>
          <div>
            <NormalP>Pagamento na Entrega</NormalP>
            <BoldP>{orderConfirmed.paymantButtonClicked}</BoldP>
          </div>
        </OrderInfoContainer>
      </OrdersInfosContainer>
    </InfoContainer>
  )
}
