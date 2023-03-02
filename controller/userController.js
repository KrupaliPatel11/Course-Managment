var db = require('../models');
const Users = db.users;

// Get All Course Details
var getCourse = async (req, res) => {
    let data = await Users.findAll({});
    res.status(200).json({ data: data });
    console.log("Successfully Shown All Record ");
    
}

// Get Specific Course Details
var getOneCourse = async (req, res) => {
    let data = await Users.findOne({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ data: data });
    console.log("Successfully Shown One Record ");

}

// Insert Course
var postCourse = async (req, res) => {
    var postCourse = req.body;
    if (postCourse.length > 1) {
        const data = await Users.bulkCreate(postCourse);
    } else {
        const data = await Users.create(postCourse);
    }
    res.status(200).json({ data: postCourse });
    console.log("Record Successfully Inserted");

}

//  Delete Course 
var deleteCourse = async (req, res) => {
    const data = await Users.destroy({
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ data: data });
    console.log("Record Successfully Deleted");
}

//  Update Course
var patchCourse = async (req, res) => {
    var updatedData = req.body;
    const data = await Users.update(updatedData , {
        where: {
            id: req.params.id
        }
    });
    res.status(200).json({ data : data});
    console.log("Record Successfully Updated");
}

module.exports = {
    getCourse,
    getOneCourse,
    postCourse,
    deleteCourse,
    patchCourse
} 