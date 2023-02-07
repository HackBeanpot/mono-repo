import React, { useState, useEffect } from 'react';
import useMatchMedia from 'react-use-match-media';
import { max } from '../../../shared-ui/lib/responsive';
import { useAirtableApi } from '../../src/hooks/useAirtable';
import {
  StyledMentorsSection,
  StyledMentorsFilterSection,
  StyledMentorsFilterRadio,
  StyledMentorsDropdownContainer,
  StyledMentorsDropdownWrapper,
  StyledMentorsHeader,
  StyledMentorContainer,
  StyledMentorsListContainer,
  StyledMentorName,
  StyledMentorCompany,
  StyledMentorPosition,
  StyledMentorsPaginationContainer,
  StyledCactusButtons,
  StyledNoMentorsContainer, 
  StyledImage
} from './MentorsSection.styles';
import cactus1 from '../../../shared-ui/images/cactus1.png';
import cactus2 from '../../../shared-ui/images/cactus2.png';
import cactus3 from '../../../shared-ui/images/cactus3.png';
import cactus4 from '../../../shared-ui/images/cactus4.png';
import { MentorInfo } from '../../lib/types';
import { StyledSecondaryButton } from '../../../shared-ui/components/secondary-button/SecondaryButton.styles';
import MentorPopup from './mentor-popup/MentorPopup';

