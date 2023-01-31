const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { userLogin, deleteLogout } = require("../controllers");

/**
 * @openapi
 * /api/v1/auth/login:
 *   post:
 *     summary: Start session in the app
 *     tags: [Auth]
 *     requestBody:
 *       description: Start a new section in the app to obtain the privileges to make operations.
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/login"
 *     responses:
 *       201:
 *         description: entering the app
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_auth"
 * /api/v1/auth/logout:
 *   delete:
 *     security:
 *       - bearerAuth: []
 *     summary: delete a user in the app
 *     tags: [Auth]
 *     requestBody:
 *       description: remove an existing user from the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/logout"
 *     responses:
 *       201:
 *         description: entering the app
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: OK
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: "#/components/schemas/request_logout"
 */

router.post("/auth/login", userLogin);

router.delete("/auth/logout", authenticate, deleteLogout);

module.exports = router;
