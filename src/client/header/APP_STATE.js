export const MOODS = {
    GOOD: 0,
    PROCESSING: 1,
    BAD: 2,
    NEUTRAL: 3
};

export const APP_STATE = {
    // Series of completions
    SAVED: {mood: MOODS.GOOD, text: "Saved"},
    FETCHED: {mood: MOODS.GOOD, text: "Fetched"},

    // Series of middle of process
    SAVING: {mood: MOODS.PROCESSING, text: "Saving"},
    FETCHING: {mood: MOODS.GOOD, text: "Fetching"},

    // Series of fails
    FAILED_TO_SAVE: {mood: MOODS.BAD, text: "Failed to save"},
    FAILED_TO_FETCH: {mood: MOODS.GOOD, text: "Failed to fetch"},

    // Neutral
    NEUTRAL: {mood: MOODS.NEUTRAL, text: ""}
};