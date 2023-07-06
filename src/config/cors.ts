export default {
    origin: [
        'http://localhost:4000',
    ],
    optionsSuccessStatus: 200,
    credentials: false,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    preflightContinue: false,
};
