import styled from 'styled-components';

const StyledToolTipText = styled.div`
display: inline-block;
 }
`;

const StyledToolTip = styled.div`
visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  bottom: 150%;
  left: 50%;
  margin-left: -60px;
&:after {
    content: "";
    position: absolute;
    top: 100%;
    left: 50%;
    margin-left: -5spx;
    border-width: 5px;
    border-style: solid;
    border-color: black transparent transparent transparent;
}
`;

const StyledToolTipYear = styled.div`
`;

const StyledToolTipMajor = styled.div`
`;

const StyledToolTipPronouns = styled.div`
`;



export {StyledToolTip, StyledToolTipYear, StyledToolTipMajor, StyledToolTipPronouns, StyledToolTipText}