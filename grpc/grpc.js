const PROTO_PATH="../tableManagement.proto";
import config from "../config/config.js"
const grpc = require("@grpc/grpc-js");
const protoLoader = require("@grpc/proto-loader");

var packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const path = config.table_url + ':' + config.table_port

var tableManagementService = grpc.loadPackageDefinition(packageDefinition).TableManagementService;

const client = new tableManagementService(path, grpc.credentials.createInsecure());

module.exports = client;