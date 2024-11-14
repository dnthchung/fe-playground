// routes/users.js
const express = require("express");
const router = express.Router();
const pool = require("../db");

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: API cho người dùng
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lấy danh sách tất cả người dùng
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Danh sách người dùng
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     description: ID người dùng
 *                   name:
 *                     type: string
 *                     description: Tên người dùng
 */
router.get("/users", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM users");
    res.status(200).json(result.rows);
  } catch (err) {
    console.error("Error fetching users:", err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Thêm người dùng mới
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên người dùng
 *     responses:
 *       201:
 *         description: Người dùng đã được thêm
 */
router.post("/users", async (req, res) => {
  const { name } = req.body;
  try {
    const result = await pool.query(
      "INSERT INTO users (name) VALUES ($1) RETURNING *",
      [name]
    );
    res.status(201).json(result.rows[0]);
  } catch (err) {
    console.error("Error adding user:", err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Cập nhật thông tin người dùng
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của người dùng cần cập nhật
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 description: Tên mới của người dùng
 *     responses:
 *       200:
 *         description: Người dùng đã được cập nhật
 */
router.put("/users/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  try {
    const result = await pool.query(
      "UPDATE users SET name = $1 WHERE id = $2 RETURNING *",
      [name, id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json(result.rows[0]);
  } catch (err) {
    console.error("Error updating user:", err);
    res.status(500).send("Server Error");
  }
});

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Xóa người dùng
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của người dùng cần xóa
 *     responses:
 *       200:
 *         description: Người dùng đã được xóa
 */
router.delete("/users/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );
    if (result.rows.length === 0) {
      return res.status(404).send("User not found");
    }
    res.status(200).json({ message: "User deleted successfully" });
  } catch (err) {
    console.error("Error deleting user:", err);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
