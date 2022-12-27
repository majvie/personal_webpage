var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/majvie/majvie.github.io.git', // Update to point to your repository  
        user: {
            name: 'Maximilian Vieweg', // update to use your name
            email: 'maximilian.vieweg@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)