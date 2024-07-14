import Link from 'next/link';

import { Container } from 'react-bootstrap';

const ErrorMsg = ({ errTitle = "Your cart is currently empty." }) => {
    return (
        <Container className='pb-80'>
            <h1 className='mb-40 text-capitalize'>{errTitle}</h1>
            <Link href="/product">
                <a className='m-btn m-btn-2'>Return to shop</a>
            </Link>
        </Container>
    );
};

export default ErrorMsg;