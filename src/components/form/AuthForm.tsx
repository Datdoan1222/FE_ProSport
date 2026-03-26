import React from 'react';
import { View, TextInput, StyleSheet, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import {
  BUTTON_SIZE,
  FONT_SIZE,
  MESSAGE,
  NAVIGATION_NAME,
} from '../../constants';
import { Button, TextComponent } from '../common';

type FormType = 'login' | 'register';
type FormData = {
  phone: string;
  password: string;
  confirmPassword?: string;
};
type Props = {
  type?: FormType;
};
type RootStackParamList = {
  [NAVIGATION_NAME.LOGIN_SCREEN]: undefined;
  [NAVIGATION_NAME.REGISTER_SCREEN]: undefined;
};
const AuthForm = ({ type = 'login' }: Props) => {
  const isRegister = type === 'register';
  type NavigationProps = NavigationProp<RootStackParamList>;
  const navigation = useNavigation<NavigationProps>();
  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      phone: '',
      password: '',
      confirmPassword: '',
    },
  });

  const passwordValue = watch('password');

  const onSubmit = (data: FormData) => {
    console.log(type, data);
  };

  const handleIsLogin = () => {
    if (isRegister) {
      navigation.navigate(NAVIGATION_NAME.LOGIN_SCREEN);
    } else {
      navigation.navigate(NAVIGATION_NAME.REGISTER_SCREEN);
    }
  };
  return (
    <View style={styles.container}>
      <TextComponent size={FONT_SIZE.H3} isTitle>
        {isRegister ? MESSAGE.AUTH.REGISTER : MESSAGE.AUTH.LOGIN}
      </TextComponent>

      <View style={styles.form}>
        {/* Phone */}
        <Text style={styles.label}>Số điện thoại</Text>
        <Controller
          control={control}
          name="phone"
          rules={{
            required: 'Vui lòng nhập số điện thoại',
            pattern: {
              value: /^[0-9]{9,11}$/,
              message: 'Số điện thoại không hợp lệ',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Nhập số điện thoại"
              keyboardType="phone-pad"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.phone && (
          <Text style={styles.error}>{errors.phone.message}</Text>
        )}

        {/* Password */}
        <Text style={styles.label}>Mật khẩu</Text>
        <Controller
          control={control}
          name="password"
          rules={{
            required: 'Vui lòng nhập mật khẩu',
            minLength: {
              value: 6,
              message: 'Mật khẩu tối thiểu 6 ký tự',
            },
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Nhập mật khẩu"
              secureTextEntry
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        {errors.password && (
          <Text style={styles.error}>{errors.password.message}</Text>
        )}

        {/* Confirm Password (ONLY REGISTER) */}
        {isRegister && (
          <>
            <Text style={styles.label}>Nhập lại mật khẩu</Text>
            <Controller
              control={control}
              name="confirmPassword"
              rules={{
                required: 'Vui lòng nhập lại mật khẩu',
                validate: value =>
                  value === passwordValue || 'Mật khẩu không khớp',
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  placeholder="Nhập lại mật khẩu"
                  secureTextEntry
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
            />
            {errors.confirmPassword && (
              <Text style={styles.error}>{errors.confirmPassword.message}</Text>
            )}
          </>
        )}
      </View>

      {/* Button */}
      <Button onPress={handleSubmit(onSubmit)} size={BUTTON_SIZE.LARGE}>
        {isRegister ? MESSAGE.AUTH.REGISTER : MESSAGE.AUTH.LOGIN}
      </Button>

      <TextComponent
        size={FONT_SIZE.BUTTON}
        alignItems="center"
        onPress={() => handleIsLogin()}
      >
        {isRegister ? MESSAGE.AUTH.CAPTION_LOGIN : MESSAGE.AUTH.CAPTION_REGISTER}
      </TextComponent>
    </View>
  );
};

export default AuthForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '50%',
    padding: 16,
    borderRadius: 12,
    justifyContent: 'space-between',
  },
  form: {},
  label: {
    marginBottom: 6,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 20,
    paddingHorizontal: 25,
    marginBottom: 10,
    elevation: 3,
    height: 50,
    backgroundColor: '#fff',
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
});
