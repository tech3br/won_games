import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    // [x] renderizar o GameCard
    renderWithTheme(<GameCard {...props} />)

    // [x] verificar se o title foi renderizado corretamente
    expect(
      screen.getByRole('heading', { name: props.title })
    ).toBeInTheDocument()

    // [x] verificar se o developer foi renderizado corretamente
    expect(
      screen.getByRole('heading', { name: props.developer })
    ).toBeInTheDocument()

    // [x] verificar se a imagem foi renderizada corretamente
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    // [x] verificar se o favbutton foi renderizado corretamente
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    // renderiza o componente
    // preço não tenha line-through
    // preço tenha o background secundário
  })

  it('should render a line-through in price when promotional', () => {
    // renderiza o componente (COM promotionalPrice) // 200 reais // 15 reais
    // preço tenha line-through (200)
    // preço novo promocional não vai ter line-through (15)
  })
})
