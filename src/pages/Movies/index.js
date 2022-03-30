import React, {useEffect, useState} from 'react';
import Header from '../../components/hearder';
import {Container, ListMovies} from './styles';
import {getMoviesSave, deleteMovie} from '../../utils/storage';
import FavoriteItem from '../../components/FavoriteItem';
import {useNavigation, useIsFocused} from '@react-navigation/native';

//import {View, Text} from 'react-native';

// function Movies() { // componente filmes

//     return (
//         <View>
//             <Text>Meus Filmes</Text>
//         </View>
//     )
// }

function Movies() {

    const navigation = useNavigation();

    const IsFocused = useIsFocused();

    const [movies, setMovies] = useState([]);

    useEffect(() => {

        let isActive = true;

        async function getFavoriteMovies() {

            const result = await getMoviesSave('@primereact');

            if (isActive) {

                setMovies(result);
                
            }

        }

        if (isActive) getFavoriteMovies();

        return () => isActive = false;


    }, [IsFocused]);


    // funcão para excluir item da lista de meus filmes

    async function handleDelete(id) {

        const result = await deleteMovie(id);
        setMovies(result);

    }

    // funcão para ver detalhes do item da lista de meus filmes

    function navigateDetailsPage(item) {

        navigation.navigate('Detail', {id: item.id})

    }


    return (

        <Container>
            <Header title="Meus Filmes"/>

            <ListMovies 
                showsVerticalScrollIndicator={false}
                data={movies}
                keyExtractor={item => String(item.id)}
                renderItem = {({item}) => (

                    <FavoriteItem 

                        data={item}
                        deleteMovie={handleDelete}
                        navigatePage={() => navigateDetailsPage(item)}
                    />
                )}
            
            />
        </Container>
    )
}

export default Movies;
