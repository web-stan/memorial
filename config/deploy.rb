# config valid only for current version of Capistrano
lock '3.11.0'

set :application, 'front-eternity'
set :repo_url, 'git@gitlab.stfalcon.com:stfalcon/eternity-frontend.git'

# Default branch is :master
# ask :branch, `git rev-parse --abbrev-ref HEAD`.chomp
set :branch, ENV['BRANCH'] if ENV['BRANCH']

# Default deploy_to directory is /var/www/my_app_name
# set :deploy_to, '/var/www/my_app_name'

# Default value for :scm is :git
# set :scm, :git

# Default value for :format is :pretty
# set :format, :pretty

# Default value for :log_level is :debug
# set :log_level, :debug

# Default value for :pty is false
# set :pty, true

# Default value for :linked_files is []
# set :linked_files, fetch(:linked_files, []).push('src/environments/environment.prod.ts')

# Default value for linked_dirs is []
# set :linked_dirs, fetch(:linked_dirs, []).push('log', 'tmp/pids', 'tmp/cache', 'tmp/sockets', 'vendor/bundle', 'public/system')

# Default value for default_env is {}
# set :default_env, { path: "/opt/ruby/bin:$PATH" }

# Default value for keep_releases is 5
# set :keep_releases, 5

namespace :deploy do
  
  task :install_requirements do
      on roles(:app) do |host|
          execute "cd #{release_path} && npm install"
      end
  end
  
  task :build_app do
      on roles(:app) do |host|
          # execute "cd #{release_path} && npm i -D @angular-devkit/core"
          # execute "cd #{release_path} && npm install @vue/cli"
          execute "cd #{release_path} && npm run build"
      end
  end
  
  task :npm_cache_restore do
    on roles(:app) do |host|
      execute "cp -a #{shared_path}/node_modules #{release_path}"
    end
  end
  
  task :npm_cache_save do
    on roles(:app) do |host|
      execute "cp -a #{release_path}/node_modules #{shared_path}"
    end
  end

  #before 'deploy:publishing', 'npm_cache_restore'
  before 'deploy:publishing', 'install_requirements'
  before 'deploy:publishing', 'build_app'
  #after  'deploy:finished',   'npm_cache_save'
end