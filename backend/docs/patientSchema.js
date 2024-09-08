/**
 * @openapi
 * components:
 *   schemas:
 *     Patient:
 *       type: object
 *       required:
 *         - birthdate
 *         - height
 *         - weight
 *         - gender
 *       properties:
 *         user:
 *           type: string
 *           description: The user ID associated with the patient.
 *         birthdate:
 *           type: string
 *           format: date
 *           description: The birthdate of the patient.
 *         height:
 *           type: number
 *           description: The height of the patient in centimeters.
 *         weight:
 *           type: number
 *           description: The weight of the patient in kilograms.
 *         doctor:
 *           type: string
 *           description: The ID of the doctor associated with the patient.
 *         gender:
 *           type: string
 *           description: The gender of the patient.
 *         pregnancies:
 *           type: integer
 *           description: The number of pregnancies the patient has had.
 *         location:
 *           type: string
 *           description: The location where the patient resides.
 *         healthData:
 *           type: object
 *           properties:
 *             glucose:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The glucose value.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the glucose measurement.
 *             bloodPressure:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The blood pressure value.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the blood pressure measurement.
 *             skinThickness:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The skin thickness value.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the skin thickness measurement.
 *             insulin:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The insulin value.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the insulin measurement.
 *             bmi:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The BMI value.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the BMI measurement.
 *             dpf:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The DPF value.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the DPF measurement.
 *             isDiabetes:
 *               type: object
 *               properties:
 *                 value:
 *                   type: boolean
 *                   description: Whether the patient is diagnosed with diabetes.
 *                 confidentiality:
 *                   type: string
 *                   description: Confidentiality level of the diabetes status.
 *             bodyFatPercentage:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The body fat percentage.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the body fat percentage measurement.
 *             bodyTemperature:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The body temperature.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the body temperature measurement.
 *             cervicalMucus:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   value:
 *                     type: number
 *                     description: The cervical mucus value.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the cervical mucus measurement.
 *             cervicalPosition:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   position:
 *                     type: string
 *                     description: The position of the cervix.
 *                   dilation:
 *                     type: string
 *                     description: The dilation of the cervix.
 *                   firmness:
 *                     type: string
 *                     description: The firmness of the cervix.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the cervical position measurement.
 *             heartRate:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   bpm:
 *                     type: number
 *                     description: The heart rate in beats per minute.
 *                   date:
 *                     type: string
 *                     format: date
 *                     description: The date of the heart rate measurement.
 *       example:
 *         user: "605c72efdbd36f001f647ee4"
 *         birthdate: "1990-01-01"
 *         height: 170
 *         weight: 65
 *         doctor: "605c72efdbd36f001f647ee5"
 *         gender: "Female"
 *         pregnancies: 2
 *         location: "New York"
 *         healthData:
 *           glucose:
 *             - value: 90
 *               date: "2024-01-01"
 *           bloodPressure:
 *             - value: 120/80
 *               date: "2024-01-01"
 *           skinThickness:
 *             - value: 25
 *               date: "2024-01-01"
 *           insulin:
 *             - value: 15
 *               date: "2024-01-01"
 *           bmi:
 *             - value: 22
 *               date: "2024-01-01"
 *           dpf:
 *             - value: 0.5
 *               date: "2024-01-01"
 *           isDiabetes:
 *             value: false
 *             confidentiality: "High"
 *           bodyFatPercentage:
 *             - value: 22
 *               date: "2024-01-01"
 *           bodyTemperature:
 *             - value: 98.6
 *               date: "2024-01-01"
 *           cervicalMucus:
 *             - value: 3
 *               date: "2024-01-01"
 *           cervicalPosition:
 *             - position: "High"
 *               dilation: "Open"
 *               firmness: "Soft"
 *               date: "2024-01-01"
 *           heartRate:
 *             - bpm: 72
 *               date: "2024-01-01"
 */
