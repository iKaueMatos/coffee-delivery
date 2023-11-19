import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import {
  ArticleBulletPoints,
  ArticleIntro,
  BulletPoints1,
  BulletPoints2,
  CartIcon,
  CoffeIcon,
  HeadIntro,
  ImageCoffe,
  MainContainer,
  PackgeIcon,
  TimerIcon,
} from './style'
import image from '../../../../assets/Imagem.svg'

export function Introduction() {
  return (
    <MainContainer>
      <section>
        <ArticleIntro>
          <HeadIntro>
            Encontre o café perfeito para qualquer hora do dia
          </HeadIntro>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </ArticleIntro>
        <ArticleBulletPoints>
          <BulletPoints1>
            <CartIcon>
              <ShoppingCart weight="fill" />
            </CartIcon>
            <p>Compra simples e segura</p>
          </BulletPoints1>
          <BulletPoints2>
            <PackgeIcon>
              <Package weight="fill" />
            </PackgeIcon>
            <p>Embalagem mantém o café intacto</p>
          </BulletPoints2>
          <BulletPoints1>
            <TimerIcon>
              <Timer weight="fill" />
            </TimerIcon>
            <p>Entrega rápida e rastreada</p>
          </BulletPoints1>
          <BulletPoints2>
            <CoffeIcon>
              <Coffee weight="fill" />
            </CoffeIcon>
            <p>O café chega fresquinho até você</p>
          </BulletPoints2>
        </ArticleBulletPoints>
      </section>
      <ImageCoffe src={image} />
    </MainContainer>
  )
}
