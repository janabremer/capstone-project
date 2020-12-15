import { render } from '@testing-library/react'
import user from '@testing-library/user-event'
import 'jest-styled-components'
import Button from './Button'

const testProps = {
    text: 'Click me',
    onClick: () => {}
}

describe('Button', () => {
    it('renders correctly', () => {
        const { container } = render(
            <Button {...testProps}/>
        )
        expect(container.firstChild).toMatchSnapshot()
    })

    it('calls onClickMock on click', () => {
        const onClickMock = jest.fn()
        const props = {...testProps, onClick: onClickMock}
        const { getByRole } = render(<Button {...props}/>)
        const button = getByRole('button')
        user.click(button)
        expect(onClickMock).toHaveBeenCalledTimes(1)
    })
})