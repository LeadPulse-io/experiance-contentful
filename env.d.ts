declare namespace NodeJS {
  interface ProcessEnv {
    POSTGRES_URL: string
    ADMIN_USER_EMAIL: string
    ADMIN_USER_PASSWORD: string
    SYSTEM_MAIL_EMAIL: string
    SENDGRID_API_KEY: string
    CONTENTFUL_SPACE_ID: string
    CONTENTFUL_ENV?: string
    CONTENTFUL_ACCESS_TOKEN: string
  }
}
