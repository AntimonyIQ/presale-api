module.exports = {
    apps: [
        {
            name: "saleapi",
            script: "npm",
            args: "run dev",
            instances: 1,
            autorestart: true,
            watch: true,
            ignore_watch: ["node_modules"],
            env: {
                NODE_ENV: "development", // Set the environment to "development" for npm run dev
                PORT: 3110,
                HOST: "0.0.0.0",
            },
        },
    ],
};
