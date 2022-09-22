import styled from 'styled-components';
import { colors } from '../../../shared-ui/style/colors';
 

const StyledFillerSection = styled.div`
  height: 100em;
`;

const StyledTextContainer = styled.div`
    padding: 3em;
    background-color: ${colors.TEXT_BOX};
    width: 38em;
    border-radius: 3em;
    margin-left: 5em;

`;


export { StyledFillerSection, StyledTextContainer };
