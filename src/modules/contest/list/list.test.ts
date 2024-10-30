import CodeforcesClient from '../../..';

describe('contest.list module', () => {
  const acmascisPrivateContestId = 506128;
  const ONE_MINUTE_MS = 60000; 

  it('should fetch all public and private contests created by acmASCIS successfully with credentials', async () => {
    const client = new CodeforcesClient(process.env.CF_KEY, process.env.CF_SECRET)
    const result = await client.contest.list({gym: true});
    
    expect(result.status).toBe('OK');

    if (result.status === 'OK') {
        const contestByAcmASCIS = result.result.some(contest => contest.id === acmascisPrivateContestId);
        expect(contestByAcmASCIS).toBe(true);
    }
  },ONE_MINUTE_MS);

  it('should fail to fetch any private contest prepared by acmASCIS without credentials', async () => {
    const client = new CodeforcesClient();
    const result = await client.contest.list({gym: true});

    expect(result.status).toBe('OK');
    
    if (result.status === 'OK') {
        const contestByAcmASCIS = result.result.some(contest => contest.id === acmascisPrivateContestId);
        expect(contestByAcmASCIS).toBe(false);
    }
  },ONE_MINUTE_MS);

});
