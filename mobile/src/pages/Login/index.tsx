import React, { useState } from "react"
import { View, TextInput, Text, Alert, TouchableWithoutFeedback, Keyboard } from "react-native"
import { supabase } from "../../config/supaBase"
import { Button } from "../../components/Button"
import { Container, Input } from "./style"
import { useAuth } from "../../config/AuthProvider"

export function Login({ navigation }) {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const { setSession } = useAuth();

	async function handleLogin() {
		const { data: { session }, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		})

		if (error && error.message == "Invalid login credentials") {
			Alert.alert(`Usuário inexistente!`)
		} else if (error) {
			Alert.alert(`${error}`)
		} else {
			console.log('Login realizado com sucesso!')
			setSession(session);
			navigation.navigate("Home")
		}
	}

	return (
		<TouchableWithoutFeedback onPress={Keyboard.dismiss}>
			<Container>
				<Input
					placeholder="Digite seu e-mail"
					value={email}
					onChangeText={setEmail}
					autoCapitalize="none"
				/>
				<Input
					placeholder="Digite sua senha"
					value={password}
					onChangeText={setPassword}
					autoCapitalize="none"
					secureTextEntry={true}
				/>
				<Button title="Entrar" onPress={handleLogin} backgroundColor="red" />
			</Container >
		</TouchableWithoutFeedback>
	)
}
