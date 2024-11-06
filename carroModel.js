const mysql = require("mysql");

const con = mysql.createConnection({
    user: 'root',
    host: 'localhost',
    database: 'stockcar'
});

const createCarro = (data, callback) => {
    const query = 'INSERT INTO Carros (marca_veiculo, modelo_veiculo, ano_veiculo, fabricacao_veiuclo, cliente_id) VALUES (?, ?, ?, ?, ?)';
    con.query(query, [data.marca_veiculo, data.modelo_veiculo, data.ano_veiculo, data.fabricacao_veiuclo, data.cliente_id], callback);
};

const readCarros = (callback) => {
    const query = 'SELECT * FROM Carros';
    con.query(query, callback);
};

const updateCarro = (data, callback) => {
    const query = 'UPDATE Carros SET marca_veiculo = ?, modelo_veiculo = ?, ano_veiculo = ?, fabricacao_veiuclo = ?, cliente_id = ? WHERE Carros_id = ?';
    con.query(query, [data.marca_veiculo, data.modelo_veiculo, data.ano_veiculo, data.fabricacao_veiuclo, data.cliente_id, data.Carros_id], callback);
};

const deleteCarro = (Carros_id, callback) => {
    const query = 'DELETE FROM Carros WHERE Carros_id = ?';
    con.query(query, [Carros_id], callback);
};

module.exports = { createCarro, readCarros, updateCarro, deleteCarro };