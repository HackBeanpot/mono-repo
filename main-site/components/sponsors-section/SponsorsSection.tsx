import React from 'react';
import SecondaryButton from '../../../shared-ui/components/secondary-button/SecondaryButton';
import { H2 } from '../../../shared-ui/style/typography';
import { StyledSponsorsHeader } from './SponsorsSection.styles';

const SponsorsSection: React.FC = () => {
  return (
    <div>
      <StyledSponsorsHeader>2023 Sponsors</StyledSponsorsHeader>
      <SecondaryButton btnText="Diamond Level" />
      <SecondaryButton btnText="Gold Level" />
      <SecondaryButton btnText="Silver Level" />
    </div>
  );
};

export default SponsorsSection;
