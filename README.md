NO LONGER USED 
==============

To adjust a rule see https://github.com/sirensolutions/eslint-plugin/blob/master/configs/recommended.js


# eslint-config
The eslint config used by the Siren team.
It extend the kibana one referenced in
https://github.com/elastic/kibana/tree/master/packages/eslint-config-kibana

## Usage
To use this eslint config, just install the peer dependencies and reference it 
in your `.eslintrc`:

```javascript
{
  extends: 'eslint-config-siren'
}
```

## Adding the dependency
You may add eslint-config to your package.json like:
`  "eslint-config-siren": "sirensolutions/eslint-config#branch-0.4.x", // This will cause auto-bumping of patch releases.`
  OR
`  "eslint-config-siren": "sirensolutions/eslint-config#0.4.0", // This will freeze the dependency to a v0.4.0.`

## Development and Releases.
 - All the new PRs go directly to master.
 - New tag is created for every release and relevant branches get rebased, for example (In case of v0.4.1 release): `git fetch && git checkout branch-0.4.x && git rebase origin/master`
