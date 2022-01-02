import { render, screen } from '@testing-library/react'
import 'match-media-mock'
import { Settings } from 'react-slick'
import styled from 'styled-components'
import { renderWithTheme } from 'utils/tests/helpers'

import Slider from '.'

const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
}

const verticalSettings: Settings = {
    vertical: true,
    verticalSwiping: true,
    dots: true,
    infinite: false,
    slidesToShow: 1
}

const Slide = styled.div`
    background-color: gray;
    width: 30rem;
    padding: 10rem 0;
    border: 0.1rem solid red;
    color: white;
    text-align: center;
`

describe('<Slider />', () => {
    it('should render horizontal correctly', () => {
        renderWithTheme(
            <Slider settings={settings}>
                <Slide>1</Slide>
                <Slide>2</Slide>
                <Slide>3</Slide>
                <Slide>4</Slide>
                <Slide>5</Slide>
                <Slide>6</Slide>
            </Slider>
        )
    })

    it('should render vertical correctly', () => {
        renderWithTheme(
            <Slider settings={verticalSettings}>
                <Slide>1</Slide>
                <Slide>2</Slide>
                <Slide>3</Slide>
                <Slide>4</Slide>
                <Slide>5</Slide>
                <Slide>6</Slide>
            </Slider>
        )
    })

    it('should render children as slider item', () => {
        const { container } = render(
            <Slider settings={{ slidesToShow: 1, infinite: false }}>
                <p>item 1</p>
                <p>item 2</p>
            </Slider>
        )

        expect(
            screen.getByText(/item 1/i).parentElement?.parentElement
        ).toHaveClass('slick-slide')

        expect(
            screen.getByText(/item 2/i).parentElement?.parentElement
        ).toHaveClass('slick-slide')

        expect(container.firstChild).toMatchSnapshot()
    })
})
