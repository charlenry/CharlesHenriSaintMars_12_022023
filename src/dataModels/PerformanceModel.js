/**
 * Creating a class called PerformanceModel.
 * Based on a Design Pattern : Constructor Pattern.
 * 
 * @class
 * @name PerformanceModel
 * @kind class
 */
class PerformanceModel {

  /**
   * A constructor function.
   * 
   * @constructor
   * @name PerformanceModel
   * @param {object} performance
   */
  constructor(performance) {
    this._userId = performance.userId;
    this._kind = performance.kind;
    this._perfData = performance.perfData;
    this._hasError = performance.hasError;
    this._errorType = performance.errorType;
    this._isLoading = performance.isLoading;
    this._isMockedData = performance.isMockedData;
  }

  get userId() {
    return this._userId;
  }

  /* Capitalize the first letter of a string. */
  upperCaseFirstChar(str) {
    return (str+'').charAt(0).toUpperCase()+str.substr(1);
  }

  get performanceData() {
    
    const kindFr = {
      1: 'Cardio',
      2: 'Energie',
      3: 'Endurance',
      4: 'Force',
      5: 'Vitesse',
      6: 'Intensité'
    }

    /* translatable kind */
    const tKind = kindFr;

    const newPerformanceData = this._perfData.map((value) => {
      for (let i in tKind) {
        if (value.kind === Number(i)) value.kind = tKind[i] ;
      }
      return value;
    });

    return newPerformanceData;
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

export default PerformanceModel;