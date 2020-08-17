module.exports = {

    port_http: 8080,
    server : '127.0.0.1',
    port : 1433,
    database : 'dbName',
    username : 'admin',
    password : 'userPassword',
    dialect : 'mssql',
};

// sequelize-auto -h 10.7.0.90 -d BD_INTEGRALE -u sqladmin -x AcChRgHax2C0p3s -p 1433  --dialect mssql -o ../src/models -t PRODUCT,CATEGORIE
