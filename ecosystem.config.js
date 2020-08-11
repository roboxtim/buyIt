
            module.exports = {
              apps: [
                {
                  name: 'server',
                  script: '/home/buyIt/releases/20200810181902/server.js',
                  watch: true,
                  autorestart: true,
                  restart_delay: 1000,
                  env: {
                    NODE_ENV: 'development'
                  },
                  env_production: {
                    NODE_ENV: 'production'
                  }
                }
              ]
            };