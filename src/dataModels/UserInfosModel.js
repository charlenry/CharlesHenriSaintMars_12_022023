/* Design Pattern : Constructor Pattern */

/**
 * Creating a class called UserInfosModel.
 * Based on a Design Pattern : Constructor Pattern.
 * It allows to format the data of the user's information usable by the components.
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

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) id
   * @kind property
   * @memberof UserInfosModel
   * @returns {number} id
   */
  get id() {
    return this._id;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) todayScore
   * @kind property
   * @memberof UserInfosModel
   * @returns {{ todayScore: number; }}  - A number in percentage
   */
  get todayScore() {
    return {todayScore: this._todayScore * 100};
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) firstName
   * @kind property
   * @memberof UserInfosModel
   * @returns {string} firstName
   */
  get firstName() {
    let firstName;
  
    for (let key in this._userInfos) {
      if (key === 'firstName') firstName = this._userInfos[key];
    }

    return firstName;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) lastName
   * @kind property
   * @memberof UserInfosModel
   * @returns {string} lastName
   */
  get lastName() {
    let lastName;

    for (let key in this._userInfos) {
      if (key === 'lastName') lastName = this._userInfos[key];
    }

    return lastName;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) age
   * @kind property
   * @memberof UserInfosModel
   * @returns {number} age
   */
  get age() {
    let age;

    for (let key in this._userInfos) {
      if (key === 'age') age = this._userInfos[key];
    }

    return age;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) calorieCount
   * @kind property
   * @memberof UserInfosModel
   * @returns {number} calorieCount
   */
  get calorieCount() {
    let caloriesCount;

    for (let key in this._keyData) {
      if (key === 'calorieCount') caloriesCount = this._keyData[key].toLocaleString("en-GB");
    }

    return caloriesCount;

  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) proteinCount
   * @kind property
   * @memberof UserInfosModel
   * @returns {number} proteinCount
   */
  get proteinCount() {
    let proteinCount;

    for (let key in this._keyData) {
      if (key === 'proteinCount') proteinCount = this._keyData[key];
    }

    return proteinCount;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) carbohydrateCount
   * @kind property
   * @memberof UserInfosModel
   * @returns {number} carbohydrateCount
   */
  get carbohydrateCount() {
    let carbohydrateCount;

    for (let key in this._keyData) {
      if (key === 'carbohydrateCount') carbohydrateCount = this._keyData[key];
    }

    return carbohydrateCount;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) lipidCount
   * @kind property
   * @memberof UserInfosModel
   * @returns {number} lipidCount
   */
  get lipidCount() {
    let lipidCount;

    for (let key in this._keyData) {
      if (key === 'lipidCount') lipidCount = this._keyData[key];
    }

    return lipidCount;
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) hasError
   * @kind property
   * @memberof UserInfosModel
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
   * @memberof UserInfosModel
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
   * @memberof UserInfosModel
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
   * @memberof UserInfosModel
   * @returns {boolean} isMockedData
   */
  get isMockedData() {
    return this._isMockedData;
  }

}

export default UserInfosModel;