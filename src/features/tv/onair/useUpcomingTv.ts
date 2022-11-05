import {useQuery} from 'react-query';
import {onTheAirApi} from '../../../apis/tvApi';
import {AxiosError,AxiosResponse} from 'axios';
import { ListResponse, TVDetail } from '../../../Types';

const useOntheAirTv = () => {

  return useQuery<AxiosResponse<ListResponse<TVDetail>>, AxiosError>('onTheAirTv',onTheAirApi);

}

export default useOntheAirTv;