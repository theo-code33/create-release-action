# Create Release Action

[![GitHub Super-Linter](https://github.com/actions/typescript-action/actions/workflows/linter.yml/badge.svg)](https://github.com/super-linter/super-linter)
![CI](https://github.com/actions/typescript-action/actions/workflows/ci.yml/badge.svg)

This action creates a release on GitHub. It can be used to create a release for
a specific tag.

## Usage

if you want to create a release allow github to create a tag for you in
`Settings` > `Actions` > `general` > `Workflow permissions` and allow
`Read and write permissions`

```yaml
- uses: actions/checkout@v3
- uses: actions/setup-node@v2
  with:
    node-version: '16'
- uses: theo-code33/create-release-action@v0.2
  with:
    version: 'The version to release'
    token: ${{ secrets.GITHUB_TOKEN }}
```
