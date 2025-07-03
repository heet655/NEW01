require('dotenv').config()
const express = require('express')

const app = express()
const port = 4000

const githubData = {
  "login": "HeetShah",
  "id": 58372785,
  "node_id": "MDQ6VXNlcjU4MzcyNzg1",
  "avatar_url": "https://avatars.githubusercontent.com/u/58372785?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/HeetShah",
  "html_url": "https://github.com/HeetShah",
  "followers_url": "https://api.github.com/users/HeetShah/followers",
  "following_url": "https://api.github.com/users/HeetShah/following{/other_user}",
  "gists_url": "https://api.github.com/users/HeetShah/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/HeetShah/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/HeetShah/subscriptions",
  "organizations_url": "https://api.github.com/users/HeetShah/orgs",
  "repos_url": "https://api.github.com/users/HeetShah/repos",
  "events_url": "https://api.github.com/users/HeetShah/events{/privacy}",
  "received_events_url": "https://api.github.com/users/HeetShah/received_events",
  "type": "User",
  "user_view_type": "public",
  "site_admin": false,
  "name": "Heet Shah",
  "company": null,
  "blog": "shahheet.com",
  "location": null,
  "email": null,
  "hireable": true,
  "bio": null,
  "twitter_username": "HeetShah21",
  "public_repos": 17,
  "public_gists": 0,
  "followers": 31,
  "following": 52,
  "created_at": "2019-11-30T19:52:26Z",
  "updated_at": "2025-07-01T04:42:51Z"
}
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Heet Shah')
})

app.get('/login', (req, res) => {
    res.send('<h1>please login successfully</h1>')
})

app.get('/Youtube', (req, res) => {
    res.send('<h2>Heet 2 </h2>')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/Instgram', (req, res) => {
    res.send('<h3> Heet 3 </h3>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
