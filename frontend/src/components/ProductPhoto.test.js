import { render } from '@testing-library/react'
import 'jest-styled-components'
import ProductPhoto from './ProductPhoto'

describe('ProductPhoto', () => {
    it('renders correctly', () => {
        const { container } = render(
            <ProductPhoto
                url={'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&h=350'}
                photographer={'mali maeder'}
            />
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('displays image', () => {
        const { getByRole } = render(
            <ProductPhoto
                url={'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&h=350'}
                photographer={'mali maeder'}
            />
        )
        expect(getByRole('img', { url: 'https://images.pexels.com/photos/102104/pexels-photo-102104.jpeg?auto=compress&cs=tinysrgb&h=350' })).toBeInTheDocument()
    })
    
})