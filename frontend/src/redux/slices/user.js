import { map, filter } from "lodash";
import { createSlice } from "@reduxjs/toolkit";
// utils
import axios from "../../utils/axios";

// ----------------------------------------------------------------------

const initialState = {
  isLoading: false,
  error: false,
  myProfile: null,
  posts: [],
  users: [],
  userList: [],
  followers: [],
  friends: [],
  gallery: [],
  cards: null,
  addressBook: [],
  invoices: [],
  notifications: null,
};

const slice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // START LOADING
    startLoading(state) {
      state.isLoading = true;
    },

    // HAS ERROR
    hasError(state, action) {
      state.isLoading = false;
      state.error = action.payload;
    },

    // GET PROFILE
    getProfileSuccess(state, action) {
      state.isLoading = false;
      state.myProfile = action.payload;
    },

    // GET POSTS
    getPostsSuccess(state, action) {
      state.isLoading = false;
      state.posts = action.payload;
    },

    // GET USERS
    getUsersSuccess(state, action) {
      state.isLoading = false;
      state.users = action.payload;
    },

    // DELETE USERS
    deleteUser(state, action) {
      const deleteUser = filter(
        state.userList,
        (user) => user.id !== action.payload
      );
      state.userList = deleteUser;
    },

    // GET FOLLOWERS
    getFollowersSuccess(state, action) {
      state.isLoading = false;
      state.followers = action.payload;
    },

    // GET BLOODSUGARLOGS
    getBloodSugarLogsSuccess(state, action) {
      state.isLoading = false;
      state.bloodSugarLogs = action.payload;
    },
    // GET Healthmetrics
    getHealthMetricsSuccess(state, action) {
      state.isLoading = false;
      state.healthMetrics = action.payload;
    },
    // GET MEDICATIONS
    getMedicationsSuccess(state, action) {
      state.isLoading = false;
      state.medications = action.payload;
    },

    // ON TOGGLE FOLLOW
    onToggleFollow(state, action) {
      const followerId = action.payload;

      const handleToggle = map(state.followers, (follower) => {
        if (follower.id === followerId) {
          return {
            ...follower,
            isFollowed: !follower.isFollowed,
          };
        }
        return follower;
      });

      state.followers = handleToggle;
    },

    // GET FRIENDS
    getFriendsSuccess(state, action) {
      state.isLoading = false;
      state.friends = action.payload;
    },

    // GET GALLERY
    getGallerySuccess(state, action) {
      state.isLoading = false;
      state.gallery = action.payload;
    },

    // GET MANAGE USERS
    getUserListSuccess(state, action) {
      state.isLoading = false;
      state.userList = action.payload;
    },

    // GET CARDS
    getCardsSuccess(state, action) {
      state.isLoading = false;
      state.cards = action.payload;
    },

    // GET ADDRESS BOOK
    getAddressBookSuccess(state, action) {
      state.isLoading = false;
      state.addressBook = action.payload;
    },

    // GET INVOICES
    getInvoicesSuccess(state, action) {
      state.isLoading = false;
      state.invoices = action.payload;
    },

    // GET NOTIFICATIONS
    getNotificationsSuccess(state, action) {
      state.isLoading = false;
      state.notifications = action.payload;
    },

    // GET HealthHistory
    getProfileHelthHistorySuccess(state, action) {
      state.isLoading = false;
      state.profileHealthHistory = action.payload;
    },
  },
});

// Reducer
export default slice.reducer;

// Actions
export const { onToggleFollow, deleteUser } = slice.actions;

// ----------------------------------------------------------------------

