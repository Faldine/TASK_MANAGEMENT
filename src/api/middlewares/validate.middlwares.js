const validate = (schema) => async(req, res, next) => {
    // const {error} = schema.validate(req.body);
     // if (error) {
     //     return res.status(400).json(error);
     // }
     // next();
      try {
          await schema.validateAsync(req.body);
         next();
      } catch(error) {
         res.status(400).json(error);
      }
 }
 module.exports = validate;
 
 
 