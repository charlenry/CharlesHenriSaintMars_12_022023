import { 
    USER_MAIN_DATA, 
    USER_ACTIVITY, 
    USER_AVERAGE_SESSIONS, 
    USER_PERFORMANCE 
} from './data';

/**
 * @description Retrieve the main user info (first name, last name, today score)
 * @param {number} id 
 */
const getUserById = id => USER_MAIN_DATA
    .filter(user => user.id === id)


/**
 * @param {number} id 
 */
const getUserActivityById = id => USER_ACTIVITY
    .filter(userActivity => userActivity.userId === id)


/**
 * @param {number} id 
 */
const getUserAverageSession = id => USER_AVERAGE_SESSIONS
    .filter(userActivity => userActivity.userId === id)


/**
 * @param {number} id 
 */
const getUserPerformance = id => USER_PERFORMANCE
    .filter(userPerformance => userPerformance.userId === id)

export default {
    getUserById,
    getUserActivityById,
    getUserAverageSession,
    getUserPerformance
}