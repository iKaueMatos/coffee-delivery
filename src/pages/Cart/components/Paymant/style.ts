/* eslint-disable dot-notation */

import { styled } from 'styled-components'
import { device } from '../../../../styles/responsive'

export const PaymantContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  padding: 2.5rem;
  max-width: 40rem;
  height: 12.938rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-card']};

  @media ${device.tabletMM} {
    width: 35rem;
  }

  @media ${device.tabletM} {
    width: 32.5rem;
  }
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  gap: 8px;
  width: 35rem;
  height: 2.75rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  gap: 0.125rem;
  width: 33.125rem;
  height: 2.75rem;
`
export const Title = styled.h3`
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  height: 1.313rem;

  color: ${(props) => props.theme['base-subtitlie']};
`

export const Subtitle = styled.p`
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.138rem;
  height: 1.313rem;

  color: ${(props) => props.theme['base-text']};
`

export const ChoosePaymantButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  gap: 0.75rem;
  width: 100%;
  height: 3.188rem;
`
export const ChoosePaymantLabel = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 1rem;

  gap: 0.75rem;
  /* width: 11.167rem; */
  width: 100%;
  height: 3.188rem;

  border-radius: 6px;
  border: 0rem solid ${(props) => props.theme['purple']};

  background: ${(props) => props.theme['base-button']};

  font-size: 0.75rem;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  text-transform: uppercase;
  line-height: 1.188rem;
  color: ${(props) => props.theme['base-text']};

  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['base-hover']};
  }

  &.clicked {
    background: ${(props) => props.theme['purple-light']};
    border: 1px solid ${(props) => props.theme['purple']};
  }
`
export const RadioInput = styled.input`
  display: none;
`
