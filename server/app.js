const { loadNuxt, build } = require('nuxt')
const axios = require('axios');

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {

    // We get Nuxt instance
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    // Render every route with Nuxt
    app.use(nuxt.render)

    app.get("/post123/:id", async (req, res) => {
        console.log('=>', req.params.posts)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // res.json(response.data);
            const actualPage = '/post';
            const queryParams = { posts: response.data };
            // res.render(req, res, actualPage, queryParams);
            // res.render('/');
            // app.render(actualPage);
            // nuxt.renderRoute('/');
            // nuxt.render('/').then(result => {
            //     res.send(result.html)
            // });
            nuxt.renderRoute('/').then(result => {
                res.send(result.html)
            });
        }
        catch (err) {
            console.log(err)
        }
    });

    app.get("/post2/:id", async (req, res) => {
        console.log('=>', req.params.id)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // res.json(response.data);
            const actualPage = '/pages/index';
            const queryParams = { posts: response.data };
            // app.render(req, res, actualPage, queryParams);
            res.render('/pages/index.vue');
        }
        catch (err) {
            console.log(err)
        }
    });


    app.get("/post3/:id", async (req, res) => {
        console.log('=>', req.params.posts)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // res.json(response.data);
            const actualPage = '/pages/index';
            const queryParams = { posts: response.data };
            // app.render(req, res, actualPage, queryParams);
            app.render('/index.vue');
        }
        catch (err) {
            console.log(err)
        }
    });
    // {{this.$route.params.yourParam}}

    app.get("/posts4", async (req, res) => {
        console.log('=>', req.params.posts)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // res.json(response.data);
            const actualPage = '/pages/index.vue';
            const queryParams = { posts: response.data };
            // app.render(req, res, actualPage, queryParams);
            app.render(actualPage);
        }
        catch (err) {
            console.log(err)
        }
    });

    // Build only in dev mode with hot-reloading
    if (isDev) {
        build(nuxt)
    }
    // Listen the server
    app.listen(port, '0.0.0.0')
    console.log('Server listening on `localhost:' + port + '`.')
}

start()