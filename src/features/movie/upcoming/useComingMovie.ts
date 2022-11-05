import {useQuery} from 'react-query';
import {upcomingApi} from '../../../apis/movieApi';
import {AxiosError,AxiosResponse} from 'axios';
import { ListResponse, MovieDetail } from '../../../Types';

const useUpcomingMovie = () => {

  return useQuery<AxiosResponse<ListResponse<MovieDetail>>, AxiosError>('upcomingMovie',upcomingApi);

}

export default useUpcomingMovie;