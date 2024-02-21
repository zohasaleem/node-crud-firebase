
const express = require('express');
const router = express.Router();

module.exports = (cmsRef) => {
    router.get('/', async(req, res) => {
        try {
            const snapshot = await cmsRef.once('value');
            const cms = snapshot.val();
            res.json({ cms });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });

    router.post('/', async(req, res) => {
        try {
            console.log(req.body);
            const newCmsRef = cmsRef.push();
            await newCmsRef.set({
                key: req.body.cmskey,
                value: req.body.value,
                type: req.body.type
            });
            res.json({ message: 'Record created successfully' });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });


    router.get('/:id', async (req, res) => {
        try {
            const snapshot = await cmsRef.child(req.params.id).once('value');
            const cms = snapshot.val();
            res.json({ cms });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });
    
    router.put('/:id', async (req, res) => {
        try {
            const cmsRecordRef = cmsRef.child(req.params.id);
            await cmsRecordRef.update({
                key: req.body.key,
                value: req.body.value,
                type: req.body.type
            });
            res.json({ message: 'Record updated successfully' });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });


    router.delete('/:id', async (req, res) => {
        try {
            await cmsRef.child(req.params.id).remove();
            res.json({ message: 'Record deleted successfully' });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });
    
    

    return router;
};
