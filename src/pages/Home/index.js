import React, {useState, useEffect} from 'react';

import { ScrollView, ActivityIndicator } from 'react-native'; // tudo que tiver dentro desse comp será scrollado

import { 
    Container, 
    SearchContainer, 
    Input, 
    SearchButton, 
    BannerButton, 
    Banner, 
    Title,
    SliderMovie
 } from './styles'; // importando a folha de styles da home

import Header from '../../components/hearder'; // import os componentes do index da pasta hearder
import { Feather } from '@expo/vector-icons'; // importando biblioteca para icons
import SliderItem from '../../components/SliderItem';
import api, {key} from '../../services/api';
import {getListMovies, randomBanner} from '../../utils/movie';
import { useNavigation } from '@react-navigation/native'; // importação para navegações


function Home() { // componente home


    // armazenando os filmes da api

    const [nowMovies, setNowMovies] = useState([]);

    const [popularMovies, setPopularMovies] = useState([]);

    const [topMovies, setTopMovies] = useState([]);

    const [loading, setLoading] = useState(true);

    const [bannerMovie, setBannerMovie] = useState({});

    const [input, setInput] = useState(''); // input começa com texto em branco

    const navigation = useNavigation();

    // useEffect vai carregar os filmes quando o app iniciar no celular

    useEffect(() => {

        let isActive = true;

        const ac = new AbortController();

        // fazendo as requisições por categoria: em cartaz, populares, mais votados

        async function getMovies(){

            const [nowData, popularData, topData] = await Promise.all([

                api.get('movie/now_playing', {

                    params: {

                        api_key: key,
                        language: 'pt-BR',
                        page: 1,

                    }

                }),
                api.get('/movie/popular', {

                    params: {

                        api_key: key,
                        language: 'pt-BR',
                        page: 1,

                    }

                }),
                api.get('/movie/top_rated', {

                    params: {

                        api_key: key,
                        language: 'pt-BR',
                        page: 1,

                    }

                })

            ])

            if(isActive) {

                const nowList = getListMovies(10, nowData.data.results);
                const popularList = getListMovies(5, popularData.data.results);
                const topList = getListMovies(5, topData.data.results);

                setBannerMovie(nowData.data.results[randomBanner(nowData.data.results)]);

                setNowMovies(nowList);
                setPopularMovies(popularList);
                setTopMovies(topList);
                setLoading(false);

            }
            

        }

        getMovies();


        // função para quando a home for desmontada/ o usuario mudar de tela

        return () => {

            isActive = false;
            ac.abort();
        }

    }, [])

    // função para exibir conteudo do filme

    function navigateDetailsPage(item) {

        navigation.navigate('Detail', {id: item.id});

    }

    function handleSearchMovie() {

        // verificando se foi digitado algo no input

        if (input === '') return; // esse return é pra matar o processo, caso o input tiver vazio

        navigation.navigate('Search', {name: input});
        setInput('');
    }


    // função para exibir o loading ao abrir a pagina

    if(loading) {

        return(

            <Container>

                <ActivityIndicator size="large" color="#fff" />

            </Container>

        )

    }

    return (
        <Container>

            <Header title="React Prime"/>

            <SearchContainer>

                <Input 
                    placeholder="Ex vingadores"
                    placeholderTextColor="#ddd"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />

                <SearchButton onPress={handleSearchMovie}>

                    <Feather name="search" size={30} color="#fff"/>

                </SearchButton>

            </SearchContainer>

            <ScrollView showsHorizontalScrollIndicator={false}>

                <Title>Em Cartaz</Title>

                <BannerButton activeOpacity={0.9} onPress={() => navigateDetailsPage(bannerMovie)}>

                    <Banner

                        resizeMethod="resize"
                        source={{uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`}}
                    
                    />

                </BannerButton>

                <SliderMovie
                
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={nowMovies} // array com cada item do slide
                    renderItem={({item}) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)}/>} // renderizando cada item
                    keyExtractor={(item) => String(item.id)}
                />

                <Title>Populares</Title>


                <SliderMovie
                
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={popularMovies} // array com cada item do slide
                    renderItem={({item}) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)}/>} // renderizando cada item
                    keyExtractor={(item) => String(item.id)}
                />

                <Title>Mais Votados</Title>

                <SliderMovie
                
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={topMovies} // array com cada item do slide
                    renderItem={({item}) => <SliderItem data={item} navigatePage={() => navigateDetailsPage(item)}/>} // renderizando cada item
                    keyExtractor={(item) => String(item.id)}
                />

            </ScrollView>

        </Container>
    )

}

export default Home;