const MentorsSection: React.FC = () => {
  const isSmallMobile = useMatchMedia(max.tabletSm);
  const isSmallTablet = useMatchMedia(max.tablet);
  const isMobile = useMatchMedia(max.tabletLg);

  const { data } = useAirtableApi('Mentors', 'mentors', true);
  const { data: shiftData } = useAirtableApi('Mentors', 'shifts', true);
  const [mentorData, setMentorData] = useState<MentorInfo[]>([]);
  const [mentors, setMentors] = useState<MentorInfo[]>([]);
  const [expertiseFilter, setExpertiseFilter] = useState('All');
  const [companyFilter, setCompanyFilter] = useState('All');
  const [virtualFilter, setVirtualFilter] = useState(false);
  const [onShiftFilter, setOnShiftFilter] = useState(true);
  const [displayMentorModal, setDisplayMentorPopup] = useState(false);
  const [modalMentor, setPopupMentor] = useState<MentorInfo | undefined>(
    undefined
  );

  const companiesArr = Array.from(
    new Set(['All'].concat(mentorData.map((mentor) => mentor.company)))
  );

  const getExpertiseArr = (mentors: MentorInfo[]): string[] => {
    const expertises: string[] = [];
    mentors.forEach((mentor) => {
      mentor.expertise.forEach((expertise) => {
        expertises.push(expertise);
      });
    });
    return Array.from(new Set(['All'].concat(expertises)));
  };

  const [paginatedMentors, setPaginatedMentors] = useState<MentorInfo[][]>([]);
  const [currentPage, setCurrentPage] = useState(0);

  const pageSize = isSmallMobile ? 9 : isSmallTablet ? 12 : 15;
  const imageSize = isMobile ? 100 : 160;
  const mentorsToDisplay = isMobile
    ? paginatedMentors[currentPage] ?? []
    : mentors;

  useEffect(() => {
    setMentorData(
      data.map((mentor) => {
        let shifts = [];
        if (mentor.fields.shift && shiftData.length > 0) {
          shifts = mentor.fields.shift.map((shiftId: unknown) => {
            const shift = shiftData.find((shift) => shift.id === shiftId);
            const shiftStart = new Date(shift.fields.shift_start);
            const shiftEnd = new Date(shift.fields.shift_end);
            const startDay = new Intl.DateTimeFormat('en-US', {
              weekday: 'short'
            }).format(shiftStart);

            let endDay = new Intl.DateTimeFormat('en-US', {
              weekday: 'short'
            }).format(shiftEnd);

            if (startDay === endDay) {
              endDay = '';
            } else {
              endDay = endDay + ': ';
            }
            return `${startDay}: ${new Intl.DateTimeFormat('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              hour12: true
            }).format(shiftStart)} - ${endDay}${new Intl.DateTimeFormat(
              'en-US',
              {
                hour: 'numeric',
                minute: 'numeric',
                hour12: true
              }
            ).format(shiftEnd)}`;
          });
        }
        return {
          name: mentor.fields.name,
          company: mentor.fields.company,
          position: mentor.fields.position,
          imageUrl: mentor.fields.image[0].url,
          expertise: mentor.fields.expertise ?? [],
          virtual: mentor.fields.virtual ?? false,
          shiftStart: mentor.fields.shift_start ?? '',
          shiftEnd: mentor.fields.shift_end ?? '',
          shifts: shifts,
          slack: mentor.fields.slack
        };
      })
    );
  }, [data, setMentorData, shiftData]);

  useEffect(() => {
    let filteredMentors = mentorData;
    if (onShiftFilter) {
      filteredMentors = filteredMentors.filter((mentor) => {
        const now = Date.now();
        for (let i = 0; i < mentor.shiftStart.length; i++) {
          const shiftStart = Date.parse(mentor.shiftStart[i]);
          const shiftEnd = Date.parse(mentor.shiftEnd[i]);
          if (shiftStart <= now && shiftEnd >= now) {
            return true;
          }
        }
        return false;
      });
    }
    if (virtualFilter) {
      filteredMentors = filteredMentors.filter((mentor) => mentor.virtual);
    }
    if (expertiseFilter !== 'All') {
      filteredMentors = filteredMentors.filter((mentor) =>
        mentor.expertise.includes(expertiseFilter)
      );
    }
    if (companyFilter !== 'All') {
      filteredMentors = filteredMentors.filter(
        (mentor) => mentor.company === companyFilter
      );
    }

    const pages: MentorInfo[][] = [];
    for (let i = 0; i < filteredMentors.length; i += pageSize) {
      const mentorsForPage = filteredMentors.slice(i, i + pageSize);
      pages.push(mentorsForPage);
    }
    setMentors(filteredMentors);
    setPaginatedMentors(pages);
  }, [
    mentorData,
    onShiftFilter,
    virtualFilter,
    expertiseFilter,
    companyFilter,
    pageSize,
    setMentors,
    setPaginatedMentors
  ]);

  const displayMentor = (mentor: MentorInfo): React.ReactElement => (
    <StyledMentorContainer
      onClick={(): void => {
        openMentorPopup(mentor);
      }}
    >
      <StyledImage
        width={imageSize}
        height={imageSize}
        alt={`Image of ${mentor.name}`}
        src={mentor.imageUrl}
      ></StyledImage>
      <StyledMentorName>{mentor.name}</StyledMentorName>
      <StyledMentorCompany>{mentor.company}</StyledMentorCompany>
      <StyledMentorPosition>{mentor.position}</StyledMentorPosition>
    </StyledMentorContainer>
  );

  const openMentorPopup = (mentor: MentorInfo): void => {
    setPopupMentor(mentor);
    setDisplayMentorPopup(true);
  };

  const closeMentorPopup = (): void => {
    setDisplayMentorPopup(false);
    setPopupMentor(undefined);
  };

  const getCactus = (index: number): string => {
    if (index % 4 === 0) {
      return cactus1;
    }
    if (index % 4 === 1) {
      return cactus2;
    }
    if (index % 4 === 2) {
      return cactus3;
    }
    return cactus4;
  };

  useEffect(() => {
    if(modalMentor) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [modalMentor ]);

  return (
    <div id="mentors">
      <StyledMentorsSection>
        {displayMentorModal && (
          <MentorPopup mentor={modalMentor} onClose={closeMentorPopup} />
        )}
        <StyledMentorsFilterSection>
          <StyledMentorsHeader> Mentors </StyledMentorsHeader>
          <StyledMentorsDropdownContainer>
            <StyledMentorsDropdownWrapper
              id="expertise-filter"
              value={expertiseFilter}
              onChange={(e): void => {
                setExpertiseFilter(e.target.value);
              }}
            >
              {getExpertiseArr(mentorData).map((expertise: string) => (
                <option value={expertise} key={expertise}>
                  Expertise: {expertise}
                </option>
              ))}
            </StyledMentorsDropdownWrapper>
          </StyledMentorsDropdownContainer>
          {isMobile && <br />}
          <StyledMentorsDropdownContainer>
            <StyledMentorsDropdownWrapper
              id="company-filter"
              value={companyFilter}
              onChange={(e): void => {
                setCompanyFilter(e.target.value);
              }}
            >
              {companiesArr.map((currCompany: string) => (
                <option value={currCompany} key={currCompany}>
                  Company: {currCompany}
                </option>
              ))}
            </StyledMentorsDropdownWrapper>
          </StyledMentorsDropdownContainer>
          <StyledMentorsFilterRadio>
            <input
              type="checkbox"
              id="onShiftMentors"
              name="onshift_mentors_filter"
              value="Mentors on shift now"
              checked={onShiftFilter}
              onChange={(): void =>
                setOnShiftFilter((onShiftFilter) => !onShiftFilter)
              }
            />
            <label htmlFor="onShiftMentors">Mentors on shift now</label>
            <br />
            <input
              type="checkbox"
              id="virtualMentors"
              name="virtual_mentors_filter"
              value="Virtual mentors"
              checked={virtualFilter}
              onChange={(): void =>
                setVirtualFilter((virtualFilter) => !virtualFilter)
              }
            />
            <label htmlFor="virtualMentors">Virtual</label>
            <br />
          </StyledMentorsFilterRadio>
        </StyledMentorsFilterSection>
        <StyledMentorsListContainer>
          {mentorsToDisplay.map((currMentor, index) => (
            <div key={`mentor-${index}`}>{displayMentor(currMentor)}</div>
          ))}
          {mentorsToDisplay.length === 0 && (
            <StyledNoMentorsContainer>
              <StyledMentorName>
                No mentors with selected filters
              </StyledMentorName>
              <StyledSecondaryButton
                isClickable={true}
                onClick={(): void => {
                  setCompanyFilter('All');
                  setExpertiseFilter('All');
                  setOnShiftFilter(false);
                  setVirtualFilter(false);
                }}
              >
                Clear filters
              </StyledSecondaryButton>
            </StyledNoMentorsContainer>
          )}
        </StyledMentorsListContainer>
        {isMobile && (
          <StyledMentorsPaginationContainer>
            {paginatedMentors.map((_, index) => (
              <StyledCactusButtons
                key={index}
                src={getCactus(index)}
                onClick={(): void => setCurrentPage(index)}
                isToggled={index == currentPage}
              />
            ))}
          </StyledMentorsPaginationContainer>
        )}
      </StyledMentorsSection>
    </div>
  );
};

export default MentorsSection;
