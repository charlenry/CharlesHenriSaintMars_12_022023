/**
 * Creating a class called AverageSessionsModel.
 * Based on a Design Pattern : Constructor Pattern.
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

  get userId() {
    return this._userId;
  }

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

export default AverageSessionsModel;