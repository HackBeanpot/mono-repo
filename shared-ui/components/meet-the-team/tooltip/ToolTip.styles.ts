import styled from 'styled-components';
import { StyledToolTipProps } from '../../../lib/types';
import { fonts } from '../../../style/typography';

const StyledToolTipText = styled.div`
display: inline-block;
text-align: left;
line-height: 2em;
font-family: ${fonts.nunitoSansSemibold};
`;

const StyledToolTip = styled.div<StyledToolTipProps>`
  width: 9.3em;
  background-color: ${(props): string => (props.team === 'Directors' ? '#F2C94C': 
  props.team ==='Tech' ? '#2F80ED' : props.team==='Design' ? '#BB6BD9' : 
  props.team === 'Social Outreach' ? '#F2A32B' : '#27AE60')};
  color: white;
  text-align: center;
  border-radius: 1.5em;
  padding: 1em 1em;
  position: absolute;
  z-index: 1;
  margin-top: -18em;
&:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    border-width: 0.5em;
    border-style: solid;
    border-color: ${(props): string => (props.team === 'Directors' ? '#F2C94C': 
    props.team ==='Tech' ? '#2F80ED' : props.team==='Design' ? '#BB6BD9' : 
    props.team === 'Social Outreach' ? '#F2A32B' : '#27AE60')} transparent transparent transparent;
}
`;

const StyledToolTipYear = styled.div`
`;

const StyledToolTipMajor = styled.div`
`;

const StyledToolTipPronouns = styled.div`
`;



export {StyledToolTip, StyledToolTipYear, StyledToolTipMajor, StyledToolTipPronouns, StyledToolTipText}