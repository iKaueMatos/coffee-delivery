import styled from 'styled-components'
import { device } from '../../../../styles/responsive'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  padding: 2rem 10rem 9.813rem 10rem;

  @media ${device.laptopL} {
    padding: 2rem 0rem 9.813rem 9rem;
  }

  @media ${device.laptopM} {
    padding: 2rem 0rem 9.813rem 9rem;
  }
`

export const HeaderMenu = styled.h2`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 2rem;
`

export const Menu = styled.div`
  padding-top: 3.375rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  gap: 2.5rem 2rem;
`
