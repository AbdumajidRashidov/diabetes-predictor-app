const { google } = require("googleapis");

async function getHeartRateData(oauth2Client) {
  const fitness = google.fitness({ version: "v1", auth: oauth2Client });

  try {
    const result = await fitness.users.dataset.aggregate({
      userId: "me",
      resource: {
        aggregateBy: [
          {
            dataTypeName: "com.google.heart_rate.bpm",
            dataSourceId:
              "derived:com.google.heart_rate.bpm:com.google.android.gms:merge_heart_rate_bpm",
          },
        ],
        bucketByTime: { durationMillis: 86400000 }, // 1 day
        startTimeMillis: Date.now() - 24 * 60 * 60 * 1000, // 1 day ago
        endTimeMillis: Date.now(),
      },
    });

    console.log("Heart Rate Data:", result.data);
    return result.data;
  } catch (error) {
    console.error("Error fetching heart rate data:", error);
  }
}

module.exports = { getHeartRateData };
