import { fireEvent, screen } from '@testing-library/react'
import theme from 'styles/theme'
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
        // [x] renderizar o componente
        renderWithTheme(<GameCard {...props} />)

        const price = screen.getByText('R$ 235,00')

        // [x] espero que o preço não tenha line-through
        expect(price).not.toHaveStyle({ textDecoration: 'line-through' })

        // [x] espero que o preço preço tenha o background secundário
        expect(price).toHaveStyle({ backgroundColor: theme.colors.secondary })
    })

    it('should render a line-through in price when promotional', () => {
        // [x] renderizar o componente (COM promotionalPrice) // 200 reais // 15 reais
        renderWithTheme(<GameCard {...props} promotionalPrice="R$ 15,00" />)

        // espero que o preço tenha line-through (235)
        expect(screen.getByText('R$ 235,00')).toHaveStyle({
            textDecoration: 'line-through'
        })

        // espero que o preço novo promocional não vai ter line-through (15)
        expect(screen.getByText('R$ 15,00')).not.toHaveStyle({
            textDecoration: 'line-through'
        })
    })

    it('should render a filled Favorite icon when favorite is true', () => {
        renderWithTheme(<GameCard {...props} favorite />)

        // espero que o preço tenha line-through (235)
        expect(
            screen.getByLabelText(/remove from wishlist/i)
        ).toBeInTheDocument()
    })

    it('should call onFav method when favorite is clicked', () => {
        const onFav = jest.fn()
        renderWithTheme(<GameCard {...props} favorite onFav={onFav} />)

        fireEvent.click(screen.getAllByRole('button')[0])

        expect(onFav).toBeCalled()
    })

    it('should render Ribbon', () => {
        renderWithTheme(
            <GameCard
                {...props}
                ribbon="My Ribbon"
                ribbonColor="secondary"
                ribbonSize="small"
            />
        )

        const ribbon = screen.getByText(/my ribbon/i)

        expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
        expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
        expect(ribbon).toBeInTheDocument()
    })
})
