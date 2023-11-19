import styled from 'styled-components'
import { device } from '../../../../styles/responsive'

export const AddresContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  max-width: 40rem;
  /* max-width: 43rem; */
  /* width: 40rem; */
  min-height: 23.25rem;
  max-height: 32rem;
  /* height: 23.25rem; */
  padding: 2.5rem;
  border-radius: 6px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 2rem;

  @media ${device.tabletMM} {
    width: 35rem;
  }

  @media ${device.tabletM} {
    width: 32.5rem;
  }
`

export const TitleContainer = styled.div`
  display: flex;
`

export const TextContainer = styled.div`
  margin-left: 0.5rem;
`

export const Title = styled.h3`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.313rem;

  color: ${(props) => props.theme['base-subtitlie']};
`
export const Subtitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 130%;

  color: ${(props) => props.theme['base-text']};
`
export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;

  gap: 1rem 0.75rem;
`

export const Input = styled.input`
  padding: 12px;
  height: 2.625rem;
  border: 0.063rem solid ${(props) => props.theme['base-button']};
  border-radius: 4px;

  background: ${(props) => props.theme['base-input']};

  font-size: 0.875rem;
  line-height: 1.125rem;
  color: ${(props) => props.theme['base-text']};
`

export const InputCep = styled(Input)`
  width: 35.71%;
  appearance: none;
`

export const InputStreet = styled(Input)`
  width: 100%;
`

export const InputNumber = styled(Input)`
  width: 100%;
  appearance: none;
`

export const InputComplement = styled(Input)`
  width: 100%;
`

export const InputNeighborhood = styled(Input)`
  width: 100%;
`

export const InputCity = styled(Input)`
  width: 100%;
`

export const InputState = styled(Input)`
  width: 100%;
`

export const ContainerInput = styled.div`
  display: flex;
  gap: 0.75rem;
  width: 100%;
`

export const ErrorMensage = styled.span`
  color: #ff3a3d;
  font-weight: 700;
  font-size: 0.8rem;
`

export const InputContainerErro = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`

export const ContainerErroNumber = styled(InputContainerErro)`
  width: 35.71%;
`

export const ContainerErroComplement = styled(InputContainerErro)`
  width: 62.14%;
`

export const ContainerErroCity = styled(InputContainerErro)`
  width: 49.28%;
`

export const ContainerErroState = styled(InputContainerErro)`
  width: 10.71%;
`
