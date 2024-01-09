import styled from 'styled-components';
import { colors } from '../../style/colors';
import { fonts } from '../../style/typography';
import { min } from '../../lib/responsive';
import { motion } from 'framer-motion';
import { StyledPrimaryButtonProps } from '../../lib/types';

const StyledPrimaryHeaderButton = styled(motion.button)<StyledPrimaryButtonProps>`
<<<<<<< HEAD
=======
    cursor: pointer;
>>>>>>> 68dd83ee2593b77f98d857147e44094f55659acc
    color: ${(props): string =>
        props.$transparent ? colors.BUTTON_YELLOW : colors.TEXT_DARKBLUE};
    background-color: ${(props): string =>
        props.$transparent ? colors.TRANSPARENT : colors.BUTTON_YELLOW};
    border-color: ${colors.BUTTON_YELLOW} !important;
    font-family: ${fonts.nunitoSansSemibold};
    transition-duration: 0.5s;
    &:hover {
        color: ${colors.TEXT_DARKBLUE};
        background-color: ${colors.BUTTON_DARK_YELLOW};
        border-color: ${colors.BUTTON_DARK_YELLOW} !important;
    }
    padding: 0.5em;
    border-radius: 2em;
    border: 0.1em solid;
    text-decoration: none;
    text-align: center;

    font-size: 2.3em;
    margin-bottom: 1.2em;
    @media ${min.tablet} {
        font-size: 1.2em;
        margin-right: 0.5em;
    }
    @media ${min.tabletLg} {
        margin-right: 1em;
        margin-top: 0.5em;
        font-size: 1.1em;
    }
    @media ${min.desktop} {
        font-size: 1.1em;
    }
    @media ${min.desktopLg} {
        font-size: 1.3em;
        margin: 0.5em;
    }
`;

export { StyledPrimaryHeaderButton };