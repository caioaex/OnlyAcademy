import {CardField, useConfirmPayment} from '@stripe/stripe-react-native';
import {Platform, Text, TouchableOpacity, View} from "react-native";

const API_URL = Platform.OS == 'ios' ? "http://localhost:4000/pay" : "http://10.0.2.2:4000/pay"

export function PaymentPage(){
    async function pagarAssinatura(assinatura: string) {
        fetch(`${API_URL}/${assinatura}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            }
        })
        .then(response => {
            if (response.status == 401) console.error(`Unauthorized: ${JSON.stringify(response.body)}`)
            console.log(response.status)
        })
        .then(data=> {
            console.log(data)
        })
        .catch(e => {console.error(e)})
    }

    return(
        <View>
            <CardField
               placeholders={{
                   number: '4242 4242 4242 4242',
               }}
               cardStyle={{
                   backgroundColor: '#FFFFFF',
                   textColor: '#000000',
               }}
               style={{
                   width: '100%',
                   height: 50,
                   marginVertical: 30,
               }}
               onFocus={focusedField => {
                   console.log('focusField', focusedField);}}
            >
            </CardField>
        </View>
    )
}