
class ActivityModel {
  constructor(activity) {
    this._userId = activity.userId;
    this._sessions = activity.sessions;
    this._hasError = activity.hasError;
    this._errorType = activity.errorType;
    this._isLoading = activity.isLoading;
  }

  get userId() {
    return this._userId;
  }

  get sessions() {
    const newActivitySessions = this._sessions.map((value, index) => {
      value.day = index + 1;
      return value;
    });

    return newActivitySessions;
  }

  get hasError() {
    return this._hasError;
  }

  get errorType() {
    return this._errorType;
  }

  get isLoading() {
    return this._isLoading;
  }

}

export default ActivityModel;