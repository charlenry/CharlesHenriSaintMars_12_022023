/* Design Pattern : Constructor Pattern */

/**
 * Creating a class called UserInfosModel.
 * Based on a Design Pattern : Constructor Pattern.
 * 
 * @class
 * @name UserInfosModel
 * @kind class
 */
class UserInfosModel {

  /**
   * A constructor function.
   * 
   * @constructor
   * @name UserInfosModel
   * @param {object} userData
   */
  constructor(userData) {
    this._id = userData.userId;
    this._todayScore = userData.todayScore;
    this._userInfos = userData.userInfos;
    this._keyData = userData.keyData;
    this._hasError = userData.hasError;
    this._errorType = userData.errorType;
    this._isLoading = userData.isLoading;
    this._isMockedData = userData.isMockedData;
  }

  get id() {
    /* Retourne un nombre */
    return this._id;
  }

  get todayScore() {
    /* Retourne un nombre en pourcentage */
    return {todayScore: this._todayScore * 100};
  }

  get firstName() {
    /* Retourne une chaîne */
    let firstName;
  
    for (let key in this._userInfos) {
      if (key === 'firstName') firstName = this._userInfos[key];
    }

    return firstName;
  }

  get lastName() {
    /* Retourne un chaîne */
    let lastName;

    for (let key in this._userInfos) {
      if (key === 'lastName') lastName = this._userInfos[key];
    }

    return lastName;
  }

  get age() {
    /* Retourne un nombre */
    let age;

    for (let key in this._userInfos) {
      if (key === 'age') age = this._userInfos[key];
    }

    return age;
  }

  get calorieCount() {
    /* Retourne un nombre */
    let caloriesCount;

    for (let key in this._keyData) {
      if (key === 'calorieCount') caloriesCount = this._keyData[key].toLocaleString("en-GB");
    }

    return caloriesCount;

  }

  get proteinCount() {
    /* Retourne un nombre */
    let proteinCount;

    for (let key in this._keyData) {
      if (key === 'proteinCount') proteinCount = this._keyData[key];
    }

    return proteinCount;
  }

  get carbohydrateCount() {
    /* Retourne un nombre */
    let carbohydrateCount;

    for (let key in this._keyData) {
      if (key === 'carbohydrateCount') carbohydrateCount = this._keyData[key];
    }

    return carbohydrateCount;
  }

  get lipidCount() {
    /* Retourne un nombre */
    let lipidCount;

    for (let key in this._keyData) {
      if (key === 'lipidCount') lipidCount = this._keyData[key];
    }

    return lipidCount;
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

export default UserInfosModel;