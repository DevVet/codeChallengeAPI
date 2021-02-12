module.exports = (sequelize, DataTypes) => {
    const Question = sequelize.define("Question", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        level: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        question: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                notEmpty: true
            }
        },
        source: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "none",
            validate: {
                notEmpty: true
            }
        }
    });

    return Question;
}