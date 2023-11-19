import styled from 'styled-components'
import { device } from '../../../../styles/responsive'

export const InfoContainer = styled.div`
  width: 35.125rem;
  height: 16.875rem;
  border-radius: 6px 36px;

  gap: 2rem;
  /* padding: 2.5rem; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  border: solid 0.063rem transparent;
  background-image: linear-gradient(white, white),
    linear-gradient(to left, #8047f8, #dbac2c);
  background-origin: border-box;
  background-clip: content-box, border-box;

  @media ${device.tabletMM} {
    width: 100%;
  }
`

const PinContainer = styled.div`
  width: 2rem;
  height: 2rem;
  border-radius: 1000px;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const OrdersInfosContainer = styled.div`
  padding: 2.5rem;
  gap: 32px;
`

export const OrderInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.75rem;

  height: 2.625rem;
  margin-bottom: 2rem;
`

export const MapPinContainer = styled(PinContainer)`
  background: ${(props) => props.theme.purple};
`
export const TimerPinContainer = styled(PinContainer)`
  background: ${(props) => props.theme.yellow};
`

export const DolarPinContainer = styled(PinContainer)`
  background: ${(props) => props.theme['yellow-dark']};
`

export const NormalP = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.313rem;
  color: ${(props) => props.theme['base-text']};

  display: flex;
`

export const BoldP = styled(NormalP)`
  font-weight: 700;
`

export const BoldStreetText = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.313rem;
  color: ${(props) => props.theme['base-text']};

  margin-left: 0.3rem;
`
