/**
 * @swagger
 * /doctors:
 *   post:
 *     summary: Create a new doctor
 *     tags: [Doctors]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: User ID associated with the doctor.
 *               patients:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of patient IDs associated with the doctor.
 *               dashboardStatistics:
 *                 type: object
 *                 description: Dashboard statistics for the doctor.
 *               monthlyReports:
 *                 type: array
 *                 items:
 *                   type: object
 *                 description: List of monthly reports for the doctor.
 *             required:
 *               - user
 *     responses:
 *       201:
 *         description: Doctor created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 doctor:
 *                   $ref: '#/components/schemas/Doctor'
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 */
/**
 * @swagger
 * /doctors/{id}:
 *   get:
 *     summary: Get doctor details by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the doctor to retrieve.
 *     responses:
 *       200:
 *         description: Doctor details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       404:
 *         description: Doctor not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 */
/**
 * @swagger
 * /doctors/{id}:
 *   put:
 *     summary: Update doctor information by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the doctor to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               patients:
 *                 type: array
 *                 items:
 *                   type: string
 *                 description: List of patient IDs associated with the doctor.
 *               dashboardStatistics:
 *                 type: object
 *                 description: Updated dashboard statistics for the doctor.
 *               monthlyReports:
 *                 type: array
 *                 items:
 *                   type: object
 *                 description: Updated list of monthly reports for the doctor.
 *     responses:
 *       200:
 *         description: Doctor information updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Doctor'
 *       400:
 *         description: Bad request.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 *       404:
 *         description: Doctor not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 */
/**
 * @swagger
 * /doctors/{id}:
 *   delete:
 *     summary: Delete a doctor by ID
 *     tags: [Doctors]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the doctor to delete.
 *     responses:
 *       200:
 *         description: Doctor deleted successfully.
 *       404:
 *         description: Doctor not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 */
/**
 * @swagger
 * /doctors:
 *   get:
 *     summary: List all doctors
 *     tags: [Doctors]
 *     responses:
 *       200:
 *         description: List of all doctors.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Doctor'
 *       500:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 msg:
 *                   type: string
 *                   description: Error message.
 */
