import * as React from 'react';
import type { HeadFC } from 'gatsby';
import { H1, H2, H3, H4, P } from '../../../shared-ui/style/typography';
import '../../../shared-ui/index.css';

const IndexPage: React.FC = () => {
  return (
    <div>
      <H1>Desert Exploration</H1>
      <H2>Explore the desert with HackBeanpot!</H2>
      <H3>HackBeanpot 2023</H3>
      <H4>Code4Joy, 2022</H4>
      <P>
        HackBeanpot 2022 is gonna be out of this world! Join our community of
        astronaut trainees* for a weekend of exploration, collaboration, and
        fun! (Oh, and did we mention free food and swag?) Hackers can expect to
        put their resourcefulness to the test, while sharing stories, and
        learning new skills from peers. So whether you're a seasoned
        hackathon-goer, an ‘I-have-never-written-a-line-of-code’ beginner, or
        someone in-between, we’re excited for you to embark on this adventure
        with us!
      </P>
    </div>
  );
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
