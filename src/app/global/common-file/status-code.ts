export class Country {
    public static getCountries = function () {
        return {
            '200': 'Data Found!',
            
            '204': 'No data Found!',

            '401': 'Unauthorized',

            '403': 'IP address redirect',

            '400': 'Invalid input data',

            '1500': 'Youtube API error',

            '2500': 'Facebook API error',

            '2001': 'A callback refers to an undefined function or if some arguments are missing.',

            '2002': 'A callback refers to an undefined method or if some arguments are missing.',

            '2003': 'A value does not adhere to a defined valid data domain.',

            '2004': 'The arguments passed were invalid',

            '2005': 'The parameter exceeds the allowed length (used for strings, arrays, file size, etc.).',

            '2006': 'Generic error occured in program logic.',

            '2007': 'An illegal index was requested.',

            '2008': 'An illegal index was requested. This represents errors that should be detected at compile time.',

            '2009': 'Adding an element to a full container.',

            '2010': 'Indicate range errors during program execution. Normally this means there was an arithmetic error other than under/overflow.',

            '2011': 'An error which can only be found on runtime occurs.',

            '2012': 'Performing an invalid operation on an empty container, such as removing an element.',

            '2013': 'An unexpected value was received (i.e. as the result of a returned value from a method call).',

            '2014': 'Database error',

            '3001': 'Token expired',

            '3002': 'Token invalid',

            '3003': 'Token absent',

            '3004': 'User not found'
        };
    }
}