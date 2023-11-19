import styled from 'styled-components'

export const CoffeSelectedContainer = styled.div`
  width: 23rem;
  height: 5rem;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  padding: 0.5rem 0.25rem;
  gap: 3.125rem;

  background: ${(props) => props.theme['base-card']};
`
export const CoffeImageInfoContaine = styled.div`
  display: flex;
  gap: 1.25rem;
`

export const CoffeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const CoffeInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.5rem;
  /* background: blue; */
  width: 10.688rem;
  height: 3.813rem;
`

export const CoffeName = styled.p`
  height: 1.313rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.313rem;

  color: ${(props) => props.theme['base-subtitlie']};
`
export const AmountRemoveContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  height: 2rem;
  width: 10.688rem;
`
export const Amount = styled.div`
  background: ${(props) => props.theme['base-button']};

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;

  padding: 0.5rem;
  height: 2rem;
  width: 72px;
  border-radius: 6px;
`

export const AmountNumber = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  line-height: 1.313rem;
  font-size: 1rem;
  color: ${(props) => props.theme['base-title']};

  width: 1.25rem;
  height: 1.313rem;

  display: flex;
  justify-content: center;
  align-items: center;
`
export const RemoveCoffe = styled.div`
  width: 5.688rem;
  height: 2rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;

  gap: 0.25rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
export const RemoveText = styled.p`
  width: 55px;
  height: 19px;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.188rem;
  text-transform: uppercase;

  color: ${(props) => props.theme['base-text']};
`
export const Price = styled.p`
  width: 3.438rem;
  height: 1.313rem;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.313rem;

  color: ${(props) => props.theme['base-text']};

  display: flex;
  align-items: center;
`
export const Line = styled.div`
  width: 23rem;
  height: 0;

  border: 1px solid ${(props) => props.theme['base-button']};
`
