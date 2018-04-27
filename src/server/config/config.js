module.exports = {

    'dev': false,
    'ports': {
        'host': 'localhost',
        'port': '8080'
    },
    /* APIS 
     *       address: The address that api calls. (base server address + this) EX: /API/PROTOTYPE
     *       token: The key for being accepted at the address given above. ITS A PASSWORD, should be long
     *       callback: The module to run if client gave the right token. Must be a promise that returns {status, success, message}.
     * 
     */
    'APIs': {
        'POST': {
            'template': { // Used by java to update the database with new transactions.
                'address': '/API=template',
                'token': 'NyckelTemplate',
                'callback': './APIs/template'
            },
            'addRequestTugboat': { // Used by java to update the database with new transactions.
                'address': '/API=addRequestTugboat',
                'token': 'temporarykey',
                'callback': './APIs/postRequestTugboat'
            },
            'acceptRequestTugboat': { // Used by java to update the database with new transactions.
                'address': '/API=acceptRequestTugboat',
                'token': 'temporarykey',
                'callback': './APIs/postAcceptTugboat'
            }

        },
        'GET': {
            'getRequestedTugboats': {
                'address': '/API=getRequestedTugboats',
                'token': 'temporarykey',
                'callback': './APIs/getRequestedTugboats'
            },
            'getAcceptedTugboats': {
                'address': '/API=getAcceptedTugboats',
                'token': 'temporarykey',
                'callback': './APIs/getAcceptedTugboats'
            }
        }
    }
};