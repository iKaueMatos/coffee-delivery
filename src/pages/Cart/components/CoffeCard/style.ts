/* eslint-disable dot-notation */
import styled from 'styled-components'

export const CoffeCardContainer = styled.div`
  width: 28rem;
  height: 31.125rem;
  padding: 2.5rem;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px 44px;
`

export const NoCoffeeCart = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  color: ${(props) => props.theme['base-text']};
  font-weight: 400;

  width: 90%;
  height: 100%;
`

export const CoffeesSelectedContainer = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;

  height: 21rem;
  width: 25rem;
  overflow: auto;
`

export const PaymantPrice = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;

  width: 23rem;
  height: 2rem;
`
export const CostsContent = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 23rem;
  height: 1.313rem;
`
export const Cost = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.125rem;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
`
export const TotalCostContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 0.5rem;

  width: 23rem;
  height: 1.625rem;
`
export const TotalCost = styled.h3`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.625rem;

  display: flex;
  align-items: center;
  color: ${(props) => props.theme['base-subtitlie']};
`
export const ConfirmedOrderButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.75rem 0.5rem;
  gap: 0.25rem;

  width: 23rem;
  height: 3rem;
  border-radius: 6px;
  border: 0;

  background: ${(props) => props.theme['yellow']};

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.375rem;

  text-transform: uppercase;
  color: ${(props) => props.theme['white']};
  font-stretch: 100;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    background: ${(props) => props.theme['yellow-dark']};
    cursor: not-allowed;
  }
`
