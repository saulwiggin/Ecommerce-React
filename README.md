### How to build

Build the project using npm run build to create a version for deployment.
'''
npm run build
'''
This production version can be served to Heroku with a buildpack
'''
 heroku create pricesearcher
 git add .
 git commit -m 'server to heroku'
 heroku git:remote --app pricesearcher
 git push heroku master
'''
Or run locally using npm server
'''
 npm install serve
 serve -s build
'''
Testing is done using jest for the required components
'''
npm run test
'''
