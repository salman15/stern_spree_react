# README

This was build on Cloud9 using Ruby -v 2.3.4p301 , rails -v 5.2.2.1 and Spree 3.7.x

# How did I build this?  

Incase this repository might be outdated, it still can be useful for you to see my steps in realising this project.

# Setting up Rails & PostgreSQL

I used PostgreSQL for the database

1. First thing I had to do is to make sure your RoR app is running on version 5.2.x (Cloud9 Automatically starts every new app with 4.2)

2. Update first by using apt-get update

3. then use gem install rails -v 5.2

4. Then run "rails new my-app" to create your new app

5. Setting up postgresql follow the below steps
https://community.c9.io/t/setting-up-postgresql/1573
https://stackoverflow.com/questions/12720967/how-to-change-postgresql-user-password

# Adding spree

Instructions below on how to install Spree
https://github.com/spree/spree

# Adding React Rails

1. First this is to add the React Rails Gem provided with instructions: https://github.com/reactjs/react-rails

2. Set up webpacker to ensure your ReactJS code gets compiled and is readable by your app
https://community.c9.io/t/installing-node-packages-with-yarn/10393
https://github.com/rails/webpacker/blob/master/docs/cloud9.md

3. If all goes well you can start your rails server with: start webpacker "./bin/webpack-dev-server"

4. Then start the rails server "./bin/rails s -b $IP -p $PORT"

Right now you should have a working Rails, Spree & ReactJS app

Now the next step is to use Spree's API V2 to create a Front End store. I will use the below repositories as references 

https://github.com/vinsol-spree-contrib/spree-on-react
https://github.com/spark-solutions/spark-starter-kit
https://github.com/gabiseabra/react-spree-boilerplate

More to be added...


