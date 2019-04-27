import styled from 'styled-components/native';

export Screen from 'components/Screen';
export Text from 'components/Text';
export Button from 'components/Button';
export { Camera, Permissions } from 'expo';

export const StartRecord = styled.TouchableOpacity`
                width: 50px;
                height: 50px;
                background: green;
              `
export const StopRecord = styled.TouchableOpacity`
                width: 50px;
                height: 50px;
                background: red;
              `
