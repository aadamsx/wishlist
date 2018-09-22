let showSpinnerCount = 0;

/* --------------------- */
/* -- Reducer Actions -- */
/* --------------------- */
const SET_SPINNER_VISIBILITY = 'SET_SPINNER_VISIBILITY';

const setSpinnerVisibility = visibility => ({ type: SET_SPINNER_VISIBILITY, visibility });

/* ----------------- */
/* -- API Actions -- */
/* ----------------- */
const hideSpinner = () => (dispatch) => {
  showSpinnerCount--;

  if (showSpinnerCount < 0) {
    showSpinnerCount = 0;
  }

  if (showSpinnerCount === 0) {
    dispatch(setSpinnerVisibility(false));
  }
};

const showSpinner = () => (dispatch) => {
  showSpinnerCount++;

  // Do not let the spinner run indefinitely
  const spinnerTimeoutId = setTimeout(() => {
    showSpinnerCount = 0;

    dispatch(setSpinnerVisibility(false));
  }, 7500);

  setTimeout(() => {
    if (showSpinnerCount === 0) {
      clearTimeout(spinnerTimeoutId);

      return;
    }

    dispatch(setSpinnerVisibility(true));
  }, 250);
};

export {
  SET_SPINNER_VISIBILITY,
  hideSpinner,
  showSpinner,
};
