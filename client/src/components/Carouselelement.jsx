import { Card, Image, Text, Group, Badge, Center, Button } from '@mantine/core';
import { IconGasStation, IconGauge, IconManualGearbox, IconShoppingCart, IconUsers } from '@tabler/icons-react';
import classes from './FeaturesCard.module.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from '@mantine/carousel';

export const Carouselelement = ({ higherprice, lowerprice, searchQuery, sortOption }) => {

    const [products, setProducts] = useState([]);
    const [filteredProducts, setFilteredProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://dummyjson.com/products', {
                    // params: {
                    //     _limit: 3
                    // }
                });
                setProducts(response.data.products.slice(0, 18));
                // console.log(response.data)
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [])

    useEffect(() => {
        // Filter products based on the search query

        const filtered = products.filter(product =>
            product.title.toLowerCase().includes(searchQuery.toLowerCase())
        );

        switch (sortOption) {
            case '$0 - $100':
                return setFilteredProducts(filtered.filter(product => product.price <= 100));
            case '$100 - $500':
                return setFilteredProducts(filtered.filter(product => product.price > 100 && product.price <= 500));
            case '>$500':
                return setFilteredProducts(filtered.filter(product => product.price > 500));
            case 'ALL':
                return setFilteredProducts(filtered);
            default:
                break;
        }

        setFilteredProducts(filtered);


    }, [products, searchQuery, sortOption]);

    // const features = products.map((feature) => (
    //     <Center key={feature.id}>
    //         <feature.icon size="1.05rem" className={classes.icon} stroke={1.5} />
    //         <Text size="xs">{feature.description}</Text>
    //     </Center>
    // ));

    // const productsToDisplay = searchQuery ? filteredProducts : products;

    return (
        <div className={classes.carousel}>
            {/* {productsToDisplay.map(product => ( */}
            {filteredProducts.map(product => (
                <Card withBorder radius="md" className={classes.card} key={product.id}>
                    <Card.Section className={classes.imageSection}>
                        <Image src={product.thumbnail} alt={product.title} />

                        {/* <Carousel withIndicators height={200}>
                            {product.images.map((image, index) => (
                                <Carousel.Slide key={index}>
                                    <Image src={image} alt={product.title} />
                                </Carousel.Slide>
                            ))}
                        </Carousel> */}

                    </Card.Section>

                    <Group justify="space-between" mt="md">
                        <div>
                            <Text fw={500}>{product.title}</Text>
                            <Text fz="xs" c="dimmed">{product.description}</Text>
                        </div>
                        <Badge variant="outline">{product.discountPercentage}% off</Badge>
                    </Group>

                    <Card.Section className={classes.section} mt="md">
                        <Text fz="sm" c="dimmed" className={classes.label}>
                            Product Rating
                        </Text>

                        <Group gap={8} mb={-8}>
                            <Text size="xs">{product.rating}</Text>
                        </Group>
                    </Card.Section>

                    <Card.Section className={classes.section}>
                        <Group gap={30}>
                            <div>
                                <Text fz="xl" fw={700} style={{ lineHeight: 1 }}>
                                    ${product.price}
                                </Text>
                                {/* <Text fz="sm" c="dimmed" fw={500} style={{ lineHeight: 1 }} mt={3}>
                                    per day
                                </Text> */}
                            </div>

                            <Button radius="xl" style={{ flex: 1 }}>
                                Buy now
                                <IconShoppingCart size={20} style={{ marginLeft: '10px' }} />
                                <button onClick={() => lowerprice(product.price)}
                                    style={{ marginLeft: '10px', marginRight: '10px', backgroundColor: 'transparent', border: 'none' }}
                                >- </button>
                                {/* <button>{}</button> */}
                                <button onClick={() => higherprice(product.price)}
                                    style={{ marginLeft: '10px', marginRight: '10px', backgroundColor: 'transparent', border: 'none' }}
                                > +</button>
                            </Button>
                        </Group>
                    </Card.Section>
                </Card>
            ))}
        </div>

    );
}