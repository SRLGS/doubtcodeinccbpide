import styled from 'styled-components'

export const CreditCardContainer = styled.div`
  display: flex;
  height: 100vh;
  font-weight: bold;
`

export const CardImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
`

export const ImageContainer = styled.div`
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 8px;
`

export const Para = styled.p`
  font-weight: bold;
  font-family: 'Roboto';
  color: #c3cad9;
`

export const Input = styled.Input`
  padding: 5px;
`
export const Header = styled.h1`
  font-weight: bold;
  font-family: 'Roboto';
  color: #ffffff;
`
export const Payment = styled.p`
  color: #ffd773;
  text-decoration: underline;
  font-weight: bold;
  font-family: 'Roboto';
`
export const CardDetailsContainer = styled(CardImageContainer)

export const DetailsContainer = styled(ImageContainer)
