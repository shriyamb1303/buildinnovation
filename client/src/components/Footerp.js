import React from 'react';
import { Container, Group, Text, ActionIcon } from '@mantine/core';
import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <Container size="sm">
                <Group position="apart" align="center">
                    <Text className="footer-text">© 2024 Your Company. All rights reserved.</Text>
                    <Group>
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandTwitter />
                        </ActionIcon>
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandYoutube />
                        </ActionIcon>
                        <ActionIcon size="lg" color="gray" variant="subtle">
                            <IconBrandInstagram />
                        </ActionIcon>
                    </Group>
                </Group>
            </Container>
        </footer>
    );
}

export default Footer;
