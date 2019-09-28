declare module 'react-native-instagram-login' {
  import * as React from 'react';
  import { ViewStyle } from 'react-native';

  export interface InstagramLoginProps {
    clientId: string
    redirectUrl: string
    scopes?: string[]
    onLoginSuccess?: (token: string) => void
    modalVisible?: boolean
    onLoginFailure?: (error: any) => void
    responseType?: string
    cacheEnabled?: boolean
    incognito?: boolean
    thirdPartyCookiesEnabled?: boolean
    sharedCookiesEnabled?: boolean
    domStorageEnabled?: boolean
    containerStyle?: ViewStyle
    wrapperStyle?: ViewStyle
    closeStyle?: ViewStyle
  }

  export default class InstagramLogin extends React.Component<InstagramLoginProps> {
    show(): void;
  }
}
