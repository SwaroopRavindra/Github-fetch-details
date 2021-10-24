import {GithubApiService} from './GithubApiService';
import { Repo } from './Repo';
import { User } from './User';

let svc = new GithubApiService();
svc.getUserInfo('swaroopravindra', (user: User) => {
    svc.getRepos('swaroopravindra', (repos: Repo[]) => {
        user.repos = repos;
        console.log(user);
    })
});

