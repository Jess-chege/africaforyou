export default {
    AFRICAFORYOU_RUNNING: 'Africaforyou is running on PORT',
    INTERNAL_SERVER_ERROR: 'Oops, something broke on the server!!!',
    DB_ERROR_STATUS: 'DB_PROCESS_FAILED',
    MODULE_ERROR_STATUS: 'MODULE_PROCESS_BROKE',
    SUCCESS: 'success',
    SUCCESS_RESPONSE: 'Request was successfully processed',
    FAIL: 'fail',
    WELCOME: 'Thanks for dropping by, you are at Africaforyou',
    v1: '/api/v1',
    REDIS_RUNNING: 'Redis server is running',
    DB_ERROR: 'A database error occurred, either in redis or postgres',
    MODULE_ERROR: 'A module error occurred',
    NOT_FOUND_API: 'Oops, You have reached a dead end',
    EMPTY_FILE: 'Please select a file to upload',
    EMPTY_FILE_ERROR: 'EMPTY_FILE_ERROR',
    LARGE_FILE_ERROR_MSG: 'File too large',
    LARGE_FILE_ERROR_STATUS: 'LARGE_FILE_ERROR',
    UPLOAD_FAIL_STATUS: 'UPLOAD_FAIL',
    FILE_UPLOAD_SUCCESS: 'File uploaded successfully',
    INVALID_FILE_TYPE: 'File type not allowed',
    AUTH_REQUIRED: 'Access denied, a valid access token is required',
    INVALID_VALIDATION_REQUEST: 'Verification type does not match with body sent',
    INVALID_PERMISSION: 'Permission denied. Invalid credentials provided',
    INVALID_VERIFICATION: 'Verification failed. Invalid link provided',
    ACCESS_REVOKED: 'ACCESS REVOKED',
    INVALID_CREDENTIALS: 'Incorrect login details',
    ROLE_NOT_SUFFICIENT: 'Role not sufficient to perform action',
    SIGNIN_ERROR: (entity) => `${entity.toUpperCase()}_SIGNIN_ERROR`,
    LOGIN_SUCCESSFUL: (entity) => `${entity} logged in successfully`,
    SIGNUP_SUCCESSFUL: 'Sign up successful',
    VERIFICATION_SUCCESSFUL: 'Verification successful',
    VERIFICATION_FAIL: 'USER_VERIFICATION_FAILED',
    RESOURCE_DELETE_SUCCESS: (resource) => `${resource} deleted successfully`,
    RESOURCE_DELETE_FAIL: (resource) => `Error while deleting ${resource}`,
    RESOURCE_DELETE_FAIL_STATUS: (resource) => `${resource}_DELETE_ERROR`,
    FETCH_DATA_ERROR_MSG: (schema) => `Error retrieving ${schema}. This is from us not you`,
    PARAM_ABSENT: (schema) => `Please provide a valid ${schema}`,
    RESOURCE_NOT_FOUND: (resource) => `${resource} not found`,
    RESOURCE_ALREADY_EXIST: (resource) => `${resource} exists already`,
    RESOURCE_CREATE_SUCCESS: (resource) => `${resource} created successfully`,
    RESOURCE_CREATE_ERROR_STATUS: (resource) => `${resource}_CREATE_ERROR`,
    RESOURCE_CREATE_ERROR: (resource) => `Failed to create ${resource}. It is not you, it is us.`,
    RESOURCE_FETCH_ERROR_STATUS: (resource) => `${resource}_FETCH_ERROR`,
    RESOURCE_FETCH_SUCCESS: (resource) => `${resource} fetched successfully`,
    RESOURCE_EXIST_VERIFICATION_FAIL: (resource) => `${resource}_EXIST_VERIFICATION_FAIL`,
    RESOURCE_UPDATE_SUCCESS: (resource) => `${resource} updated successfully`,
    RESOURCE_UPDATE_FAIL: (resource) => `Error while updating ${resource}`,
    RESOURCE_UPDATE_FAIL_STATUS: (resource) => `${resource}_UPDATE_FAIL`,
    RESOURCE_NOT_PROVIDED: (resource) => `No ${resource} provided`,
    RESOURCE_EXIST_VERIFICATION_FAIL_MSG: (resource) => `Error trying to fetch ${resource}. It is not you, it is us.`,
    EMAIL_WAS_NOT_SENT: 'Email could not be sent',
    NOT_VERIFIED: 'Email has not been verified',
    EMAIL_SENDING_ERROR: 'ERROR SENDING EMAIL',
    INVALID_RESOURCE: (resource) => `Invalid ${resource}`,
    RESOURCE_PASSWORD_RESET_FAIL_STATUS: (resource) => `${resource}_PASSWORD_RESET_FAIL`,
    RESOURCE_PASSWORD_RESET_FAIL: (resource) => `${resource} password reset failed`,
    ERROR_GENERATING_PASSWORD: 'ERROR GENERATING PASSWORD',
    ERROR_GENERATING_TOKEN: 'ERROR GENERATING TOKEN',
    ERROR_GENERATING_TOKEN_MSG: 'Error trying to generate token',
    ERROR_REFRESHING_TOKEN_MSG: 'Error trying to refresh token',
    ERROR_REFRESHING_TOKEN: 'ERROR REFRESHING TOKEN',
    REFRESH_TOKEN_SUCCESS: 'Successfully refreshed token',
    INVALID_EMAIL: 'This email does not exist, please enter a registered email',
    PASSWORD_RESET_SUCCESS: 'Password updated successfully',
    PASSWORD_RESET_FAIL: 'ERROR RESETTING PASSWORD',
    RESET_LINK_SUCCESS_MSG: 'We have sent a link to your registered email to reset your password',
    ERROR_SENDING_EMAIL: 'ERROR SENDING EMAIL',
    EMAIL_SUCCESS: 'Notification sent successfully',
    RESOURCE_VERIFICATION_FAIL_MSG: (resource) => `Error trying to verify ${resource}. It is not you, it is us.`,  
  };
  