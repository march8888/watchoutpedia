import React from 'react';
import styled from '@emotion/styled';
import Card from '../../../components/Card';
import useLatestTv from './useLatestTv';

const Base = styled.div``;

const Title = styled.h4``;

const LatestTvSection: React.FC = () => {
  
  const {data: latestTvResponse,isLoading} = useLatestTv();

  const getYear = (date:string) => date.split('-')[0];

  return (
    <Base>
      <Title>최근 드라마</Title>
      {
        isLoading ? (
          <div>Loading...</div>
        ): (
            latestTvResponse?.data && (
            <Card
              linkUrl={`/tv/${latestTvResponse.data.id}`}
              title={latestTvResponse.data.name}
              posterPath={`${process.env.REACT_APP_IMAGE_PREFIX}/${latestTvResponse.data.poster_path}`}
              voteAverage={latestTvResponse.data.vote_average}
              year={getYear(latestTvResponse.data.first_air_date)}
            />
          )
        )
      }
    </Base>
  )
}

export default LatestTvSection;