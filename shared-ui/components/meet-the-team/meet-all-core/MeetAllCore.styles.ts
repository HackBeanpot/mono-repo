import styled from 'styled-components';
import { H3, P } from '../../../style/typography';

const StyledDesktopCore = styled.img`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledMobileCore = styled.img`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledDesktopHeaderCore = styled(H3)`
  color: colors.WHITE;
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledDesktopParagraphCore = styled(P)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledMobileHeaderCore = styled(H3)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

const StyledMobileParagraphCore = styled(P)`
  display: flex;
  padding-top: 3.5em;
  justify-content: center;
`;

export {
  StyledDesktopCore,
  StyledMobileCore,
  StyledDesktopHeaderCore,
  StyledDesktopParagraphCore,
  StyledMobileHeaderCore,
  StyledMobileParagraphCore
};
