import nextConnect from "next-connect";
import multiparty from "multiparty";

const middleware = nextConnect();

middleware.use(async (req, res, next) => {
  const form = new multiparty.Form();

  await form.parse(req, function (err, fields, files) {
    // console.log("fields -->", fields);
    // console.log("files -->", files);
    req.body = fields;
    req.files = files;
    // console.log("req.body middleware -->", req.body);
    next();
  });
});

export default middleware;
