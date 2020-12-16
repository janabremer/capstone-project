import PropTypes from 'prop-types'
import styled from 'styled-components/macro'
import { useState } from 'react'
import ListBox from './ListBox'
import { ArrowDownIcon, ArrowRightIcon } from './Icons';


Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired
}

export default function Accordion({title, content}) {
    const [toggleState, setToggleState] = useState('hidden');

    function toggleAccordion() {
      setToggleState(toggleState === 'hidden' ? 'active' : 'hidden')
    }

    return(
        <ListBox>
            <Title onClick={toggleAccordion}>
                {(toggleState === 'hidden') ? <ArrowRightIcon /> : <ArrowDownIcon />}
                <span>{title}</span>
            </Title>
            {(toggleState === 'active') && <Content>{content}</Content> }
        </ListBox>
    )
}

const Title = styled.div`
    font-size: 110%;
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    gap: 10px;

    svg {
        color: var(--primary-blue);
        stroke-width: 3px;
    }

`
const Content = styled.p`
    padding: 20px 0 0 34px;
    font-size: 95%;
    color: var(--secondary-dark);
    letter-spacing: 0.05em;
`

