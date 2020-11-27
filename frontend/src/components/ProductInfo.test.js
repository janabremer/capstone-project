import { render } from '@testing-library/react'
import 'jest-styled-components'
import ProductInfo from './ProductInfo'

describe('ProductInfo', () => {
    it('renders correctly', () => {
        const { container } = render(
            <ProductInfo name={'apple'} water={'822'} />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('displays product name and product water', () => {
        const { getByText } = render(
            <ProductInfo name={'apple'} water={'822'} />
        )
        expect(getByText(/apple/i)).toBeInTheDocument()
        expect(getByText(/822/i)).toBeInTheDocument()
    })
    
})