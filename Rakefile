# Example of deploy script. It means that dev and build folders are different branches
# and deploy will fix changes by committing them and push to the appropriate repos.

# build-deploy task commit and push only build version
# deploy task commit and push dev version

require "rubygems"

desc "Deploy build version"
task :deploy do
  puts "## Commiting build website files"
  cd "theme" do
    system "git add --all"

    message = "Site updated at #{Time.now.utc}"
    puts "## Commiting: #{message}"

    system "git commit -m \"#{message}\""

    system "git push origin master"

    cd ".." do
      puts "## Build deploy complete!"
    end
  end
end
