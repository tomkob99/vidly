
module.exports = function (handler) {
  return async (req, res, netx) => {
    try {
      await handler(req, res);
    }
    catch(ex) {
      next(ex);
    }
  }
}
