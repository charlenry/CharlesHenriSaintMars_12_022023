/**
 * Creating a class called PerformanceModel.
 * Based on a Design Pattern : Constructor Pattern.
 * It allows to format the data of performance so that it can be used by the components.
 * 
 * @class
 * @name PerformanceModel
 * @kind class
 */
class PerformanceModel {

  /**
   * A constructor function. It is called when you create a new instance of the class.
   * 
   * @constructor
   * @name PerformanceModel
   * @param { Object } performance - Data of performance
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

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) userId
   * @kind property
   * @memberof PerformanceModel
   * @returns { number } userId
   */
  get userId() {
    return this._userId;
  }

  /**
   * It's a method that capitalize the first letter of a string.
   * 
   * @method
   * @name upperCaseFirstChar
   * @kind method
   * @memberof PerformanceModel
   * @param { string } str
   * @returns { string }
   */
  upperCaseFirstChar(str) {
    return (str+'').charAt(0).toUpperCase()+str.substr(1);
  }

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) performanceData
   * @kind property
   * @memberof PerformanceModel
   * @returns { array } performanceData
   */
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

  /**
   * It's a getter.
   * 
   * @method
   * @name (get) hasError
   * @kind property
   * @memberof PerformanceModel
   * @returns { boolean } hasError
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
   * @memberof PerformanceModel
   * @returns { string } errorType
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
   * @memberof PerformanceModel
   * @returns { boolean } isLoading
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
   * @memberof PerformanceModel
   * @returns { boolean } isMockedData
   */
  get isMockedData() {
    return this._isMockedData;
  }

}

export default PerformanceModel;