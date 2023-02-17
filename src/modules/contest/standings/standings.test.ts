import CodeforcesClient from '../../..';

describe('contest.standings module', () => {
  const publicContestId = '556';
  const privateContestId = '258529';

  it('should fetch public contest standings successfully', async () => {
    const client = new CodeforcesClient();
    const result = await client.contest.standings({ contestId: publicContestId, count: 5 });

    expect(result.status).toBe('OK');
    if (result.status === 'OK') {
      expect(result.status.length).toBe(5);
    }
  });

  it('should fetch private contest standings successfully', async () => {
    const client = new CodeforcesClient(process.env.CF_KEY, process.env.CF_SECRET);
    const result = await client.contest.standings({ contestId: privateContestId, count: 5 });

    expect(result.status).toBe('OK');
    if (result.status === 'OK') {
      expect(result.status.length).toBe(5);
    }
  });

  it('should fail to fetch a private contest standings without credentials', async () => {
    const client = new CodeforcesClient();
    const result = await client.contest.standings({ contestId: privateContestId, count: 5 });

    expect(result.status).toBe('FAILED');
  });
});
