import {useQuery} from 'react-query';
import {airingTodayApi} from '../../../apis/tvApi';
import {AxiosError,AxiosResponse} from 'axios';
import { ListResponse, TVDetail } from '../../../Types';

const useAiringTodayTv = () => {

  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('airingTodayTv',airingTodayApi);

}

export default useAiringTodayTv;