import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { similarApi } from "../../apis/tvApi";
import { ListResponse,TVDetail } from "../../Types";

const useSimilarMovie = (id:string) => {
  return useQuery<AxiosResponse<ListResponse<TVDetail>>,AxiosError>(['similarTv',id],()=> similarApi(id));
}

export default useSimilarMovie;