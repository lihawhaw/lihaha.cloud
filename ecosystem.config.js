const adpConfig = require('./ecosystem.config')

module.exports = {
  apps: [
    {
      name: 'lihaha-cloud',
      namespace: 'lihaha-cloud',
      script: `pnpm start -- -p ${adpConfig.port}`,
      // interpreter: 'node',
      watch: false,
      error_log: 'logs/lihaha-cloud.err.log',
      out_log: 'logs/lihaha-cloud.out.log',
      merge_logs: true,
      log_date_format: 'YYYY-MM-DD HH:mm:ss Z',
      max_memory_restart: '256M',
      min_uptime: '5s',
      max_restarts: 3,
      restart_delay: 2000,
      instances: 1,
      exec_mode: 'fork',
    },
  ],
}
