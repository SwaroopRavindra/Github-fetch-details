import * as request from 'request';
import { Repo } from './Repo';
import { User } from './User';
const OPTIONS: any = {
    headers: {
        'User-Agent': 'request'
    },
    json: true
};

export class GithubApiService {
    getUserInfo(userName: string, cb: (user: User) => any) {
        request.get('https://api.github.com/users/'+userName, OPTIONS, (error:any, response: any, body:any ) => {
            let user = new User(body);
            // console.log(user);
            cb(user);  
        })
    }
    
    getRepos(userName: string, cb: (repos: Repo[]) => any) {
        request.get('https://api.github.com/users/'+userName+'/repos', OPTIONS, (error:any, response: any, body:any ) => {
            let repoArray = body;
            // console.log(body);
            let repos = repoArray.map((repo: any) => new Repo(repo))
            cb(repos);
        })
    }
}