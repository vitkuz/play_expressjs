const routes = require('express').Router();

const Cat = require('../schemas/Cat');
const renderHTML = require('../helpers/render');
const renderCatHTML = require('../helpers/renderCat');

routes.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

routes.get('/generate/cats', (req, res) => {

    const randomName = faker.name.findName(); // Rowan Nikolaus

    let kitty = new Cat({ name: randomName });

    kitty.save((err) => {
        console.log('Saved!');
        if (err) {
            res.status(500).send('Warning'+err);
        } else {
            console.log('meow');
            res.send(JSON.stringify(kitty));
        }
    });
});

routes.get('/crud/add', (req, res) => {

    const randomName = faker.name.findName(); // Rowan Nikolaus

    let kitty = new Cat({ name: randomName });

    kitty.save((err) => {
        console.log('Saved!');
        if (err) {
            res.status(500).send('Warning'+err);
        } else {
            console.log('meow');
            res.send(JSON.stringify(kitty));
        }
    });
});

routes.get('/search/:name', (req, res) => {

    Cat.find({ name: req.params.name}, function (err, docs) {
        res.send(JSON.stringify(docs));
    });
});

routes.get('/item/:id', (req, res) => {

    Cat.findById(req.params.id, function (err, doc) {
        res.send(renderCatHTML(doc));
    });
});

routes.get('/item/:id/edit', (req, res) => {
    Cat.findById(req.params.id, function (err, doc) {
        res.send(renderCatHTML(doc));
    });
});

routes.get('/item/:id/remove', (req, res) => {
    Cat.findById(req.params.id).remove().exec(function (err, response) {
        res.send(renderCatHTML(response));
    });
});

routes.get('/item/:id/update', (req, res) => {
    Cat.findById(req.params.id, function (err, doc) {
        res.send(renderCatHTML(doc));
    });
});

routes.get('/crud/remove', (req, res) => {

    Cat.find({name : 'Zildjian'}).remove( (err, docs) => {
        res.send(JSON.stringify(docs));
    } ).exec();

});

routes.get('/find', (req, res) => {

    const query = Cat.find({});
    query.exec( (err, docs) => {
        res.send(renderHTML(docs));
    })

});


module.exports = routes;