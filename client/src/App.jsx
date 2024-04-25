import { Flex, Box, Button, SimpleGrid, Heading, Card, CardBody, Text, Container, Center, ButtonGroup } from '@chakra-ui/react'
import GenerateNotification from './components/GenerateNotification'

const App = () => {
    return (
        <Container maxW={'container.xl'}>
            <Flex justify='space-between' align='center' py={5}>
                <Heading>🔔 Notificações</Heading>
                <Box></Box>
                <ButtonGroup>
                    <Button>Entrar</Button>
                    <Button>Gerar Agora</Button>
                </ButtonGroup>
            </Flex>
            <SimpleGrid columns={2}>
                <Heading>
                    Gere suas notificações e passe credibilidade para os clientes
                </Heading>
                <Box>
                    teste
                </Box>
            </SimpleGrid>
            <GenerateNotification />
            <SimpleGrid columns={3} gap={3} py={10}>
                <Card>
                    <CardBody>
                        <Heading size={'md'}>Aumento da Urgência de Compra</Heading>
                        <Text>
                            As notificações geradas podem criar uma sensação de urgência nos clientes em potencial, incentivando-os a agir rapidamente antes que uma oferta expire ou um produto se esgote.
                        </Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Heading size={'md'}>Melhoria da Taxa de Conversão</Heading>
                        <Text>
                            Ao simular a demanda ou a atividade em tempo real, as notificações podem aumentar a confiança do cliente e impulsionar as taxas de conversão, incentivando mais pessoas a realizar uma compra.
                        </Text>
                    </CardBody>
                </Card>
                <Card>
                    <CardBody>
                        <Heading size={'md'}>Criação de Prova Social</Heading>
                        <Text>
                            As notificações geradas podem criar uma impressão de popularidade e validação social, mostrando aos clientes que outros estão comprando ou interagindo com o negócio, o que vai influenciar positivamente suas decisões de compra.
                        </Text>
                    </CardBody>
                </Card>
            </SimpleGrid>
            <Center flexDirection={'column'} gap={10}>
                <Heading>Eu quero notificações para o meu negócio!</Heading>

                <Button>Gerar Agora</Button>
            </Center>
            <SimpleGrid>
                <Heading>🔔 Notificações</Heading>

            </SimpleGrid>
        </Container>
    )
}

export default App

