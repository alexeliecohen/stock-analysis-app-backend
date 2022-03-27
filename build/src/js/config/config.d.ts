declare const config: {
    mongo: {
        host: string;
        password: string;
        username: string;
        options: {
            useUnifiedTopology: boolean;
            useNewUrlParser: boolean;
            socketTimeoutMS: number;
            keepAlive: boolean;
            autoIndex: boolean;
            retryWrites: boolean;
        };
        url: string;
    };
    server: {
        hostname: string;
        port: string | number;
    };
};
export default config;
