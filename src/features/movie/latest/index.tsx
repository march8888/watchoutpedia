import React from 'react';
import styled from '@emotion/styled';
import useLatestMovie from './useLatestMovie';
import Card from '../../../components/Card';

const Base = styled.div``;

const Title = styled.h4``;

const LatestMovieSection: React.FC = () => {
  
  const {data: latestMovieResponse,isLoading} = useLatestMovie()

  const getYear = (date:string) => date.split('-')[0];

  return (
    <Base>
      <Title>최근 개봉작</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ): (
            latestMovieResponse?.data && (
            <Card
              linkUrl={`/movie/${latestMovieResponse.data.id}`}
              title={latestMovieResponse.data.title}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${latestMovieResponse.data.poster_path}`}
              voteAverage={latestMovieResponse.data.vote_average}
              year={getYear(latestMovieResponse.data.release_date)}
            />
          )
        )
      }
    </Base>
  )
}

export default LatestMovieSection;