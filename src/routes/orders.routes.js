const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth.middleware");
const { createOrder, getOrder } = require("../controllers");

/**
 * @openapi
 * /api/v1/users/{id}/orders:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     summary: Create a order in the app
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       201:
 *         description: create order
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
 *                     $ref: "#/components/schemas/request_order"
 *   get:
 *     security:
 *       - bearerAuth: []
 *     summary: See the data of the users orders in the app
 *     tags: [Order]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *           minimum: 1
 *         description: user Id
 *     responses:
 *       200:
 *         description: Data displayed successfully
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
 *                     $ref: "#/components/schemas/request_order"
 */

router.post("/users/:id/orders", createOrder)

router.get("/users/:id/orders", authenticate, getOrder);

module.exports = router;