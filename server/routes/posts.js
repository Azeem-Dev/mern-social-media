import express from "express";
import { verifyToken } from "../middleware/auth.js";
import {
  createPost,
  getFeedPosts,
  getUserPosts,
  likePost,
} from "../controllers/posts.js";
import upload from "../uploadSetup.js";

/**
 * @swagger
 * components:
 *  schemas:
 *    Error:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: Error msg
 *    Post:
 *      type: object
 *      properties:
 *        userId:
 *          type: string
 *          description: UserId for the post / creator user id
 *        firstName:
 *          type: string
 *          description: User first name
 *        lastName:
 *          type: string
 *          description: User last name
 *        location:
 *          type: string
 *          description: User location
 *        description:
 *          type: string
 *          description: Description of Post
 *        picturePath:
 *          type: string
 *          description: Picture Path of Post if any picture
 *        userPicturePath:
 *          type: string
 *          description: As the name suggests User Picture Path
 *        likes: 
 *          type: object
 *          description: likes on the post and user id who liked them
 *        comments:
 *          type: array
 *          description: comments on given post
 *    createPostRequest:
 *      type: object
 *      required:
 *        - userId
 *        - description
 *        - picturePath
 *      properties:
 *        userId:
 *          type: string
 *          description: id of user whom we want to create post for
 *        description:
 *          type: string
 *          description: Description of the post
 *        picturePath:
 *          type: string
 *          description: posts picture path
 * 
 */

/**
 * @swagger
 * tags:
 *  name: Posts
 *  description: Posts related apis
 */

/**
 * @swagger
 * /posts:
 *  get:
 *    summary: Get All the Posts in DB
 *    tags: [Posts]
 *    responses:
 *      200:
 *        description: All Posts
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                oneOf:
 *                  - $ref: '#/components/schemas/Post'
 *      404:
 *        description: Error
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              item: 
 *                $ref:'#/components/schemas/Error'
 *  post:
 *    summary: Create a new post
 *    tags: [Posts]
 *    requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              item:
 *                $ref:'#/components/schemas/createPostRequest'
 *    responses:
 *      201:
 *        description: Created post returning all posts
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items: 
 *                oneOf:
 *                  - $ref: '#/components/schemas/Post'
 *      409:
 *        description: Error while creating
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              item:
 *                $ref: '#/components/schemas/Error'
 * /posts/{userId}/posts:
 *  get:
 *    summary: Get User Related Posts
 *    tags: [Posts]
 *    parameters:
 *      - in: path
 *        name: userId
 *        schema:
 *          type: string
 *          required: true
 *          description: UserId for which we will get Posts
 *    responses:
 *      200:
 *        description: All User related posts
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                oneOf:
 *                  - $ref: '#/components/schemas/Post'
 *      404:
 *        description: Error not found
 *        content: 
 *          application/json:
 *            schema:
 *              type: object
 *              item:
 *                $ref: '#/components/schemas/Error'
 */

const router = express.Router();

router.post("/", verifyToken, upload.single("picture"), createPost);
router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:id/like", verifyToken, likePost);

export default router;
