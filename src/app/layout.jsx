import '@/../style/globals.css';

const layout = ({children}) => {
    return(
        <html lang="en">
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Login Animado</title>
        </head>
        <body>
            {children}
        </body>
        </html>
    )
};
export default layout;