import React from 'react';
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

import {
  Container,
  Title,
  ForgotPW,
  ForgotPWText,
  CreateAccountButton,
  CreateAccountBtnText,
} from './styles';

import Input from '../../components/Input';
import Button from '../../components/Button';
import logoImg from '../../assets/img/logo.png';

const SignIn: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled
      >
        <ScrollView
          contentContainerStyle={{ flex: 1 }}
          keyboardShouldPersistTaps="handled"
        >
          <Container>
            <Image source={logoImg} />

            <View>
              <Title>Faça seu logon</Title>
            </View>

            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button onPress={() => console.log('pressed')}>Entrar</Button>

            <ForgotPW onPress={() => console.log('pressed')}>
              <ForgotPWText>Esqueci minha senha</ForgotPWText>
            </ForgotPW>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.navigate('SignUp')}>
        <Icon name="log-in" size={20} color="#ff9000" />
        <CreateAccountBtnText>Criar uma conta</CreateAccountBtnText>
      </CreateAccountButton>
    </>
  );
};

export default SignIn;
