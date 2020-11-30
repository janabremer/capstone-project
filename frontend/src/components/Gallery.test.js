import { render } from '@testing-library/react'
import 'jest-styled-components'
import Gallery from './Gallery'

describe('Gallery', () => {
    it('renders correctly', () => {
        const { container } = render(<Gallery />)
        expect(container.firstChild).toMatchSnapshot()
    })
})