export function getProfile() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/profile");
      dispatch(slice.actions.getProfileSuccess(response.data.profile));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getPosts() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/posts");
      dispatch(slice.actions.getPostsSuccess(response.data.posts));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getFollowers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/social/followers");
      dispatch(slice.actions.getFollowersSuccess(response.data.followers));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getFriends() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/social/friends");
      dispatch(slice.actions.getFriendsSuccess(response.data.friends));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getGallery() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/social/gallery");
      dispatch(slice.actions.getGallerySuccess(response.data.gallery));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getUserList() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/manage-users");
      dispatch(slice.actions.getUserListSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getCards() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/account/cards");
      dispatch(slice.actions.getCardsSuccess(response.data.cards));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getAddressBook() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/account/address-book");
      dispatch(slice.actions.getAddressBookSuccess(response.data.addressBook));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getInvoices() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/account/invoices");
      dispatch(slice.actions.getInvoicesSuccess(response.data.invoices));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getNotifications() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get(
        "/api/user/account/notifications-settings"
      );
      dispatch(
        slice.actions.getNotificationsSuccess(response.data.notifications)
      );
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

// ----------------------------------------------------------------------

export function getUsers() {
  return async (dispatch) => {
    dispatch(slice.actions.startLoading());
    try {
      const response = await axios.get("/api/user/all");
      dispatch(slice.actions.getUsersSuccess(response.data.users));
    } catch (error) {
      dispatch(slice.actions.hasError(error));
    }
  };
}

export const getBloodSugarLogs = () => async (dispatch) => {
  // console.log(dispatch, "dispatch");
  try {
    const logs = [
      { date: "2024-09-01", bloodSugarLevel: 110 },
      { date: "2024-09-02", bloodSugarLevel: 120 },
      { date: "2024-09-03", bloodSugarLevel: 130 },
      // Add more sample logs
    ];
    dispatch(slice.actions.getBloodSugarLogsSuccess(logs));
  } catch (error) {
    console.error(error);
  }
};

export const getHealthMetrics = () => async (dispatch) => {
  try {
    const healthMetrics = {
      glucose: [
        { date: "2024-09-01", value: 110 },
        { date: "2024-09-02", value: 115 },
        { date: "2024-09-03", value: 100 },
        { date: "2024-09-04", value: 105 },
      ],
      bloodPressure: [
        { date: "2024-09-01", systolic: 120, diastolic: 80 },
        { date: "2024-09-02", systolic: 125, diastolic: 82 },
      ],
      skinThickness: [
        { date: "2024-09-01", value: 20 },
        { date: "2024-09-02", value: 22 },
      ],
      insulin: [
        { date: "2024-09-01", value: 130 },
        { date: "2024-09-02", value: 125 },
      ],
      bmi: [
        { date: "2024-09-01", value: 27.5 },
        { date: "2024-09-02", value: 28.0 },
      ],
      dpf: [
        { date: "2024-09-01", value: 0.8 },
        { date: "2024-09-02", value: 0.7 },
      ],
      bodyFatPercentage: [
        { date: "2024-09-01", value: 22 },
        { date: "2024-09-02", value: 23 },
      ],
      bodyTemperature: [
        { date: "2024-09-01", value: 36.5 },
        { date: "2024-09-02", value: 36.8 },
      ],
      cervicalMucus: [
        { date: "2024-09-01", value: "Moderate" },
        { date: "2024-09-02", value: "High" },
      ],
      cervicalPosition: [
        { date: "2024-09-01", position: "Low", dilation: "Closed" },
        { date: "2024-09-02", position: "High", dilation: "Open" },
      ],
      heartRate: [
        { date: "2024-09-01", value: 75 },
        { date: "2024-09-02", value: 80 },
        { date: "2024-09-03", value: 78 },
        { date: "2024-09-04", value: 82 },
      ],
    };
    dispatch(slice.actions.getHealthMetricsSuccess(healthMetrics));
  } catch (error) {
    console.error(error);
  }
};

export const getMedications = () => async (dispatch) => {
  try {
    const medications = [
      {
        name: "Metformin",
        dosage: "500mg",
        type: "tablet",
      },
      {
        name: "Insulin",
        dosage: "20 units",
        type: "injection",
      },
      {
        name: "Aspirin",
        dosage: "100mg",
        type: "tablet",
      },
      {
        name: "Lisinopril",
        dosage: "10mg",
        type: "tablet",
      },
      {
        name: "Atorvastatin",
        dosage: "40mg",
        type: "capsule",
      },
      {
        name: "Vitamin D",
        dosage: "1000 IU",
        type: "tablet",
      },
      {
        name: "Glargine",
        dosage: "10 units",
        type: "injection",
      },
      // Add more sample medications
    ];

    dispatch(slice.actions.getMedicationsSuccess(medications));
  } catch (error) {
    console.error(error);
  }
};

export const getProfileHelthHistory = () => async (dispatch) => {
  try {
    const profileHealthHistory = {
      bloodType: "O+",
      allergies: [
        {
          name: "Peanuts",
          reaction: "Anaphylaxis",
        },
        {
          name: "Penicillin",
          reaction: "Hives",
        },
        {
          name: "Dust",
          reaction: "Sneezing",
        },
        // Add more sample allergies
      ],
      conditions: [
        {
          name: "Diabetes",
          diagnosisDate: "2020-01-01",
        },
        {
          name: "Hypertension",
          diagnosisDate: "2020-01-01",
        },
        {
          name: "Hyperlipidemia",
          diagnosisDate: "2020-01-01",
        },
        {
          name: "Obesity",
          diagnosisDate: "2020-01-01",
        },
        // Add more sample conditions
      ],
      surgeries: [
        {
          name: "Appendectomy",
          date: "2010-01-01",
        },
        {
          name: "Tonsillectomy",
          date: "2010-01-01",
        },
        // Add more sample surgeries
      ],
      medications: [
        {
          name: "Metformin",
          dosage: "500mg",
          type: "tablet",
        },
        {
          name: "Insulin",
          dosage: "20 units",
          type: "injection",
        },
        {
          name: "Aspirin",
          dosage: "100mg",
          type: "tablet",
        },
        {
          name: "Lisinopril",
          dosage: "10mg",
          type: "tablet",
        },
        {
          name: "Atorvastatin",
          dosage: "40mg",
          type: "capsule",
        },
        {
          name: "Vitamin D",
          dosage: "1000 IU",
          type: "tablet",
        },
        {
          name: "Glargine",
          dosage: "10 units",
          type: "injection",
        },
        // Add more sample medications
      ],
      familyHistory: [
        {
          relationship: "Mother",
          conditions: [
            {
              name: "Diabetes",
              diagnosisDate: "2010-01-01",
            },
            {
              name: "Hypertension",
              diagnosisDate: "2010-01-01",
            },
            {
              name: "Hyperlipidemia",
              diagnosisDate: "2010-01-01",
            },
            {
              name: "Obesity",
              diagnosisDate: "2010-01-01",
            },
            // Add more sample conditions
          ],
        },
        {
          relationship: "Father",
          conditions: [
            {
              name: "Diabetes",
              diagnosisDate: "2010-01-01",
            },
            {
              name: "Hypertension",
              diagnosisDate: "2010-01-01",
            },
            {
              name: "Hyperlipidemia",
              diagnosisDate: "2010-01-01",
            },
            {
              name: "Obesity",
              diagnosisDate: "2010-01-01",
            },
            // Add more sample conditions
          ],
        },
        // Add more sample family history
      ],
    };
    dispatch(slice.actions.getProfileHelthHistorySuccess(profileHealthHistory));
  } catch (error) {
    console.error(error);
  }
};
