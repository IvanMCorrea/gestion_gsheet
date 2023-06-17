import { useState } from 'react';
import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    CardHeader,
    Container,
    Flex,
    Heading,
    Stack,
    StackDivider,
    Table,
    TableContainer,
    Tbody,
    Td,
    Text,
    Th,
    Thead,
    Tr,
} from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';
import { Product } from '@/product/type';

type Props = {
    products: Product[];
};

const DataTable = ({ products }: Props) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    return (
        <>
            <Container as={Card} minHeight='container.sm' maxWidth='container.xl' padding={2}>
                <CardBody>
                    <TableContainer>
                        <Table size='sm'>
                            <Thead>
                                <Tr>
                                    <Th>ID</Th>
                                    <Th>Nombre de producto</Th>
                                    <Th isNumeric>Precio</Th>
                                    <Th>Acciones</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                {products &&
                                    products[0] &&
                                    products.map((product: Product) => (
                                        <Tr key={product.id}>
                                            <Td>{product.id}</Td>
                                            <Td>{product.modelo}</Td>
                                            <Td isNumeric>{product.precio}</Td>
                                            <Td>
                                                <Button colorScheme='teal' onClick={() => setSelectedProduct(product)}>
                                                    Detalle
                                                </Button>
                                            </Td>
                                        </Tr>
                                    ))}
                            </Tbody>
                        </Table>
                    </TableContainer>
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
                        <Card minWidth='md'>
                            <CardHeader>
                                <Heading size='md'>{selectedProduct.modelo}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='4'>
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
                            </CardBody>
                            <CardFooter display='flex' justifyContent='center'>
                                <Button colorScheme='teal' onClick={() => setSelectedProduct(null)}>
                                    Cerrar
                                </Button>
                            </CardFooter>
                        </Card>
                    </Flex>
                )}
            </AnimatePresence>
        </>
    );
};

export default DataTable;
