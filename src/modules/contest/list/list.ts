import { ICodeforcesClient } from '../../../interfaces/codeforces-client.interface';
import { Contest } from '../../../interfaces/contest.interface';

type ContestListParams = {
    /* 
     * When it is null then codeforces treats it as false by default only public contests(not mashups/gums) are returned
    */
    gym?: boolean; 
};


export const list = (client: ICodeforcesClient) => async (params: ContestListParams) => {
  return client.callMethod<ContestListParams, Contest[]>('contest.list', params);
};
