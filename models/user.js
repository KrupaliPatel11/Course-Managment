module.exports = (sequelize, DataTypes)=> {
    const Users = sequelize.define("CourseManagement", {
        CourseName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        CourseDuration: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        CourseFees: {
            type: DataTypes.STRING,
            allowNull:false
        },
    }, { 
        // to delete default column createdAt and updatedAt
        timestamps: false
    });
    return Users;
}