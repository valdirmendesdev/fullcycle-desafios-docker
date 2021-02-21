const express = require('express')
const mysql = require('mysql')

const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'test',
    password: 'test',
    database: 'nodedb'
};

function executeQuery(query, callback) {
    const connection = mysql.createConnection(config)
    connection.query(query, callback)
    connection.end()
}

app.get('/', (req, res) => {
    const insertPersonSql = `INSERT INTO people(name) values('valdir')`
    executeQuery(insertPersonSql)

    const selectPeople = 'SELECT name from people';
    executeQuery(selectPeople, function (_, results, _) {

        res.write('<h1>Full Cycle</h1>')
        res.write('Nomes cadastrados:')
        res.write('<ul>')
        for (const iterator of results) {
            res.write('<li>' + iterator['name'] + '</li>')
        }
        res.write('</ul>')
        res.end()
    })
})

app.listen(port, () => {
    console.log('Rodando na porta ' + port)
})