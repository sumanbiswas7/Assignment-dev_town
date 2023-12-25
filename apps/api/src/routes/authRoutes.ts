import { HTTP_STATUS, HttpResponse, isValidEmail } from "@pineapple/utils";
import { Router, Request, Response } from "express";

const route = Router();

route.post("/login", (req: Request, res: Response) => {
   const success = new HttpResponse({});
   const error = new HttpResponse({ isError: true });
   const { email, password } = req.body;

   if (!email) {
      error.message = `No Email provided`;
      error.status = HTTP_STATUS.BAD_REQUEST;
      return res.status(error.status).json(error);
   }

   if (isValidEmail(email) === false) {
      error.message = `Provided email is invalid`;
      error.status = HTTP_STATUS.BAD_REQUEST;
      return res.status(error.status).json(error);
   }

   if (!password) {
      error.message = `No Password Provided`;
      error.status = HTTP_STATUS.BAD_REQUEST;
      return res.status(error.status).json(error);
   }

   success.data = { token: null };
   success.message = `Login successful user - ${email}`;
   success.status = HTTP_STATUS.OK;
   return res.status(success.status).json(success);
});

export default route;
