import { InfoOrder } from './components/InfoOrder'
import {
  ContentContainer,
  ImageInfoOrder,
  SubTitleConfirmedOrder,
  TitleConfirmedOrder,
  TitleContainer,
} from './styles'
import Image from '../../assets/Illustration.svg'

export function ConfirmedOrder() {
  return (
    <ContentContainer>
      <div>
        <TitleContainer>
          <TitleConfirmedOrder>Uhu! Pedido confirmado</TitleConfirmedOrder>
          <SubTitleConfirmedOrder>
            Agora é só aguardar que logo o café chegará até você
          </SubTitleConfirmedOrder>
        </TitleContainer>

        <InfoOrder />
      </div>

      <ImageInfoOrder src={Image} />
    </ContentContainer>
  )
}
