import styled from "styled-components/native";

export const Container = styled.View`

    height: 70px;
    flex-direction: row; /* alinhando o texto ao lado do botao*/
    align-items: center;
    padding-left: 14px;
    
`;

export const MenuButton = styled.TouchableOpacity`

    height: 70px;
    align-items: center;
    flex-direction: row;

`;

export const Title = styled.Text`

    color: #fff;
    font-size: 30px;
    font-weight: bold;
    margin-left: 14px;

`;