/**
 * @swagger
 * /predict:
 *   post:
 *     summary: Predict the likelihood of diabetes based on health metrics
 *     tags: [Prediction]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               glucose:
 *                 type: number
 *                 example: 120
 *               insulin:
 *                 type: number
 *                 example: 85
 *               bmi:
 *                 type: number
 *                 example: 28.5
 *               age:
 *                 type: number
 *                 example: 45
 *     responses:
 *       200:
 *         description: A prediction of diabetes likelihood
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 prediction:
 *                   type: string
 *                   example: "1"  # 1 indicates diabetes, 0 indicates no diabetes
 *                 probability:
 *                  type: string
 *                  example: 0.75  # 75% probability of diabetes
 *       400:
 *         description: Bad request, missing parameters
 *       500:
 *         description: Internal server error
 */
