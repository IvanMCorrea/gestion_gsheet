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
    Input,
    InputGroup,
    InputLeftElement,
    SlideFade,
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
import { Search2Icon } from '@chakra-ui/icons';

type Props = {
    products: Product[];
};

const DataTable = ({ products }: Props) => {
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
    const [filteredProducts, setFilteredProducts] = useState<Product[] | undefined>(products);
    const [search, setSearch] = useState<string>('');
    const productDetails = [
        { title: 'ID', value: selectedProduct?.id },
        { title: 'Categoría', value: selectedProduct?.categoria },
        { title: 'Descripcion', value: selectedProduct?.descripcion },
        { title: 'Marca', value: selectedProduct?.marca },
        { title: 'Precio', value: selectedProduct?.precio },
        { title: 'Stock', value: selectedProduct?.stock },
    ];

    const handleFilterProducts = (e: any) => {
        setSearch(e.target.value);
        setFilteredProducts(() =>
            products.filter((prod) => prod.modelo.toLowerCase().includes(e.target.value.toLowerCase()))
        );
    };
    return (
        <>
            <Container maxWidth='container.xl' mb={4} padding={0}>
                <InputGroup>
                    <InputLeftElement pointerEvents='none'>
                        <Search2Icon color='gray.300' />
                    </InputLeftElement>
                    <Input
                        type='text'
                        placeholder='Filtrar por nombre de producto'
                        value={search}
                        onChange={handleFilterProducts}
                        bg='white'
                    />
                </InputGroup>
            </Container>
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
                                <AnimatePresence>
                                    {filteredProducts &&
                                        filteredProducts[0] &&
                                        filteredProducts.map((product: Product) => (
                                            <Tr as={motion.tr} layout key={product.id}>
                                                <Td>{product.id && product.id}</Td>
                                                <Td>{product.modelo && product.modelo}</Td>
                                                <Td isNumeric>{product.precio && product.precio}</Td>
                                                <Td>
                                                    <Button
                                                        colorScheme='teal'
                                                        onClick={() => setSelectedProduct(product)}
                                                    >
                                                        Detalle
                                                    </Button>
                                                </Td>
                                            </Tr>
                                        ))}
                                </AnimatePresence>
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
                                <Heading size='md'>{selectedProduct.modelo && selectedProduct.modelo}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Stack divider={<StackDivider />} spacing='2'>
                                    {productDetails?.map((det) => (
                                        <Box key={det.title}>
                                            <Heading size='xs' textTransform='uppercase'>
                                                {det.title}
                                            </Heading>
                                            <Text pt='2' fontSize='sm'>
                                                {det.value}
                                            </Text>
                                        </Box>
                                    ))}
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
