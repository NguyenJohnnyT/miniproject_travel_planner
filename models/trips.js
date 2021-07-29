// * `Trips`

//     * `id`: primary key

//         * `trip_budget`

//         * `traveller_amount`

//         * `traveller_id`: non - unique foreign key that references the`Traveller` model's `id` field (`Traveller.id`)

//         * `location_id`: non - unique foreign key that references the`Location` model's `id` field (`Location.id`)

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trips extends Model { }

Trips.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        trip_budget: {
            type: DataTypes.INTEGER,
            allowNull: false,
            traveller_amount: {
                type: DataTypes.INTEGER,
                allowNull: false,
            },
            // traveller_id
            reader_id: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'reader',
                    key: 'id',
                },
            },
        },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'book'
    }
);

module.exports = Book;
