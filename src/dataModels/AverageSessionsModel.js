/**
 * Creating a class called AverageSessionsModel.
 * Based on a Design Pattern : Constructor Pattern.
 * It allows to format the data of the average sessions usable by the components.
 * 
 * @class
 * @name AverageSessionsModel
 * @kind class
 */
class AverageSessionsModel {

  /**
   * A constructor function.
   * 
   * @constructor
   * @name AverageSessionsModel
   * @param {object} averageSessions
   */
  constructor(averageSessions) {
    this._userId = averageSessions.userId;
    this._sessions = averageSessions.sessions;
    this._hasError = averageSessions.hasError;
    this._errorType = averageSessions.errorType;
    this._isLoading = averageSessions.isLoading;
    this._isMockedData = averageSessions.isMockedData;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) userId
   * @kind property
   * @memberof AverageSessionsModel
   * @returns {number} userId
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
   * @memberof AverageSessionsModel
   * @returns {array} sessions
   */
  get sessions() {
    const daysOfWeek = {
      1: "L",
      2: "M",
      3: "M",
      4: "J",
      5: "V",
      6: "S",
      7: "D",
    };

    const newAverageSessions = this._sessions.map((value) => {
      for (let i in daysOfWeek) {
        if (value.day === Number(i)) value.day = daysOfWeek[i];
      }
      return value;
    });

    return newAverageSessions;
  }

  /**
   * A getter.
   * 
   * @method
   * @name (get) hasError
   * @kind property
   * @memberof AverageSessionsModel
   * @returns {boolean} hasError
   */
  get hasError() {
    return this._hasError;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) errorType
   * @kind property
   * @memberof AverageSessionsModel
   * @returns {string} errorType
   */
  get errorType() {
    return this._errorType;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) isLoading
   * @kind property
   * @memberof AverageSessionsModel
   * @returns {boolean} isLoading
   */
  get isLoading() {
    return this._isLoading;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) isMockedData
   * @kind property
   * @memberof AverageSessionsModel
   * @returns {boolean} isMockedData
   */
  get isMockedData() {
    return this._isMockedData;
  }

}

export default AverageSessionsModel;