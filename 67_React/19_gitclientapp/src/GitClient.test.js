import axios from 'axios';
import GitClient from './GitClient';

vi.mock('axios');

describe('Git Client Tests', () => {
  test('should return repository names for techiesyed', async () => {
    const dummyRepos = [
      { name: 'RepoOne' },
      { name: 'RepoTwo' },
      { name: 'AwesomeProject' },
    ];

    axios.get.mockResolvedValue({ data: dummyRepos });

    const gitClient = new GitClient();
    const repoNames = await gitClient.getRepositories('techiesyed');

    expect(repoNames).toEqual(['RepoOne', 'RepoTwo', 'AwesomeProject']);
    expect(axios.get).toHaveBeenCalledWith('https://api.github.com/users/techiesyed/repos');
  });
});
