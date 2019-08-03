import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    render() {
        return (
            <html lang="th">
                <Head >
                    <meta httpEquiv="content-type" content="text/html; charset=utf-8" />
                    <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

                    <meta name="title" content="Dusit Here" />
                    <meta name="description" content="Dusit Here blog" />
                    <meta name="author" content="Dusit Here" />
                    <meta name="keywords" content="dusit here, dusit blog" />
                    <meta httpEquiv="content-language" content="en" />

                    <meta property="og:title" content="Dusit Here" />
                    <meta property="og:description" content="Dusit Blog" />
                    <meta property="og:site_name" content="Dusit Here" />

                    <meta property="og:locale" content="en_US" />
                    <meta property="og:type" content="website" />

                    <meta name="twitter:title" content="Dusit Here" />
                    <meta name="twitter:description" content="Dusit Here blog" />
                    <meta name="twitter:site" content="@saltyAom" />
                    <meta name="twitter:creator" content="@saltyAom" />

                    <meta name="robots" content="index, follow" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </html>
        )
    }
}