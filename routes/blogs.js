const express = require('express');
const router = express.Router();

module.exports = (blogsRef, admin) => {
const storageRef = admin.storage().bucket();



router.get('/blogs', async (req, res) => {
    try {
        const website = req.query.website;

        const snapshot = await blogsRef.orderByChild('website').equalTo(website).once('value');
        const blogs = [];
        snapshot.forEach(childSnapshot => {
            const blog = childSnapshot.val();
            blog.id = childSnapshot.key;
            blogs.push(blog);
            // blogs.push(childSnapshot.val());
        });
        
        // Sort blogs by latest
        blogs.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        res.json(blogs);

    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});



    
//add record
router.post('/create-blogs', async (req, res) => {
    try {
        
        let titleImageURL = '';
        let multipleImagesURLs = [];

        // Upload title image
        if (req.files && req.files.title_image) {
            const titleImage = req.files.title_image;
            const titleImageName = titleImage.name;

            const titleImageRef = storageRef.file('node/' + titleImageName);
            await titleImageRef.save(titleImage.data);

            titleImageURL = await titleImageRef.getSignedUrl({
                action: 'read',
                expires: '03-17-2025'
            });
        }

        // Upload multiple images
        // if (req.files && req.files['multiple_images[]']) {
        //     const multipleImages = req.files['multiple_images[]'];
        //     const uploadPromises = multipleImages.map(async (image) => {
        //         const imageName = image.name;
        //         const imageRef = storageRef.file('node/' + imageName);
        //         await imageRef.save(image.data);
        //         const imageURL = await imageRef.getSignedUrl({
        //             action: 'read',
        //             expires: '03-17-2025'
        //         });
        //         return imageURL;
        //     });
        //     const multipleImagesURLs = await Promise.all(uploadPromises);
        //     multipleImagesURL = multipleImagesURLs.join(',');
        // }

        if (req.files && req.files['multiple_images[]']) {
            const multipleImages = Array.isArray(req.files['multiple_images[]'])
                ? req.files['multiple_images[]']
                : req.files['multiple_images[]'];

        
            for (let i = 0; i < multipleImages.length; i++) {
                const file = multipleImages[i];
                const fileName = file.name;
        
                const storageRef = admin.storage().bucket();
                const imageRef = storageRef.file('node/' + fileName);
                await imageRef.save(file.data);
        
                const imageURL = await imageRef.getSignedUrl({
                    action: 'read',
                    expires: '03-09-2491'
                });
                multipleImagesURLs.push(imageURL);

            }
        }

        const newBlogRef = blogsRef.push();
        await newBlogRef.set({
            title: req.body.title,
            website: req.body.website,
            base_description: req.body.base_description,
            tag: req.body.tag,
            date: req.body.date,
            detail_content: req.body.detail_content,
            author_name: req.body.author_name,
            title_image: titleImageURL[0],
            multiple_images: multipleImagesURLs
        });

        res.json({ message: 'Record created successfully' });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});



router.get('/:id', async (req, res) => {
    try {
        const snapshot = await blogsRef.child(req.params.id).once('value');
        const blog = snapshot.val();
        if (blog) {
            blog.id = snapshot.key; 
            res.json({ blog });
        } else {
            res.status(404).json({ message: 'Blog not found' });
        }
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});


// Update record by id
router.put('/:id', async (req, res) => {
    try {

        let titleImageURL = '';
        let multipleImagesURLs = [];


        // Upload title image if provided
        if (req.files && req.files.editTitleImage) {
            const file = req.files.editTitleImage;
            const fileName = file.name;

            const storageRef = admin.storage().bucket();
            const imageRef = storageRef.file('node/' + fileName);
            await imageRef.save(file.data);

            titleImageURL = await imageRef.getSignedUrl({
                action: 'read',
                expires: '03-17-2025' 
            });
        }

        // Upload multiple images if provided
        if (req.files && req.files['editMultipleImages[]']) {
            const multipleImages = Array.isArray(req.files['editMultipleImages[]'])
                ? req.files['editMultipleImages[]']
                : [req.files['editMultipleImages[]']];

        
            for (let i = 0; i < multipleImages.length; i++) {
                const file = multipleImages[i];
                const fileName = file.name;
        
                const storageRef = admin.storage().bucket();
                const imageRef = storageRef.file('node/' + fileName);
                await imageRef.save(file.data);
        
                const imageURL = await imageRef.getSignedUrl({
                    action: 'read',
                    expires: '03-09-2491'
                });
                multipleImagesURLs.push(imageURL);

            }
        }
        
        const blogRecordRef = blogsRef.child(req.params.id);

        const updates = {
            title: req.body.title,
            website: req.body.website,
            base_description: req.body.base_description,
            tag: req.body.tag,
            date: req.body.date,
            author_name: req.body.author_name,
     
        };

        if (titleImageURL !== undefined && titleImageURL.length > 0) {
            updates.title_image = titleImageURL[0];
        } else if (req.body.currentTitleImage) {
            updates.title_image = req.body.currentTitleImage;
        }

        if (multipleImagesURLs.length > 0) {
            updates.multiple_images = multipleImagesURLs.join(',');
        } else if (req.body.editMultipleImages) {
            updates.multiple_images = req.body.editMultipleImages;
        }
        

        // Update all fields
        await blogRecordRef.update(updates);

        res.json({ message: 'Record updated successfully' });
        
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
});



    //delete record by id
    router.delete('/:id', async (req, res) => {
        try {
            await blogsRef.child(req.params.id).remove();
            res.json({ message: 'Record deleted successfully' });
        } catch (error) {
            res.status(500).send('Error: ' + error.message);
        }
    });
   
    return router;
}
