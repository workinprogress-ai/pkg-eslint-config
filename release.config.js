export default {
    branches: [
        "master",
        {
            name: "release/*",
            prerelease: "beta",
        },
    ],
    plugins: [
        [
            "@semantic-release/commit-analyzer",
            {
                preset: "angular",
                releaseRules: [
                    { type: "docs", scope: "README", release: "patch" },
                    { type: "refactor", release: "patch" },
                    { type: "style", release: "patch" },
                ],
                parserOpts: {
                    breakingHeaderPattern: /^(\w*)(?:\((.*)\))?!: (.*)$/,
                },
            },
        ],
        [
            "@semantic-release/exec",
            {
                publishCmd: "./.azuredevops/prepare-release-version.sh '${nextRelease.version}'",
            },
        ],
    ],
};
