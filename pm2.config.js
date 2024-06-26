module.exports = {
  apps: [
    {
      name: "api",
      script: "./api.mjs",
      kill_timeout: 60_000,
      listen_timeout: 60_000,
      wait_ready: true,
      max_memory_restart: "512M",
      instances: 1,
      exec_mode: "cluster",
      auto_restart: false,
    }
  ]
};
