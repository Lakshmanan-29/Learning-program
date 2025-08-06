import { useEffect, useState } from 'react';
import GitClient from './GitClient';

function App() {
  const [repos, setRepos] = useState([]);
  const gitClient = new GitClient();

  useEffect(() => {
    async function fetchRepos() {
      const repoNames = await gitClient.getRepositories('techiesyed');
      setRepos(repoNames);
    }
    fetchRepos();
  }, []);

  return (
    <div>
      <h2>Git Repositories of User - TechieSyed</h2>
      <ul>
        {repos.map((repo, index) => (
          <li key={index}>{repo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;

