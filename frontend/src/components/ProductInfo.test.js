import { render } from '@testing-library/react'
import 'jest-styled-components'
import ProductInfo from './ProductInfo'

const testProps = {
    name: 'apple',
    water: 822,
}

describe('ProductInfo', () => {
    it('renders correctly', () => {
        const { container } = render(
            <ProductInfo {...testProps} />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('displays product name and product water', () => {
        const { getByText } = render(
            <ProductInfo {...testProps} />
        )
        expect(getByText(/apple/i)).toBeInTheDocument()
        expect(getByText(/822/i)).toBeInTheDocument()
    })
    
})