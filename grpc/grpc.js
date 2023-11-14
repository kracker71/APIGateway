import config from "../config/config.js"
import grpc from "@grpc/grpc-js"
import protoLoader from "@grpc/proto-loader"
const PROTO_PATH =  "./tableManagement.proto";
var packageDefinition = protoLoader.loadSync(PROTO_PATH,{
    keepCase: true,
    longs: String,
    enums: String,
    arrays: true
});

const path = config.table_url + ':' + config.table_port

var tableManagementService = grpc.loadPackageDefinition(packageDefinition).TableManagementService;

const client = new tableManagementService(path, grpc.credentials.createInsecure());

export  {client}