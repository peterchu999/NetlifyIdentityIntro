```js
exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPath = "/dashboard/*";
    actions.createPage(page);
  }
};
```

on `gatsby-config.js` was meant to redirect every `/dashboard/*` to `/dashboard` it's diffrent from `netlify.toml` because this was meant for gatsby

remember to use `/link/sub_path` rather than `link/sub_path` in `<Link to="/link/subpath/"/>` from `gatsby` because without the `/` at the begining the URL will be append not overwrite.

case :

```
current URL : "localhost:8000/link/admin"

when you click this :
<Link to="link/subpath/"/>
the path will be : "localhost:8000/link/admin/link/subpath"

but when you click this :
<Link to="/link/subpath/"/>
the path will be : "localhost:8000/link/subpath"
```

```
navigate("/dashboard/login", { replace: true });
```

this code `navigate` come from `gatsby` what `{ replace: true }` in the second parameter do was changing browser history let assume this case

user already open page `A->B->C`

and then when user hit C we want to redirect user immedietly to `D`

so when the code is this `navigate("/D", { replace: true })`;

the user history of open page become `A->B->D`

but is the code is just `navigate("/D")`;

the user history of open page become `A->B->C->D`

so why we care ? imagine if the user hit back button on the browser with the open history of `A->B->C->D` user will be back at `/C` page, but if our history is `A->B->D` user will be back directly at `/B`
