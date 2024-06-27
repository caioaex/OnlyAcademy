import React, { useState, useEffect } from 'react'
import { View, Button, StyleSheet, Alert, Text, KeyboardAvoidingView, ScrollView } from 'react-native'
import { CardField, useConfirmPayment } from '@stripe/stripe-react-native'
import { Platform } from 'react-native'

export function Payment({ route, navigation }) {
    const { amount, plan } = route.params
    const [clientSecret, setClientSecret] = useState(null)
    const { confirmPayment, loading } = useConfirmPayment()

    useEffect(() => {
        const fetchPaymentIntentClientSecret = async () => {
          try {
            const response = await fetch(`http://10.47.7.76r:4000/create-payment-${plan}`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
            })
            const data = await response.json()
            console.log(JSON.stringify(data))
            if (response.status !== 200 || !data.clientSecret) {
              throw new Error(`Teste: ${data.error}` || 'Failed to fetch client secret')
            }
            setClientSecret(data.clientSecret)
          } catch (error) {
            console.log(`Erro: ${error}`)
          }  
        }
        
        fetchPaymentIntentClientSecret()

      }, [plan])

    const handlePayPress = async () => {
        if (!clientSecret) {
            return
        }

        const { error, paymentIntent } = await confirmPayment(clientSecret, {
            paymentMethodType: 'Card',
            paymentMethodData: {
                billingDetails: {
                    name: 'Caio Augusto Exteckoetter'
                }
            }
        })

        if (error) {
            Alert.alert(`Erro: ${error.message}`)
        } else if (paymentIntent) {
            Alert.alert('Pagamento realizado com sucesso!')
            navigation.navigate('Home') // Redireciona para a tela de seleção de plano após o pagamento
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView contentContainerStyle={styles.container}>
                <Text style={styles.title}>Valor do plano {plan === "month" ? "mensal" : "anual"}: R$ {amount / 100}</Text>
                <CardField
                    postalCodeEnabled={false}
                    placeholders={{ number: '4242 4242 4242 4242' }}
                    cardStyle={styles.card}
                    style={styles.cardContainer}
                />
                <Button
                    onPress={handlePayPress}
                    title="Pagar"
                />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 16,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    card: {
        backgroundColor: '#FFFFFF',
    },
    cardContainer: {
        height: 50,
        marginVertical: 30,
    },
})
