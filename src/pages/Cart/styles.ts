import styled from 'styled-components'
import { device } from '../../styles/responsive'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 2rem;

  margin-top: 2.5rem;

  @media ${device.laptopM} {
    flex-direction: column;
    align-items: center;
  }
`

export const AddresPaymantContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const Title = styled.h1`
  font-family: 'Baloo 2';
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.438rem;
  color: ${(props) => props.theme['base-subtitlie']};

  margin-bottom: 0.938rem;

  @media ${device.tabletM} {
    margin-left: 25px;
  }
`
