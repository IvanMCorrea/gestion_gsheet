import { Fragment, useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardHeader,
    Container,
    Flex,
    Grid,
    GridItem,
    HStack,
    Heading,
    Stack,
    StackDivider,
    Text,
    VStack,
} from '@chakra-ui/react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { Product } from '@/product/type';

interface Props {
    products: Product[];
}

const DataTable = ({ products }: Props) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    return (
        <>
            <Container as={Card} minHeight='container.md' maxWidth='container.xl' padding={4}>
                <CardBody>
                    <VStack alignItems='left'>
                        <Grid gridTemplateColumns='1fr 5fr 1fr 1fr' gap={6}>
                            <GridItem>
                                <Text>ID</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Nombre de producto</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Precio</Text>
                            </GridItem>
                            <GridItem>
                                <Text>Acciones</Text>
                            </GridItem>
                            {products.map((product: Product) => (
                                <Fragment key={product.id}>
                                    <GridItem>
                                        <Text>{product.id}</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text>{product.modelo}</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Text>{product.precio}</Text>
                                    </GridItem>
                                    <GridItem>
                                        <Button onClick={() => setSelectedProduct(product)}>Ver</Button>
                                    </GridItem>
                                </Fragment>
                            ))}
                        </Grid>
                    </VStack>
                </CardBody>
            </Container>
            <AnimatePresence initial={false}>
                {selectedProduct && (
                    <Flex
                        as={motion.article}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        alignItems='center'
                        justifyContent='center'
                        position='fixed'
                        top={0}
                        left={0}
                        width='100%'
                        height='100%'
                        backgroundColor='rgba(0,0,0,0.8)'
                    >
                        <Card>
                            <CardHeader>
                                <Heading size='md'>{selectedProduct.modelo}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4' mb={4}>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            ID
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {selectedProduct.id}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Título
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {selectedProduct.modelo}
                                        </Text>
                                    </Box>
                                    <Box>
                                        <Heading size='xs' textTransform='uppercase'>
                                            Precio
                                        </Heading>
                                        <Text pt='2' fontSize='sm'>
                                            {selectedProduct.precio}
                                        </Text>
                                    </Box>
                                </Stack>
                                <Button textAlign='center' onClick={() => setSelectedProduct(null)}>
                                    Cerrar
                                </Button>
                            </CardBody>
                        </Card>
                    </Flex>
                )}
            </AnimatePresence>
        </>
    );
};

export default DataTable;
