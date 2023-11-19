/* eslint-disable dot-notation */

import styled from 'styled-components'
import { device } from '../../styles/responsive'

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: end;
  gap: 6.375rem;

  margin-top: 5rem;

  @media ${device.laptopM} {
    flex-direction: column;
  }
`

export const TitleContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  flex-direction: column;
  margin-bottom: 2.5rem;

  @media ${device.tabletMM} {
    width: 100%;
  }
`

export const TitleConfirmedOrder = styled.h1`
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 800;
  font-size: 2rem;
  line-height: 2.625rem;

  color: ${(props) => props.theme['yellow-dark']};
`

export const SubTitleConfirmedOrder = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1.25rem;
  line-height: 1.625rem;

  color: ${(props) => props.theme['base-subtitlie']};

  @media ${device.tabletMM} {
    font-size: 1.2rem;
  }
`
export const ImageInfoOrder = styled.img`
  width: 30.75rem;
  height: 18.313rem;
`
