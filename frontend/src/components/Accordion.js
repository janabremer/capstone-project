import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components/macro';
import { ArrowDownIcon, ArrowRightIcon } from './Icons';
import ListItem from './ListItem';

Accordion.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    linkText: PropTypes.string,
    url: PropTypes.string
}

export default function Accordion({title, content, linkText, url}) {
    const [toggleState, setToggleState] = useState('hidden');

    function toggleAccordion() {
      setToggleState(toggleState === 'hidden' ? 'active' : 'hidden')
    }

    return(
        <ListItem>
            <Title onClick={toggleAccordion}>
                {(toggleState === 'hidden') ? <ArrowRightIcon /> : <ArrowDownIcon />}
                <span>{title}</span>
            </Title>
            {(toggleState === 'active') && 
                <Content>{content}
                {linkText && <a href={url} target="_blank">{linkText}</a>}
                </Content> }
        </ListItem>
    )
}

const Title = styled.div`
    align-items: start;
    display: grid;
    grid-template-columns: 28px auto;
    font-size: 110%;
    gap: 10px; 

    svg {
        color: var(--primary-blue);
        stroke-width: 3px;
        height: 28px;
        width: 28px;
    }
`

const Content = styled.p`
    color: var(--secondary-dark);
    font-size: 95%;
    letter-spacing: 0.05em;
    padding: 20px 0 0 38px;
    text-transform: none;

    a {
        color: var(--primary-blue);
    }
`

