import styled from '@emotion/styled';
import { max } from '../../../../shared-ui/lib/responsive';
import { colors } from '../../../../shared-ui/style/colors';
import { fonts, H4 } from '../../../../shared-ui/style/typography';

const StyledFaqContainer = styled.div`
  position: relative;
  width: 60%;
  margin: 0 auto;
  color: ${colors.TEXT_BROWN}
  position: relative;
  padding: 4em;
  text-align: left;

@media ${max.tablet} {
    width: 60%;
    padding: 0em; 
}
`;

const StyledFaqSubtitle = styled(H4)`
  font-family: ${fonts.nunitoRegular};
  color: ${colors.WHITE};
  margin-top: 1em;
`;

export {
  StyledFaqContainer,
  StyledFaqSubtitle
};
