import { AxiosError, AxiosResponse } from "axios";
import { useQuery } from "react-query";
import { detailApi } from "../../apis/tvApi";
import { ListResponse, TVDetail } from "../../Types";

const useTvDetail = (query:string) => {
  const queryFn = () => detailApi(query);

  return useQuery<AxiosResponse<TVDetail>,AxiosError>(['tvDetail',query],queryFn,{enabled:Boolean(query)});
}

export default useTvDetail;