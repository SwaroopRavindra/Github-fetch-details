"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GithubApiService_1 = require("./GithubApiService");
var svc = new GithubApiService_1.GithubApiService();
svc.getUserInfo('swaroopravindra', function (user) {
    svc.getRepos('swaroopravindra', function (repos) {
        user.repos = repos;
        console.log(user);
    });
});
