/**
 * @swagger
 * components:
 *   schemas:
 *     Doctor:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           description: Unique identifier for the doctor, typically generated by MongoDB.
 *         user:
 *           type: string
 *           description: ID of the user associated with the doctor.
 *         patients:
 *           type: array
 *           items:
 *             type: string
 *           description: List of patient IDs associated with the doctor.
 *         dashboardStatistics:
 *           type: object
 *           description: Dashboard statistics for the doctor.
 *           properties:
 *             totalPatients:
 *               type: number
 *               description: The total number of patients under the doctor's care.
 *             averagePatientAge:
 *               type: number
 *               description: The average age of patients.
 *             recentActivity:
 *               type: object
 *               properties:
 *                 date:
 *                   type: string
 *                   format: date
 *                   description: Date of recent activity.
 *                 description:
 *                   type: string
 *                   description: Description of the recent activity.
 *               description: Details about recent activities or updates.
 *         monthlyReports:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               month:
 *                 type: string
 *                 description: The month of the report.
 *               year:
 *                 type: number
 *                 description: The year of the report.
 *               reportData:
 *                 type: object
 *                 description: Data for the monthly report.
 *                 properties:
 *                   numberOfVisits:
 *                     type: number
 *                     description: The number of patient visits in the month.
 *                   feedbackRating:
 *                     type: number
 *                     description: Average feedback rating from patients.
 *                   notes:
 *                     type: string
 *                     description: Additional notes or comments.
 *       required:
 *         - user
 */
