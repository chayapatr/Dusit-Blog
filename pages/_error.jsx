import React, { Fragment } from 'react'

import Head from 'next/head'

import { Title, Description } from 'components/head'

import Error from 'components/error'

class ErrorPage extends React.Component {
    static getInitialProps({ res, err }) {
        const statusCode = res ? res.statusCode : err ? err.statusCode : null
        return { statusCode }
    }

    render() {
        let { statusCode } = this.props

        let errorDetail = {
            '400': 'Bad Request',
            '401': 'Unauthorized',
            '402': 'Payment Required',
            '403': 'Permission denied',
            '404': 'This page went missing...',
            '405': 'Method Not Allowed',
            '406': 'Not Acceptable',
            '407': 'Proxy Authentication Required',
            '408': 'Request Timeout',
            '409': 'Conflict',
            '410': 'Gone',
            '411': 'Length Required',
            '412': 'Precondition Required',
            '413': 'Request Entry Too Large',
            '414': 'Request-URI Too Long',
            '415': 'Unsupported Media Type',
            '416': 'Requested Range Not Satisfiable',
            '417': 'Expectation Failed',
            '418': "I'm a teapot",
            '500': 'Internal Server Error',
            '501': 'Not Implemented',
            '502': 'Bad Gateway',
            '503': 'Service Unavailable',
            '504': 'Gateway Timeout',
            '505': 'HTTP Version Not Supported',
        }

        let statusDetail = errorDetail[statusCode]
            ? errorDetail[statusCode]
            : 'Something went wrong'

        return (
            <Fragment>
                <Head>
                    <title>{statusDetail}</title>

                    <Title>{statusDetail}</Title>
                    <Description>{statusCode} - {statusDetail}</Description>
                </Head>
                <Error code={statusCode} detail={statusDetail} />
            </Fragment>
        )
    }
}

export default ErrorPage
