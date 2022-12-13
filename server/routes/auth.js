import express from "express";
import { login, register } from "../controllers/auth.js";
import upload from "../uploadSetup.js";

const router = express.Router();

/**
 * @swagger
 * components:
 *    schemas:
 *       User:
 *           type: object
 *           required:
 *               - email
 *               - password
 *           properties:
 *               firstName:
 *                   type: string
 *                   description: The first name of the user
 *               lastName:
 *                   type: string
 *                   description: The last name of the user
 *               email:
 *                   type: string
 *                   description: The email of the user
 *               password:
 *                   type: string
 *                   description: The password of the user
 *               picturePath:
 *                   type: string
 *                   description: The picturePath of the user
 *               friends:
 *                   type: array
 *                   description: The friends of the user
 *               location:
 *                   type: string
 *                   description: The location of the user
 *               occupation:
 *                   type: string
 *                   description: The occupation of the user
 *       UserLogin:
 *           type: object
 *           required:
 *               - email
 *               - password
 *           properties:
 *               email:
 *                   type: string
 *                   description: The email of the user
 *               password:
 *                   type: string
 *                   description: The password of the user
 *       UserLoginResponseUser:
 *           type: object
 *           properties:
 *               firstName:
 *                   type: string
 *                   description: The first name of the user
 *               lastName:
 *                   type: string
 *                   description: The last name of the user
 *               email:
 *                   type: string
 *                   description: The email of the user
 *               picturePath:
 *                   type: string
 *                   description: The picturePath of the user
 *               friends:
 *                   type: array
 *                   description: The friends of the user
 *               location:
 *                   type: string
 *                   description: The location of the user
 *               occupation:
 *                   type: string
 *                   description: The occupation of the user
 *       UserLoginResponse:
 *           type: object
 *           properties:
 *               user:
 *                   type: object
 *                   description: The user
 *                   item: $ref:'#/components/schemas/UserLoginResponseUser'
 *               token:
 *                   type: string
 *                   description: The last name of the user
 *
 */

/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: User register/Login api
 */

/**
 * @swagger
 * /auth/register:
 *      post:
 *          summary: Registers the user to database
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          item:
 *                              $ref:'#/components/schemas/User'
 *          responses:
 *              201:
 *                  description: Saved User
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              item:
 *                                  $ref:'#/components/schemas/User'
 *              400:
 *                  description: Error
 *                  content:
 *                       text/html:
 *                          schema:
 *                              type: string
 *
 */
/**
 * @swagger
 * /auth/login:
 *      post:
 *          summary: Logins the user to database
 *          tags: [Auth]
 *          requestBody:
 *              required: true
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: object
 *                          item:
 *                              $ref:'#/components/schemas/UserLogin'
 *          responses:
 *              200:
 *                  description: Logged into the system
 *                  content:
 *                      application/json:
 *                          schema:
 *                              type: object
 *                              item:
 *                                  $ref:'#/components/schemas/UserLoginResponse'
 *              400:
 *                  description: Error
 *                  content:
 *                       text/html:
 *                          schema:
 *                              type: string
 *
 */


router.post("/register", upload.single("picture"), register);
router.post("/login", login);

export default router;
