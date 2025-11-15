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
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        "@semantic-release/npm",
        [
            "@semantic-release/git",
            {
                assets: ["package.json", "CHANGELOG.md"],
                message: "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
            },
        ],
        "@semantic-release/github",
    ],
};
