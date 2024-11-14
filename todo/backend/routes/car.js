// routes/car.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

/**
 * @swagger
 * tags:
 *   name: Cars
 *   description: API cho các loại xe ô tô
 */

/**
 * @swagger
 * /cars:
 *   get:
 *     summary: Lấy danh sách tất cả các loại xe ô tô
 *     tags: [Cars]
 *     responses:
 *       200:
 *         description: Danh sách các loại xe ô tô
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID của xe
 *                   name:
 *                     type: string
 *                     description: Tên của xe
 *                   brand:
 *                     type: string
 *                     description: Hãng xe
 */
router.get("/cars", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM cars");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching cars:", err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /cars:
 *   post:
 *     summary: Thêm một loại xe mới
 *     tags: [Cars]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên của xe
 *               brand:
 *                 type: string
 *                 description: Hãng xe
 *     responses:
 *       201:
 *         description: Xe đã được thêm
 */
router.post("/cars", async (req, res) => {
  const { name, brand } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO cars (name, brand) VALUES ($1, $2) RETURNING *",
      [name, brand]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error adding car:", err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /cars/{id}:
 *   put:
 *     summary: Cập nhật thông tin của một loại xe
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của xe cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên của xe
 *               brand:
 *                 type: string
 *                 description: Hãng xe
 *     responses:
 *       200:
 *         description: Xe đã được cập nhật
 */
router.put("/cars/:id", async (req, res) => {
  const { id } = req.params;
  const { name, brand } = req.body;
  try {
    const result = await pool.query(
      "UPDATE cars SET name = $1, brand = $2 WHERE id = $3 RETURNING *",
      [name, brand, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Car not found");
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error updating car:", err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /cars/{id}:
 *   delete:
 *     summary: Xóa một loại xe
 *     tags: [Cars]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của xe cần xóa
 *     responses:
 *       200:
 *         description: Xe đã được xóa
 */
router.delete("/cars/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM cars WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("Car not found");
    }
    res.status(200).json({ message: "Car deleted successfully" });
  } catch (err) {
    console.error("Error deleting car:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
