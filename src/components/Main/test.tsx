import { render } from '@testing-library/react'
import 'jest-styled-components'
import Main from '.'

describe('<Main />', () => {
    it('should render the heading', () => {
        render(<Main />)
    })
})
