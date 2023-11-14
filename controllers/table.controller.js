import {client} from '../grpc/grpc.js'
export const GetTables = async (req, res, next) => {
  try {
    client.GetTables(null,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const BookSeat = async (req, res, next) => {
  try {
    console.log(req.user.id)
    console.log(req.body)
    const payload = {
      userId : String(req.user.id), 
      tableId : req.body.tableId,
    }
    
    client.BookSeat(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const CancelSeat = async (req, res, next) => {
  const payload = {
    userId : String(req.user.id), 
    tableId : req.body.tableId,
  }
  try {
    client.CancelSeat(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const CheckIn = async (req, res, next) => {
  const payload = {
    userId : String(req.user.id), 
    tableId : req.body.tableId,
  }
  try {
    client.CheckIn(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const VerifyCheckIn = async (req, res, next) => {
  const payload = {
    requestId : req.body.requestId
  }
  try {
    client.VerifyCheckIn(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const CheckOut = async (req, res, next) => {
  const payload = {
    tableId : req.body.tableId
  }
  try {
    client.CheckOut(payload,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};

export const DeleteLateTables = async (req, res, next) => {
  try {
    client.DeleteLateTables(null,(err,data)=>{
      if(err) throw err;
      res.status(200).json({
        success:true ,
        data: data
      })
  });
  } catch (err) {
    res.status(400).json({
      success: false,
    });
    console.log(err.stack);
  }
};
