import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  width: 16rem;
  height: 19.375rem;
  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* text-align: center; */
`

export const CoffeeImg = styled.img`
  margin-top: -1.25rem;
  width: 7.5rem;
  height: 7.5rem;
`

export const CoffeeCharacteristicsContainer = styled.div`
  /* background: ${(props) => props.theme['yellow-light']}; */
  color: ${(props) => props.theme['yellow-dark']};

  margin-top: 0.75rem;
  height: 1.313rem;
  /* padding: 0.25rem 0.5rem; */
  border-radius: 100px;
  gap: 0.25rem;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const CoffeeCharacteristics = styled.p`
  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};

  margin-top: 0.75rem;
  height: 1.313rem;
  padding: 0.25rem 0.5rem;
  border-radius: 100px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Roboto';
  font-style: normal;
  font-size: 0.625rem;
  font-weight: 700;
  text-transform: uppercase;
`
export const CoffeeName = styled.h2`
  color: ${(props) => props.theme['base-subtitlie']};
  font-family: 'Baloo 2';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;

  margin-top: 1rem;
`

export const CoffeeDescription = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.138rem;
  text-align: center;

  width: 13.5rem;
  margin-top: 0.5rem;

  color: ${(props) => props.theme['base-label']};
`
export const BuyContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  /* justify-content: space-between; */

  margin-top: 2.063rem;
  width: 13rem;
  height: 2.375rem;
`

export const Coin = styled.div`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.95rem;
  color: ${(props) => props.theme['base-text']};

  display: flex;
`
export const Value = styled(Coin)`
  font-family: 'Baloo 2';
  font-weight: 800;
  font-size: 1.5rem;

  margin-left: 0.25rem;
`

export const AmountContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  margin-left: 1.438rem;
  margin-right: 0.5rem;

  width: 4.5rem;
  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['base-button']};
`
export const Amount = styled.p`
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 1rem;
  width: 20px;
  height: 21px;
  text-align: center;
  color: ${(props) => props.theme['base-title']};
`

export const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;
  background-color: ${(props) => props.theme.purple};

  color: ${(props) => props.theme['base-card']};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme['purple-dark']};
  }
`
