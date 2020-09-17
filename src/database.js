//Logic for connecting data base

import mysql from 'mysql'

const connection = mysql.createConnection( {
    host: 'localhost',
    user: 'prakash-server',
    password: 'prakash',
    database: 'ecommerce-angular',
})

export const db = {
    connect: () => connection.connect(),
    query: (queryString, escapedValue) => 
                new Promise( (resolve, reject) => {
                    connection.query(queryString,escapedValue, (error, results, fields) => {
                        if(error) reject(error)
                        resolve({results, fields})
                    })
                }),
    end: () => connection.end(),

}