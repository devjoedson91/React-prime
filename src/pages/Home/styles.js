import styled from 'styled-components/native'; // importando stylos dessa biblioteca

export const Container = styled.SafeAreaView` /* aqui é possivel criar um css igual ao stylesheet */

    background-color: #141A29;
    flex: 1;
    padding: 4px 0;

`;

export const SearchContainer = styled.View`

    flex-direction: row;
    width: 100%;
    height: 50px;
    align-items: center;
    padding: 0 14px;
    margin-bottom: 8px;

`; // o view é utilizado para areas/container

export const Input = styled.TextInput`

    background-color: rgba(255, 255, 255, 0.4);
    width: 85%;
    height: 50px;
    border-radius: 50px;
    padding: 8px 15px;
    font-size: 20px;
    color: #fff;


`; // esse é utilizado para inputs

export const SearchButton = styled.TouchableOpacity`

    width: 15%;
    height: 50px;
    align-items: center;
    justify-content: center;
    

`; // esse é utilizado para buttons

export const Title = styled.Text`

    padding-top: 20px;
    padding-bottom: 8px;
    font-size: 24px;
    font-weight: bold;
    color: #fff;
    padding-left: 14px;
    padding-right: 14px;

`;

export const BannerButton = styled.TouchableOpacity``;

export const Banner = styled.Image`

    height: 150px;
    border-radius: 6px;
    margin: 0 14px;

`;

export const SliderMovie = styled.FlatList`

    height: 250px;
    padding: 0 14px;

`;



