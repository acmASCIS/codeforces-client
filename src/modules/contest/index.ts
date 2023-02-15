import { status } from './status/status';
import {standings} from './standings/standings'
import { ICodeforcesClient } from '../../interfaces/codeforces-client.interface';

export const contest = (client: ICodeforcesClient) => ({
  status: status(client),
  standings:standings(client),
});
