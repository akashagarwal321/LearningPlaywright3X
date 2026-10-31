import * as loggermodule from './82_Logger_Util.js' // Import all from the file
loggermodule.log("test")
loggermodule.log_advanced("test")



 import defaultLogger from "./82_Logger_Util.js"                             //here anyname is the name for default exported function -- it is log -- without curlybase object
 import { log_advanced as advancedLogger} from "./82_Logger_Util.js";       // {} is mandatory to be used when referring to exact function/variable


 defaultLogger("test message");                                              //this is calling "log" function  -- which is the default export from logger util
 advancedLogger("advanced test message");



