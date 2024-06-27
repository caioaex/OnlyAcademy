import React, { useState } from "react"
import { View, TextInput, Text, Alert } from "react-native"
import { supabase } from "../../config/supaBase"
import { Button } from "../../components/Button"

export function Login() {
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function handleLogin() {
		const { data, error } = await supabase.auth.signInWithPassword({
			email: email,
			password: password
		})

		console.log(data)

		if (error) {
			Alert.alert(`${error}`)
		} else {
			Alert.alert('Login realizado com sucesso!')
		}
	}

	return (
		<View>
			<TextInput
				placeholder="Digite seu e-mail"
				value={email}
				onChangeText={setEmail}
				autoCapitalize="none"
			/>
			<TextInput
				placeholder="Digite sua senha"
				value={password}
				onChangeText={setPassword}
				autoCapitalize="none"
			/>
			<Button title="Entrar" onPress={handleLogin} />
		</View>
	)
}
