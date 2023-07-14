import {useState} from 'react'
import {
  CreditCardContainer,
  Payment,
  Input,
  CardImageContainer,
  CardDetailsContainer,
  ImageContainer,
  Header,
  Para,
  DetailsContainer,
} from './styledComponents'

const CreditCard = () => {
  const [name, setterFunction1] = useState('')
  const [AccountNumber, setterFunction2] = useState('')

  const change1 = event => {
    setterFunction1(event.target.value)
  }

  const change2 = event => {
    setterFunction2(event.target.value)
  }

  return (
    <CreditCardContainer>
      <CardImageContainer>
        <ImageContainer>
          <Para>{AccountNumber}</Para>
          <Header>CARDHOLDERNAME</Header>
          <Para>{name}</Para>
        </ImageContainer>
      </CardImageContainer>
      <CardDetailsContainer>
        <DetailsContainer>
          <Payment>Payment Method</Payment>
          <Input
            value={name}
            placeholder="Card Number"
            onChange={change1}
            type="text"
          />
          <Input
            value={AccountNumber}
            placeholder="CardholderName"
            onChange={change2}
            type="text"
          />
        </DetailsContainer>
      </CardDetailsContainer>
    </CreditCardContainer>
  )
}

export default CreditCard
