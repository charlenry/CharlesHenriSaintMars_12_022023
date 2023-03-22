/**
 * Creating a class called ActivityModel.
 * Based on a Design Pattern : Constructor Pattern.
 * It allows to format the data of the activity so that it can be used by the components.
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
   * @param { Object } activity - Data of activity
   */
  constructor(activity) {
    this._userId = activity.userId;
    this._sessions = activity.sessions;
    this._hasError = activity.hasError;
    this._errorType = activity.errorType;
    this._isLoading = activity.isLoading;
    this._isMockedData = activity.isMockedData;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) userId
   * @kind property
   * @memberof ActivityModel
   * @returns { number } userId
   */
  get userId() {
    return this._userId;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) sessions
   * @kind property
   * @memberof ActivityModel
   * @returns { Array } sessions
   */
  get sessions() {
    const newActivitySessions = this._sessions.map((value, index) => {
      value.day = index + 1;
      return value;
    });

    return newActivitySessions;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) hasError
   * @kind property
   * @memberof ActivityModel
   * @returns { boolean } hasError
   */
  get hasError() {
    return this._hasError;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) errorType
   * @kind property
   * @memberof ActivityModel
   * @returns { string } errorType
   */
  get errorType() {
    return this._errorType;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) isLoading
   * @kind property
   * @memberof ActivityModel
   * @returns { boolean } isLoading
   */
  get isLoading() {
    return this._isLoading;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) isMockedData
   * @kind property
   * @memberof ActivityModel
   * @returns { boolean } isMockedData
   */
  get isMockedData() {
    return this._isMockedData;
  }

}

export default ActivityModel;