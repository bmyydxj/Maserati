// 导入mysql模块
const mysql = require("mysql");
// 默认配置
const defaultOptions = {
    host: "10.2.1.142",
    port: "3306",
    user: 'root',
    password: 'bmyyqmwk',
    database: "maserati"
}
// 获取connection对象
function getConnection(options = defaultOptions) {
    return mysql.createConnection(options);
}
// 导出getConnection
module.exports = getConnection;
