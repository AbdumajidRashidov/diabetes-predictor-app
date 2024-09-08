/**
 * @swagger
 * /patients:
 *   post:
 *     summary: Create a new patient
 *     tags: [Patients]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               user:
 *                 type: string
 *                 description: User ID associated with the patient.
 *               birthdate:
 *                 type: string
 *                 format: date
 *                 description: Birthdate of the patient.
 *               height:
 *                 type: number
 *                 description: Height of the patient in centimeters.
 *               weight:
 *                 type: number
 *                 description: Weight of the patient in kilograms.
 *               doctor:
 *                 type: string
 *                 description: Doctor ID associated with the patient.
 *               gender:
 *                 type: string
 *                 description: Gender of the patient.
 *               pregnancies:
 *                 type: integer
 *                 description: Number of pregnancies the patient has had.
 *               location:
 *                 type: string
 *                 description: Location where the patient resides.
 *               healthData:
 *                 type: object
 *                 description: Health data related to the patient.
 *             required:
 *               - birthdate
 *               - height
 *               - weight
 *               - gender
 *     responses:
 *       201:
 *         description: Patient created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 patient:
 *                   $ref: '#/components/schemas/Patient'
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
 * /patients/{id}:
 *   get:
 *     summary: Get patient details by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the patient to retrieve.
 *     responses:
 *       200:
 *         description: Patient details retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient'
 *       404:
 *         description: Patient not found.
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
 * /patients/{id}:
 *   put:
 *     summary: Update patient information by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the patient to update.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               birthdate:
 *                 type: string
 *                 format: date
 *                 description: Birthdate of the patient.
 *               height:
 *                 type: number
 *                 description: Height of the patient in centimeters.
 *               weight:
 *                 type: number
 *                 description: Weight of the patient in kilograms.
 *               doctor:
 *                 type: string
 *                 description: Doctor ID associated with the patient.
 *               gender:
 *                 type: string
 *                 description: Gender of the patient.
 *               pregnancies:
 *                 type: integer
 *                 description: Number of pregnancies the patient has had.
 *               location:
 *                 type: string
 *                 description: Location where the patient resides.
 *               healthData:
 *                 type: object
 *                 description: Health data related to the patient.
 *     responses:
 *       200:
 *         description: Patient information updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Patient'
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
 *         description: Patient not found.
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
 * /patients/{id}:
 *   delete:
 *     summary: Delete a patient by ID
 *     tags: [Patients]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the patient to delete.
 *     responses:
 *       200:
 *         description: Patient deleted successfully.
 *       404:
 *         description: Patient not found.
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
 * /patients:
 *   get:
 *     summary: List all patients
 *     tags: [Patients]
 *     responses:
 *       200:
 *         description: List of all patients.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Patient'
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
