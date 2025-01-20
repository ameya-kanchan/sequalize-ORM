import mysql2 from 'mysql2'
import dotenv from 'dotenv';
dotenv.config();


const pool = mysql2.createPool({

    host: 'localhost',
    user: 'root',
    password: 'new_password', 
    database: 'mydatabase'
});

const promisePool = pool.promise();

promisePool.query('SELECT 1')
.then(([rows, fields]) => {
    console.log('Connection to Mysql Successfull');
})
.catch(err =>{
    console.log('Error in connecting to Mysql', err);
    
    
})
export default promisePool;