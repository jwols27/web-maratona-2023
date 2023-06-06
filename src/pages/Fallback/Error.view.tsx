import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const ErrorView = () => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/');
    }, [navigate]);

    return <></>;
};

export default ErrorView;
