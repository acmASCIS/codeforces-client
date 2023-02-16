import { CodeforcesClient } from '../../../CodeforcesClient';
import { ICodeforcesClient } from '../../../interfaces/codeforces-client.interface';
import { Standings } from '../../../interfaces/standings.interface';


type ContestStandingsParams = {
  contestId: string;
  from?: string;
  count?: number;
  /**
 * Semicolon-separated list of handles. No more than 10000 handles are accepted.
*/
  handles?: string;
  room?:string;
  showUnofficial?:boolean
};

export const standings = (client: ICodeforcesClient) => async (params: ContestStandingsParams) => {
  return client.callMethod<ContestStandingsParams, Standings>('contest.standings', params);
};


