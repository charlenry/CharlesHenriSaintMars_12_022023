/**
 * Creating a class called ActivityModel.
 * Based on a Design Pattern : Constructor Pattern.
 * 
 * @class
 * @name ActivityModel
 * @kind class
 */
class ActivityModel {

  /**
   * A constructor function. It is called when you create a new instance of the class.
   * 
   * @constructor
   * @name ActivityModel
   * @param {object} activity
   */
  constructor(activity) {
    this._userId = activity.userId;
    this._sessions = activity.sessions;
    this._hasError = activity.hasError;
    this._errorType = activity.errorType;
    this._isLoading = activity.isLoading;
    this._isMockedData = activity.isMockedData;
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

  get isMockedData() {
    return this._isMockedData;
  }

}

export default ActivityModel;