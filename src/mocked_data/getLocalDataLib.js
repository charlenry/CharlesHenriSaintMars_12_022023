import { 
    USER_MAIN_DATA, 
    USER_ACTIVITY, 
    USER_AVERAGE_SESSIONS, 
    USER_PERFORMANCE 
} from './data';


/**
 * A function that takes an id as a parameter and returns the user data from the USER_MAIN_DATA array.
 * 
 * @function
 * @name getUserById
 * @kind function
 * @param {number} id
 * @returns {{ id: number; userInfos: { firstName: string; lastName: string; age: number; }; todayScore: number; keyData: { calorieCount: number; proteinCount: number; carbohydrateCount: number; lipidCount: number; }; }[]}
 */
const getUserById = id => USER_MAIN_DATA
    .filter(user => user.id === id)


/**
 * A function that takes an id as a parameter and returns the user activity data from the USER_ACTIVITY array.
 * 
 * @function
 * @name getUserActivityById
 * @kind function
 * @param {number} id
 * @returns {{ userId: number; sessions: { day: string; kilogram: number; calories: number; }[]; }[]}
 */
const getUserActivityById = id => USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)


/**
 * A function that takes an id as a parameter and returns the user average session data from the USER_AVERAGE_SESSIONS array.
 * 
 * @function
 * @name getUserAverageSession
 * @kind function
 * @param {number} id
 * @returns {{ userId: number; sessions: { day: number; sessionLength: number; }[]; }[]}
 */
const getUserAverageSession = id => USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)


/**
 * A function that takes an id as a parameter and returns the user performance data from the USER_PERFORMANCE array.
 * 
 * @function
 * @name getUserPerformance
 * @kind function
 * @param {number} id
 * @returns {{ userId: number; kind: { 1: string; 2: string; 3: string; 4: string; 5: string; 6: string; }; data: { value: number; kind: number; }[]; }[]}
 */
const getUserPerformance = id => USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)

export {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance
}
