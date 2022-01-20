const { loadNuxt, build } = require('nuxt')
const axios = require('axios');

const app = require('express')()
const isDev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000

async function start() {
    app.get("/posts", async (req, res) => {
        console.log('=>', req.params.posts)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // res.json(response.data);
            const actualPage = '/pages/index';
            const queryParams = { posts: response.data };
            // app.render(req, res, actualPage, queryParams);
            app.render(actualPage);
        }
        catch (err) {
            console.log(err)
        }
    });

    app.get("/posts2", async (req, res) => {
        console.log('=>', req.params.posts)
        try {
            const response = await axios.get("https://jsonplaceholder.typicode.com/posts")
            // res.json(response.data);
            const actualPage = '/pages/index';
            const queryParams = { posts: response.data };
            // app.render(req, res, actualPage, queryParams);
            app.render('/index');
        }
        catch (err) {
            console.log(err)
        }
    });


    app.get("/posts3", async (req, res) => {
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

    // We get Nuxt instance
    const nuxt = await loadNuxt(isDev ? 'dev' : 'start')

    // Render every route with Nuxt
    app.use(nuxt.render)

    // Build only in dev mode with hot-reloading
    if (isDev) {
        build(nuxt)
    }
    // Listen the server
    app.listen(port, '0.0.0.0')
    console.log('Server listening on `localhost:' + port + '`.')
}

start()