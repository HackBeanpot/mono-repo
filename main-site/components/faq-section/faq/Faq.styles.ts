import styled from 'styled-components';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';

export const StyledFaqContainer = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  color: ${colors.TEXT_BROWN}
  position: relative;
  padding: 4em;
  text-align: left;
  padding-bottom: 0;

@media ${max.tablet} {
    width: 75%;
    padding: 0em;
   
}
`;
