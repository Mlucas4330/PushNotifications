import React, { useState } from 'react'
import { RadioGroup, Radio, Input, Button, FormControl, FormLabel, Card, CardBody, Heading, Text, Center, Flex, Avatar, CardHeader, Tooltip } from '@chakra-ui/react'

const GenerateNotification = () => {
    const defaults = {
        hotmart: {
            icon: ''
        },
        kiwify: {
            icon: ''
        },
        eduzz: {
            icon: ''
        },
        monetizee: {
            icon: ''
        },
        whatsapp: {
            icon: ''
        },
        instagram: {
            icon: ''
        }
    }

    const [typeOfNotification, setTypeOfNotification] = useState('')
    const [isDefault, setIsDefault] = useState(false)

    const [notification, setNotification] = useState({
        title: '',
        icon: '',
        body: ''
    })
    const [quantity, setQuantity] = useState(1)

    const handleClick = () => {
        sendNotification(notification, quantity)
    }

    const handleRadio = (radioValue) => {
        setTypeOfNotification(radioValue)

        setIsDefault(Object.keys(defaults).includes(radioValue))
    }

    return (
        <>
            <Center gap={3}>
                <Card w={'sm'} h={'24'} direction={'row'}>
                    <CardHeader>
                        <Avatar />
                    </CardHeader>
                    <CardBody>
                        <Heading size={'xs'}>{notification.title || 'Título...'}</Heading>
                        <Tooltip label={notification.body}>
                            <Text noOfLines={2}>
                                {notification.body || 'Corpo da notificação...'}
                            </Text>
                        </Tooltip>
                    </CardBody>
                </Card>
                <Heading>
                    x {quantity}
                </Heading>
            </Center>

            <FormControl>
                <FormLabel>Padrão de Notificação</FormLabel>
                <RadioGroup onChange={e => handleRadio(e)}>
                    {
                        Object.keys(defaults).map(defaultKey => (
                            <Radio key={defaultKey} value={defaultKey}>{defaultKey.charAt(0).toUpperCase() + defaultKey.slice(1)}</Radio>
                        ))
                    }
                    <Radio value={'custom'}>Customizado</Radio>
                </RadioGroup>
            </FormControl>


            <Flex>
                {!isDefault && <FormControl>
                    <FormLabel>Ícone da Notificação</FormLabel>
                    <Input onChange={e => setNotification({ ...notification, icon: e.target.value })} type='file' />
                </FormControl>}
                <FormControl>
                    <FormLabel>Titulo da Notificação</FormLabel>
                    <Input min={2} max={100} onChange={e => setNotification({ ...notification, title: e.target.value })} type='text' />
                </FormControl>
                <FormControl>
                    <FormLabel>Quantidade de Notificações</FormLabel>
                    <Input min={1} max={30} type='number' onChange={e => setQuantity(e.target.value)} />
                </FormControl>
            </Flex>

            <FormControl>
                <FormLabel>Corpo da Notificação</FormLabel>
                <Input min={10} max={200} onChange={e => setNotification({ ...notification, body: e.target.value })} type='text' />
            </FormControl>

            <Button onClick={() => handleClick()}>enviar</Button>
        </>
    )
}

export default GenerateNotification