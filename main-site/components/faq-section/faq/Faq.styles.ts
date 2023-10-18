import styled from '@emotion/styled';
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

@media ${max.tablet} {
    width: 80%;
    padding: 0em; 
}
`;
