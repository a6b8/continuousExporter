const config = {
    'validation': {
        'default': {
            'routeId': {
                'regex': /^[A-Za-z-]+$/,
                'default': 'myNewRoute',
                'type': 'string',
                'message': 'The routeId must consist only of letters (both uppercase and lowercase) or hyphens.'
            },
            'routeType': {
                'regex': /^(get|post|file)$/,
                'default': 'get',
                'type': 'string',
                'message': 'The routeType must be either "get", "post" or "local".'
            },
            'concurrentRequestsPerLoop': {
                'regex': /^(?:500|[1-9]\d{0,2}|[1-9])$/,
                'default': 1,
                'type': 'number',
                'message': 'The concurrentRequestsPerLoop must be a number between 1 and 500.'
            },
            'delayInMsPerLoop': {
                'regex': /^(?:[1-9]\d{0,3}|[1-9])$/,
                'default': 1000,
                'type': 'number',
                'message': 'The delayPerLoopInMs must be a number between 1 and 9999.'
            }
        },
        'custom': {
            'get': {
                'requestUrl': {
                    'regex': /^(http|https):\/\/[^ "]+$/,
                    'default': 'http://localhost:3000/get',
                    'type': 'string',
                    'message': 'The requestUrl must be a valid URL.'
                },
                'requestHeaders': {
                    'regex': /^\{.*\}$/,
                    'default': '{}',
                    'type': 'object',
                    'message': 'The requestHeaders must be a valid JSON object.'
                }
            },
            'post': {
                'requestUrl': {
                    'regex': /^(http|https):\/\/[^ "]+$/,
                    'default': 'http://localhost:3000/post',
                    'type': 'string',
                    'message': 'The requestUrl must be a valid URL.'
                },
                'requestHeaders': {
                    'regex': /^\{.*\}$/,
                    'default': '{}',
                    'type': 'object',
                    'message': 'The requestHeaders must be a valid JSON object.'
                }
            }, 
            'file': {
                'destinationFolder': {
                    'regex': /^[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*(?:\/[a-zA-Z0-9]+(?:-[a-zA-Z0-9]+)*)*\/$/,
                    'default': 'output/second/',
                    'type': 'string',
                    'message': 'The destinationFolder must consist only of letters (both uppercase and lowercase), numbers or hyphens and must end with a forward slash.'
                },
                'destinationFileName': {
                    'regex': /^[a-zA-Z0-9.\-{}_]+$/,
                    'default': 'output-{{key}}-{{json}}.txt',
                    'type': 'string',
                    'message': 'The destinationFileName must consist only of letters (both uppercase and lowercase), numbers, hyphens, underscores, dots or curly braces.'
                }
            }
        }
    },
    'console': {
        'emojis': {
            'Open': '🌟',
            'Closed': '🔒',
            'loop': '🔁',
        },
        'table': [ 
            [ 12, 'left' ],
            [ 20, 'left' ],
            [ 4, 'right' ],
            [ 10, 'right' ],
            [ 6, 'left' ]
        ]
    },
    'events': {
        'routeStatus': 'exporterRouteStatus',
        'routeLoopUpdate': 'exporterRouteLoopUpdate',
    }
}


export { config }