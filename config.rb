###
# Compass
###

# Change Compass configuration
compass_config do |config|
  config.output_style = :compact
end


activate :directory_indexes

data.works.work.each do |work|
  proxy "/works/#{work[:name].parameterize}.html", "work.html", :locals => {
    :name => work[:name],
    :desc => work[:desc],
    :photos => work[:photos],
    :url => work[:url],
  }, :ignore => true
end

# Reload the browser automatically whenever files change
configure :development do
  activate :livereload
end

set :css_dir, 'stylesheets'

set :js_dir, 'javascripts'

set :images_dir, 'images'

# Build-specific configuration
configure :build do
  # For example, change the Compass output style for deployment
  activate :minify_css

  # Minify Javascript on build
  activate :minify_javascript

  # Enable cache buster
  # activate :asset_hash

  # Use relative URLs
  activate :relative_assets
end

activate :deploy do |deploy|

  deploy.build_before = true # default: false
  deploy.method = :git
  # remote is optional (default is "origin")
  # run `git remote -v` to see a list of possible remotes
  # deploy.remote = "some-other-remote-name"

  # branch is optional (default is "gh-pages")
  # run `git branch -a` to see a list of possible branches
  # deploy.branch = "some-other-branch-name"

  # strategy is optional (default is :force_push)
  # deploy.strategy = :submodule
  # Optional Settings
  # deploy.remote   = 'custom-remote' # remote name or git url, default: origin
  # deploy.branch   = 'custom-branch' # default: gh-pages
  # deploy.strategy = :submodule      # commit strategy: can be :force_push or :submodule, default: :force_push
  # deploy.commit_message = 'custom-message'      # commit message (can be empty), default: Automated commit at `timestamp` by middleman-deploy `version`
end
