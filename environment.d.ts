declare global {
    namespace NodeJS {
        interface ProcessEnv {
            NODE_ENV: 'development' | 'production'
            discord: string
            github: string
            twitter: string
            email: string
            token: string
        }
    }
}

export { }