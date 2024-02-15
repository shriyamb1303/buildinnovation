import { Alert } from '@mantine/core';
import { IconInfoCircle } from '@tabler/icons-react';

export const Alertp = () => {
    const icon = <IconInfoCircle />;
    return (
        <Alert variant="light" color="red" radius="xl" withCloseButton title="Login error " icon={icon}>
            Invalid Credentials
        </Alert>
    );
}