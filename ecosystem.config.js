
            module.exports = {
              apps: [
                {
                  name: 'server',
                  script: '/home/buyIt/releases/20200831044644/server.js',
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