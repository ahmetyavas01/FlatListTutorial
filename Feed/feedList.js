import { faker } from '@faker-js/faker';
import { FlatList, View } from 'react-native';
import { Feed } from './feed';

const DATA = Array(20).fill(null).map((e) => ({
    id: faker.string.uuid(),
    image: faker.image.avatarLegacy(),
    name: faker.internet.userName(),
}))


export const FeedList = () => {
    return ( 
        <View>
            <FlatList
                data={DATA}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <Feed
                        image={item.image}
                        name={item.name}
                    />
                )}
            />
        </View>
    );
}
