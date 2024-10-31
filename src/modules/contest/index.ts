import { status } from './status/status';
import {standings} from './standings/standings'
import { list } from './list/list'
import { ICodeforcesClient } from '../../interfaces/codeforces-client.interface';

export const contest = (client: ICodeforcesClient) => ({
  status: status(client),
  standings:standings(client),
  list: list(client),
});
