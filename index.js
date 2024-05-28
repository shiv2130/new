require('dotenv').config()

const express = require('express')
const app = express()
const port = 4000
const githubData = {"login":"shiv2130","id":65411777,"node_id":"MDQ6VXNlcjY1NDExNzc3","avatar_url":"https://avatars.githubusercontent.com/u/65411777?v=4","gravatar_id":"","url":"https://api.github.com/users/shiv2130","html_url":"https://github.com/shiv2130","followers_url":"https://api.github.com/users/shiv2130/followers","following_url":"https://api.github.com/users/shiv2130/following{/other_user}","gists_url":"https://api.github.com/users/shiv2130/gists{/gist_id}","starred_url":"https://api.github.com/users/shiv2130/starred{/owner}{/repo}","subscriptions_url":"https://api.github.com/users/shiv2130/subscriptions","organizations_url":"https://api.github.com/users/shiv2130/orgs","repos_url":"https://api.github.com/users/shiv2130/repos","events_url":"https://api.github.com/users/shiv2130/events{/privacy}","received_events_url":"https://api.github.com/users/shiv2130/received_events","type":"User","site_admin":false,"name":null,"company":null,"blog":"","location":null,"email":null,"hireable":null,"bio":null,"twitter_username":null,"public_repos":20,"public_gists":0,"followers":0,"following":2,"created_at":"2020-05-15T15:56:52Z","updated_at":"2024-05-11T02:32:20Z"}

app.get('/', (req, res) => {
   res.send('Hello World!')
})
app.get('/twitter', (req, res)=>{
    res.send('@52_prakash53116')
})

app.get('/login', (req, res) => {
    res.send("<h1>Welcome!</h1>")
})
app.get('/github', (req, res)=> {
    res.json(githubData)
})
app.listen(process.env.PORT, () => {
   console.log(`Example app listening on port ${port}`)
})