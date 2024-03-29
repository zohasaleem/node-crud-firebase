
const express = require('express');
const router = express.Router();

module.exports = (cmsRef, admin) => {


    //For get API

    router.get('/api/cms', (req, res) => {
        cmsRef.once('value')
            .then(snapshot => {
                const cms = [];
                snapshot.forEach(childSnapshot => {
                    cms.push({
                        id: childSnapshot.key,
                        key: childSnapshot.val().key,
                        type: childSnapshot.val().type,
                        value: childSnapshot.val().value
                    });
                });
                res.status(200).json({cms});
            })
            .catch(error => {
                res.status(500).json({error: error.message})
            });
    });





    //fetch all records - table
    router.get('/', async(req, res) => {
        try {
            const snapshot = await cmsRef.once('value');
            const cms = snapshot.val();
            res.json({ cms });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });

    //add record
    router.post('/', async(req, res) => {
        try {
           
            
            if (req.files && req.files.image){
                const file = req.files.image;
                const fileName = file.name;
        
                const storageRef = admin.storage().bucket();
                const imageRef = storageRef.file('node/' + fileName);
                await imageRef.save(file.data);

                downloadURL = await imageRef.getSignedUrl({
                    action: 'read',
                    expires: '03-17-2025' 
                });
    
                const newCmsRef = cmsRef.push();
                await newCmsRef.set({
                    key: req.body.cmskey,
                    value: downloadURL,
                    type: req.body.type
                });
            }
            else{
               const newCmsRef = cmsRef.push();
               await newCmsRef.set({
                   key: req.body.cmskey,
                   value: req.body.value,
                   type: req.body.type
               });   

            }
    
            res.json({ message: 'Record created successfully' });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });
    

    // router.post('/', async(req, res) => {
    //     try {
    //         console.log(req.body);
    //         const newCmsRef = cmsRef.push();
    //         await newCmsRef.set({
    //             key: req.body.cmskey,
    //             value: req.body.value,
    //             type: req.body.type
    //         });
    //         res.json({ message: 'Record created successfully' });
    //     } catch (error) {
    //         res.status(500).send('Error: ' + error.message);
    //     }
    // });


    //fetch record by id
    router.get('/:id', async (req, res) => {
        try {
            const snapshot = await cmsRef.child(req.params.id).once('value');
            const cms = snapshot.val();
            res.json({ cms });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });


    //update record by id
    router.put('/:id', async (req, res) => {
        try {
            let downloadURL = '';
    
            if (req.files && req.files.editImage) {
                const file = req.files.editImage;
                const fileName = file.name;
    
                const storageRef = admin.storage().bucket();
                const imageRef = storageRef.file('node/' + fileName);
                await imageRef.save(file.data);
    
                downloadURL = await imageRef.getSignedUrl({
                    action: 'read',
                    expires: '03-17-2025' 
                });
            }
    
            const cmsRecordRef = cmsRef.child(req.params.id);

            await cmsRecordRef.update({
                key: req.body.key,
                value: downloadURL || req.body.value, 
                type: req.body.type
            });
    
            res.json({ message: 'Record updated successfully' });
            
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });
    

    //delete record by id
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
