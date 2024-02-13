import styled from '@emotion/styled';
import { max, min } from '../../../shared-ui/lib/responsive';
import { fonts, H2, H3, H4, P } from '../../../shared-ui/style/typography';
import { colors } from '../../../shared-ui/style/colors';


const StyledKeynoteHeader = styled(H2)`
	margin-bottom: 0.5em;
`;

const StyledKeynoteParagraph = styled(P)`
    color: ${colors.WHITE};
	margin-bottom: 0em;
`

const StyledH3 = styled(H3)`
    color: ${colors.WHITE};
	margin-bottom: -0.75em;
`;

const StyledH4 = styled(H4)`
    color: ${colors.WHITE};
	font-weight: none;
	font-style: italic;
`;

const StyledImgColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 30%;
  align: center;
`;

const StyledTextColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2em;
  flex: 70%;
`;

const StyledKeynoteImg = styled.img`
	width: 80%;
	height: auto;
	border-radius: 50%;
	margin-top: 20%;
`;

const StyledKeynoteContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 5.5em;
  padding-right: 5.5em;
  margin-bottom: 2em;
  gap: 3em;
  align: center;
`;

export { 
	StyledKeynoteHeader, 
	StyledKeynoteParagraph, 
	StyledH3, 
	StyledH4,
	StyledImgColumn, 
	StyledTextColumn, 
	StyledKeynoteImg,
	StyledKeynoteContainer 
};

