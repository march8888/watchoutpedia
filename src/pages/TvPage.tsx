import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import styled from '@emotion/styled';
import LatestTvSection from "../features/tv/latest";
import NowPlayingSection from "../features/tv/nowPlaying";
import OntheAirSection from "../features/tv/onair";
import PopularSection from "../features/tv/popular";
import TopRateSection from "../features/tv/topRate";


const Main = styled.main`
  max-width: 1200px;
  margin: 0 auto;
`;

const Container = styled.div`
  margin-top: 62px;
  padding: 24px 0;
`;

const TvPage: React.FC = () => {
  return(
    <>
      <Header />
      <Main>
        <Container>
            <LatestTvSection/>
            <NowPlayingSection/>
            <OntheAirSection/>
            <PopularSection/>
            <TopRateSection/>
        </Container>
      </Main>
      <Footer />
    </>
  )
}

export default TvPage;