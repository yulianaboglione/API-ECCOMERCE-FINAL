const express = require("express");
const router = express.Router();
const { addCategories, seeCategories } = require("../controllers");

/**
 * @openapi
 * /api/v1/categories:
 *   post:
 *     summary: Add categories in the app
 *     tags: [Categories]
 *     requestBody:
 *       description: Add a new categorie to the app
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: "#/components/schemas/add_categorie"
 *     responses:
 *       201:
 *         description: add categorie
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
 *                     $ref: "#/components/schemas/request_categories"
 *   get:
 *     summary: See the data of a cart in the app
 *     tags: [Categories]
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
 *                     $ref: "#/components/schemas/request_categories"
 */


router.post("/categories", addCategories)

router.get("/categories", seeCategories)

module.exports = router;
