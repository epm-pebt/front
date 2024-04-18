import { useState } from 'react';
import Stack from '@mui/material/Stack';
import ThemedButton from '../stories/components/atomic/button/ThemedButton';


function HelloWorld() {
    const [isVisible, setIsVisible, ] = useState(true);
    const toggleVisibility = () => setIsVisible((prev) => !prev);
    return (
        <div>
            <h2>Hello world</h2>
                <Stack spacing={2} direction='row'>
                    <ThemedButton variant='primary' label='Click me' onClick={toggleVisibility} />
                    <ThemedButton variant='secondary' label='Button text' />
                    <ThemedButton variant='tertiary' label='Button text' />
                </Stack>
            <h4 style={{display: isVisible ? 'block' : 'none'}}>Hello world</h4>
        </div>
    );
}

export default HelloWorld;
