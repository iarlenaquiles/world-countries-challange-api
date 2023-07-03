export default {
    origin: [
        '*',
    ],
    optionsSuccessStatus: 200,
    credentials: true,
    allowedHeaders: [
        '*'
    ],
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    preflightContinue: true,
};
